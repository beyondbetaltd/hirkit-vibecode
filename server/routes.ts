import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { insertUserSchema, userProfileSchema, type User, type Session } from "@shared/schema";
import { z } from "zod";

// Extend Express Request type
interface AuthenticatedRequest extends Request {
  user: User;
  session: Session;
}

// Auth middleware to check session
async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '') || 
                req.cookies?.session_token;

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  const session = await storage.getSession(token);
  if (!session) {
    return res.status(401).json({ error: "Invalid or expired session" });
  }

  const user = await storage.getUser(session.userId);
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  (req as AuthenticatedRequest).user = user;
  (req as AuthenticatedRequest).session = session;
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth Routes
  
  // Sign up
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const { email, password, fullName, company } = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create user
      const user = await storage.createUser({
        email,
        password: hashedPassword,
        fullName,
        company: company || undefined,
      });

      // Create session
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 30); // 30 days

      const session = await storage.createSession({
        userId: user.id,
        token,
        expiresAt,
      });

      // Set cookie
      res.cookie('session_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      // Return user profile (without password)
      const { password: _, ...profile } = user;
      res.json({ user: profile, session: { token } });
    } catch (error: any) {
      console.error('Signup error:', error);
      res.status(400).json({ error: error.message || "Signup failed" });
    }
  });

  // Sign in
  app.post("/api/auth/signin", async (req, res) => {
    try {
      const { email, password, rememberMe } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
      }

      // Find user
      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Verify password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Create session
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date();
      const sessionDays = rememberMe ? 30 : 7;
      expiresAt.setDate(expiresAt.getDate() + sessionDays);

      const session = await storage.createSession({
        userId: user.id,
        token,
        expiresAt,
      });

      // Set cookie
      res.cookie('session_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: sessionDays * 24 * 60 * 60 * 1000,
      });

      // Return user profile (without password)
      const { password: _, ...profile } = user;
      res.json({ user: profile, session: { token } });
    } catch (error: any) {
      console.error('Signin error:', error);
      res.status(500).json({ error: "Signin failed" });
    }
  });

  // Sign out
  app.post("/api/auth/signout", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      await storage.deleteSession(req.session.token);
      res.clearCookie('session_token');
      res.json({ message: "Signed out successfully" });
    } catch (error: any) {
      console.error('Signout error:', error);
      res.status(500).json({ error: "Signout failed" });
    }
  });

  // Get current user
  app.get("/api/auth/me", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const profile = await storage.getUserProfile(req.user.id);
      res.json({ user: profile });
    } catch (error: any) {
      console.error('Get user error:', error);
      res.status(500).json({ error: "Failed to get user" });
    }
  });

  // Update profile
  app.put("/api/auth/profile", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const updates = userProfileSchema.partial().parse(req.body);
      delete updates.id; // Don't allow ID updates
      delete updates.createdAt; // Don't allow createdAt updates
      
      const profile = await storage.updateUserProfile(req.user.id, updates);
      res.json({ user: profile });
    } catch (error: any) {
      console.error('Update profile error:', error);
      res.status(400).json({ error: error.message || "Update failed" });
    }
  });

  // Reset password (simplified - would need email service in production)
  app.post("/api/auth/reset-password", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ error: "Email required" });
      }

      // Check if user exists
      const user = await storage.getUserByEmail(email);
      if (!user) {
        // Don't reveal if user exists or not
        return res.json({ message: "If the email exists, a reset link has been sent" });
      }

      // In a real app, you'd send an email with a reset token
      // For now, just return success
      res.json({ message: "If the email exists, a reset link has been sent" });
    } catch (error: any) {
      console.error('Reset password error:', error);
      res.status(500).json({ error: "Reset failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
