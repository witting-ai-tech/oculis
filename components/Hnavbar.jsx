import React from "react";

const Hnavbar = ({ menu, currentTab, setCurrentTab }) => {
  return (
    <nav className="w-full flex flex-row items-center  justify-between bg-[#fafafa] text-[#717680] border-1 border-[##E9EAEB] rounded-lg p-1">
      {menu.map((item, index) => (
        <button
          key={index}
          className={`w-full truncate-1-lines font-semibold text-xs lg:text-sm text-center py-2 px-3 lg:px-4 transition-all duration-200 ${
            currentTab === index
              ? "bg-[#fff] text-[#414651] rounded-lg shadow-sm"
              : "rounded-lg"
          }`}
          onClick={() => setCurrentTab(index)}
          aria-current={currentTab === index ? "page" : undefined}
          aria-label={`Navigate to ${item.title}`}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
};

export default Hnavbar;
