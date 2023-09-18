import React from "react";

const AuthInput = ({ label = 'label', Icon, ...rest }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center flex-1">
      <label htmlFor="item" className="">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center justify-center rounded-full gap-4 border py-3 px-4 w-full">
        {Icon && <Icon className="text-2xl text-[#000000c1]" />}
        <input
          {...rest}
          htmlFor="item"
          required
          placeholder={`Your ${
            label?.length > 15
              ? label?.slice(0, 15).concat("...")
              : label?.slice(0, 15)
          }`}
          className="w-full outline-none border-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default AuthInput;
