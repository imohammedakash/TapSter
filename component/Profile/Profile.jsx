import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import Icons from "../Helper/Icons";
import { BsDot } from "react-icons/bs";
import axios from "axios";
import Loader from "../Helper/Loader";

const Profile = ({ id }) => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [supportingData, setSupportingData] = useState([]);
  const [initial, setInitial] = useState(0);
  const [loading, setLoading] = useState(false);
  const [prev, setPrev] = useState();
  let max = 16;
  useEffect(() => {
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

  const pagination = () => {
    let end = max * (initial + 1);
    setSupportingData(data?.slice(initial * max, end));
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    getPublicProfile();
  }, [id]);
  const getPublicProfile = async () => {
    try {
      setLoading(true);
      let { data } = await axios.get(
        `https://tapster-dev.onrender.com/api/users/get-public-profile/${id}
        `
      );
      data = data.data;
      setUserData(data.user);
      let list = [];
      list.push(
        {
          link: `mailto:${data.user.email}`,
          icon: "https://cdn4.iconfinder.com/data/icons/address-book-providers-in-colors/512/gmail-64.png",
        },
        {
          link: `tel:${data.user.phoneNo}`,
          icon: "https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png",
        }
      );
      for (let i = 0; i < data.socialProfiles.length; i++) {
        let item = data.socialProfiles[i];
        let obj = {
          link: item.url,
          icon: item["template"]["image"],
        };
        list.push(obj);
      }
      setData(list);
      setLoading(false);
      let end = max * (initial + 1);
      setSupportingData(list?.slice(initial * max, end));
    } catch (error) {
      console.log(error);
    }
  };
  return loading ? (
    <Loader />
  ) : (
    <div className="w-full min-h-screen overflow-auto relative bg-white ">
      <div className="w-full h-32 flex justify-center items-center flex-col relative">
        <div className="w-full h-full relative">
          <img
            draggable={false}
            src={userData.coverPic}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-full h-40 w-40 absolute top-10 overflow-hidden">
          <img
            draggable={false}
            src={userData.profilePic}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full  flex-col mt-20 pb-2 px-2 ">
        <h2 className=" text-[1.5rem] mt-3 text-center  flex items-center gap-1">
          {userData.firstName} {userData.lastName}{" "}
          <MdVerified className="text-green-400 text-[1.3rem]" />
        </h2>
        <h3 className="text-[0.68rem] font-xs font-normal text-center w-full  mt-1">
          {userData?.designation} | {userData.company}
        </h3>
        <div className=" py-2 mt-1 ">
          <p className="text-[0.7rem] w-full text-center font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            perferendis dolorem harum ab vero illo tempore ut assumenda quisquam
            possimus.
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
            Array.from({ length: max - supportingData.length }, (v, i) => (
              <div
                key={i}
                className="h-16 w-16 flex items-center justify-center text-xl rounded-xl mt-5 shadow-xl bg-white border p-1"
              ></div>
            ))
          }
        </div>

        <div className="flex items-center justify-center">
          {data?.length > max &&
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
        <div className="w-full mt-6 px-4">
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
