import React, { useState } from "react";

const UsernameForm = () => {
  const [username, setUserName] = useState("");

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
          placeholder="username"
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
