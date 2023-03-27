import UsernameForm from "@/components/UsernameForm";
// import useUserInfo from "@/hooks/useUserInfo";
// import useUsername from "@/hooks/useUsername";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function Home() {
  // const { userInfo, userInfoStatus } = useUserInfo();

  // if (userInfoStatus === "loading") {
  //   return <div>loading user info</div>;
  // }
  // if (!userInfo?.userName) {
  //   return <UsernameForm />;
  // }
  // const { data, error, isLoading } = useUsername();
  const router = useRouter();
  const handleSignIn = () => {};
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };
  const { data: session, status } = useSession();
  console.log("🚀 ~ file: index.js:17 ~ Home ~ status:", status);
  console.log("🚀 ~ file: index.js:17 ~ Home ~ session:", session);

  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="">Logged in as {session.user.email}</div>
        <button
          onClick={handleSignOut}
          className="bg-twitterWhite px-5 py-2 my-4 text-black rounded-full flex items-center"
        >
          Log out
        </button>
      </div>
    );
  } else {
    return <div>Not logged in</div>;
  }
  return (
    <>
      <div>Hello</div>
    </>
  );
}
