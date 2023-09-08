import React from "react";
import {
  BsBatteryFull,
  BsFacebook,
  BsInstagram,
  BsTelephone,
  BsTwitter,
  BsWifi,
  BsYoutube,
} from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BiMessageDots } from "react-icons/bi";
import {
  MdLocationOn,
  MdMailOutline,
  MdPhone,
  MdVerified,
} from "react-icons/md";
const Demo = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[18rem] h-[33rem] outline-2 outline-black rounded-[2rem] shadow-xl border p-1 bg-slate-300 overflow-hidden">
        <div className="h-full w-full rounded-[inherit] border-[0.4rem] border-black bg-[#141313f1]">
          <div className="card-phone h-full w-full rounded-[2rem] py-2 relative after:content-[''] after:absolute after:w-[6rem] after:h-[0.2rem] after:bg-white after:bottom-0 after:left-[32%] after:rounded-md overflow-hidden ">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs text-white font-extralight">9:41</span>
              <div></div>
              <div className="flex text-white items-center gap-1">
                <BsWifi className="text-sm" />
                <BsBatteryFull className="text-sm" />
                <FaSignal className="text-xs" />
              </div>
            </div>
            <div className="w-full h-[98%] overflow-auto demo">
              <div className="w-full flex items-center justify-start relative">
                <img
                  draggable={false}
                  src="https://mohammedakash.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfile.2dc40604.jpg&w=384&q=75"
                  alt=""
                  className="rounded-full h-24 w-24 translate-y-6 translate-x-7 "
                />
                <div className="absolute w-full h-20 z-[-2] top-0">
                  <img
                    draggable={false}
                    src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-start justify-center w-full  flex-col mt-5 pb-2 px-2">
                <h2 className=" text-[1.1rem] mt-3 text-white flex items-center gap-1">
                  Mohammed Akash <MdVerified className="text-green-400" />
                </h2>
                <h3 className="text-[0.68rem] font-xs font-normal text-white mt-1">
                  Full Stack Developer | Designer | Mentor | Youtuber
                </h3>
                <div className=" py-2 mt-1 ">
                  <p className="text-[0.59rem] w-full text-start font-light text-[#ffffff]">
                    Hello, I am Akash a full stack developer and igner with 1.4
                    years of experience in all aspects of full stack
                    development, from creating stunning UI.
                  </p>
                </div>
                {/* <div className=" ">
                  <h2 className="text-[0.7rem] font-xs font-medium text-white ">
                    Address
                  </h2>
                  <p className="text-[0.6rem] w-full text-start font-light text-[#ffffff]">
                    sector 66, Mamura, Noida, Uttar Pradesh, India
                  </p>
                </div>
                <div className="mt-1">
                  <h2 className="text-[0.7rem] font-xs font-medium text-white ">
                    Email
                  </h2>
                  <p className="text-[0.6rem] w-full text-start font-light text-[#ffffff]">
                    mohammedakash@gmail.com
                  </p>
                </div>
                <div className="mt-1">
                  <h2 className="text-[0.7rem] font-xs font-medium text-white ">
                    Phone
                  </h2>
                  <p className="text-[0.6rem] w-full text-start font-light text-[#ffffff]">
                    7029793127
                  </p>
                </div> */}
                <div className="w-full flex items-center justify-evenly mt-4">
                  <div className="h-10 w-10 flex items-center justify-center text-white text-xl rounded-xl bg-white border">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
                      className="h-5"
                    />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-2xl rounded-xl bg-green-700 border">
                    <MdPhone />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-xl rounded-xl bg-white border">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png"
                      className="h-7"
                    />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-2xl rounded-xl bg-[#fff0]">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                      className="h-9"
                    />
                  </div>
                </div>
                <div className="w-full flex items-center justify-evenly mt-4">
                  <div className="h-10 w-10 flex items-center justify-center text-white text-xl rounded-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                      className="h-10"
                    />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-xl rounded-xl bg-white border">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                      className="h-9"
                    />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-xl rounded-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                      className="h-10"
                    />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-2xl overflow-hidden rounded-xl bg-[#fff0]">
                    <img
                      src="https://play-lh.googleusercontent.com/5pZMqQYClc5McEjaISPkvhF8pDmlbLqraTMwk1eeqTlnUSjVxPCq-MItIrJPJGe7xW4"
                      className="h-10"
                    />
                  </div>
                </div>
                <div className="w-full flex items-center justify-evenly mt-4">
                  <div className="h-10 w-10 flex items-center justify-center text-white text-xl bg-white rounded-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
                      className="w-7"
                    />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-2xl overflow-hidden rounded-xl bg-[#fff0]">
                    <img
                      src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo"
                      className="h-10"
                    />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-xl rounded-xl bg-white border">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                      className="h-9"
                    />
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center text-white text-xl rounded-xl bg-white border">
                    <img
                      src="https://www.freeiconspng.com/uploads/black-www-icon-17.png"
                      className="h-9"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h2 className="w-full text-center mt-3 py-[0.29rem] bg-blue-600 text-white rounded">Save</h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
