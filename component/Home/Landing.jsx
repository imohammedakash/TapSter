import React from "react";
import { FaAddressCard, FaMobile } from "react-icons/fa";
import { MdFingerprint, MdTapAndPlay } from "react-icons/md";
import { BsArrowRight, BsPersonVcard } from "react-icons/bs";
import women from "../../public/women.png";
import { motion } from "framer-motion";
import Image from "next/image";
const Landing = () => {
  return (
    <div className="w-full h-[86vh] mt-5 flex">
      <div className="w-1/2 h-full flex items-start justify-center flex-col  ">
        <div className="flex gap-5">
          <div className="h-10 w-10 flex items-center justify-center bg-[#000000a0]">
            <MdFingerprint className="text-2xl text-white " />
          </div>

          <h2 className="text-sm">
            Largest Platform for <br />
            Professionals
          </h2>
        </div>
        <div className="">
          <div className="flex items-center gap-3 justify-end translate-x-36">
            <div className="flex items-center gap-2 border shadow-xl px-4 py-2 rounded card">
              <BsPersonVcard />
              Take
            </div>
            <BsArrowRight />
            <div className="flex items-center gap-2 border shadow-xl px-4 py-2 rounded card">
              <MdTapAndPlay />
              Tap
            </div>
            <BsArrowRight />
            <div className="flex items-center gap-2 border shadow-xl px-4 py-2 rounded card">
              <FaMobile />
              View
            </div>
          </div>
          <h1 className="text-7xl" style={{ lineHeight: "5rem" }}>
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
      <div className="w-1/2 h-full flex items-center justify-center flex-col ">
        <div className=" h-[25rem] w-full relative flex items-end justify-end after:content-[''] after:absolute after:h-[25rem] after:w-[22rem] after:-skew-x-[18deg] after:z-[-2] after:shadow-xl after:bg-opacity-10 after:backdrop-blur-md after:border-t after:border-l after:bg-[#000] after:border-[rgba(255, 255, 255, 0.1)] after:bg-white ">
          <Image
            draggable={false}
            src={women}
            className="h-[30rem] w-[25rem] object-contain"
            alt="home-page-women"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
