"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, FilterLines, SearchLg, List, VideoRecorder, Grid01 } from "@untitledui/icons";
import { IoGridOutline } from "react-icons/io5";

import Drop from "@/components/Drop";
import { Input } from "@/components/ui/input";
import Monitoring from "@/components/Monitoring";
import Livepage from "@/components/Livepage";

import { livecards, heatcards, badges } from "@/data/monitoring";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import SecSidebar from "@/components/SecSidebar";

const sidebar = [
  { id: 0, title: "Live Camera View" },
  // { id: 1, title: "Camera Feed" },
  { id: 2, title: "Heatmap View" },
];

const extraFilters = [
  { id: 1, title: "All Time" },
  { id: 2, title: "Gurgaon" },
  { id: 3, title: "Delhi" },
  { id: 4, title: "Noida" },
  { id: 5, title: "All" },
];

const data = [
  {
    name: "Prashanth",
    id: "#1253",
    incident: "Hardhat Missing",
    time: "2025-08-11 16:00:34",
    risk: "Low Risk",
  },
  {
    name: "Karthik",
    id: "#1125",
    incident: "No Vest",
    time: "2025-08-11 16:00:34",
    risk: "Medium Risk",
  },
  {
    name: "Prashanth",
    id: "#1253",
    incident: "Fall Incident",
    time: "2025-08-11 16:00:34",
    risk: "High Risk",
  },
];

const Page = () => {
  const [currentMonitoring, setCurrentMonitoring] = useSessionStorage(
    "currentMonitoring",
    sidebar[0]
  );
  const [view, setView] = useSessionStorage("view", true);
  const [live, setLive] = useSessionStorage("live", null);

  const handleSidebar = (item) => {
    setCurrentMonitoring(item);
    setLive(null);
  };

  return (
    <>
      <section className="flex flex-row h-screen">
        {/* sidebar */}
        <SecSidebar
          title={
            <>
              <VideoRecorder />
              <h4>Monitoring</h4>
            </>
          }
          sidebar={sidebar}
          current={currentMonitoring}
          handleSidebar={handleSidebar}
        />
        {/* main content */}
        <main className="p-8 w-full flex-1 overflow-y-auto">
          <div className="flex flex-row items-center gap-2 mb-6">
            <VideoRecorder size={20}/>
            <span>
              <ChevronRight size={16} className="text-[#D5D7DA]" />
            </span>
            <span className="text-[#535862] font-semibold text-sm">
              Monitoring
            </span>
            <span>
              <ChevronRight size={16} className="text-[#D5D7DA]" />
            </span>
            <span className="text-[#7D48DF] font-semibold text-sm">
              {currentMonitoring.title}
            </span>
          </div>
          {!live ? (
            <section>
              <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27]">
                {currentMonitoring.title}
              </h1>
              <div className="w-full flex flex-row mt-8 gap-[26px]">
                <div className="relative w-full text-[#717680]">
                  <SearchLg
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                  <Input
                    placeholder="Search"
                    className="pl-10 pr-3 py-[10px] w-full focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                  />
                </div>

                <Drop
                  icon={<FilterLines />}
                  title="Filters"
                  items={extraFilters}
                  selectedItem="Filters"
                />
                <button
                  className="w-[140px] whitespace-nowrap px-3 py-[6px] text-sm flex flex-row gap-[6px] items-center gap-2 text-[#414651] font-medium border border-[#D5D7DA] rounded-[8px]"
                  onClick={() => setView((prev) => !prev)}
                >
                  {view ? (
                    <>
                      <Grid01 size={16} />
                      Grid View
                    </>
                  ) : (
                    <>
                      <List size={16} />
                      List View
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 flex flex-row gap-3 items-center justify-center text-[#414651]">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className="rounded-full px-3 py-1 text-sm font-medium border border-[#E9EAEB] bg-[#fafafa]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {currentMonitoring.id != 1 && (
                <Monitoring
                  view={view}
                  cards={currentMonitoring.id === 0 ? livecards : heatcards}
                  setLive={setLive}
                />
              )}
            </section>
          ) : (
            <Livepage data={data} card={live} setLive={setLive} />
          )}
        </main>
      </section>
    </>
  );
};

export default Page;
