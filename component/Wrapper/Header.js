import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const [mouseEntered, setMouseEntered] = useState(false);
  return (
    <header className="w-full flex items-center justify-center">
      <div className="xl:w-[80%] w-full py-3 font-medium flex items-center justify-between xl:px-0  px-6">
        <div>
          <h1 className="text-2xl first-letter:text-4xl tracking-tighter">Tapster.</h1>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
