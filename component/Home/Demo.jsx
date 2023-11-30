import React from "react";
import { BsBatteryFull, BsWifi } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { motion } from "framer-motion";
import { data } from "@/data";
const Demo = ({ userData }) => {
  return (
    <div className="w-full flex md:items-start items-center md:flex-row flex-col relative justify-evenly gap-5 mt-12">
      <div className="md:w-2/3 ">
        <h1 className="w-full text-center text-5xl font-medium">How will it look?</h1>
        <p className="text-lg font-light w-full mt-6 md:text-start text-center">
          Welcome to Tapster, where your card is the key to an unparalleled digital experience! Upon receiving your uniquely coded Tapster card, the journey begins. With a simple tap on the back of any NFC-enabled smartphone, a seamless connection is established between your physical card and your personalized profile on our website. This innovative technology ensures a secure and efficient link, allowing you to effortlessly bridge the physical and digital realms.
        </p>
        <p className="text-lg font-light w-full md:text-start text-center mt-8 ">
          Witness the transformation as your smartphone takes you directly to your personalized profile page. Here, a world of exclusive benefits awaits—crafted just for you. From special offers to personalized recommendations, each tap unlocks a realm of tailored content and services. Your Tapster card isn't just a card; it's a conduit to a personalized digital space that evolves with your preferences.
        </p>
        <p className="text-lg font-light w-full md:text-start text-center mt-8">
          Take charge of your experience by managing your profile, updating preferences, and customizing your journey at any time. Tapster isn't just about convenience; it's about delivering an exceptional and exclusive digital encounter with every tap. Embrace the future of personalized connectivity and discover the extraordinary possibilities that your Tapster card unlocks in the palm of your hand!
        </p>
      </div>
      <div className="">
        <div className="w-[20rem] relative h-[37rem] outline-2 outline-black rounded-[2rem] shadow-xl border p-1 bg-slate-300 overflow-hidden">
          <div className="h-full w-full rounded-[inherit] border-[0.4rem] border-black bg-[#141313f1]">
            <div className="card-phone relative h-full w-full rounded-[2rem] py-2 after:content-[''] after:absolute after:w-[6rem] after:h-[0.2rem] after:bg-white after:bottom-0 after:left-[32%] after:rounded-md overflow-hidden ">
              <div className="flex items-center justify-between px-2">
                <span className="w-1/3 text-xs text-start text-white font-extralight">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                <div className="w-1/3 flex items-center justify-center relative after:absolute after:content-[''] after:p-2 after:bg-[#0000006e] after:rounded-full before:absolute before:content-[''] before:p-1 before:border-y border-white before:z-[100] before:rounded-full"></div>
                <div className="w-1/3 flex text-white items-center justify-end gap-1">
                  <BsWifi className="text-sm" />
                  <FaSignal className="text-xs" />
                  <BsBatteryFull className="text-sm" />
                </div>
              </div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring", delay: 0.8 }}
                className="w-full h-[98%] overflow-auto demo mt-1"
              >
                <div className="w-full flex items-center justify-center relative">
                  <img
                    draggable={false}
                    src={
                      userData?.profilePic === "" ||
                        userData?.profilePic === undefined
                        ? "https://imgv3.fotor.com/images/gallery/3D-male-character-portrait-made-by-Fotor-AI-face-generator.jpg"
                        : userData?.profilePic
                    }
                    alt=""
                    className="rounded-full h-28 w-28 translate-y-12 bg-white"
                  />
                  <div className="absolute w-full h-24 z-[-2] top-0">
                    <img
                      draggable={false}
                      src={
                        userData?.coverPic === "" || !userData
                          ? "https://t3.ftcdn.net/jpg/05/57/04/76/360_F_557047649_CbCAFT8NfXkHffKu3l8O5jgV1dUpmfKE.jpg"
                          : userData?.coverPic
                      }
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center w-full flex-col mt-12 pb-2 px-2">
                  <h2 className=" text-[1.1rem] mt-3 text-white flex items-center gap-1">
                    {userData
                      ? userData?.firstName + " " + userData?.lastName
                      : "John Doe"}
                    <MdVerified className="text-green-400" />
                  </h2>
                  <h3 className="text-[0.68rem] font-xs font-normal text-center text-white mt-1">
                    {userData ||
                      (userData?.designation === "" && userData?.company === "")
                      ? userData?.designation + " | " + userData?.company
                      : "System Engineer | Tapster"}
                  </h3>
                  <div className=" py-2 mt-1 ">
                    <p className="text-[0.59rem] w-full text-center font-light text-[#ffffff]">
                      {!userData || userData?.about === ""
                        ? `  Hello, I this is John Doe a System Engineer with 7 years of solid experience in developing robust application.`
                        : userData?.about}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <div className="w-full grid grid-cols-4 place-content-center gap-4 mt-2">
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-1">
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/address-book-providers-in-colors/512/gmail-64.png"
                            className="h-full w-full object-cover rounded-xl"
                            alt="email"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-1">
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png"
                            className="h-full w-full object-cover rounded-xl"
                            alt="phone"
                          />
                        </div>
                      </div>
                      {data?.map((i) => (
                        <div key={i.id} className="flex items-center justify-center">
                          <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-[3px]">
                            <img
                              src={i?.image}
                              className="h-full w-full object-cover rounded-xl"
                              alt={i?.image}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-1"></div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-1"></div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-1"></div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-1"></div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-1"></div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 flex items-center justify-center text-xl rounded-xl shadow-xl bg-white border p-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-6 px-2">
                    <h2 className="w-full text-center py-[0.30rem] bg-blue-600 text-white rounded">
                      Save
                    </h2>
                  </div>
                  <div className="text-xs italic mt-2 gap-1 w-full text-center flex items-center justify-center text-white">
                    Powered by <h2 className="font-bold"> Tapster</h2>
                  </div>
                </div>
                {/* <div className="mt-1 px-2 border-t py-3 border-[#ffffff2c] bg-[#ffffff09] ">
                <h2 className="text-[0.6rem] font-xs font-medium text-white ">
                  Top Skills
                </h2>
                <p className="text-[0.6rem] w-full text-start font-light text-[#d4d4d4]">
                  HTML . CSS . JAVASCRIPT . NODE.js . EXPRESS.js
                </p>
              </div> */}
                {/* <div className="mt-1 px-2 border-t py-3 border-[#ffffff2c] bg-[#ffffff09] ">
                <h2 className="text-[0.6rem] font-xs font-medium text-white ">
                  Experience
                </h2>
                <div className="text-[0.6rem] w-full flex items-center justify-start gap-3 text-start mt-2 font-light text-[#d4d4d4]">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faresourcepool.com%2F10-reasons-why-facebook-and-wikipedia-are-made-on-php%2F&psig=AOvVaw3rJ10Kxz0jDAOIViEvuOw-&ust=1694112915499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDxiLHTloEDFQAAAAAdAAAAABAQ"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="text-[0.6rem] font-xs font-normal text-white ">
                      Software Developer
                    </h2>
                    <h1>Zadley India Pvt ltd. Noida. India</h1>
                    <h1>May 2020 - Now</h1>
                  </div>
                </div>
                <div className="text-[0.6rem] w-full flex items-center justify-start gap-3 text-start mt-2 font-light text-[#d4d4d4]">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faresourcepool.com%2F10-reasons-why-facebook-and-wikipedia-are-made-on-php%2F&psig=AOvVaw3rJ10Kxz0jDAOIViEvuOw-&ust=1694112915499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDxiLHTloEDFQAAAAAdAAAAABAQ"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="text-[0.6rem] font-xs font-normal text-white ">
                      Software Developer
                    </h2>
                    <h1>Zadley India Pvt ltd. Noida. India</h1>
                    <h1>May 2020 - Now</h1>
                  </div>
                </div>
                <div className="text-[0.6rem] w-full flex items-center justify-start gap-3 text-start mt-2 font-light text-[#d4d4d4]">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faresourcepool.com%2F10-reasons-why-facebook-and-wikipedia-are-made-on-php%2F&psig=AOvVaw3rJ10Kxz0jDAOIViEvuOw-&ust=1694112915499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDxiLHTloEDFQAAAAAdAAAAABAQ"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="text-[0.6rem] font-xs font-normal text-white ">
                      Software Developer
                    </h2>
                    <h1>Zadley India Pvt ltd. Noida. India</h1>
                    <h1>May 2020 - Now</h1>
                  </div>
                </div>
              </div> */}
                {/* <div className="mt-1 px-2 border-t py-3 border-[#ffffff2c] bg-[#ffffff09] ">
                <h2 className="text-[0.6rem] font-xs font-medium text-white ">
                  Education
                </h2>
                <div className=" mt-2 w-full flex items-center justify-start gap-2">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faresourcepool.com%2F10-reasons-why-facebook-and-wikipedia-are-made-on-php%2F&psig=AOvVaw3rJ10Kxz0jDAOIViEvuOw-&ust=1694112915499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDxiLHTloEDFQAAAAAdAAAAABAQ"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3 className="text-[0.6rem] font-xs font-normal text-white ">
                      Higher Secobdry
                    </h3>
                    <div className="flex gap-2 whitespace-nowrap items-center ">
                      <a
                        href="#"
                        target="blank"
                        className="text-white font-normal text-[0.65rem]"
                      >
                        IIT Kharakpur
                      </a>
                      <span className="capitalize font-normal text-[0.5rem] text-white">
                        Sep 2021 - May 2025
                      </span>
                    </div>
                    <p className="text-[0.6rem] font-normal text-white">
                      Noida . UP . India
                    </p>
                  </div>
                </div>
                <div className=" mt-2 w-full flex items-center justify-start gap-2">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faresourcepool.com%2F10-reasons-why-facebook-and-wikipedia-are-made-on-php%2F&psig=AOvVaw3rJ10Kxz0jDAOIViEvuOw-&ust=1694112915499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDxiLHTloEDFQAAAAAdAAAAABAQ"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3 className="text-[0.6rem] font-xs font-normal text-white ">
                      Higher Secobdry
                    </h3>
                    <div className="flex items-center gap-2 whitespace-nowrap text-xs">
                      <a
                        href="#"
                        target="blank"
                        className="text-white font-normal text-[0.7rem]"
                      >
                        IIT Kharakpur
                      </a>
                      <span className="capitalize font-normal text-[0.5rem] text-white">
                        Sep 2021 - May 2025
                      </span>
                    </div>
                    <p className="text-xs font-normal text-white">
                      Noida . UP . India
                    </p>
                  </div>
                </div>
                <div className=" mt-2 w-full flex items-center justify-start gap-2">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faresourcepool.com%2F10-reasons-why-facebook-and-wikipedia-are-made-on-php%2F&psig=AOvVaw3rJ10Kxz0jDAOIViEvuOw-&ust=1694112915499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDxiLHTloEDFQAAAAAdAAAAABAQ"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3 className="text-[0.6rem] font-xs font-normal text-white ">
                      Higher Secobdry
                    </h3>
                    <div className="flex items-center gap-2 whitespace-nowrap text-xs">
                      <a
                        href="#"
                        target="blank"
                        className="text-white font-normal text-[0.7rem]"
                      >
                        IIT Kharakpur
                      </a>
                      <span className="capitalize font-normal text-[0.5rem] text-white">
                        Sep 2021 - May 2025
                      </span>
                    </div>
                    <p className="text-xs font-normal text-white">
                      Noida . UP . India
                    </p>
                  </div>
                </div>
              </div> */}
                {/* <div className="mt-1 px-2 border-t py-3 border-[#ffffff2c] bg-[#ffffff09] ">
                <h2 className="text-[0.6rem] font-xs font-medium text-white ">
                  Courses
                </h2>
                <div className="text-[0.6rem] w-full flex items-center justify-start gap-3 text-start mt-2 font-light text-[#d4d4d4]">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faresourcepool.com%2F10-reasons-why-facebook-and-wikipedia-are-made-on-php%2F&psig=AOvVaw3rJ10Kxz0jDAOIViEvuOw-&ust=1694112915499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDxiLHTloEDFQAAAAAdAAAAABAQ"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="text-[0.6rem] font-xs font-normal text-white ">
                      Web Development
                    </h2>
                    <h1>Udemy . Online</h1>
                    <h1>May 2020 - Now</h1>
                  </div>
                </div>
                <div className="text-[0.6rem] w-full flex items-center justify-start gap-3 text-start mt-2 font-light text-[#d4d4d4]">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faresourcepool.com%2F10-reasons-why-facebook-and-wikipedia-are-made-on-php%2F&psig=AOvVaw3rJ10Kxz0jDAOIViEvuOw-&ust=1694112915499000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDxiLHTloEDFQAAAAAdAAAAABAQ"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="text-[0.6rem] font-xs font-normal text-white ">
                      Cyber Security
                    </h2>
                    <h1>Allen . Noida. India</h1>
                    <h1>May 2020 - Now</h1>
                  </div>
                </div>
              </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
