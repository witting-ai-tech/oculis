"use client";
import React, { createContext } from "react";

export default function AdminPanelLayout({ children }) {
  

  return (
      <section className="flex flex-row h-screen">
        <main className="p-8 w-full flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </section>
  );
}
