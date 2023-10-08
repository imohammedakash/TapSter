import React from "react";
import { FaAddressCard, FaMobile } from "react-icons/fa";
import { MdFingerprint, MdTapAndPlay } from "react-icons/md";
import { BsArrowRight, BsPersonVcard } from "react-icons/bs";
import women from "../../public/women.png";
import { motion } from "framer-motion";
import Image from "next/image";
const Landing = () => {
  return (
    <div className="w-full md:h-[86vh] mt-5 flex md:flex-row flex-col">
      <div className="md:w-1/2 w-full h-full flex items-start justify-center flex-col  ">
        <div className="flex items-start justify-start gap-5">
          <div className="h-10 w-10 flex items-center justify-center bg-[#000000a0]">
            <MdFingerprint className="text-2xl text-white " />
          </div>

          <h2 className="text-sm">
            Largest Platform for <br />
            Professionals
          </h2>
        </div>
        <div className="">
          <div className="flex items-center gap-3 md:justify-end justify-center md:translate-x-36 md:my-0 my-6 ">
            <div className="flex items-center gap-2 border md:px-4 px-3 text-sm py-2 shadow rounded md:card">
              <BsPersonVcard />
              Take
            </div>
            <BsArrowRight />
            <div className="flex items-center gap-2 border  md:px-4 px-3 text-sm py-2 shadow rounded md:card">
              <MdTapAndPlay />
              Tap
            </div>
            <BsArrowRight />
            <div className="flex items-center gap-2 border md:px-4 px-3 text-sm py-2 shadow rounded md:card">
              <FaMobile />
              View
            </div>
          </div>
          <h1 className="md:text-7xl text-5xl md:text-start text-center md:my-0 my-4 font-medium">
            Find Professionals in Every Field
          </h1>
        </div>
        <div
          //   initial={{ x: -500, opacity: 0 }}
          //   whileInView={{ x: 0, opacity: 1 }}
          //   transition={{ duration: 0.7, type: "spring" }}
          //   viewport={{
          //     once: true,
          //   }}
          className="h-12 w-full skew-x-6 shadow-xl bg-gradient-to-r from-green-400 via-lime-300 to-blue-400 mt-8 "
        ></div>
        <div className="h-12 w-full -skew-x-6 shadow-xl bg-gradient-to-l from-green-400 via-lime-300 to-blue-400 "></div>
        <div className="flex items-center gap-2 mt-4">
          <div className="h-9 w-9 flex items-center rounded-full justify-center shadow border">
            <FaAddressCard className="text-lg " />
          </div>
          <span>1.67L active customer among 14 nations</span>
        </div>
      </div>
      <div className="md:w-1/2 w-full h-full flex items-center justify-center flex-col ">
        <div className="h-[25rem] w-full relative flex md:items-end items-center justify-center md:justify-end  ">
          <Image
            draggable={false}
            src={women}
            className="md:h-[30rem] h-full md:w-[25rem] object-contain"
            alt="home-page-women"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
