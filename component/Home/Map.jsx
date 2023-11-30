import React from "react";
import map from "../../public/map.png";
import Image from "next/image";
const Map = () => {
  return (
    <div className="w-full mt-10">
      <h1 className="w-full text-center text-5xl font-medium">Where are we?</h1>
      <Image
        draggable={false}
        src={map}
        className="w-full h-full object-cover"
        alt="home-page-women"
      />
    </div>
  );
};

export default Map;
