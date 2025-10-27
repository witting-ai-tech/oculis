import React from "react";

export const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      type={type}
      className={`btn-shadow group min-w-fit h-fit font-semibold rounded-lg px-[14px] py-[10px] text-sm  flex flex-row gap-2 items-center justify-center  transition-all duration-200 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
