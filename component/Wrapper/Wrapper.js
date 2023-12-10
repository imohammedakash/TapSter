import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-full relative flex items-center justify-center">
        <div className="xl:w-[80%] w-full p-2">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
