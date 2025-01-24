"use client";
import React, { createContext, Dispatch, SetStateAction } from "react";

type AnonymousContextType = {
  someoneElse: { username?: string; value?: boolean };
  setSomeoneElse: Dispatch<
    SetStateAction<{ username?: string; value?: boolean }>
  >;
};

export const anonymousAnalyse = createContext<AnonymousContextType>({
  someoneElse: { value: false },
  setSomeoneElse: () => {},
});

const AnonymousWrapper = ({
  children,
  anonymous,
  setAnonymous,
}: {
  children: React.ReactNode;
  anonymous: {
    username?: string;
    value?: boolean;
  };
  setAnonymous: Dispatch<SetStateAction<{ username?: string; value?: boolean }>>;
}) => {
  return (
    <anonymousAnalyse.Provider
      value={{ someoneElse: anonymous, setSomeoneElse: setAnonymous }}
    >
      {children}
    </anonymousAnalyse.Provider>
  );
};

export default AnonymousWrapper;
