import React, { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsPerson, BsPersonWorkspace } from "react-icons/bs";
import { SiCodesignal } from "react-icons/si";
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
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { register } from "@/Redux/Actions/user";
const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  console.log(process.env.API_URL);
  const [data, setData] = useState();
  const loading = useSelector((state) => state.user.loading);
  useEffect(() => {
    let token = localStorage.getItem("AccessToken");
    setData(token);
  }, []);
  if (data) {
    Router.push("/");
  }
  return (
    <>
      <main className=" w-full min-h-[90vh] flex items-center justify-center px-4 bg-[#fff]">
        <div className="flex items-center justify-center w-full ">
          <div className="flex md:w-[60%] w-full items-center justify-center mb-8 bg-white ">
            <div className=" lg:w-[80%] w-full flex items-center justify-center flex-col py-10 md:px-8 px-4 ">
              <h1 className="md:text-4xl text-3xl text-center w-full whitespace-nowrap font-medium md:first-letter:text-5xl ">
                Create Your Account
              </h1>
              <h2 className="text-base mt-2 ">
                Lets get Started for new journey
              </h2>
              <div className="w-full flex items-center justify-start mt-6 gap-5">
                <div className="bg-[#0f0e0e00] border cursor-pointer text-lg flex items-center justify-center gap-2 shadow px-7 py-2 w-full rounded-full text-black hover:scale-105 transition-all">
                  <FcGoogle className="text-2xl" /> Google
                </div>
                <div className="bg-[#0f0e0e00] border cursor-pointer text-lg flex items-center justify-center gap-2 shadow px-7 py-2 w-full rounded-full text-black hover:scale-105 transition-all">
                  <FaFacebook className="text-2xl text-[#3B5998]" /> Facebook
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
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  company: "",
                  designation: "",
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
                  if (!values.firstName) {
                    errors.firstName = "First name required*";
                  }
                  if (!values.lastName) {
                    errors.lastName = "Last name required*";
                  }
                  if (!values.password) {
                    errors.password = "Password required*";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(register(values)).then((res) => {
                    console.log(res);
                    if (res?.statusCode === 200) {
                      toast.success(res?.message);
                      localStorage.setItem("AccessToken", res.data.token);
                      Router.push("/");
                    }
                    console.log(res.message)
                    toast.error(res?.message);
                  });
                }}
              >
                <Form className=" w-full flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className=" w-full flex flex-col gap-4">
                      <AuthInput
                        label="First Name"
                        Icon={BsPerson}
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        required={true}
                      />
                      <ErrorMessage
                        name="firstName"
                        component="h2"
                        className="text-red-600 text-xs"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                      <AuthInput
                        label="Last Name"
                        Icon={BsPerson}
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        required={true}
                      />
                      <ErrorMessage
                        name="lastName"
                        component="h2"
                        className="text-red-600 text-xs"
                      />
                    </div>
                  </div>

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

                  <div className="w-full flex gap-3 mt-2">
                    <AuthInput
                      label="Company"
                      Icon={MdOutlineMapsHomeWork}
                      type="text"
                      name="company"
                      placeholder="Enter your Company"
                    />
                    <AuthInput
                      label="Designation"
                      Icon={BsPersonWorkspace}
                      type="text"
                      name="designation"
                      placeholder="Enter your designation"
                    />
                  </div>
                  <div className="w-full text-black flex items-center text-xs justify-start gap-2 pl-2">
                    <input type="checkbox" />
                    <span>I agree to all Terms, Privacy and Fees</span>
                  </div>
                  <div className="w-full flex items-center justify-start mt-2">
                    <button
                      type="submit"
                      disabled={loading ? true : false}
                      className="bg-[#0f0e0e] px-7 py-3 w-full rounded-full text-white hover:scale-105 transition-all"
                    >
                      {loading ? "Loading..." : "Register"}
                    </button>
                  </div>
                  <div className="w-full text-black flex items-center justify-center gap-2">
                    Already a user?{" "}
                    <Link href="/login" className="text-blue-600">
                      Login
                    </Link>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
