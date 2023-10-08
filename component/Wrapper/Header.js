import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { BsPerson } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import {
  FiBookOpen,
  FiGitPullRequest,
  FiGlobe,
  FiLogOut,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import { toast } from "react-toastify";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${router.asPath === href ? "text-red-700" : ""} font-normal`}
    >
      {title}
    </Link>
  );
};

const Header = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const handleLogOut = () => {
    setShowModal(false);
    localStorage.clear();
    router.push("/login");
    toast.success("Log out Successfully");
  };
  return (
    <header className="w-full flex items-center justify-center">
      <div className="xl:w-[80%] w-full py-3 font-medium flex items-center justify-between xl:px-0  md:px-6 px-2">
        <div>
          <Link className=" flex items-end " href="/">
            <h1 className="text-4xl font-normal translate-x-1">T</h1>
            <h1 className=" text-2xl">apster.</h1>
          </Link>
        </div>
        <div className="md:block hidden">
          <nav className="flex items-center gap-7 capitalize">
            <CustomLink href="/product" title="Product" />
            <CustomLink href="/services" title="Price" />
            <CustomLink href="/latest" title="Latest" />
            <CustomLink href="/blog" title="Blog" />
          </nav>
        </div>
        <div>
          {data ? (
            <div className="relative md:w-[15rem] ">
              <div
                className="w-full flex items-center justify-between gap-8 cursor-pointer pr-2"
                onClick={() => setShowModal(!showModal)}
              >
                <div className="flex items-center justify-center gap-2">
                  <BsPerson className="text-2xl" />
                  <h2 className="capitalize font-normal text-base md:block hidden">
                    {data.firstName} {data.lastName}
                  </h2>
                </div>
                <FaChevronDown className="font-normal text-sm md:block hidden" />
              </div>
              {showModal && (
                <div className=" absolute px-2 mt-5 md:w-full right-5 w-[14rem] py-2 z-[9] rounded-b-lg bg-white shadow-xl border ">
                  <div className="w-full flex items-center gap-3 bg-gray-800 p-[0.5rem] text-white justify-start rounded">
                    <div className="bg-white text-gray-800 rounded">
                      <BsPerson className="text-2xl" />
                    </div>
                    <h2 className="capitalize font-normal text-sm">
                      {data.firstName} {data.lastName}
                    </h2>
                  </div>
                  <Link
                    onClick={() => setShowModal(false)}
                    href={`/profile/${data.firstName.toLowerCase()}-${data.lastName.toLowerCase()}`}
                    className="w-full flex items-center justify-start cursor-pointer gap-3 text-center font-normal text-sm py-2 border-y my-2"
                  >
                    <FiSettings className="text-lg font-normal text-gray-800" />
                    <h3>Account Setting</h3>
                  </Link>
                  <div className="w-full md:hidden block">
                    <Link
                      onClick={() => setShowModal(false)}
                      href={`/product`}
                      className="w-full flex items-center justify-start cursor-pointer gap-3 text-center font-normal text-sm py-2 border-y my-2"
                    >
                      <FiShield className="text-lg font-normal text-gray-800" />
                      <h3>Product</h3>
                    </Link>
                    <Link
                      onClick={() => setShowModal(false)}
                      href={`/services`}
                      className="w-full flex items-center justify-start cursor-pointer gap-3 text-center font-normal text-sm py-2 border-y my-2"
                    >
                      <FiGitPullRequest className="text-lg font-normal text-gray-800" />
                      <h3>Services</h3>
                    </Link>
                    <Link
                      onClick={() => setShowModal(false)}
                      href={`/latest`}
                      className="w-full flex items-center justify-start cursor-pointer gap-3 text-center font-normal text-sm py-2 border-y my-2"
                    >
                      <FiGlobe className="text-lg font-normal text-gray-800" />
                      <h3>Latest</h3>
                    </Link>
                    <Link
                      onClick={() => setShowModal(false)}
                      href={`/blog`}
                      className="w-full flex items-center justify-start cursor-pointer gap-3 text-center font-normal text-sm py-2 border-y my-2"
                    >
                      <FiBookOpen className="text-lg font-normal text-gray-800" />
                      <h3>Blog</h3>
                    </Link>
                  </div>
                  <div className="w-full flex items-center justify-start gap-3 cursor-pointer text-center font-normal text-sm py-2">
                    <FiLogOut className="text-lg font-normal text-gray-800" />
                    <h3 onClick={handleLogOut}>Sign out</h3>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className={` px-4 rounded py-[0.4rem] font-normal  border transition-all `}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={` font-normal px-4 rounded py-[0.4rem] border transition-all whitespace-nowrap`}
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
