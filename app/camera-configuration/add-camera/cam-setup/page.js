"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/Button";
import Link from "next/link";

const Page = () => {
  const router = useRouter();

  const steps = [
    {
      title: "Network Reachability",
      description: "Checking if the camera is reachable on the network",
    },
    {
      title: "Camera Authentication",
      description: "Validating login credentials and permissions",
    },
    {
      title: "Video Feed Availability",
      description: "Fetching live video stream",
    },
    {
      title: "Latency & Quality Check",
      description: "Measuring connection speed and latency",
    },
    {
      title: "AI Processing Readiness",
      description: "Testing compatibility with AI detection models",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);

          setTimeout(() => {
            router.push("/camera-configuration/add-camera/cam-setup/success");
          }, 1000);
          return prev + 1;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="h-screen flex flex-col bg-white overflow-y-auto">
      <Navbar />
      <div className="pt-16 pb-6">
        <h1 className="text-[24px] font-semibold text-center mb-3">
          Testing Camera Connection
        </h1>
        <p className="text-sm leading-[20px] font-semibold text-center text-[#717680]">
          We&apos;re checking your camera feed and network setting. <br />
          This may take a few moments.
        </p>
      </div>

      {/* Main Grid */}
      <div className="flex-1 px-40 flex flex-row justify-between gap-12 pb-12 pr-14">
        {/* Left: Stepper */}
        <div className="relative flex flex-col items-start text-xl font-semibold text-gray-700 mb-4">
          {steps.map((step, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;
            const isGrayInner = index >= 1;

            return (
              <div key={index} className="flex items-start gap-3 relative">
                {/* Step circle + vertical line */}
                <div className="flex flex-col items-center relative">
                  {/* Circle */}
                  {isCompleted ? (
                    // Completed Step
                    <div className="w-10 h-10 rounded-full bg-[#7d48df] flex items-center justify-center text-white text-2xl z-10 transition-all duration-500 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="19"
                        viewBox="0 0 21 19"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.494 1.31677L6.56066 12.8334L3.39399 9.4501C2.81066 8.9001 1.89399 8.86677 1.22732 9.33344C0.577323 9.81677 0.393989 10.6668 0.793989 11.3501L4.54399 17.4501C4.91066 18.0168 5.54399 18.3668 6.26066 18.3668C6.94399 18.3668 7.59399 18.0168 7.96066 17.4501C8.56066 16.6668 20.0107 3.01677 20.0107 3.01677C21.5107 1.48344 19.694 0.133436 18.494 1.3001V1.31677Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  ) : isActive ? (
                    // Active Step
                    <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center transition-all duration-500 ease-in-out">
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center z-10 transition-all duration-500 ease-in-out">
                        <div className="w-3 h-3 rounded-full bg-white transition-all duration-500 ease-in-out"></div>
                      </div>
                    </div>
                  ) : (
                    // Pending Step
                    <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center z-10 transition-all duration-500 ease-in-out">
                      {isGrayInner && (
                        <div className="w-3 h-3 rounded-full bg-gray-400 transition-all duration-500 ease-in-out"></div>
                      )}
                    </div>
                  )}

                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`w-[2px] min-h-[1.5rem] h-full mt-1 mb-1 transition-all duration-500 ease-in-out ${
                        index < activeStep ? "bg-[#7D48DF]" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>

                {/* Step text */}
                <div className="transition-colors duration-500 ease-in-out text-base  pb-8 pt-[6px]">
                  <h3
                    className={` font-semibold transition-colors duration-500 ease-in-out ${
                      isActive
                        ? "text-[#6127CE]"
                        : isCompleted
                        ? "text-[#414651]"
                        : "text-gray-700"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`font-normal leading-6 transition-colors duration-500 ease-in-out ${
                      isActive ? "text-[#6127CE]" : "text-[#535862]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Camera + Diagnostics */}
        <div className="w-full flex flex-col gap-6 max-w-[486px] ">
          {/* Camera preview */}
          <div className=" h-64 bg-gray-600 rounded-lg flex items-center justify-center text-white font-medium shadow-sm">
            Connecting to camera...
          </div>

          {/* Diagnostics */}
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-sm font-semibold mb-2 text-gray-900">
              Diagnostics
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex justify-between">
                <span className="font-medium">Camera model</span> Model A
              </li>
              <li className="flex justify-between">
                <span className="font-medium">IP Address</span> 19.61.1100
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Protocol</span> RTSP
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Firmware Version</span> 1.2.3
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Link
        href="/camera-configuration/add-camera"
        className="flex justify-end px-14 py-6 bg-white"
      >
        <Button className="text-[18px] text-[#414651]">Cancel</Button>
      </Link>
    </div>
  );
};

export default Page;
