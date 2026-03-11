import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { User } from "@/types";
import { authService } from "@/lib/auth-service";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);

  const signOut = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  }, []);

  useEffect(() => {
    if (token && !user) {
      authService.getProfile()
        .then((res) => setUser(res.data.data ?? null))
        .catch(() => signOut())
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [token, signOut]); // intentionally exclude user to avoid re-fetch loop

  const signIn = async (email: string, password: string) => {
    const res = await authService.signIn({ email, password });
    const data = res.data.data!;
    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const signUp = async (name: string, email: string, password: string) => {
    const res = await authService.signUp({ name, email, password });
    const data = res.data.data!;
    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser(data.user);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, isAuthenticated: !!token && !!user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
