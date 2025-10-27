import React from "react";
import { cn } from "@/lib/utils";

const Timeline = ({ title, timeline, direction = "row" }) => {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-base text-[#252b37] font-semibold mb-6">{title}</h2>
      )}

      <div className="relative pl-6">
        <div className="absolute top-2 left-[8.5px] bottom-2 w-[2px] bg-[#e9eaeb]" />

        {timeline.map((item, index) => (
          <div key={index} className="mb-6 last:mb-0 relative">
            <div className="absolute left-[-25px] -top-0.25 h-[20px] w-[20px] rounded-full p-1 bg-white  flex items-center justify-center z-1">
              <div className="w-full h-full rounded-full bg-[#e9eaeb] z-2" />
            </div>

            <div
              className={`font-medium flex flex-${direction} gap-2 text-[#414651] hover:text-[#181d27] transition-colors duration-100`}
            >
              <div className="text-[#535862]">{item.time}</div>
              <div className="text-[#414651]">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
