import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getCartProduct } from "@/Redux/Actions/cart";
const Wrapper = dynamic(() => import("../Wrapper/Wrapper"));
const Landing = dynamic(() => import("./Landing"));
const Demo = dynamic(() => import("./Demo"));
const Map = dynamic(() => import("./Map"));
const DisplayProduct = dynamic(() => import("./Category"));
const Customers = dynamic(() => import("./Customers"));

const Home = () => {
 
  return (
    <Wrapper>
      <div className="w-full flex items-center justify-center">
        <div className="w-full py-3 font-medium flex flex-col items-center justify-center xl:px-0  px-6">
          <Landing />
          <DisplayProduct />
          <Demo />
          <Map />
          <Customers />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
