import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-full flex items-center justify-center">
        <div className="xl:w-[80%] w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
