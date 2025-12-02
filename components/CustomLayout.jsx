import React from "react";
import Header from "./Header";

const CustomLayout = ({ children }) => {
  return (
    <div className="custom-layout px-8">
      <Header />
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default CustomLayout;
