import React, { useEffect, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { BsPerson, BsPersonWorkspace } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import AuthInput from "../Helper/AuthInput";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import Wrapper from "../Wrapper/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  updateProfile,
} from "@/Redux/Actions/user";
import Demo from "../Home/Demo";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const loading = useSelector((state) => state.user.loading);
  const [activeProfile, setActiveProfile] = useState("general");
  const [showPreview, setShowPreview] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  if (!user?.token) {
    router.push("/");
  }
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowPreview(false);
    }
    getProfileData();
  }, []);
  const getProfileData = () => {
    dispatch(getProfile(user.token)).then((res) => {
      const data = res?.data;
      setUserData({
        firstName: data?.firstName,
        lastName: data?.lastName,
        company: data?.company,
        designation: data?.designation,
        profilePic: data?.profilePic || "",
        coverPic: data?.coverPic || "",
        email: data?.email,
        about: data?.about || "",
        phoneNo: data?.phoneNo || "",
        socialProfile: data?.socialProfile || [],
      });
    });
  };
  const handleSubmit = (values) => {
    let { socialProfile, email, ...rest } = values
    rest["phoneNo"] = rest?.phoneNo.toString();
    dispatch(updateProfile(user.token, rest)).then((res) => {
      if (res?.statusCode === 200) {
        toast.success(res?.message);
        getProfileData();
        return;
      }
      toast.error(res?.message);
    });
  };

  const getComponent = () => {
    switch (activeProfile) {
      case "general":
        return (
          <Formik
            initialValues={userData}
            enableReinitialize={true}
            validate={(values) => {
              const errors = {};
              if (!values?.firstName) {
                errors.firstName = "First name required*";
              }
              if (!values?.lastName) {
                errors.lastName = "Last name required*";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            <Form className=" w-full flex flex-col gap-3">
              <div className="flex gap-3 items-center justify-center">
                <div className="flex flex-col gap-2 items-start justify-center flex-1">
                  <label htmlFor="item" className="">
                    Profile
                  </label>
                  <div className="flex items-center justify-center gap-4 border py-3 px-4 w-full">
                    <input
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
                    <input
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
                  Icon={FiPhone}
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
                    maxLength="250"
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
                  {loading ? (
                    <div className="flex items-center justify-center relative after:absolute after:content-[''] after:border-2 after:h-6 after:w-6 after:rounded-full after:border-t-0 py-3 after:animate-spin"></div>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </Form>
          </Formik>
        );
      case "social":
        return (
          <form
            onSubmit={handleSubmit}
            className=" w-full flex flex-col gap-3"
          >
            <div className="flex flex-wrap items-center justify-start">
              {userData?.socialProfile?.map((i, index) => (
                <div className="w-full flex items-center justify-start gap-3 mt-4">
                  <img
                    className="h-12 w-12"
                    src={i["template"]["image"]}
                    alt={i["template"]["name"]}
                    loading="lazy"
                  />
                  <input
                    value={i?.url}
                    onChange={(e) => handleSocialChange(e, index)}
                    placeholder={`Please paste your ${i["template"]["name"]} url here`}
                    className="border p-2 w-full"
                    type="url"
                  />
                </div>
              ))}
            </div>
            {userData?.socialProfile?.length ? (
              <div className=" w-[30%] flex items-center justify-start mt-2">
                <button
                  type="submit"
                  disabled={loading ? true : false}
                  className="bg-[#0f0e0e] px-7 py-3 w-full rounded-full text-white hover:scale-105 transition-all"
                >
                  {loading ? (
                    <div className="flex items-center justify-center relative after:absolute after:content-[''] after:border-2 after:h-6 after:w-6 after:rounded-full after:border-t-0 py-3 after:animate-spin"></div>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            ) : (
              ""
            )}
          </form>
        );
    }
  };
  return (
    <Wrapper>
      <div className="my-7 min-h-screen px-2">
        <div className="w-full flex items-center justify-start ">
          <div className="flex items-center justify-center md:w-[40%] w-full md:my-3 my-5 border rounded p-[0.1rem]">
            <div
              onClick={() => setActiveProfile("general")}
              className={`w-1/2 flex cursor-pointer items-center transition-all justify-center text-sm py-[0.48rem] ${activeProfile === "general" ? "shadow bg-[#c4c4c459]" : ""
                }`}
            >
              General
            </div>
            <div
              onClick={() => setActiveProfile("social")}
              className={`w-1/2 flex cursor-pointer transition-all items-center justify-center text-sm py-[0.48rem] ${activeProfile === "social" ? "shadow bg-[#c4c4c459]" : ""
                }`}
            >
              Social
            </div>
          </div>
        </div>
        <button
          className="my-4 px-3 bg-blue-600 text-white py-1 rounded shadow md:hidden "
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? "Hide" : "Preview"}
        </button>
        <div className=" relative flex items-start justify-between md:p-0">
          {showPreview ? (
            <div className="md:static absolute w-full md:w-[40%] md:p-0 py-4 px-4 mt-4">
              <Demo userData={userData} />
            </div>
          ) : (
            ""
          )}

          <div className="md:w-[58%] w-full">{getComponent()}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserProfile;
