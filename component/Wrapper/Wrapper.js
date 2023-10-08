import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { getProfile } from "@/Redux/Actions/user";

const Wrapper = ({ children }) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    let AccessToken = localStorage.getItem("AccessToken");
    let userData = localStorage.getItem("userData");
    if (AccessToken && !userData) {
      dispatch(getProfile()).then((res) => {
        console.log("res", res);
        if (res?.statusCode === 200) {
          setData(res.data);
        }
      });
      return
    }
    setData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  return (
    <div>
      <Header data={data} />
      <div className="w-full flex items-center justify-center">
        <div className="xl:w-[80%] w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
