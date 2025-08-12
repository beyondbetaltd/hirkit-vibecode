import { toast } from '@/hooks/use-toast';
import { apiRequest } from './queryClient';

export interface SignUpData {
  email: string;
  password: string;
  fullName: string;
  company?: string;
}

export interface SignInData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  company?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: UserProfile;
  session?: { token: string };
}

// Custom event system for auth state changes
class AuthEventEmitter {
  private listeners: ((user: UserProfile | null) => void)[] = [];

  subscribe(callback: (user: UserProfile | null) => void) {
    this.listeners.push(callback);
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  emit(user: UserProfile | null) {
    this.listeners.forEach(callback => callback(user));
  }
}

const authEvents = new AuthEventEmitter();

export class AuthService {
  // Sign up new user
  static async signUp(data: SignUpData): Promise<AuthResponse> {
    try {
      const response = await apiRequest('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      toast({
        title: "Welcome to HirKit!",
        description: "Your account has been created successfully.",
      });

      authEvents.emit(response.user);
      return response;
    } catch (error: any) {
      console.error('Sign up error:', error);
      toast({
        title: "Sign up failed",
        description: error.message || "An error occurred during sign up.",
        variant: "destructive",
      });
      throw error;
    }
  }

  // Sign in existing user
  static async signIn(data: SignInData): Promise<AuthResponse> {
    try {
      const response = await apiRequest('/api/auth/signin', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully.",
      });

      authEvents.emit(response.user);
      return response;
    } catch (error: any) {
      console.error('Sign in error:', error);
      toast({
        title: "Sign in failed",
        description: error.message || "Invalid email or password.",
        variant: "destructive",
      });
      throw error;
    }
  }

  // Sign out user
  static async signOut() {
    try {
      await apiRequest('/api/auth/signout', {
        method: 'POST',
      });

      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });

      authEvents.emit(null);
    } catch (error: any) {
      console.error('Sign out error:', error);
      toast({
        title: "Sign out failed",
        description: error.message || "An error occurred during sign out.",
        variant: "destructive",
      });
      throw error;
    }
  }

  // Reset password
  static async resetPassword(email: string) {
    try {
      await apiRequest('/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      toast({
        title: "Reset link sent",
        description: "Check your email for a password reset link.",
      });
    } catch (error: any) {
      console.error('Password reset error:', error);
      toast({
        title: "Reset failed",
        description: error.message || "An error occurred while sending reset email.",
        variant: "destructive",
      });
      throw error;
    }
  }

  // Get current user profile
  static async getCurrentUserProfile(): Promise<UserProfile | null> {
    try {
      const response = await apiRequest('/api/auth/me');
      return response.user;
    } catch (error) {
      console.error('Error getting current user profile:', error);
      return null;
    }
  }

  // Update user profile
  static async updateProfile(updates: Partial<UserProfile>): Promise<UserProfile> {
    try {
      const response = await apiRequest('/api/auth/profile', {
        method: 'PUT',
        body: JSON.stringify(updates),
      });

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });

      authEvents.emit(response.user);
      return response.user;
    } catch (error: any) {
      console.error('Profile update error:', error);
      toast({
        title: "Update failed",
        description: error.message || "An error occurred while updating your profile.",
        variant: "destructive",
      });
      throw error;
    }
  }

  // Get current session (simplified for our new auth system)
  static async getCurrentSession() {
    try {
      const profile = await this.getCurrentUserProfile();
      return profile ? { user: profile } : null;
    } catch {
      return null;
    }
  }

  // Listen to auth state changes
  static onAuthStateChange(callback: (event: string, session: any) => void) {
    const unsubscribe = authEvents.subscribe((user) => {
      const session = user ? { user } : null;
      callback(user ? 'SIGNED_IN' : 'SIGNED_OUT', session);
    });

    return { data: { subscription: { unsubscribe } } };
  }
}