import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import { GraduationCap, Users, OctagonAlert } from "lucide-react";
import { FaPersonFalling } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const DashTabCard = ({ card }) => {
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
        <BsThreeDotsVertical className="text-[#a4a7ae] cursor-pointer" />
      </div>
      <h1 className="text-[#252b37] text-[16px] font-semibold">{card.title}</h1>
      <h1 className="text-[#252b37] text-3xl font-bold">{card.value}</h1>
      <div className="text-sm flex items-center gap-1">
        {isPositive ? (
          <FaArrowUp className="text-[#17b26a]" />
        ) : (
          <FaArrowDown className="text-[#d9534f]" />
        )}
        <span className={isPositive ? "text-[#067647]" : "text-[#d9534f]"}>
          {formattedPercentageChange}%
        </span>
        last week
      </div>
    </Link>
  );
};

export default DashTabCard;
