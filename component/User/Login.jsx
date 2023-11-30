import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import loginImage from "../../public/6310507.jpg";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Router from "next/router";
import { toast } from "react-toastify";
import AuthInput from "../Helper/AuthInput";
import { LoginUser } from "@/Redux/Actions/user";
import Image from "next/image";
const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state) => state.user.loading);
  const user = useSelector((state) => state?.user?.user);
  if (user?.token) {
    Router.push("/");
  }
  return (
    <>
      <div className="py-2 px-5">
        <Link className=" flex items-end" href="/">
          <h1 className="text-4xl font-normal translate-x-1">T</h1>
          <h1 className=" text-2xl">apster.</h1>
        </Link>
      </div>
      <main className=" w-full flex items-center justify-center px-4 bg-[#fff]">
        <div className=" flex items-center justify-center w-full ">
          <div className="flex md:w-1/2 w-full items-center justify-center bg-white ">
            <div className=" lg:w-[80%] w-full flex items-center justify-center flex-col py-10 md:px-8 px-4 ">
              <h1 className="md:text-4xl text-3xl flex items-end justify-center text-center w-full whitespace-nowrap font-medium md:first-letter:text-7xl ">
                Welcome Back Tapster
              </h1>
              <h2 className="text-base mt-2 ">
                Enter Your Login Details below
              </h2>
              <div className="w-full flex items-center justify-start mt-6 gap-5">
                <div className="bg-[#0f0e0e00] border cursor-pointer text-lg flex items-center justify-center gap-2 shadow px-7 py-2 w-full rounded-full text-black hover:scale-105 transition-all">
                  <FcGoogle className="text-2xl" />
                  <h3 className="md:block hidden">
                    Google
                  </h3>
                </div>
                <div className="bg-[#0f0e0e00] border cursor-pointer text-lg flex items-center justify-center gap-2 shadow px-7 py-2 w-full rounded-full text-black hover:scale-105 transition-all">
                  <FaFacebook className="text-2xl text-[#3B5998]" />
                  <h3 className="md:block hidden">
                    Facebook
                  </h3>
                </div>
              </div>
              <div
                className="my-6 w-full flex items-center justify-center
           relative after:absolute after:content-[''] after:w-[45%] after:h-[0.4px] after:left-0 before:right-0 after:bg-[#0000002f] before:absolute before:content-[''] before:w-[45%] before:h-[0.4px]
            before:bg-[#0000002f]"
              >
                or
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "email address required*";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.password) {
                    errors.password = "Password required*";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(LoginUser(values)).then((res) => {
                    if (res?.statusCode === 200) {
                      toast.success(res?.message);
                      Router.push("/");
                      return;
                    }
                    toast.error(res?.message);
                  });
                }}
              >
                <Form className=" w-full flex flex-col gap-3">
                  <div className="flex gap-3">
                    <AuthInput
                      type="email"
                      name="email"
                      label="Email"
                      Icon={FiMail}
                      required={true}
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="h2"
                    className="text-red-600 text-xs"
                  />

                  <div className="flex gap-4 text-white">
                    <div className="flex flex-col gap-2 items-start justify-center flex-1">
                      <label htmlFor="" className=" text-black">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center justify-center gap-4 border py-3 px-4 w-full rounded-full">
                        <AiOutlineLock className="text-2xl text-[#000000c1]" />
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder={`Enter your Password`}
                          className="w-full text-black outline-none border-none bg-transparent"
                        />
                        {showPassword ? (
                          <AiOutlineEyeInvisible
                            onClick={() => setShowPassword(false)}
                            className="text-2xl text-black cursor-pointer"
                          />
                        ) : (
                          <AiOutlineEye
                            onClick={() => setShowPassword(true)}
                            className="text-2xl text-black cursor-pointer"
                          />
                        )}
                      </div>
                      <ErrorMessage
                        name="password"
                        component="h2"
                        className="text-red-600 text-xs"
                      />
                    </div>
                  </div>
                  <div className="w-full text-end">forget Password?</div>
                  <div className="w-full flex items-center justify-start mt-2">
                    <button
                      type="submit"
                      disabled={loading ? true : false}
                      className="bg-[#0f0e0e] px-7 py-3 w-full rounded-full text-white hover:scale-105 transition-all"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center relative after:absolute after:content-[''] after:border-2 after:h-6 after:w-6 after:rounded-full after:border-t-0 py-3 after:animate-spin"></div>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                  <div className="w-full text-black flex items-center justify-center gap-2">
                    Already a user?{" "}
                    <Link href="/signup" className="text-blue-600">
                      Sign up
                    </Link>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="md:w-1/2 md:flex hidden h-full  items-center justify-center ">
            <Image
              draggable={false}
              src={loginImage}
              className="h-full w-full object-contain"
              alt="home-page-women"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
