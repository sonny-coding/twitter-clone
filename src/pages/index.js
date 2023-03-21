import UsernameForm from "@/components/UsernameForm";
import useUserInfo from "@/hooks/useUserInfo";

export default function Home() {
  const { userInfo, userInfoStatus } = useUserInfo();

  if (userInfoStatus === "loading") {
    return <div>loading user info</div>;
  }
  if (!userInfo?.userName) {
    return <UsernameForm />;
  }
  return (
    <>
      <div>Hello</div>
    </>
  );
}
