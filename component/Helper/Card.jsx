import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component"
const Card = ({ data }) => {
  return (
    <Link
      href={`/product/${data.id}`}
      className="w-[17rem] relative h-[22rem] hover:border hover:shadow-xl transition-all rounded flex flex-col items-center justify-start overflow-hidden cursor-pointer "
    >
      <img
        className="w-full h-[12rem] object-cover rounded-t  "
        src={data.thumbnail}
        alt={`${data.title}-image`}
      />
      <div className="w-full relative px-4 mt-3">
        <div className="w-full flex items-center justify-start">
          <h5 className="text-[10px] p-[2px] px-[1rem] rounded bg-black text-white">{data.brand}</h5>
        </div>
        <h2 className="text-lg font-medium">{data.title}</h2>
        <p className="text-xs">{data?.description?.slice(0, 60)}...</p>
        <div className="mt-1 flex items-center justify-start gap-3">
          <h2 className="text-xl font-medium">₹ {data.price - (parseInt(data.price) * (data.discountPercentage / 100)).toFixed(2)}</h2>
          <h4 className="text-sm flex items-center justify-center relative after:absolute after:content-[''] after:w-[3rem] after:h-[1px] after:bg-black ">₹{data.price}</h4>
        </div>
        <ReactStars edit={false} color={"grey"} value={data.rating} activeColor={'tomato'} classNames='text-2' />
      </div>
    </Link>
  );
};

export default Card;
