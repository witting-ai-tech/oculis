"use client";
import React, { createContext } from "react";


export default function AlertsCenterLayout({ children }) {
  
  return (
      <section className="flex flex-row ">
        <main className="pt-4 p-8 w-full flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </section>
  );
}
