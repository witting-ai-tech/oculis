import React from "react";
import { Separator } from "@/components/ui/separator";

export const Card = ({ icon, title, children, className }) => {
  return (
    <div className={`p-6 bg-white border rounded-[8px] ${className}`}>
      <div className="flex items-center gap-2 ">
        {icon}
        <h4 className="font-semibold text-base">{title}</h4>
      </div>
      <Separator className="my-3" />
      {children}
    </div>
  );
};
