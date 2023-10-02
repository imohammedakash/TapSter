import Details from "@/component/Product/Details";
import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Details id={id} />;
};

export default Product;
