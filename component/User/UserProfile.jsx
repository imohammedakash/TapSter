import React, { useEffect, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { BsPerson, BsPersonWorkspace } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Router, useRouter } from "next/router";
import { toast } from "react-toastify";
import AuthInput from "../Helper/AuthInput";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import Wrapper from "../Wrapper/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "@/Redux/Actions/user";

const PreviewPage = ({ userData }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[8rem] border rounded-t">
        <img
          className="h-full w-full object-cover rounded-[inherit] bg-white text-white"
          src={
            userData?.coverPic === ""
              ? "https://cdn.pixabay.com/photo/2015/08/31/08/33/header-915128_960_720.jpg"
              : userData?.coverPic
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
      <div className="md:h-32 md:w-32 h-28 w-28 rounded-full border -translate-y-1/2 md:translate-x-12 translate-x-8">
        <img
          className="h-full w-full object-cover rounded-[inherit] bg-white text-white"
          src={
            userData?.profilePic === ""
              ? "https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg"
              : userData?.profilePic
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
        <h1 className="m-0 md:text-3xl text-xl font-medium">
          {userData?.firstName} {userData?.lastName}
        </h1>
      </div>
      <div className="mt-2">
        <h5 className="mt-1 text-sm text-[#6a6a6a] font-normal">
          {userData?.designation} | {userData?.company}
        </h5>
      </div>

      <div className="mt-5">
        <div className="flex items-center w-full mt-2 text-sm gap-3">
          <FiMail className="text-xl text-[#000000c1]" />
          <a href={`mailto:${userData.email}`}> {userData.email}</a>
        </div>
      </div>
      <div className="">
        <div className="flex items-center w-full mt-3 text-sm gap-3">
          <FiPhone className="text-xl text-[#000000c1]" />
          <a href={`tel:${userData.phoneNo}`}> {userData.phoneNo}</a>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-medium">About</h2>
        <h5 className="mt-1 text-sm text-[#6a6a6a] font-normal">
          Hi, I'm Akash, a full-stack developer and UI/UX designer who has a
          love for developing engaging, useful, and appealing digital
          experiences.
        </h5>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const loading = useSelector((state) => state.user.loading);
  const [activeProfile, setActiveProfile] = useState("general");
  const [showPreview, setShowPreview] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowPreview(false);
    }
    let token = localStorage.getItem("AccessToken");
    if (!token) {
      router.push("/login");
    } else {
      getProfileData();
    }
  }, []);
  const getProfileData = () => {
    dispatch(getProfile()).then((res) => {
      const { data } = res;
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
      });
    });
  };
  const handleSubmit = (values, { setSubmitting }) => {
    delete values?.email;
    delete values?.about;
    values["phoneNo"] = values?.phoneNo.toString();
    dispatch(updateProfile(values)).then((res) => {
      console.log("Profile", res);
      if (res?.statusCode === 200) {
        toast.success(res?.message);
        getProfileData();
        return;
      }
      toast.error(res?.message);
    });
  };
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
        <button
          className="my-4 px-3 bg-blue-600 text-white py-1 rounded shadow md:hidden "
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? "Hide" : "Preview"}
        </button>
        <div className=" relative flex items-start justify-between md:p-0">
          {showPreview ? (
            <div className="md:static absolute w-full md:w-[40%] bg-white h-[70vh] border md:border-none shadow-xl md:shadow-none rounded md:p-0 py-4 px-4">
              <PreviewPage userData={userData} />
            </div>
          ) : (
            ""
          )}
          <div className="md:w-[58%] w-full">
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
