import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState();
  const [userInfoStatus, setUserInfoStatus] = useState("loading");

  function getUserInfo() {
    if (status === "loading") {
      return;
    }
    fetch(`/api/users?id=${session.user.id}`).then((res) => {
      res.json().then((json) => {
        setUserInfo(json.user);
        setUserInfoStatus("done");
      });
    });
  }

  useEffect(() => {
    getUserInfo();
  }, [status]);

  if (userInfoStatus === "loading") {
    return <div>loading user info</div>;
  }
  if (!userInfo?.userName) {
    return <div>no username</div>;
  }
  return (
    <>
      <div>Hello</div>
    </>
  );
}
