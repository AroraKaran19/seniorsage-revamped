"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { fetchData } from "./analysis";
import GithubAnalysis from "./GithubAnalysis";
import LoadingPage from "@/app/components/common/LoadingPage";

interface userContextType {
  response?: object;
  status?: boolean | undefined;
  user?: { username?: string; profilePhotoUrl?: string };
  setUser?: Dispatch<
    SetStateAction<{ username?: string; profilePhotoUrl?: string }>
  >;
}

export const userContext = createContext<userContextType>({});

const UserResponseWrapper = ({ username }: { username: string }) => {
  const [response, setResponse] = useState<object>({});
  const [user, setUser] = useState<{
    username?: string;
    profilePhotoUrl?: string;
  }>({
    username: username,
  });
  const [status, setStatus] = useState<boolean | undefined>(undefined);

  const fetchInfo = async () => {
    setResponse({});
    setStatus(undefined);
    setUser({ username: username });
    await fetchData(username, setResponse, setStatus, setUser);
  };

  useEffect(() => {
    fetchInfo();
  }, [username]);

  return (
    <>
      <userContext.Provider value={{ response, status, user, setUser }}>
        {status !== undefined ? (
          <GithubAnalysis fetchInfo={fetchInfo} />
        ) : (
          <LoadingPage />
        )}
      </userContext.Provider>
    </>
  );
};

export default UserResponseWrapper;
