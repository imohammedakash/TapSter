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
    <footer className="w-full bg-black">
      <div className="w-full flex items-center justify-center">
        <div className="text-white flex items-center justify-around py-7 border-b w-[80%] flex-wrap gap-7">
          <div className="text-white flex items-center justify-center gap-2">
            <div className="flex flex-col">
              <span className="text-2xl whitespace-nowrap">
                TickTag&nbsp;
              </span>
              <span className="text-sm tracking-widest whitespace-nowrap">
                &nbsp;Just Carry On
              </span>
            </div>
          </div>
          <div className="text-white flex items-center justify-center gap-2">
            <MdLocationPin className="text-3xl" />
            <a
              target="blank"
              href="https://maps.google.com/?q=Mamura,  Noida, Uttar Pradesh, India"
              className="text-xs"
            >
              &nbsp;Sector 63 <br />
              Noida, Uttar Pradesh, India
            </a>
          </div>
          <div className="text-white flex items-start justify-center gap-2">
            <MdOutlineMail className="text-3xl" />
            <div className="flex flex-col">
              <a href="mailto:ticktag@gmail.com" className="text-sm">
                &nbsp;ticktag@gmail.com
              </a>
              <a
                target="_blank"
                href="mailto:akashchtry@gmail.com"
                className="text-sm"
              >
                &nbsp;akashchtry@gmail.com
              </a>
            </div>
          </div>
          <div className="text-white flex items-start justify-center gap-2">
            <MdPhone className="text-3xl" />
            <div className="flex flex-col">
              <a href="tel:+919382546049" className="text-sm">
                &nbsp;+91 93825 46049
              </a>
              <a href="tel:+917029793127" className="text-sm">
                &nbsp;+91 7029793127       
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center py-8 flex-wrap">
        <div className="w-full text-white flex items-start justify-around flex-wrap gap-7">
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
            <div className="flex items-start justify-center flex-col gap-3">
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Lets Connect
              </h2>
              <ul className="flex items-center justify-center gap-3 flex-col">
                <li className=" list-none flex items-center justify-center gap-3">
                  <a
                    href="https://linkedin.com/in/mohammedakash"
                    target="blank"
                  >
                    <AiFillLinkedin className="text-3xl  hover:rotate-12 hover:scale-105 transition-all" />
                  </a>
                  <a href="https://twitter.com/imohammedakash" target="blank">
                    <AiOutlineTwitter className="text-3xl hover:rotate-12 hover:scale-105 transition-all" />
                  </a>
                  <a href="https://facebook.com/imohammedakash" target="blank">
                    <AiFillFacebook className="text-3xl hover:rotate-12 hover:scale-105 transition-all" />
                  </a>
                </li>
                <li className=" list-none flex items-center justify-center gap-3">
                  <a href="https://instagram.com/imohammedakash" target="blank">
                    <AiOutlineInstagram className="text-3xl hover:rotate-12 hover:scale-105 transition-all" />
                  </a>
                  <a href="https://pinterest.com/imohammedakash" target="blank">
                    <FaPinterestSquare className="text-2xl hover:rotate-12 hover:scale-105 transition-all" />
                  </a>
                  <a href="https://youtube.com/imohammedakash" target="blank">
                    <AiFillYoutube className="text-3xl hover:rotate-12 hover:scale-105 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
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
      <div className="w-full py-3 flex items-center justify-center text-white bg-[#121212]">
        <span className=" whitespace-nowrap md:text-base text-sm">
          Copyright © {new Date().getFullYear()}{" "}
          <a target="_blank" href="/">
            ticktag
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
