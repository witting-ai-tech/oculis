"use client";
import React, { useContext } from "react";
import { ChevronRight, LayoutAlt04 } from "@untitledui/icons";
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
        <LayoutAlt04 size={20} color="#535862"/>

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
