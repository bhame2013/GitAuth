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
  const [valited, setValited] = useState(false)

  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      const { "auth.token": token, 'auth.refresh-token': refreshToken } = parseCookies();

      if (!token && refreshToken) {
        //recover informations
        await handleRefreshToken(refreshToken)
      }

      setValited(true);
    })()
  }, []);

  async function handleRefreshToken(refreshToken: string) {
    try {
      const { headers } = await api.post('auth/refresh-token', { refreshToken })

      setCookie(undefined, "auth.token", headers.authorization, {
        maxAge: 60 * 60 * 1, // 1 hour
      });
  
      api.defaults.headers["Authorization"] = `Bearer ${headers.authorization}`;
    } catch(err: any) {
      console.error(err.response.data);
    }
  }

  async function signIn({ email, password }: SignInData) {
    const { data, headers } = await api.post("auth/sign-in", {
      email,
      password,
    });

    setCookie(undefined, "auth.token", headers.authorization, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setCookie(undefined, "auth.refresh-token", headers['refresh-token'], {
      maxAge: 60 * 60 * 4, // 4 hour
    });

    api.defaults.headers["Authorization"] = `Bearer ${headers.authorization}`;

    setUser(data);

    const { pathname } = document.location

    if (!pathname.includes('login')) {
      Router.push(pathname);
    } else {
      Router.push("/");
    }
  }

  return valited ? (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  ) : (<></>);
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth() must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
