"use client";
import React, { useContext, useEffect, useState } from "react";
import { userAuth } from "@/app/wrappers/AuthWrapper";
import NoGithub from "./pages/NoGithub";
import UserResponseWrapper from "./UserResponseWrapper";
import LoadingPage from "@/app/components/common/LoadingPage";
import AnonymousWrapper from "./AnonymousWrapper";
import "./github-analysis.css";

const Page = () => {
  const { signedIn } = useContext(userAuth);
  const [anonymous, setAnonymous] = useState<{
    username?: string;
    value?: boolean;
  }>({ value: false });
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    setUsername("");
    if (signedIn && anonymous && anonymous.value == false) {
      setUsername("");
    } else if (!signedIn && anonymous && anonymous.value == true) {
      setUsername(anonymous?.username || "");
    }
  }, [signedIn, anonymous]);

  return (
    <>
      {signedIn !== undefined ? (
        <AnonymousWrapper anonymous={anonymous} setAnonymous={setAnonymous}>
          {signedIn || (anonymous &&  anonymous.value == true) ? (
            username.length > 0 ? (
              <UserResponseWrapper username={username} />
            ) : (
              <LoadingPage />
            )
          ) : (
            <NoGithub />
          )}
        </AnonymousWrapper>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default Page;
