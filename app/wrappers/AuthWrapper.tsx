"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const userAuth = createContext<{
  signedIn: boolean | undefined;
  setSignedIn: Dispatch<SetStateAction<boolean | undefined>>;
}>({ signedIn: true, setSignedIn: () => {} });

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const [userSignedIn, setUserSignedIn] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    setUserSignedIn(false);
  }, []);

  return <userAuth.Provider value={{ signedIn: userSignedIn, setSignedIn: setUserSignedIn }}>{children}</userAuth.Provider>;
};

export default AuthWrapper;
