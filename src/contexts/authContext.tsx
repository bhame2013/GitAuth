import { createContext, useEffect, useState, useContext } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { api } from "src/services/api";

type User = {
  id: string;
  email: string;
  name: string;
  birthdate: string;
  gender: "M" | "F";
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "auth.token": token } = parseCookies();

    if (token) {
      //recover informations
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { data, headers } = await api.post("auth/sign-in", {
      email,
      password,
    });

    setCookie(undefined, "auth.token", headers.authorization, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers["Authorization"] = `Bearer ${headers.authorization}`;

    setUser(data);

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth() must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
