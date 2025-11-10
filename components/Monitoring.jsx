import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
const Monitoring = ({ view, cards, setLive }) => {
  return (
    <div
      className={`grid gap-3 mt-10 transition-[grid-template-columns] duration-300 ease-in ${
        view ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
      }`}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => setLive(card)}
          className={`w-full overflow-hidden cursor-pointer ${
            view
              ? "rounded-[10px]"
              : "rounded-[8px] border-[0.5px] border-[#D5D7DA] grid grid-cols-5 place-items-center pl-2 pr-3 py-2"
          }`}
        >
          <Image
            src={card.imgsrc}
            width={394}
            height={192}
            alt="title"
            className={`place-self-start ${
              view ? "w-[394px] h-[192px]" : "w-[140px] h-auto"
            }`}
          />

          <h5 className="text-[18px] font-semibold text-[#252B37] mt-1 ">
            {card.title}
          </h5>
          <p className="text-sm font-medium text-[#535862]">{card.zone}</p>
          {!view && (
            <p className="text-sm font-medium text-[#717680]">
              {card.timestamp}
            </p>
          )}
          {!view && (
            <div className="w-full flex items-center justify-end">
              <button className="w-fit whitespace-nowrap px-3 py-[6px] text-sm flex flex-row gap-[6px] items-center gap-2 text-[#414651] font-medium border border-[#D5D7DA] rounded-[8px]">
                <Eye size={20} />
                View Live
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Monitoring;
