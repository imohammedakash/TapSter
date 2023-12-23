import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCartProduct } from "@/Redux/Actions/cart";

const Wrapper = ({ children }) => {
  let user = useSelector(state => state?.user?.user);
  let dispatch = useDispatch()
    useEffect(() => {
        if (user?.token) {
            dispatch(getCartProduct(user.token))
        }
    }, [])
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
