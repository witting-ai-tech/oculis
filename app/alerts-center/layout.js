"use client";
import React, { createContext } from "react";
import Navbar from "@/components/Navbar";
import SecSidebar from "@/components/SecSidebar";

const sidebar = [
  { id: 0, title: "All Alerts", href: "/alerts-center/all-alerts" },
  { id: 1, title: "Escalated Incidents", href: "/alerts-center/escalated-incidents" },
  { id: 2, title: "Alert Timeline", href: "/alerts-center/alert-timeline" },
];

// Create context for sharing sidebar data
export const AlertsCenterContext = createContext();

export default function AlertsCenterLayout({ children }) {
  const contextValue = {
    sidebar,
  };

  return (
    <AlertsCenterContext.Provider value={contextValue}>
      {/* <Navbar /> */}
      <section className="flex flex-row ml-16 h-screen">
        {/* sidebar */}
        <SecSidebar
          title={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 9L16.5 9M9 1.5L9 16.5M5.5 1.5H12.5C13.9001 1.5 14.6002 1.5 15.135 1.77248C15.6054 2.01217 15.9878 2.39462 16.2275 2.86502C16.5 3.3998 16.5 4.09987 16.5 5.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V5.5C1.5 4.09987 1.5 3.3998 1.77248 2.86502C2.01217 2.39462 2.39462 2.01217 2.86502 1.77248C3.3998 1.5 4.09987 1.5 5.5 1.5Z"
                  stroke="#A4A7AE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4>Alert Center</h4>
            </>
          }
          sidebar={sidebar}
        />

        <main className="p-8 w-full flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </section>
    </AlertsCenterContext.Provider>
  );
}
