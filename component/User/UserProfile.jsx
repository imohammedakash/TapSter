import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { useSelector } from "react-redux";

const UserProfile = () => {
  let data = useSelector((state) => state.user.user);
  const [userData, setUserData] = useState({});
  return (
    <Wrapper>
      <div className="my-7">
        <div className="w-full h-[15rem] border rounded-t">
          <img
            className="h-full w-full object-cover rounded-[inherit]"
            src={
              data?.coverPic
                ? data?.coverPic
                : "https://cdn.pixabay.com/photo/2015/08/31/08/33/header-915128_960_720.jpg"
            }
            alt={
              data
                ? data.firstName.toLowerCase() +
                  "-" +
                  data.lastName.toLowerCase() +
                  "-image"
                : "user-image"
            }
          />
        </div>
        <div className="h-40 w-40 rounded-full border -translate-y-1/2 translate-x-16">
          <img
            className="h-full w-full object-cover rounded-[inherit]"
            src={
              data?.profilePic
                ? data?.profilePic
                : "https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg"
            }
            alt={
              data
                ? data.firstName.toLowerCase() +
                  "-" +
                  data.lastName.toLowerCase() +
                  "-image"
                : "user-image"
            }
          />
        </div>
        <div className="mt-[-4rem] ml-8">
          <h1 className="m-0 text-3xl font-medium">
            {data?.firstName} {data?.lastName}
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserProfile;
