"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--Base-White,#FFF)] px-4">
        <div className="flex items-center justify-center w-[139px] h-[139px] mx-auto rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#E1D3FF_0%,_#A174FF_100%)] shadow-[0_0_30px_8px_rgba(161,116,255,0.75)] ">
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
        <h1 className="text-xl font-semibold mt-15 mb-2">
          Camera Connected Successfully
        </h1>

        {/* Description */}
        <p className="w-full text-[#535862] text-center font-medium">
          The live feed is ready. You can now proceed to <br /> region setup
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {/* <button
            className="flex items-center justify-center p-[12px_18px] gap-[6px] rounded-[8px] border border-gray-300 bg-white shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,_0_-2px_0_0_rgba(10,13,18,0.05)_inset,_0_1px_2px_0_rgba(16,24,40,0.05)] text-[color:var(--Gray-700,#414651)] font-inter text-base font-semibold leading-6
"
          >
            Cancel
          </button> */}
          <Link href="/camera-configuration/add-camera">
            <button className="flex items-center justify-center gap-[6px] px-4 py-[10px] rounded-lg border-2 border-[color:var(--Gradient-skeuemorphic-gradient-border,rgba(255,255,255,0.12))] bg-[var(--Brand-600,#7D48DF)] text-[color:var(--Base-White,#FFF)] shadow-[inset_0_0_0_1px_rgba(10,13,18,0.18),inset_0_-2px_0_0_rgba(10,13,18,0.05),0_1px_2px_0_rgba(16,24,40,0.05)] text-base font-semibold leading-6 font-inter">
              Continue to Region Setup
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
