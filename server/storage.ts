import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq, and } from "drizzle-orm";
import { users, sessions, type User, type InsertUser, type Session, type InsertSession, type UserProfile } from "@shared/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<User>): Promise<User | undefined>;
  
  // Session operations
  createSession(session: InsertSession): Promise<Session>;
  getSession(token: string): Promise<Session | undefined>;
  deleteSession(token: string): Promise<void>;
  deleteUserSessions(userId: string): Promise<void>;
  
  // Auth operations
  getUserProfile(id: string): Promise<UserProfile | undefined>;
  updateUserProfile(id: string, updates: Partial<UserProfile>): Promise<UserProfile | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();
    return result[0];
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
    const result = await db
      .update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return result[0];
  }

  async createSession(session: InsertSession): Promise<Session> {
    const result = await db.insert(sessions).values({
      ...session,
      createdAt: new Date(),
    }).returning();
    return result[0];
  }

  async getSession(token: string): Promise<Session | undefined> {
    const result = await db
      .select()
      .from(sessions)
      .where(and(
        eq(sessions.token, token),
        // Only return non-expired sessions
        // gt(sessions.expiresAt, new Date())
      ))
      .limit(1);
    
    if (result[0] && result[0].expiresAt > new Date()) {
      return result[0];
    }
    
    return undefined;
  }

  async deleteSession(token: string): Promise<void> {
    await db.delete(sessions).where(eq(sessions.token, token));
  }

  async deleteUserSessions(userId: string): Promise<void> {
    await db.delete(sessions).where(eq(sessions.userId, userId));
  }

  async getUserProfile(id: string): Promise<UserProfile | undefined> {
    const user = await this.getUser(id);
    if (!user) return undefined;
    
    const { password, ...profile } = user;
    return profile;
  }

  async updateUserProfile(id: string, updates: Partial<UserProfile>): Promise<UserProfile | undefined> {
    const updatedUser = await this.updateUser(id, updates);
    if (!updatedUser) return undefined;
    
    const { password, ...profile } = updatedUser;
    return profile;
  }
}

export const storage = new DatabaseStorage();
