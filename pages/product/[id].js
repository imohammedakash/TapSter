import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
const Details = dynamic(() => import("@/component/Product/Details"));

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Details id={id} />;
};

export default Product;
