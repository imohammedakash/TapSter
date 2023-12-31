import React from "react";

const Icons = ({ link, bg }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="h-16 w-16 flex items-center justify-center text-xl rounded-xl mt-5 shadow-xl bg-white border p-1"
    >
      <img src={bg} className="h-full w-full object-cover rounded-xl" loading="lazy" alt={bg} />
    </a>
  );
};

export default Icons;
