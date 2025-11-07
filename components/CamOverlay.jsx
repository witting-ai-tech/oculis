import React from "react";
import Image from "next/image";

import { zones } from "@/data/livepage";
import { XClose, SearchLg } from "@untitledui/icons";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CamOverlay = ({ setCamOverlay, card }) => {
  return (
    <div className="inset-0 z-75 fixed top-0 right-0 w-full h-full bg-[#54565a]/80 flex items-center justify-end">
      <div className="bg-white h-full w-[358px] flex flex-col gap-6 text-sm p-5">
        <div className="w-full flex flex-row items-center justify-between">
          <h3 className="text-[#181D27] font-semibold text-xl">Cameras</h3>
          <button onClick={() => setCamOverlay(false)}>
            <XClose size={20} />
          </button>
        </div>

        <div className="relative w-full max-w-[500px] text-[#717680]">
          <SearchLg
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <Input
            placeholder="Search"
            className="shadow-input pl-10 pr-3 py-[10px] w-full focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
          />
        </div>

        <div>
          <Accordion type="single" collapsible>
            {zones.map((zone, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="border border-[#D5D7DA] shadow-input my-1">
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      src="/video-cam.svg"
                      width={20}
                      height={20}
                      alt="video cam"
                    />
                    <span className="font-medium text-sm text-[#181D27]">
                      {zone.name}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border border-[#D5D7DA] shadow-input mt-1 rounded-[8px] p-1 h-[230px] overflow-y-auto">
                  <ul className="space-y-1 text-center">
                    {zone.cams.map((cam, camIdx) => (
                      <li
                        key={camIdx}
                        className={`w-full  font-medium px-2 py-[10px] hover:bg-[#F5F5F5] rounded-md cursor-pointer ${
                          zone.name.toLowerCase() === card.zone.toLowerCase()
                            ? card.title === cam
                              ? "text-[#7D48DF] bg-[#F5F5F5]"
                              : "text-[#181D27]"
                            : "text-[#181D27]"
                        }`}
                      >
                        {cam}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CamOverlay;
