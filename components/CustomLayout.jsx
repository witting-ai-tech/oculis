import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Breadcrumbs from "./navbar/breadcrumbs";

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
