import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  MdFilterVintage,
  MdOutlineLocalShipping,
  MdOutlineVerified,
  MdPowerInput,
  MdWaterfallChart,
} from "react-icons/md";
import { BsCart } from "react-icons/bs";
const Details = ({ id }) => {
  const [activeImage, setActiveImage] = useState("");
  const [qty, setQty] = useState(1);
  const [productData, setProductData] = useState();
  let obj = {
    name: "Black Matte PVC | Silver Print | NFC Business Card",
    price: 2000,
    imageList: [
      "https://tapitag.co/cdn/shop/products/A_360x.jpg?v=1667848709",
      "https://tapitag.co/cdn/shop/files/Deloittecard_360x.png?v=1685609669",
      "https://tapitag.co/cdn/shop/products/MicrosoftTeams-image_60_360x.png?v=1678274202",
      "https://tapitag.co/cdn/shop/products/instagramcard_360x.jpg?v=1680120786",
    ],
  };
  useEffect(() => {
    getProductData();
  }, [id]);
  const getProductData = () => {
    setProductData(obj);
    setActiveImage(obj.imageList[0]);
  };
  return (
    <Wrapper>
      <div className="mt-10 mb-32 flex justify-center md:flex-row flex-col md:gap-3  px-2">
        <div className="md:w-1/2 w-full flex md:items-start items-center justify-center flex-col">
          <div className="flex items-center h-[27rem] w-full justify-start ">
            <img
              className=" h-full w-full object-contain transition-all rounded"
              src={activeImage}
              alt=""
            />
          </div>
          <div className="flex items-center justify-start md:mt-5 mt-2 gap-4">
            {productData?.imageList?.map((image) => (
              <img
                onClick={() => setActiveImage(image)}
                className={`h-[3.5rem] w-[3.5rem] object-cover border cursor-pointer rounded transition-all ${
                  image === activeImage ? "border-[3px] border-[#3cd9de]" : ""
                }`}
                src={image}
                alt="product image"
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full md:mt-0 mt-6">
          <h1 className="text-3xl font-medium">{productData?.name}</h1>
          <h2 className="mt-4 text-2xl">Rs. {productData?.price}</h2>
          <div className="flex items-start flex-col gap-2 mt-4">
            <h2>Quantity</h2>
            <div className="flex items-center gap-7 py-2 shadow-xl rounded border px-2">
              <span
                className="text-xl cursor-pointer
              "
              >
                <AiOutlineMinus />
              </span>{" "}
              {qty}{" "}
              <span className="text-xl cursor-pointer">
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <MdOutlineLocalShipping className="text-2xl" />
              <h2>Deliverable all over the world</h2>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <MdOutlineVerified className="text-2xl" />
              <h2>Can be used both on Andriod and IOS</h2>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <MdFilterVintage className="text-2xl" />
              <h2>Longlasting and Durable</h2>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <MdWaterfallChart className="text-2xl" />
              <h2>Easy Tracking throughout the journey</h2>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <MdPowerInput className="text-2xl" />
              <h2>Powered by NFC & Tapster</h2>
            </div>
          </div>
          <div className="flex flex-col mt-8 gap-4">
            <button
              className={`w-full text-center p-[0.6rem] transition-all rounded border shadow flex items-center justify-center gap-2`}
            >
              <BsCart /> Add to Cart
            </button>
            <button className="p-3 bg-[#000000db] text-white rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Details;
