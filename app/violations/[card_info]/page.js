"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Table } from "@/components/Table";
import Incident from "@/components/Incident";
import { XIcon, ChevronsUpDown, EllipsisVertical } from "lucide-react";
import CustomLayout from "@/components/CustomLayout";
import { severityIcons } from "@/data/severityIcons";
import MultiLineChart from "@/components/charts/MultiLineChart";
import { Separator } from "@/components/ui/separator";

const columns = [
  {
    title: (
      <div className="flex items-center gap-2 cursor-pointer">
        Timestamp <ChevronsUpDown size={16} />
      </div>
    ),
    key: "date",
  },
  {
    title: (
      <div className="flex items-center gap-2 cursor-pointer">
        Worker ID <ChevronsUpDown size={16} />
      </div>
    ),
    key: "workerId",
  },
  {
    title: (
      <div className="flex items-center gap-2 cursor-pointer">
        Name <ChevronsUpDown size={16} />
      </div>
    ),
    key: "worker",
  },
  {
    title: (
      <div className="flex items-center gap-2 cursor-pointer">
        Violation <ChevronsUpDown size={16} />
      </div>
    ),
    key: "violation",
  },
  {
    title: (
      <div className="flex items-center gap-2 cursor-pointer">
        Site <ChevronsUpDown size={16} />
      </div>
    ),
    key: "location",
  },
  {
    title: (
      <div className="flex items-center gap-2 cursor-pointer">
        Zone <ChevronsUpDown size={16} />
      </div>
    ),
    key: "zone",
  },
  {
    title: (
      <div className="flex items-center gap-2 cursor-pointer">
        Floor <ChevronsUpDown size={16} />
      </div>
    ),
    key: "floor",
  },
  {
    title: (
      <div className="flex items-center gap-2 cursor-pointer">
        Camera <ChevronsUpDown size={16} />
      </div>
    ),
    key: "camera",
  },
  {
    title: "Incident",
    key: "image",
    render: (row) => (
      <Image
        src={row.image}
        alt="View"
        width={48}
        height={48}
        className="w-16 h-10 object-cover rounded"
      />
    ),
  },
];

function getRandomDate(days) {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * days);
  const randomDate = new Date();
  randomDate.setDate(today.getDate() - randomDays);
  return randomDate.toISOString().split("T")[0];
}
const names = [
  "Prashant Kumar",
  "Amit Sharma",
  "Ravi Verma",
  "Neha Gupta",
  "Anjali Singh",
  "Rahul Mehta",
  "Pooja Patel",
  "Vikram Chauhan",
  "Suman Yadav",
  "Deepak Joshi",
];
const violations = ["Hardhat", "Goggles", "Shoes", "Helmet"];
const locations = ["Gurgaon", "Noida", "Delhi", "Mumbai"];
const zones = ["Assembly Area", "Construction Area", "Warehouse"];
const severities = ["Info", "Warning", "Critical"];

const data = Array.from({ length: 11 }, (_, i) => ({
  date: getRandomDate(120) + " 10:12:03 AM",
  time: "10:12:03 AM",
  workerId: `#${i + 1}`,
  worker: names[Math.floor(Math.random() * names.length)],
  violation: violations[Math.floor(Math.random() * violations.length)],
  location: locations[Math.floor(Math.random() * locations.length)],
  zone: zones[Math.floor(Math.random() * zones.length)],
  floor: `Floor ${Math.ceil(Math.random() * 3)}`,
  camera: `C-0${Math.ceil(Math.random() * 5)}`,
  image: "/fall_incident.png",
  severity: severities[Math.floor(Math.random() * severities.length)],
  type: `PPE Violation: ${
    violations[Math.floor(Math.random() * violations.length)]
  }`,
  timeline: [
    { time: "10:00 AM", description: "Entered Area" },
    { time: "10:05 AM", description: "Started Work" },
    {
      time: "10:12 AM",
      description: `Violation Detected: ${
        violations[Math.floor(Math.random() * violations.length)]
      }`,
    },
  ],
}));

const possibleNames = [
  ["Hardhat", "Helmet", "Headgear"],
  ["Safety Goggles", "Eye Protection", "Goggles"],
  ["Safety Shoes", "Footwear", "Boots"],
];

const getRandomName = (names) =>
  names[Math.floor(Math.random() * names.length)];

// Utility: generate random int between min & max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Days
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Generate random chart data
const generateChartData = () => {
  return days.map((day) => ({
    day,
    [possibleNames[0][0]]: randomInt(1, 10),
    [possibleNames[1][0]]: randomInt(1, 10),
    [possibleNames[2][0]]: randomInt(1, 10),
  }));
};

// const chartData = generateChartData();

const Page = () => {
  const [currentItem, setCurrentItem] = useState(data[0]);
  const [overlay, setOverlay] = useState(false);

  // state management
  const [filteredData, setFilteredData] = useState(data);
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const selectedHistory = useSelector((state) => state.filters.history);
  const selectedSite = useSelector((state) => state.filters.sites);

  const handleFilter = (history, site) => {
    let filtered = data;

    if (site !== "All Sites") {
      filtered = filtered.filter((item) => item.location === site);
    }

    if (history !== "All Time") {
      const daysAgo = {
        "7d": 7,
        "30d": 30,
        "90d": 90,
      }[history];

      if (daysAgo) {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() - daysAgo);
        filtered = filtered.filter((item) => new Date(item.date) >= targetDate);
      }
    }

    setFilteredData(filtered);
    applySort(filtered, sortConfig.key, sortConfig.direction);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });
    applySort(filteredData, key, direction);
  };

  const applySort = (dataSet, key, direction) => {
    if (!key) {
      setSortedData(dataSet);
      return;
    }

    const sorted = [...dataSet].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (key === "workerId") {
        const numA = parseInt(valA.replace("#", ""));
        const numB = parseInt(valB.replace("#", ""));
        return direction === "asc" ? numA - numB : numB - numA;
      }

      return direction === "asc"
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });

    setSortedData(sorted);
  };

  useEffect(() => {
    handleFilter(selectedHistory, selectedSite);
  }, [selectedHistory, selectedSite]);

  const chartData = [
    { day: "Sunday", Hardhat: 2, Helmet: 1, Headgear: 3 },
    { day: "Monday", Hardhat: 3, Helmet: 2, Headgear: 4 },
    { day: "Tuesday", Hardhat: 3, Helmet: 2.5, Headgear: 4.5 },
    { day: "Wednesday", Hardhat: 4, Helmet: 3, Headgear: 5 },
    { day: "Thursday", Hardhat: 5, Helmet: 3.5, Headgear: 5.5 },
    { day: "Friday", Hardhat: 6, Helmet: 4, Headgear: 6 },
    { day: "Saturday", Hardhat: 6.5, Helmet: 4.5, Headgear: 6.5 },
  ];

  return (
    <CustomLayout>
      <div className="ml-16 pl-12 xl:pl-16 pr-6 xl:pr-8 z-1 pb-16">
        <div className="shadow-card relative w-full z-0 p-4 mt-2 mb-8">
          <div className="flex flex-row justify-between items-center p-2 pb-4">
            <h2 className="py-2 text-[#181d27] font-semibold">
              Incident Over Time
            </h2>
            <EllipsisVertical className="text-[#a4a7ae]" size={20} />
          </div>
          <Separator />
          <MultiLineChart
            data={chartData}
            xKey="day"
            height={400}
            series={[
              {
                key: "Hardhat",
                label: "Hardhat",
                type: "natural",
              },
              {
                key: "Helmet",
                label: "Helmet",
                type: "natural",
              },
              {
                key: "Headgear",
                label: "Headgear",
                type: "natural",
              },
            ]}
            tickFormatter={(v) => String(v).slice(0, 3)}
          />
        </div>
        <h2 className="font-semibold text-lg mb-4">Incident Logs</h2>
        <div className="border-1 border-[#e9eaeb] shadow-lg rounded-lg mt-2 p-[0.5px]">
          <Table
            columns={columns}
            data={sortedData}
            title="Alert Card"
            selectable
            setCurrentItem={setCurrentItem}
            setOverlay={setOverlay}
            handleSort={handleSort}
            sortConfig={sortConfig}
          />
        </div>
        {overlay && (
          <div className="inset-0 z-25 fixed top-0 right-0 w-full h-full bg-[#54565a]/80 flex items-center justify-end">
            <div className="bg-white h-full w-[50%] flex flex-row justify-between items-start p-2 xl:p-4 text-sm">
              <Incident
                selectedIncident={currentItem}
                severityIcons={severityIcons}
              />
              <XIcon
                className="p-2 cursor-pointer text-[#54565a]"
                size={40}
                onClick={() => setOverlay(false)}
              />
            </div>
          </div>
        )}
      </div>
    </CustomLayout>
  );
};

export default Page;
