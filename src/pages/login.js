import { getProviders, signIn, useSession } from "next-auth/react";
import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";

const LoginPage = ({ providers }) => {
  const { data, status } = useSession();
  console.log({ data, status });
  console.log(providers);
  return (
    <div className="flex items-center justify-center h-screen">
      {Object.values(providers).map((provider) => (
        <div key={nanoid()}>
          <button
            onClick={async () => {
              await signIn(provider.id);
            }}
            className="bg-twitterWhite pl-3 pr-5 py-2 text-black rounded-full flex items-center"
          >
            <Image src="/google.png" width={32} height={32} alt="google icon" />
            Sign in with {provider.name}
          </button>
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
