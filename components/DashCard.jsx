"use client";

import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import LineChartSimple from "./charts/LineSimpleChart";
import Image from "next/image";
import { ArrowDown, ArrowUp, DotsVertical } from "@untitledui/icons";

// helpers
function getRandomInt(min = 1, max = 20) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function generateWeekData(seriesKey = "Hardhat") {
  return days.map((day) => ({ day, [seriesKey]: getRandomInt() }));
}

const DashCard = ({card, type="dash"}) => {
  if(type==="dash"){
    const change = Number(card.percentageChange);
    const isPositive = change > 0;
    const formattedPercentageChange = Math.abs(change);

    // Generate random data on the client to avoid SSR mismatch
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
      setChartData(generateWeekData("Hardhat"));
    }, []);

    const href = `/violations/${encodeURIComponent(
      card.title.replace(/\s+/g, "-").toLowerCase()
    )}`;

  return (
    <Link
      href={href}
      aria-label={`${card.title} details`}
      className="shadow-card border p-4 flex flex-col gap-4 w-full  h-fit cursor-pointer mt-2"
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[#252b37] text-md xl:text-lg font-semibold">
          {card.title}
        </h1>
        <DotsVertical className="text-[#a4a7ae]" />
      </div>

      <h1 className="text-[#252b37] text-2xl xl:text-3xl font-bold">{card.value}</h1>

      <div className="text-sm flex flex-row justify-between items-center gap-1">
        <div className="flex flex-col lg:flex-row items-center gap-1">
          <div className = "flex flex-row gap-1 items-center">
            {isPositive ? (
              <ArrowUp className="text-[#17b26a]" />
            ) : (
              <ArrowDown className="text-[#d9534f]" />
            )}
            <span className={isPositive ? "text-[#067647]" : "text-[#d9534f]"}>
              {formattedPercentageChange}%
            </span>
          </div>
          <span className="text-[#717680]">last week</span>
        </div>

        <div className="w-[150px] h-[40px]">
          <LineChartSimple
            data={chartData}
            xKey="day"
            yKey="Hardhat"
            colorVar={isPositive ? "#17b26a" : "#FF0000"}
          />
        </div>
      </div>
    </Link>
  );
  }

  if(type==="tab"){
    const isPositive = parseInt(card?.percentageChange, 10) > 0;
    const formattedPercentageChange = Math.abs(card?.percentageChange);
    return (
      <Link
        href={`/violations/${card.title.replace(/\s+/g, "-").toLowerCase()}`}
        className="shadow-card p-5 flex flex-col gap-4 w-full h-fit cursor-pointer mt-2"
      >
        <div className="flex flex-row justify-between items-center">
          <Image
            src={card.icon}
            alt={card.title}
            width={44}
            height={44}
            className="w-[44px] h-[44px]"
          />
          <DotsVertical className="text-[#a4a7ae] cursor-pointer" />
        </div>
        <h1 className="text-[#252b37] text-[16px] font-semibold">{card.title}</h1>
        <h1 className="text-[#252b37] text-3xl font-bold">{card.value}</h1>
        <div className="text-sm flex items-center gap-1">
          {isPositive ? (
            <ArrowUp className="text-[#17b26a]" />
          ) : (
            <ArrowDown className="text-[#d9534f]" />
          )}
          <span className={isPositive ? "text-[#067647]" : "text-[#d9534f]"}>
            {formattedPercentageChange}%
          </span>
          last week
        </div>
      </Link>
    );
  }

  return null;
};

export default DashCard;
