"use client";
import React, { useContext } from "react";
import { ChevronRight } from "lucide-react";
import { AdminPanelContext } from "../layout";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import General from "@/components/admin/General";
import Compliance from "@/components/admin/Compliance";
import Usage from "@/components/admin/Usage";
import System from "@/components/admin/System";

const tabs = [
  { id: 0, title: "General" },
  { id: 1, title: "Compliance & Data" },
  { id: 2, title: "Usage & Monitoring" },
  { id: 3, title: "System" },
];

const tabComponents = {
  0: <General />,
  1: <Compliance />,
  2: <Usage />,
  3: <System />,
};

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useSessionStorage("activeTab", tabs[0]);

  return (
    <>
      <div className="flex flex-row items-center gap-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9 9L16.5 9M9 1.5L9 16.5M5.5 1.5H12.5C13.9001 1.5 14.6002 1.5 15.135 1.77248C15.6054 2.01217 15.9878 2.39462 16.2275 2.86502C16.5 3.3998 16.5 4.09987 16.5 5.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V5.5C1.5 4.09987 1.5 3.3998 1.77248 2.86502C2.01217 2.39462 2.39462 2.01217 2.86502 1.77248C3.3998 1.5 4.09987 1.5 5.5 1.5Z"
            stroke="#535862"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>
          <ChevronRight size={16} className="text-[#D5D7DA]" />
        </span>
        <span className="text-[#535862] font-semibold text-sm">
          Admin Panel
        </span>
        <span>
          <ChevronRight size={16} className="text-[#D5D7DA]" />
        </span>
        <span className="text-[#7D48DF] font-semibold text-sm">
          Organization Settings
        </span>
      </div>

      <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27] mb-6">
        Organization Settings
      </h1>

      <>
        <nav className="flex flex-row  my-8">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`text-sm min-[1025px]:text-base text-center px-6 cursor-pointer font-semibold pb-1 transition-colors ${
                tab.id === activeTab.id
                  ? "text-[#7D48DF] border-b-4 border-[#7D48DF]"
                  : "text-[#535862] border-b-4 border-[#E9EAEB] hover:text-[#7D48DF]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </div>
          ))}
        </nav>

        <section>{tabComponents[activeTab.id]}</section>
      </>
    </>
  );
};

export default SettingsPage;
