"use client";
import React, { createContext } from "react";

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
      <section className="flex flex-row ">
        <main className="pt-4 p-8 w-full flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </section>
    </AlertsCenterContext.Provider>
  );
}
