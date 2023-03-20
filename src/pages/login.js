import { getProviders } from "next-auth/react";
import React from "react";
import { nanoid } from "nanoid";

const LoginPage = ({ providers }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {Object.values(providers).map((provider) => (
        <div key={nanoid()}>
          <button>Sign in with {provider.name}</button>
        </div>
      ))}
    </div>
  );
};

export default LoginPage;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
