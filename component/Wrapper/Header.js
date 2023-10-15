import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { BsCart2, BsPerson } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  FiBookOpen,
  FiGitPullRequest,
  FiGlobe,
  FiLogOut,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import { toast } from "react-toastify";
import { MdNotifications, MdOutlineNotifications } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";
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
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <BsCart2 className="text-2xl text-gray-800" />
          </Link>
          {data ? (
            <div className="relative ">
              <div className=" flex items-center justify-between cursor-pointer gap-4">
                <div
                  className="flex items-center justify-center gap-2"
                  onClick={() => setShowModal(!showModal)}
                >
                  <BsPerson className="text-2xl text-gray-800 font-normal" />
                </div>
              </div>
              {showModal && (
                <div className=" absolute px-2 mt-5 right-3 w-[14rem] py-2 z-[9] rounded-b-lg bg-white shadow-xl border ">
                  <Link
                    onClick={() => setShowModal(false)}
                    href={`/profile`}
                    className="w-full flex items-center gap-3 bg-gray-800 p-[0.5rem] text-white justify-start rounded"
                  >
                    <div className="bg-white text-gray-800 rounded">
                      <BsPerson className="text-2xl" />
                    </div>
                    <h2 className="capitalize font-normal text-sm">Profile</h2>
                  </Link>
                  <Link
                    onClick={() => setShowModal(false)}
                    href={`/notification`}
                    className="w-full flex items-center justify-start cursor-pointer gap-3 text-center font-normal text-sm py-2 border-y my-2"
                  >
                    <IoNotificationsOutline className="text-xl text-gray-800" />
                    <h3>Notification</h3>
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
            <div className="flex items-center gap-5">
              <Link
                href="/login"
                className={` px-4 rounded py-[0.4rem] font-normal  border transition-all `}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
