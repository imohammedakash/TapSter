import Profile from "@/component/Profile/Profile";
import Router, { useRouter } from "next/router";
import React from "react";

const PublicProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Profile id={id} />; 
};

export default PublicProfile;
