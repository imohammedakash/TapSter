import dynamic from "next/dynamic";
import React from "react";
const Index = dynamic(() => import("@/component/Product"));
const product = () => {
  return <Index />;
};

export default product;
