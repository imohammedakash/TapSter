import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Landing from "./Landing";
import Demo from "./Demo";
import Map from "./Map";
import DisplayProduct from "./DisplayProduct";
import Customers from "./Customers";

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
