import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
const Card = ({ name, price, productImage, id }) => {
  const [ishover, setIshover] = useState(false);
  return (
    <Link
      href={`/product/${id}`}
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      className="w-[17rem] relative h-[22rem] hover:border hover:shadow-xl transition-all rounded flex flex-col items-center justify-start overflow-hidden cursor-pointer "
    >
      <img
        className="w-full h-[12rem] object-cover rounded-t  "
        src={productImage}
        alt={`${name}-image`}
      />
      <div className="w-full relative px-4 mt-3">
        <h2 className="text-lg font-medium">{name}</h2>
        <h2 className="text-lg font-medium">₹ {price}</h2>
        <div className="flex items-center mt-2 text-lg ">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <button
          className={`w-full text-center ${
            ishover ? "opacity-1 translate-y-0" : "opacity-0 translate-y-20 "
          } mt-2 p-[0.4rem] transition-all rounded border shadow flex items-center justify-center gap-2`}
        >
          <BsCart /> Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default Card;
