"use client";
import React, { useState, useEffect } from "react";
import { alertData } from "@/data/alertData";
import { Button } from "@/components/ui/button";
import { RefreshCw, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import AlertCard from "@/components/AlertCard";
import Incident from "@/components/Incident";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { severityIcons } from "@/data/severityIcons";
import CustomLayout from "@/components/CustomLayout";
const people = [
  {
    name: "John Lee",
    role: "Supervisor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Olivia Rhye",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Jane Doe",
    role: "Manager",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

const AlertTimelinePage = () => {
  const [data, setData] = useState(alertData);
  const [open, setOpen] = React.useState(false);

  const [selectedIncident, setSelectedIncident] = useState(
    data[0].incidents[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData];
        const newIncident = {
          id: newData[0].incidents.length + 1,
          type: "Fall Incident",
          time: "2:03pm",
          location: "Assembly Area → Floor 1 → Cam C-03",
          worker: "Amit Sharma",
          workerId: "#W-001",
          severity: "Critical",
          image: "/fall_incident.png",
          timeline: [
            {
              time: "2:00:00 PM",
              description: "Worker detected entering restricted area.",
            },
            {
              time: "2:02:30 PM",
              description: "Fall detected by Cam C-03.",
            },
            {
              time: "2:03:00 PM",
              description: "Emergency alert triggered for supervisor.",
            },
          ],
        };
        newData[0].incidents.unshift(newIncident);
        return newData;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CustomLayout>
    
    <section className="h-full flex flex-col overflow-hidden">

      <section className="flex-1 flex flex-row gap-4 xl:gap-8 overflow-hidden">
        <div className="w-[45%] shrink-0 border-r-2 border-[#E4E4E7] pr-4 xl:pr-8 overflow-y-auto">
          {data.map((item, index) => (
            <div key={index} className="mb-8 flex flex-col">
              <div className="flex flex-row items-center justify-between mb-4">
                <h2 className="text-base font-semibold ">{item.date}</h2>
                {index === 0 && (
                  <div className="hidden lg:flex flex-row items-center">
                    <Button variant="outline" className="ml-2">
                      <span>
                        <RefreshCw size={20} />
                      </span>
                      Refresh
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                {item.incidents.map((incident, idx) => (
                  <AlertCard
                    key={idx}
                    incident={incident}
                    severityIcons={severityIcons}
                    selectedIncident={selectedIncident}
                    onClick={() => {
                      setSelectedIncident(data[index].incidents[idx]);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-[55%] min-h-0 overflow-y-auto transition-all duration-300 ease-in-out relative pb-16">
          <Incident
            selectedIncident={selectedIncident}
            severityIcons={severityIcons}
          />
        </div>

        <div className={`fixed right-0 bottom-0 z-10 w-[calc(55%-186px)]`}>
          <div className="control bg-white w-full flex flex-row items-center gap-3 justify-center px-12 py-[18px] mt-8 text-sm">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger
                className={cn(
                  "shadow-skew rounded-[8px] flex flex-row items-center gap-1 rounded-8px bg-[#7D48DF] text-white px-[14px] py-[10px]"
                )}
              >
                Escalate to{" "}
                {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 rounded-xl p-0 right-6"
                sideOffset={20}
              >
                {people.map((person, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 focus:bg-gray-100 cursor-pointer"
                  >
                    <div className="relative">
                      <Image
                        src={person.avatar}
                        alt={person.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1D1F23]">
                        {person.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {person.role}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>
    </section>
    </CustomLayout>
  );
};

export default AlertTimelinePage;
