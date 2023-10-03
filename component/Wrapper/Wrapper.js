import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { getProfile } from "@/Redux/Actions/user";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let AccessToken = localStorage.getItem("AccessToken");
    let userData = localStorage.getItem("userData");
    if (AccessToken && !userData) {
      dispatch(getProfile()).then((res) => {
        console.log("res", res);
        if (res?.statusCode === 200) {
          localStorage.setItem("userData", JSON.stringify(res.data));
        }
      });
    }

  }, []);
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
