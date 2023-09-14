import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import Icons from "../Helper/Icons";
import { iconList } from "@/data";
import { BsDot } from "react-icons/bs";

const Profile = () => {
  const [data, setData] = useState(iconList);
  const [supportingData, setSupportingData] = useState([]);
  const [initial, setInitial] = useState(0);
  const [prev, setPrev] = useState();
  let max = 16;
  useEffect(() => {
    const pagination = () => {
      let end = max * (initial + 1);
      console.log("end", end);
      console.log(initial);
      setSupportingData(data?.slice(initial * max, end));
    };
    pagination();

    let prevElement = document.getElementById(`user-swipe-p-${prev}`);
    if (prevElement) {
      prevElement.style.transform = "none";
    }
    let element = document.getElementById(`user-swipe-p-${initial}`);
    if (element) {
      element.style.transform = "scale(2)";
    }
  }, [initial]);

  return (
    <div className="w-full min-h-screen overflow-auto relative bg-white ">
      <div className="w-full h-32 flex justify-center items-center flex-col relative">
        <div className="w-full h-full relative">
          <img
            draggable={false}
            src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-full h-40 w-40 absolute top-10 overflow-hidden">
          <img
            draggable={false}
            src="https://mohammedakash.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfile.2dc40604.jpg&w=384&q=75"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full  flex-col mt-20 pb-2 px-2 ">
        <h2 className=" text-[1.5rem] mt-3 text-center  flex items-center gap-1">
          Mohammed Akash <MdVerified className="text-green-400 text-[1.3rem]" />
        </h2>
        <h3 className="text-[0.68rem] font-xs font-normal text-center w-full  mt-1">
          Full Stack Developer | Designer | Mentor | Youtuber
        </h3>
        <div className=" py-2 mt-1 ">
          <p className="text-[0.7rem] w-full text-center font-light">
            Hello, I am Akash a full stack developer and igner with 1.4 years of
            experience in all aspects of full stack development, from creating
            stunning UI.
          </p>
        </div>

        <div
          className="w-full"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            placeItems: "center",
            padding: "10px",
          }}
        >
          {supportingData.map((i) => (
            <div key={i.icon}>
              <Icons bg={i.icon} link={i.link} />
            </div>
          ))}
          {
            //   supportingData.length < max &&
            Array.from({ length: max - supportingData.length }, (v, i) => (
              <div
                key={i}
                className="h-16 w-16 flex items-center justify-center text-xl rounded-xl mt-5 shadow-xl bg-white border p-1"
              ></div>
            ))
          }
        </div>

        <div className="flex items-center justify-center">
          {data.length > max &&
            Array.from({ length: Math.ceil(data?.length / max) }, (v, i) => (
              <div
                key={i}
                className="m-0 flex items-center justify-center p-1 "
                id={`user-swipe-p-${i}`}
                onClick={() => {
                  setPrev(initial);
                  setInitial(i);
                }}
              >
                <BsDot className="text-xl" />
              </div>
            ))}
        </div>
        <div className="w-full mt-1 px-4">
          <h2 className="w-full text-center py-3 bg-blue-600 text-white rounded">
            Save
          </h2>
        </div>
        <div className="text-sm italic mt-2 gap-1 w-full text-center flex items-center justify-center">
          Powered by <h2 className="font-bold"> Tapster</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
