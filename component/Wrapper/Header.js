import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
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

const Header = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    let userData = localStorage.getItem("userData");
    console.log(userData)
    if (!userData) {
      return;
    }
    setData(JSON.parse(userData));
  }, []);
  return (
    <header className="w-full flex items-center justify-center">
      <div className="xl:w-[80%] w-full py-3 font-medium flex items-center justify-between xl:px-0  px-6">
        <div>
          <Link className=" flex items-end " href="/">
            <h1 className="text-4xl font-normal translate-x-1">T</h1>
            <h1 className=" text-2xl">apster.</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <nav className="flex items-center gap-7 capitalize">
            <CustomLink href="/product" title="Product" />
            <CustomLink href="/services" title="Price" />
            <CustomLink href="/courses" title="Latest" />
            <CustomLink href="/courses" title="Blog" />
          </nav>
        </div>
        <div>
          {data ? (
            <Link
              href={`/profile/${data?.firstName?.toLowerCase()}-${data?.lastName?.toLowerCase()}`}
            >
              <div className="h-9 w-9 rounded-full border">
                <img
                  className="h-full w-full object-cover rounded-[inherit]"
                  src={
                    data?.profilePic
                      ? data?.profilePic
                      : "https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg"
                  }
                  alt={
                    data
                      ? data?.firstName?.toLowerCase() +
                        "-" +
                        data?.lastName?.toLowerCase() +
                        "-image"
                      : "user-image"
                  }
                />
              </div>
            </Link>
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
