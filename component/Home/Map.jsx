import React from "react";
import map from "../../public/map.png";
import Image from "next/image";
const Map = () => {
  return (
    <div className="w-full mt-10">
      <Image
        draggable={false}
        src={map}
        className="w-ful h-full object-contain"
        alt="home-page-women"
      />
    </div>
  );
};

export default Map;
