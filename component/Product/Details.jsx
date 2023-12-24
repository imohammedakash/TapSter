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
import { getProductDetails } from "@/Redux/Actions/product";
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux";
import { handleCart } from "@/Redux/Actions/cart";
import { toast } from "react-toastify";
const Details = ({ id }) => {
  const [productData, setProductData] = useState({});
  const [activeImage, setActiveImage] = useState("");
  const dispatch = useDispatch();
  let cartData = useSelector(state => state.cart.cart);
  const user = useSelector((state) => state?.user?.user)
  useEffect(() => {
    getProductData();
  }, [id]);
  const getProductData = () => {
    getProductDetails(id).then(res => {
      if (res.statusCode == 200) {
        setProductData(res.data);
        setActiveImage(res?.data?.media[0]);
      }
    })

  };

  const handleUserCart = () => {
    try {
      const existingCartData = typeof cartData === 'string' ? JSON.parse(cartData) : [];
      const existingProductIndex = existingCartData.findIndex((product) => product._id === productData._id);
      if (existingProductIndex >= 0) {
        existingCartData[existingProductIndex] = {
          ...existingCartData[existingProductIndex],
          quantity: (existingCartData[existingProductIndex]?.quantity || 1) + 1,
        };
      } else {
        existingCartData.push(productData);
      }
      dispatch(handleCart(existingCartData, user?.token)).then((res) => {
        if (res) {
          toast.success('Added to cart successfully');
        }
      }).catch((err) => {
        toast.error('Something went wrong');
      });
    } catch (error) {
      toast.error('Something went wrong');
    }
  };
  return (
    <Wrapper>
      <div className="mt-10 mb-32 flex justify-center md:flex-row flex-col md:gap-3  px-2">
        <div className="md:w-1/2 w-full flex md:items-start items-center justify-center flex-col">
          <div className="flex items-center h-[27rem] w-full justify-start ">
            <img
              loading="lazy"
              className=" h-full w-full object-contain transition-all rounded"
              src={activeImage.imageUrl}
              alt=""
            />
          </div>
          <div className="flex items-center justify-start md:mt-5 mt-2 gap-4">
            {productData?.images?.map((image) => (
              <img
                loading="lazy"
                onClick={() => setActiveImage(image)}
                className={`h-[3.5rem] w-[3.5rem] object-cover border cursor-pointer rounded transition-all ${image.imageUrl === activeImage.imageUrl ? "border-[3px] border-[#3cd9de]" : ""
                  }`}
                src={image.imageUrl}
                alt="product image"
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full md:mt-0 mt-6">
          <div className="w-full flex items-center justify-start">
            <h5 className=" p-[2px] px-[1.5rem] rounded bg-black text-white">{productData?.productType}</h5>
          </div>
          <h1 className="text-3xl font-medium mt-3">{productData?.productName}</h1>
          <h1 className="text-normal mt-2">{productData?.description}</h1>
          <div className="flex items-center justify-start mt-3 gap-3">
            <h2 className="font-medium text-3xl">₹ {productData.sellingPrice}</h2>
            <h4 className="text-sm flex items-center justify-center relative after:absolute after:content-[''] after:w-[3rem] after:h-[1px] after:bg-black ">₹{productData.price}</h4>
          </div>
          <ReactStars edit={false} color={"grey"} value={productData.rating} activeColor={'tomato'} classNames='text-2' />

          <div className="mt-6">
            <div className="mb-3 text-xl font-medium">
              Our Offers
            </div>
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
            <button onClick={handleUserCart}
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
