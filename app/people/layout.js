"use client"
import React from "react";

export default function PeopleLayout({children}){

    return (
        <section className="h-full overflow-y-auto">
        <main className="w-full flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </section>
    );
}