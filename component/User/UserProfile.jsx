import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsPerson, BsPersonWorkspace } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Router, useRouter } from "next/router";
import { toast } from "react-toastify";
import AuthInput from "../Helper/AuthInput";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import Wrapper from "../Wrapper/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "@/Redux/Actions/user";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const loading = useSelector((state) => state.user.loading);
  const [activeProfile, setActiveProfile] = useState("general");
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    let data = localStorage.getItem("userData");
    if (!data) {
      router.push("/login");
    }
    data = JSON.parse(data);
    setUserData({
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company,
      designation: data.designation,
      profilePic: data.profilePic || "",
      coverPic: data.coverPic || "",
      email: data.email,
      about: data.about || "",
      phoneNo: data.phoneNo || "",
    });
  }, []);
  return (
    <Wrapper>
      <div className="my-7 min-h-screen px-2">
        <div className="w-full flex items-center justify-start ">
          <div className="flex items-center justify-center md:w-[40%] w-full md:my-3 my-5 border rounded p-[0.1rem]">
            <div
              onClick={() => setActiveProfile("general")}
              className={`w-1/2 flex cursor-pointer items-center transition-all justify-center text-sm py-[0.48rem] ${
                activeProfile === "general" ? "shadow bg-[#c4c4c459]" : ""
              }`}
            >
              General
            </div>
            <div
              onClick={() => setActiveProfile("social")}
              className={`w-1/2 flex cursor-pointer transition-all items-center justify-center text-sm py-[0.48rem] ${
                activeProfile === "social" ? "shadow bg-[#c4c4c459]" : ""
              }`}
            >
              Social
            </div>
          </div>
        </div>
        <div className=" flex items-start justify-between">
          <div className="w-[40%] md:block hidden">
            <div className="w-full h-[8rem] border rounded-t">
              <img
                className="h-full w-full object-cover rounded-[inherit]"
                src={
                  userData?.coverPic
                    ? userData?.coverPic
                    : "https://cdn.pixabay.com/photo/2015/08/31/08/33/header-915128_960_720.jpg"
                }
                alt={
                  userData
                    ? userData?.firstName?.toLowerCase() +
                      "-" +
                      userData?.lastName?.toLowerCase() +
                      "-image"
                    : "user-image"
                }
              />
            </div>
            <div className="h-32 w-32 rounded-full border -translate-y-1/2 translate-x-12">
              <img
                className="h-full w-full object-cover rounded-[inherit]"
                src={
                  userData?.profilePic
                    ? userData?.profilePic
                    : "https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg"
                }
                alt={
                  userData
                    ? userData?.firstName?.toLowerCase() +
                      "-" +
                      userData?.lastName?.toLowerCase() +
                      "-image"
                    : "user-image"
                }
              />
            </div>
            <div className="mt-[-3rem]">
              <h1 className="m-0 text-xl font-medium">
                {userData?.firstName} {userData?.lastName}
              </h1>
            </div>
          </div>
          <div className="md:w-[58%] w-full">
            <Formik
              initialValues={userData}
              enableReinitialize={true}
              validate={(values) => {
                const errors = {};
                if (!values.firstName) {
                  errors.firstName = "First name required*";
                }
                if (!values.lastName) {
                  errors.lastName = "Last name required*";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Values", values);
                delete values.email;
                delete values.about;
                values["phoneNo"] = values.phoneNo.toString();
                dispatch(updateProfile(values)).then((res) => {
                  console.log("Profile", res);
                  if (res?.statusCode === 200) {
                    toast.success(res?.message);
                    dispatch(getProfile())
                    return
                  }
                  toast.error(res?.message);
                });
              }}
            >
              <Form className=" w-full flex flex-col gap-3">
                <div className="flex gap-3 items-center justify-center">
                  <div className="flex flex-col gap-2 items-start justify-center flex-1">
                    <label htmlFor="item" className="">
                      Profile
                    </label>
                    <div className="flex items-center justify-center gap-4 border py-3 px-4 w-full">
                      <Field
                        name="profilePic"
                        type="file"
                        className="w-full outline-none border-none bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-center flex-1">
                    <label htmlFor="item" className="">
                      Banner
                    </label>
                    <div className="flex items-center justify-center gap-4 border py-3 px-4 w-full">
                      <Field
                        name="coverPic"
                        type="file"
                        placeholder="Please tell Something about you"
                        className="w-full outline-none border-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-3">
                  <div className=" w-full flex flex-col gap-4">
                    <AuthInput
                      label="First Name"
                      Icon={BsPerson}
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
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
                    />
                    <ErrorMessage
                      name="lastName"
                      component="h2"
                      className="text-red-600 text-xs"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-start gap-3">
                  <AuthInput
                    type="email"
                    name="email"
                    label="Email"
                    disabled
                    Icon={FiMail}
                    placeholder="Enter Your Email"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="h2"
                  className="text-red-600 text-xs"
                />
                <div className="flex items-start justify-start gap-3">
                  <AuthInput
                    type="number"
                    name="phoneNo"
                    label="Phone"
                    Icon={FiMail}
                    placeholder="Enter Your phone number"
                  />
                </div>
                <div className="w-full flex items-start justify-start gap-3 mt-2">
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
                <div className="flex flex-col gap-2 items-start justify-center flex-1">
                  <label htmlFor="item" className="">
                    About
                  </label>
                  <div className="flex items-center justify-center gap-4 border py-3 px-4 w-full">
                    <Field
                      as="textarea"
                      name="about"
                      placeholder="Please tell Something about you"
                      className="w-full outline-none border-none bg-transparent min-h-[5rem]"
                    />
                  </div>
                </div>
                <div className=" w-[30%] flex items-center justify-start mt-2">
                  <button
                    type="submit"
                    disabled={loading ? true : false}
                    className="bg-[#0f0e0e] px-7 py-3 w-full rounded-full text-white hover:scale-105 transition-all"
                  >
                    {loading ? "Loading..." : "Save"}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserProfile;
