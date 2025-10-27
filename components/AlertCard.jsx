import React, { useEffect } from "react";

const AlertCard = ({ onClick, incident, severityIcons, selectedIncident }) => {
  const isSelected = incident === selectedIncident;

  return (
    <div
      className={`p-3 lg:p-4 tracking-wide text-xs xl:text-sm flex flex-row items-start gap-2 xl:gap-4 cursor-pointer border-b border-b-[#E9EAEB] border-t-0 border-r-0 border-l-4  hover:bg-[#fafafa]
    ${
      isSelected
        ? "border-l-[#414651] bg-[#fafafa]"
        : "border-l-transparent bg-white"
    }`}
      onClick={onClick}
    >
      <div>{severityIcons[incident.severity]}</div>
      <div>
        <h2 className="text-sm xl:text-base font-semibold text-[#444953]">
          {incident.type}
        </h2>
        <p className="mt-2">
          {incident.time.toUpperCase()} • {incident.location}
        </p>
        <p>
          Worker: {incident.worker} ({incident.workerId})
        </p>
      </div>
    </div>
  );
};

export default AlertCard;
