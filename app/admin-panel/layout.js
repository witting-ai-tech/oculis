"use client";
import React, { createContext } from "react";

const sidebar = [
  { id: 0, title: "Organization Settings", href: "/admin-panel/settings" },
  { id: 1, title: "Connectors", href: "/admin-panel/connectors" },
  { id: 2, title: "Employees", href: "/admin-panel/employees" },
  { id: 3, title: "Camera Setup", href: "/camera-configuration/add-camera" },
];

// Create context for sharing sidebar data
export const AdminPanelContext = createContext();

export default function AdminPanelLayout({ children }) {
  const contextValue = {
    sidebar,
  };

  return (
    <AdminPanelContext.Provider value={contextValue}>
      <section className="flex flex-row h-screen">
        <main className="p-8 w-full flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </section>
    </AdminPanelContext.Provider>
  );
}
