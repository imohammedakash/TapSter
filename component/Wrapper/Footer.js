import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaPinterestSquare } from "react-icons/fa";
import { MdLocationPin, MdOutlineMail, MdPhone } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className=" flex flex-col items-center justify-center py-8 flex-wrap">
        <div className="w-full flex items-start justify-around flex-wrap gap-7">
          <div className="w-1/4 flex items-center justify-center">
            <div className="flex items-start justify-center flex-col gap-3">
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Quick Links
              </h2>
              <ul className="flex flex-col gap-2 font-light">
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/articles">Article</Link>
                <Link href="/contact">Contact</Link>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center whitespace-nowrap">
            <div className="flex items-start justify-center flex-col gap-3">
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Know Me
              </h2>
              <ul className="flex flex-col gap-2 font-light">
                <Link href="/about">About</Link>
                <Link href="/terms&conditions">Terms & Conditions</Link>
                <Link href="/privacy&policy">Privacy Policy</Link>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-start justify-center flex-col gap-3"></div>
          </div>
          <div className="flex items-start justify-center flex-col gap-4">
            <h2 className="font-semibold text-lg">Newsletter</h2>
            <div className="">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="py-2 px-3 rounded-l-sm border-none outline-none text-gray-700 md:w-auto w-24 text-xs md:text-base"
                />
                <button className="py-2 md:px-6 px-3 md:text-base text-xs bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 hover:to-slate-600 hover:from-indigo-200 rounded-r-sm border-black hover:bg-[#0f6636] hover:border-white transition-all text-white">
                  Send
                </button>
              </div>
              <span className="text-[9px] tracking-wider">
                <sup>*</sup>Sign up to get latest news
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative py-6 after:content-[''] after:absolute after:w-[80%] after:h-[0.5px] after:bg-[#a6a6a695] after:top-0">
        <div className="py-3 flex items-center justify-between w-[80%]">
          <div className="flex items-center gap-2">
            {/* <a className=" first-letter:text-xl " target="_blank" href="/">
              Tapster.
            </a> */}
            <span className=" whitespace-nowrap md:text-base text-sm">
              copyright © {new Date().getFullYear()} {" "} tapster.in
            </span>
          </div>
          <ul className="flex items-center justify-center text-[#252323d0] gap-5 text-2xl">
            <a href="https://linkedin.com/in/mohammedakash" target="blank">
              <AiFillLinkedin className="  hover:rotate-12 hover:scale-105 transition-all" />
            </a>
            <a href="https://twitter.com/imohammedakash" target="blank">
              <AiOutlineTwitter className="hover:rotate-12 hover:scale-105 transition-all" />
            </a>
            <a href="https://facebook.com/imohammedakash" target="blank">
              <AiFillFacebook className="hover:rotate-12 hover:scale-105 transition-all" />
            </a>

            <a href="https://instagram.com/imohammedakash" target="blank">
              <AiOutlineInstagram className=" hover:rotate-12 hover:scale-105 transition-all" />
            </a>
            <a href="https://pinterest.com/imohammedakash" target="blank">
              <FaPinterestSquare className=" hover:rotate-12 hover:scale-105 transition-all" />
            </a>
            <a href="https://youtube.com/imohammedakash" target="blank">
              <AiFillYoutube className=" hover:rotate-12 hover:scale-105 transition-all" />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
