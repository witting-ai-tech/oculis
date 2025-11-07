import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CpuChip02, Lightning01, Perspective01, VideoRecorder } from "@untitledui/icons";

const Success = ({ anotherCamera, noOfRegions }) => {
  console.error(noOfRegions);

  return (
    <section className="flex items-center justify-center py-16 ">
      <div className="shadow-skew rounded-[8px] flex flex-col items-center justify-center p-10 border ">
        <div className="flex items-center justify-center w-[100px] h-[100px] mx-auto rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#E1D3FF_0%,_#A174FF_100%)] shadow-[0_0_30px_8px_rgba(161,116,255,0.75)] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="47"
            viewBox="0 0 68 47"
            fill="none"
          >
            <path
              d="M4.83398 23.5003L24.2794 42.9457L63.1661 4.05469"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mt-15 mb-2">
          Setup Complete!
        </h2>

        {/* Description */}
        <p className="w-full text-[#535862] text-center font-medium">
          Your camera and monitoring tasks are now active
        </p>

        <div className="shadow-skew mt-5 flex w-[334px] p-5 flex-col items-center gap-[20px] rounded-lg border  ">
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-[#414651] text-sm font-semibold leading-5">
              <VideoRecorder size={20}/>
              <span className="text-sm text-gray-700">1 Camera Added</span>
            </li>

            <li className="flex items-center gap-3 text-[#414651] text-sm font-semibold leading-5">
              <Perspective01 size={20}/>
              <span className="text-sm text-gray-700">
                {noOfRegions || "5"} Regions Configured
              </span>
            </li>

            <li className="flex items-center gap-3 text-[#414651] text-sm font-semibold leading-5">
              <Lightning01 size={20}/>
              <span className="text-sm text-gray-700">3 Tasks Running</span>
            </li>

            <li className="flex items-center gap-3 text-[#414651] text-sm font-semibold leading-5">
              <CpuChip02 size={20}/>
              <span className="text-sm text-gray-700">4 Models Active</span>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-6">
          <Link href="/">
            <Button
              className="shadow-skew w-[200px] bg-[#7d48df] hover:bg-[#6037ac] text-white flex items-center gap-2"
              onClick={() => setActiveStep(0)}
            >
              Go to Dashboard
            </Button>
          </Link>
          <Button
            variant="outline"
            className="mt-2 px-[14px] py-[10px] w-[200px]"
            onClick={anotherCamera}
          >
            Add Another Camera
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Success;
