"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ListFilter, Search, List } from "lucide-react";
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
      {/* <Navbar /> */}
      <section className="flex flex-row ml-16 h-screen">
        {/* sidebar */}
        <SecSidebar
          title={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.3337 7.44216C18.3337 6.93731 18.3337 6.68489 18.2338 6.568C18.1472 6.46658 18.0173 6.41276 17.8843 6.42322C17.7311 6.43528 17.5526 6.61377 17.1956 6.97075L14.167 9.99935L17.1956 13.0279C17.5526 13.3849 17.7311 13.5634 17.8843 13.5755C18.0173 13.5859 18.1472 13.5321 18.2338 13.4307C18.3337 13.3138 18.3337 13.0614 18.3337 12.5565V7.44216Z"
                  stroke="#A4A7AE"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.66699 8.16602C1.66699 6.76588 1.66699 6.06582 1.93948 5.53104C2.17916 5.06063 2.56161 4.67818 3.03202 4.4385C3.5668 4.16602 4.26686 4.16602 5.66699 4.16602H10.167C11.5671 4.16602 12.2672 4.16602 12.802 4.4385C13.2724 4.67818 13.6548 5.06063 13.8945 5.53104C14.167 6.06582 14.167 6.76588 14.167 8.16602V11.8327C14.167 13.2328 14.167 13.9329 13.8945 14.4677C13.6548 14.9381 13.2724 15.3205 12.802 15.5602C12.2672 15.8327 11.5671 15.8327 10.167 15.8327H5.66699C4.26686 15.8327 3.5668 15.8327 3.03202 15.5602C2.56161 15.3205 2.17916 14.9381 1.93948 14.4677C1.66699 13.9329 1.66699 13.2328 1.66699 11.8327V8.16602Z"
                  stroke="#A4A7AE"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.3337 7.44216C18.3337 6.93731 18.3337 6.68489 18.2338 6.568C18.1472 6.46658 18.0173 6.41276 17.8843 6.42322C17.7311 6.43528 17.5526 6.61377 17.1956 6.97075L14.167 9.99935L17.1956 13.0279C17.5526 13.3849 17.7311 13.5634 17.8843 13.5755C18.0173 13.5859 18.1472 13.5321 18.2338 13.4307C18.3337 13.3138 18.3337 13.0614 18.3337 12.5565V7.44216Z"
                stroke="#535862"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.66699 8.16602C1.66699 6.76588 1.66699 6.06582 1.93948 5.53104C2.17916 5.06063 2.56161 4.67818 3.03202 4.4385C3.5668 4.16602 4.26686 4.16602 5.66699 4.16602H10.167C11.5671 4.16602 12.2672 4.16602 12.802 4.4385C13.2724 4.67818 13.6548 5.06063 13.8945 5.53104C14.167 6.06582 14.167 6.76588 14.167 8.16602V11.8327C14.167 13.2328 14.167 13.9329 13.8945 14.4677C13.6548 14.9381 13.2724 15.3205 12.802 15.5602C12.2672 15.8327 11.5671 15.8327 10.167 15.8327H5.66699C4.26686 15.8327 3.5668 15.8327 3.03202 15.5602C2.56161 15.3205 2.17916 14.9381 1.93948 14.4677C1.66699 13.9329 1.66699 13.2328 1.66699 11.8327V8.16602Z"
                stroke="#535862"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
                  <Search
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                  <Input
                    placeholder="Search"
                    className="pl-10 pr-3 py-[10px] w-full focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                  />
                </div>

                <Drop
                  icon={<ListFilter />}
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
                      <IoGridOutline size={16} />
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
