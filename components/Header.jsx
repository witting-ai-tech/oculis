"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import Drop from "./Drop";
import {
  ListFilter,
  ChevronDown,
  MapPin,
  History,
  RefreshCw,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { setHistory, setSites } from "../app/store/slices/filtersSlice"; // adjust path
import { Button } from "@/components/ui/button";

const history = [
  { id: 1, title: "All Time" },
  { id: 2, title: "7d" },
  { id: 3, title: "30d" },
  { id: 4, title: "90d" },
];
const sites = [
  { id: 1, title: "All Sites" },
  { id: 2, title: "Gurgaon" },
  { id: 3, title: "Delhi" },
  { id: 4, title: "Noida" },
];
const extraFilters = [
  { id: 1, title: "All Time" },
  { id: 2, title: "Gurgaon" },
  { id: 3, title: "Delhi" },
  { id: 4, title: "Noida" },
  { id: 5, title: "All" },
];

const Header = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  const selectedHistory = useSelector((state) => state.filters.history);
  const selectedSite = useSelector((state) => state.filters.sites);
  const [showFilters, setShowFilters] = useState(true);
  const [showHistory, setShowHistory] = useState(true);
  const [showSites, setShowSites] = useState(true);
  const [showRefresh, setShowRefresh] = useState(true);

  const handleHistoryChange = (value) => {
    dispatch(setHistory(value));
    console.log("Updated Redux state (history):", selectedHistory);
  };

  const handleSiteChange = (value) => {
    dispatch(setSites(value));
    const updatedSite = useSelector((state) => state.filters?.sites);
    console.log("Updated Redux state (sites):", updatedSite);
  };

  const getTitle = (path) => {
    if (path === "/") return "Dashboard";
    else if (path === "/ppe-violations") return "PPE Violations";
    else if (path === "/violations/ppe-violations") return "PPE Violations";
    else if (path === "/violations/total-ppe-violations")
      return "Total PPE Violations";
    return (
      path
        .substring(path.lastIndexOf("/") + 1)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()) || "Home"
    );
  };
  const visibility = (path) => {
    console.log(path);
    if (path === "/alerts-center") {
      setShowFilters(true);
      setShowHistory(false);
      setShowSites(false);
      setShowRefresh(true);
    } else if (path == "/users-and-roles") {
      setShowFilters(true);
      setShowHistory(true);
      setShowSites(false);
      setShowRefresh(false);
    } else {
      setShowFilters(true);
      setShowHistory(true);
      setShowSites(true);
      setShowRefresh(false);
    }
  };

  React.useEffect(() => {
    visibility(path);
  }, [path]);
  return (
    <div className="flex flex-row justify-between p-8 pl-8">
      <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27]">
        {getTitle(path)}
      </h1>
      <div className="flex flex-row items-center gap-4">
        {showHistory && (
          <Drop
            icon={<History />}
            backIcon={<ChevronDown />}
            title="History"
            items={history}
            selectedItem={selectedHistory}
            onSelect={(item) => handleHistoryChange(item.title)}
          />
        )}

        {showSites && (
          <Drop
            icon={<MapPin />}
            backIcon={<ChevronDown />}
            title="Sites"
            items={sites}
            selectedItem={selectedSite}
            onSelect={(item) => handleSiteChange(item.title)}
          />
        )}

        {showFilters && (
          <Drop
            icon={<ListFilter />}
            title="Filters"
            items={extraFilters}
            selectedItem="Filters"
          />
        )}
        {showRefresh && (
          <Button variant="outline" className="ml-2 lg:hidden">
            <span>
              <RefreshCw size={20} />
            </span>
            Refresh
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
