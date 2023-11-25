import Home from "@/component/Home";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <>
      <Home />
    </>
  );
};

export default index;
