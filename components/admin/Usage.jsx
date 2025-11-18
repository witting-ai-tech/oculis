import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "./../Button";

const Usage = () => {
  return (
    <section>
      <div className="w-full flex flex-row gap-6">
        <div className="w-full my-1 p-[14px] shadow-xs border border-[#D5D7DA] rounded-[8px]">
          <h3 className="text-[18px] text-[#181D27] font-semibold">
            Active Resources
          </h3>
          <p className="text-sm text-[#535862]">
            Current surveillance infrastructure
          </p>

          <div className="border border-[#D5D7DA] rounded-[8px] p-3 mt-8">
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="text-[#181D27] font-semibold">Active Cameras</h3>
                <p className="text-xs text-[#535862]">Currently Monitoring </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[#7D48DF] font-bold">24</p>
                <button className="text-xs font-semibold border border-[#D5D7DA] shadow-xs rounded-[4px] mt-[6px] px-2 py-1 flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M5.04688 14L14.0469 5M14.0469 5H8.04688M14.0469 5V11"
                      stroke="#535862"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  View Cameras
                </button>
              </div>
            </div>
          </div>
          <div className="border border-[#D5D7DA] rounded-[8px] p-3 mt-5">
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="text-[#181D27] font-semibold">
                  Configured Zones
                </h3>
                <p className="text-xs text-[#535862]">Surveillance areas </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[#7D48DF] font-bold">8</p>
                <button className="font-semibold text-xs border border-[#D5D7DA] shadow-xs rounded-[4px] mt-[6px] px-2 py-1 flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M5.04688 14L14.0469 5M14.0469 5H8.04688M14.0469 5V11"
                      stroke="#535862"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  View Cameras
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-1 p-[14px] shadow-xs border border-[#D5D7DA] rounded-[8px]">
          <h3 className="text-[18px] text-[#181D27] font-semibold">
            Storage Usage
          </h3>
          <p className="text-sm text-[#535862]">
            Current storage capacity and utilization
          </p>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-[18px] font-semibold">812 GB</span>
            <p className="text-[#535862] text-sm">of 1000 GB used</p>
            <div className="mt-[14px] w-full flex flex-row items-center justify-center gap-3 max-w-[320px]">
              <Progress value={81} />
              <span className="text-sm text-medium text-[#414651]">81%</span>
            </div>
          </div>
        </div>
      </div>

      {/* subscription */}
      <div className="shadow-xs w-full mt-6 p-[14px] shadow-xs border border-[#D5D7DA] rounded-[8px]">
        <h3 className="text-[18px] text-[#181D27] font-semibold">
          Subscription Plan
        </h3>
        <p className="text-sm text-[#535862]">
          Current plan details and billing information
        </p>

        <div className="mt-3 flex flex-row items-center justify-between w-full my-1 p-[14px] shadow-xs border border-[#966AE7] rounded-[8px] bg-[#F8F5FF]">
          <div>
            <h3 className="text-[18px] text-[#181D27] font-semibold">
              Enterprise Plan
            </h3>
            <p className="text-sm text-[#535862]">
              Advanced surveillance capabilities with unlimited cameras
            </p>
            <p className="text-sm text-[#535862]">
              Renewal: March 15, 2026 •Annual Billing{" "}
            </p>
          </div>
          <Button className="bg-purple-700 text-white">Upgrade Plan</Button>
        </div>
      </div>
    </section>
  );
};

export default Usage;
