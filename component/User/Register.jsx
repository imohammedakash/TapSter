import Head from "next/head";
import React, { useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { register } from "@/pages/Redux/Reducers/Actions/user";
import Link from "next/link";
import AuthInput from "../Helper/AuthInput";

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });
  const [userProfile, setUserProfile] = useState("");
  console.log(userProfile);
  const fileRef = useRef();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  console.log();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userProfile === "") {
      return alert("Please select a profile ");
    }
    const formdata = new FormData();
    formdata.append("firstname", credentials.firstname);
    formdata.append("lastname", credentials.lastname);
    formdata.append("password", credentials.password);
    formdata.append("phone", credentials.phone);
    formdata.append("email", credentials.email);
    // formdata.append("profile", userProfile);
    // formdata.forEach((value, key) => {
    //     console.log(`${key}: ${value}`);
    //   });
    // dispatch(register(formdata));
  };
  return (
    <>
      <Head>
        <title>Register | Tapster.in</title>
        <meta name="description" content="Hi" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8027090957492757"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className="px-5 py-2">
        <a className=" flex items-end " target="_blank" href="/">
          <h1 className="text-4xl translate-x-1">T</h1>
          <h1 className=" text-2xl">apster.</h1>
        </a>
      </div>
      <main className=" w-full min-h-[90vh] flex items-center justify-center px-4 bg-[#fff]">
        <ToastContainer />
        <div className="flex items-center justify-center w-full ">
          <div className="flex md:w-[50%] w-full items-center justify-center border rounded-xl mb-8 bg-white shadow-xl">
            <div className=" lg:w-[80%] w-full flex items-center justify-center flex-col py-10 px-8 ">
              <h1 className="md:text-4xl text-3xl text-center w-full whitespace-nowrap font-medium md:first-letter:text-5xl ">
                Create Your Account
              </h1>
              <h2 className="text-base mt-2 ">
                Lets get Started for new journey
              </h2>
              <div className="w-full flex items-center justify-start mt-6">
                <div className="bg-[#0f0e0e00] border cursor-pointer text-lg flex items-center justify-center gap-2 shadow px-7 py-2 w-full rounded-full text-black hover:scale-105 transition-all">
                  <FcGoogle className="text-2xl" /> Google
                </div>
              </div>
              <div
                className="my-6 w-full flex items-center justify-center
               relative after:absolute after:content-[''] after:w-[45%] after:h-[0.4px] after:left-0 before:right-0 after:bg-[#0000002f] before:absolute before:content-[''] before:w-[45%] before:h-[0.4px]
                before:bg-[#0000002f]"
              >
                or
              </div>
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex gap-3">
                  <AuthInput
                    label="First Name"
                    Icon={BsPerson}
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                  />
                  <AuthInput
                    label="Last Name"
                    Icon={BsPerson}
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-3">
                  <AuthInput
                    label="Email"
                    Icon={FiMail}
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-4 text-white">
                  <div className="flex flex-col gap-2 items-start justify-center flex-1">
                    <label htmlFor="" className=" text-black">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center justify-center gap-4 border py-3 px-4 w-full rounded-full">
                      <AiOutlineLock className="text-2xl text-[#000000c1]" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder={`Enter your Password`}
                        value={credentials.password}
                        onChange={handleChange}
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
                  </div>
                </div>
                <div className="w-full text-black flex items-center text-xs justify-start gap-2 pl-2">
                  <input type="checkbox" />
                  <span>I agree to all Terms, Privacy and Fees</span>
                </div>
                <div className="w-full flex items-center justify-start mt-2">
                  <button className="bg-[#0f0e0e] px-7 py-2 w-full rounded-full text-white hover:scale-105 transition-all">
                    Register
                  </button>
                </div>
                <div className="w-full text-black flex items-center justify-center gap-2">
                  Already a user?{" "}
                  <Link href="/login" className="text-blue-600">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
                  {/* <div className="w-[50%]">
                      <img src="https://cdn.pixabay.com/photo/2018/08/15/09/52/programmer-3607627_1280.png" alt="" />
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Register;
