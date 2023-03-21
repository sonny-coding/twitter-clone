import useUserInfo from "@/hooks/useUserInfo";
import React, { useEffect, useState } from "react";

const UsernameForm = () => {
  const { userInfo, userInfoStatus } = useUserInfo();
  const [username, setUserName] = useState("");

  useEffect(() => {
    if (userInfoStatus === "loading") {
      return;
    }
    if (username === "") {
      const defaultUserName = userInfo?.email.split("@")[0];
      setUserName(defaultUserName);
    }
  }, [userInfoStatus]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="text-center" onSubmit={handleFormSubmit}>
        <h1 className="text-xl mb-2">Pick a username</h1>
        <input
          className="block mb-1 bg-twitterBorder px-3 py-1 rounded-full"
          type="text"
          placeholder={
            userInfo?.email.split("@")[0].replace(/[^a-z]+/gi, "") || "username"
          }
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button className="block bg-twitterBlue w-full rounded-full py-1">
          Continue
        </button>
      </form>
    </div>
  );
};

export default UsernameForm;
