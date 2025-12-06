import React from "react";
import Image from "next/image";
import Timeline from "./Timeline";
import { AlertCircle, ShieldAlert, Info, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { IoMdImage } from "react-icons/io"; 

import { snakeToTitle, formatDate } from "@/lib/utils";
import { Pill } from "@/data/pillConfig";

const AlertIncident = ({ selectedIncident, severityIcons }) => {
 
    const getSeverityStyles = (severity) => {
    let textColor, bgColor, borderColor;
    if (severity === "Critical") {
      textColor = "text-red-500";
      bgColor = "bg-[#fef3f2]";
      borderColor = "border-[#fca5a1]";
    } else if (severity === "Warning") {
      textColor = "text-yellow-500";
      bgColor = "bg-[#fffaeb]";
      borderColor = "border-[#fee396]";
    } else if (severity === "Info") {
      textColor = "text-blue-500";
      bgColor = "bg-[#ebf3ff]";
      borderColor = "border-[#a3d8ff]";
    } else if (severity === "Breach") {
      textColor = "text-orange-500";
      bgColor = "bg-[#fffaeb]";
      borderColor = "border-[#ffc078]";
    } else {
      textColor = "text-gray-500";
      bgColor = "bg-[#f9f9f9]";
      borderColor = "border-gray-300";
    }
    return { textColor, bgColor, borderColor };
  };

  const { textColor, bgColor, borderColor } = getSeverityStyles(
    snakeToTitle(selectedIncident?.severity)
  );

  return (
    <div className="h-full w-full flex flex-col items-start p-2 xl:p-4 text-sm hide-scrollbar transition-all duration-300 ease-in-out">
      <div className="flex gap-2 mb-2">
        {severityIcons[snakeToTitle(selectedIncident?.severity)]}
        <div>
          <h3 className="text-lg xl:text-[20px] font-semibold">
            {snakeToTitle(selectedIncident?.alert_type)}
          </h3>
          <div className="flex flex-col xl:flex-row items-start gap-1 xl:gap-2 mb-2 text-[#535862] text-sm xl:text-base ">
            <p className="w-full">Alert ID: <span>{selectedIncident._id}</span></p>
             
            <span className="hidden xl:block">|</span>{" "} 
            <p className="w-full">{selectedIncident?.location.area} -{">"} {selectedIncident?.location.floor} -{">"} {selectedIncident?.location.camera_label} </p>
            {/* Alert ID: FA-2043 | Assembly → Floor 2 → Cam XYZ */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-around gap-4 xl:gap-4 mb-4 p-1">
        <div className="w-[60%]">
          <p className="text-sm">Worker ID</p>
          <p className="text-sm xl:text-base text-[#252b37] font-semibold py-1">
            {selectedIncident?.worker.id}
          </p>
        </div>
        <div className="w-full">
          <p className="text-sm">Worker Name</p>
          <p className="text-sm xl:text-base text-[#252b37] font-semibold py-1">
            {selectedIncident?.worker.name}
          </p>
        </div>
        <div className="w-full">
          <p className="text-sm">Shift</p>
          <p className="text-sm xl:text-base text-[#252b37] font-semibold py-1">
            Shift {selectedIncident.worker.shift}
          </p>
        </div>
        <div className="w-full">
          <p className="text-sm">First Detected</p>
          <p className="text-sm xl:text-base text-[#252b37] font-semibold py-1">
            {formatDate(selectedIncident?.detected_at)}
          </p>
        </div>
        <div className="w-full">
          <p className="text-sm mb-1">Severity</p>
          <Pill label={snakeToTitle(selectedIncident?.severity)}/>
        </div>
      </div>
      <Separator className="w-full mb-4" />
      <div className="w-full">
        <Image
          src={selectedIncident?.media.image_url || ""}
          alt="incident"
          height={200}
          width={200}
          className="w-full rounded-lg object-cover mb-4"
        />
        <div className="w-full flex flex-row items-center justify-center gap-4 relative bottom-15 xl:bottom-20 ml-auto mr-auto">
          <button className="w-32 xl:w-35 flex flex-row gap-2 items-center justify-center bg-white rounded-lg px-3 xl:px-4 py-1 xl:py-2 text-xs xl:text-sm">
            <Video size={20} /> View Clip
          </button>
          <button className="w-32 xl:w-35 flex flex-row gap-2 items-center justify-center bg-white rounded-lg px-3 xl:px-4 py-1 xl:py-2 text-xs xl:text-sm">
            <IoMdImage size={20} /> View Image
          </button>
        </div>
      </div>
      <div className="p-4">
        {selectedIncident?.escalation_history && (
          <Timeline
            title="Incident Timeline"
            timeline={selectedIncident?.escalation_history}
          />
        )}
      </div>
    </div>
  );
};

export default AlertIncident;
