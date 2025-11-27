"use client";
import React, { useState } from "react";
import { ChevronRight, ListFilter, Search, List } from "lucide-react";
import { IoGridOutline } from "react-icons/io5";

import Drop from "@/components/Drop";
import { Input } from "@/components/ui/input";
import Monitoring from "@/components/Monitoring";
import Livepage from "@/components/Livepage";

import { heatcards, badges } from "@/data/monitoring";
import { useSessionStorage } from "@/hooks/useSessionStorage";

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
  const [view, setView] = useSessionStorage("view", true);
  const [live, setLive] = useSessionStorage("live", null);

  return (
    <section className="px-6 pt-4 pb-8 h-full overflow-y-auto">
      <main className="w-full flex-1">
        {!live ? (
          <section>
            <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27]">
              Heatmap View
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

            <div className="mt-6 flex flex-row gap-3 text-[#414651]">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="rounded-full px-3 py-1 text-sm font-medium border border-[#E9EAEB] bg-[#fafafa]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <Monitoring view={view} cards={heatcards} setLive={setLive} />
          </section>
        ) : (
          <Livepage data={data} card={live} setLive={setLive} />
        )}
      </main>
    </section>
  );
};

export default Page;
