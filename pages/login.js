import dynamic from "next/dynamic";
import React from "react";
const Login = dynamic(() => import("@/component/User/Login"));

const login = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default login;
