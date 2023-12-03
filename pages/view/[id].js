import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Profile = dynamic(() => import("@/component/User/Profile/Profile"));

const PublicProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Profile id={id} />;
};

export default PublicProfile;
