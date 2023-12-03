import dynamic from "next/dynamic";
import React from "react";
const Register = dynamic(import("@/component/User/Register"));

const register = () => {
  return <Register />;
};

export default register;
