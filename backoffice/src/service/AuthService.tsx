import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { To } from "router/router";
import { LogInDto } from "schema/logIn.schema";

type AuthContextValue = {
  isLoggedIn: boolean;
  logIn: (dto: LogInDto) => void;
  logOut: () => void;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  logIn: async (dto: LogInDto) => {},
  logOut: async () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logIn = async (dto: LogInDto) => {
    const { auth, id, pw } = dto;
    signInWithEmailAndPassword(auth, id, pw)
      .then((_auth: any) => {
        sessionStorage.setItem("accessToken", _auth.user.accessToken);
        localStorage.setItem("userId", _auth.user.email as string);
        setIsLoggedIn(true);
        window.location.href = To.Home;
      })
      .catch((error) => console.log(error));
  };

  const logOut = async () => {
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    window.location.href = To.LogIn;
  };

  const value: AuthContextValue = {
    isLoggedIn,
    logIn,
    logOut,
  };

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) return;
    setIsLoggedIn(true);
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
