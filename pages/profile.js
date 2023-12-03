import dynamic from "next/dynamic";
import React from "react";
const UserProfile = dynamic(() => import("@/component/User/UserProfile"));
const userprofile = () => {
  return <UserProfile />;
};

export default userprofile;
