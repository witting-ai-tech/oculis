import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <path
                  d="M18.3332 4.44216C18.3332 3.93731 18.3332 3.68489 18.2333 3.568C18.1467 3.46658 18.0168 3.41276 17.8838 3.42322C17.7306 3.43528 17.5521 3.61377 17.1951 3.97075L14.1665 6.99935L17.1951 10.0279C17.5521 10.3849 17.7306 10.5634 17.8838 10.5755C18.0168 10.5859 18.1467 10.5321 18.2333 10.4307C18.3332 10.3138 18.3332 10.0614 18.3332 9.55654V4.44216Z"
                  stroke="#414651"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.6665 5.16602C1.6665 3.76588 1.6665 3.06582 1.93899 2.53104C2.17867 2.06063 2.56112 1.67818 3.03153 1.4385C3.56631 1.16602 4.26637 1.16602 5.6665 1.16602H10.1665C11.5666 1.16602 12.2667 1.16602 12.8015 1.4385C13.2719 1.67818 13.6543 2.06063 13.894 2.53104C14.1665 3.06582 14.1665 3.76588 14.1665 5.16602V8.83268C14.1665 10.2328 14.1665 10.9329 13.894 11.4677C13.6543 11.9381 13.2719 12.3205 12.8015 12.5602C12.2667 12.8327 11.5666 12.8327 10.1665 12.8327H5.6665C4.26637 12.8327 3.56631 12.8327 3.03153 12.5602C2.56112 12.3205 2.17867 11.9381 1.93899 11.4677C1.6665 10.9329 1.6665 10.2328 1.6665 8.83268V5.16602Z"
                  stroke="#414651"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-gray-700">1 Camera Added</span>
            </li>

            <li className="flex items-center gap-3 text-[#414651] text-sm font-semibold leading-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.8333 6.5V11.5M3.16667 4.83333V13.1667M13.1667 4.59524L4.83333 3.40476M13.1667 13.4048L4.83333 14.5952M2.83333 4.83333H3.5C3.96671 4.83333 4.20007 4.83333 4.37833 4.74251C4.53513 4.66261 4.66261 4.53513 4.74251 4.37833C4.83333 4.20007 4.83333 3.96671 4.83333 3.5V2.83333C4.83333 2.36662 4.83333 2.13327 4.74251 1.95501C4.66261 1.79821 4.53513 1.67072 4.37833 1.59083C4.20007 1.5 3.96671 1.5 3.5 1.5H2.83333C2.36662 1.5 2.13327 1.5 1.95501 1.59083C1.79821 1.67072 1.67072 1.79821 1.59083 1.95501C1.5 2.13327 1.5 2.36662 1.5 2.83333V3.5C1.5 3.96671 1.5 4.20007 1.59083 4.37833C1.67072 4.53513 1.79821 4.66261 1.95501 4.74251C2.13327 4.83333 2.36662 4.83333 2.83333 4.83333ZM2.83333 16.5H3.5C3.96671 16.5 4.20007 16.5 4.37833 16.4092C4.53513 16.3293 4.66261 16.2018 4.74251 16.045C4.83333 15.8667 4.83333 15.6334 4.83333 15.1667V14.5C4.83333 14.0333 4.83333 13.7999 4.74251 13.6217C4.66261 13.4649 4.53513 13.3374 4.37833 13.2575C4.20007 13.1667 3.96671 13.1667 3.5 13.1667H2.83333C2.36662 13.1667 2.13327 13.1667 1.95501 13.2575C1.79821 13.3374 1.67072 13.4649 1.59083 13.6217C1.5 13.7999 1.5 14.0333 1.5 14.5V15.1667C1.5 15.6334 1.5 15.8667 1.59083 16.045C1.67072 16.2018 1.79821 16.3293 1.95501 16.4092C2.13327 16.5 2.36662 16.5 2.83333 16.5ZM14.5 6.5H15.1667C15.6334 6.5 15.8667 6.5 16.045 6.40917C16.2018 6.32928 16.3293 6.20179 16.4092 6.04499C16.5 5.86673 16.5 5.63338 16.5 5.16667V4.5C16.5 4.03329 16.5 3.79993 16.4092 3.62167C16.3293 3.46487 16.2018 3.33739 16.045 3.25749C15.8667 3.16667 15.6334 3.16667 15.1667 3.16667H14.5C14.0333 3.16667 13.7999 3.16667 13.6217 3.25749C13.4649 3.33739 13.3374 3.46487 13.2575 3.62167C13.1667 3.79993 13.1667 4.03329 13.1667 4.5V5.16667C13.1667 5.63338 13.1667 5.86673 13.2575 6.04499C13.3374 6.20179 13.4649 6.32928 13.6217 6.40917C13.7999 6.5 14.0333 6.5 14.5 6.5ZM14.5 14.8333H15.1667C15.6334 14.8333 15.8667 14.8333 16.045 14.7425C16.2018 14.6626 16.3293 14.5351 16.4092 14.3783C16.5 14.2001 16.5 13.9667 16.5 13.5V12.8333C16.5 12.3666 16.5 12.1333 16.4092 11.955C16.3293 11.7982 16.2018 11.6707 16.045 11.5908C15.8667 11.5 15.6334 11.5 15.1667 11.5H14.5C14.0333 11.5 13.7999 11.5 13.6217 11.5908C13.4649 11.6707 13.3374 11.7982 13.2575 11.955C13.1667 12.1333 13.1667 12.3666 13.1667 12.8333V13.5C13.1667 13.9667 13.1667 14.2001 13.2575 14.3783C13.3374 14.5351 13.4649 14.6626 13.6217 14.7425C13.7999 14.8333 14.0333 14.8333 14.5 14.8333Z"
                  stroke="#414651"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-gray-700">
                {noOfRegions || "5"} Regions Configured
              </span>
            </li>

            <li className="flex items-center gap-3 text-[#414651] text-sm font-semibold leading-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M9.83354 1.66602L2.41142 10.5726C2.12075 10.9214 1.97541 11.0958 1.97319 11.2431C1.97126 11.3711 2.02832 11.4929 2.12792 11.5734C2.2425 11.666 2.46952 11.666 2.92357 11.666H9.00021L8.16688 18.3327L15.589 9.42614C15.8797 9.07733 16.025 8.90293 16.0272 8.75563C16.0292 8.62758 15.9721 8.50576 15.8725 8.42527C15.7579 8.33268 15.5309 8.33268 15.0768 8.33268H9.00021L9.83354 1.66602Z"
                  stroke="#414651"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-gray-700">3 Tasks Running</span>
            </li>

            <li className="flex items-center gap-3 text-[#414651] text-sm font-semibold leading-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.49984 1.66602V4.16602M12.4998 1.66602V4.16602M7.49984 15.8327V18.3327M12.4998 15.8327V18.3327M15.8332 7.49935H18.3332M15.8332 11.666H18.3332M1.6665 7.49935H4.1665M1.6665 11.666H4.1665M8.1665 15.8327H11.8332C13.2333 15.8327 13.9334 15.8327 14.4681 15.5602C14.9386 15.3205 15.321 14.9381 15.5607 14.4677C15.8332 13.9329 15.8332 13.2328 15.8332 11.8327V8.16602C15.8332 6.76588 15.8332 6.06582 15.5607 5.53104C15.321 5.06063 14.9386 4.67818 14.4681 4.4385C13.9334 4.16602 13.2333 4.16602 11.8332 4.16602H8.1665C6.76637 4.16602 6.06631 4.16602 5.53153 4.4385C5.06112 4.67818 4.67867 5.06063 4.43899 5.53104C4.1665 6.06582 4.1665 6.76588 4.1665 8.16602V11.8327C4.1665 13.2328 4.1665 13.9329 4.43899 14.4677C4.67867 14.9381 5.06112 15.3205 5.53153 15.5602C6.06631 15.8327 6.76637 15.8327 8.1665 15.8327Z"
                  stroke="#414651"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
