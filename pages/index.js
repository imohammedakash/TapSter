import dynamic from "next/dynamic";
import React from "react";
const Home = dynamic(() => import("@/component/Home"));

const index = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default index;
