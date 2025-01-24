"use client";
import React, { createContext } from "react";

export const AlertContext = createContext({});

const AlertWrapper = ({ children }: { children?: React.ReactNode }) => {

  return (
    <AlertContext.Provider value={{}}>
      {children}
      <div className="alert-wrapper fixed inset-0 pointer-events-none z-[2000]">
			</div>
    </AlertContext.Provider>
  );
};

export default AlertWrapper;
