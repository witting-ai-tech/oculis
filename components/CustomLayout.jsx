import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const CustomLayout = ({ children }) => {
  return (
    <div className="custom-layout">
      <Header />
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default CustomLayout;
