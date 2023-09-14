import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Landing from "./Landing";
import Demo from "./Demo";
import Map from "./Map";

const Home = () => {
  return (
    <Wrapper>
      <div className="w-full flex items-center justify-center">
        <div className="xl:w-[80%] w-full py-3 font-medium flex flex-col items-center justify-center xl:px-0  px-6">
          <Landing />
          <Demo />
          <Map />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
