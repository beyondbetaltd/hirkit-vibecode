import { useState, useEffect, createContext, useContext } from 'react';
import { AuthService, UserProfile } from '@/lib/auth';

interface AuthContextType {
  user: UserProfile | null;
  session: { user: UserProfile } | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, company?: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthState = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<{ user: UserProfile } | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    AuthService.getCurrentSession().then((session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setProfile(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = AuthService.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setProfile(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string, rememberMe?: boolean) => {
    setLoading(true);
    try {
      await AuthService.signIn({ email, password, rememberMe });
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName: string, company?: string) => {
    setLoading(true);
    try {
      await AuthService.signUp({ email, password, fullName, company });
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await AuthService.signOut();
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    await AuthService.resetPassword(email);
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    const updatedProfile = await AuthService.updateProfile(updates);
    setProfile(updatedProfile);
  };

  return {
    user,
    session,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
  };
};

export { AuthContext };