"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronRight, SearchLg, ChevronUp, ChevronDown, FilterLines, DotsVertical, LayoutAlt04 } from "@untitledui/icons";

import {
  alertsTableData,
  timeFilterOptions,
  severityOptions,
  assignedToOptions,
  statusOptions,
  extraFilters,
} from "@/components/alerts/escalated.js";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/Button";
import Drop from "@/components/Drop";
import { Table } from "@/components/Table";
import SelectComp from "@/components/SelectComp";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const alertColumns = [
  { title: "Alert Type", key: "alertType", width: "30%" },
  {
    title: "Severity",
    key: "severity",
    render: (item) => {
      const severityColors = {
        Critical: "text-[#B42318] ",
        High: "text-[#F04438] ",
        Medium: "text-[#F79009] ",
        Low: "text-green-600 ",
      };
      return (
        <span className={severityColors[item.severity] || ""}>
          {item.severity}
        </span>
      );
    },
  },
  { title: "Worker", key: "worker" },
  { title: "Time Detected", key: "timeDetected" },
  {
    title: "Status",
    key: "status",
    render: (camera) => {
      let textColor = "";
      let bgColor = "";
      let borderColor = "";

      if (camera.status === "Acknowledged") {
        textColor = "text-[#067647]";
        bgColor = "bg-[#ECFDF3]";
        borderColor = "border-[#aaefc6]";
      } else if (camera.status === "Pending") {
        textColor = "text-[#b54708]";
        bgColor = "bg-[#FFFAEB]";
        borderColor = "border-[#fee396]";
      } else if (camera.status === "Dismissed") {
        textColor = "text-[#414651]";
        bgColor = "bg-[#fafafa]";
        borderColor = "border-gray-500";
      } else {
        textColor = "text-[#B42318]";
        bgColor = "bg-[##FEF3F2]";
        borderColor = "border-[#fca5a1]";
      }
      return (
        <p
          className={`h-[22px] text-xs w-fit ${bgColor} ${borderColor} ${textColor} font-medium rounded-full border-1 text-center px-[8px] py-[2px] flex items-center justify-center`}
        >
          {camera.status}
        </p>
      );
    },
  },
  { title: "Assigned to", key: "assignedTo" },
  {
    title: "Actions",
    key: "action",
    render: (camera) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded-md border-2 hover:border-[#9e77ed] w-fit p-1">
              <DotsVertical size={20} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Acknowledge</DropdownMenuItem>
            <DropdownMenuItem>Escalate to</DropdownMenuItem>
            <DropdownMenuItem>Snooze</DropdownMenuItem>
            <DropdownMenuItem>Dismiss</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const AllAlertsPage = () => {
  // master alerts with ids for stable updates
  const [alerts, setAlerts] = useState(() =>
    alertsTableData.map((a, i) => ({ ...a, id: i + 1 }))
  );

  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAssignedTo, setSelectedAssignedTo] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("");

  const [filteredAlertsData, setFilteredAlertsData] = useState(alerts);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [open, setOpen] = useState(false);

  const applyFilters = useCallback(() => {
    let filtered = alerts;

    if (selectedStatus && selectedStatus !== "All") {
      filtered = filtered.filter((alert) => alert.status === selectedStatus);
    }
    if (selectedAssignedTo && selectedAssignedTo !== "Anyone") {
      filtered = filtered.filter(
        (alert) => alert.assignedTo === selectedAssignedTo
      );
    }
    if (selectedSeverity && selectedSeverity !== "All") {
      filtered = filtered.filter(
        (alert) => alert.severity === selectedSeverity
      );
    }
    // selectedTimeFilter placeholder for future when timestamps exist

    setFilteredAlertsData(filtered);
  }, [alerts, selectedAssignedTo, selectedSeverity, selectedStatus]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <>
      <div className="flex flex-row items-center gap-2 mb-6">
        <LayoutAlt04 size={20}/>
        <span>
          <ChevronRight size={16} className="text-[#D5D7DA]" />
        </span>
        <span className="text-[#535862] font-semibold text-sm">
          Alert Center
        </span>
        <span>
          <ChevronRight size={16} className="text-[#D5D7DA]" />
        </span>
        <span className="text-[#7D48DF] font-semibold text-sm">All Alerts</span>
      </div>

      <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27] mb-6">
        All Alerts
      </h1>

      <section className="mt-6 flex-1 min-h-0">
        <div className="w-full flex flex-col gap-4 pb-4">
          <div className="w-full flex flex-row flex-wrap justify-between items-center gap-3">
            <div className="flex flex-row items-center gap-3">
              {/* Status Filter */}
              <SelectComp
                data={{
                  options: statusOptions.map((o) => ({
                    value: o.title,
                    label: o.title,
                  })),
                }}
                value={selectedStatus}
                onChange={(val) => setSelectedStatus(val)}
                placeholder="Status"
              />

              {/* Assigned to Filter */}
              <SelectComp
                data={{
                  options: assignedToOptions.map((o) => ({
                    value: o.title,
                    label: o.title,
                  })),
                }}
                value={selectedAssignedTo}
                onChange={(val) => setSelectedAssignedTo(val)}
                placeholder="Assigned to"
              />

              {/* Severity Filter */}
              <SelectComp
                data={{
                  options: severityOptions.map((o) => ({
                    value: o.title,
                    label: o.title,
                  })),
                }}
                value={selectedSeverity}
                onChange={(val) => setSelectedSeverity(val)}
                placeholder="Severity"
              />

              {/* Time Filter */}
              <SelectComp
                data={{
                  options: timeFilterOptions.map((o) => ({
                    value: o.title,
                    label: o.title,
                  })),
                }}
                value={selectedTimeFilter}
                onChange={(val) => setSelectedTimeFilter(val)}
                placeholder="Time"
              />
            </div>
            <div className="flex flex-row  gap-3">
              <div className="relative w-full max-w-[300px] text-[#717680]">
                <SearchLg
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
                <Input
                  placeholder="Search"
                  className="pl-10 pr-3 py-[10px] w-full focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                />
              </div>

              <Drop
                icon={<FilterLines />}
                title="Filters"
                items={extraFilters}
                selectedItem="Filters"
              />
            </div>
          </div>
        </div>
        <section className="pb-40 min-[1025px]:pb-26 h-full w-full overflow-y-auto hide-scrollbar">
          <div className="mt-4 min-[1025px]:mt-8 border rounded-lg overflow-hidden">
            <Table
              columns={alertColumns}
              data={filteredAlertsData}
              selectable
              onSelectionChange={(indexes) => {
                setSelectedIndexes(indexes);
                setSelectedCount(indexes.length);
              }}
            />
          </div>
          <div className={`absolute right-0 bottom-0 z-10 w-[100%]`}>
            <div className="control bg-white w-full flex flex-row items-center gap-3 justify-between px-12 py-[18px] mt-8 text-sm">
              <p className="text-[#535862] font-bold font-[18px]">
                {selectedCount} alerts Selected
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() => {
                    if (selectedIndexes.length === 0) return;
                    const selectedIds = selectedIndexes.map(
                      (i) => filteredAlertsData[i].id
                    );
                    setAlerts((prev) =>
                      prev.map((a) =>
                        selectedIds.includes(a.id)
                          ? {
                              ...a,
                              status:
                                a.status === "Pending"
                                  ? "Acknowledged"
                                  : a.status,
                            }
                          : a
                      )
                    );
                  }}
                >
                  Acknowledge
                </Button>

                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className={cn(
                      "shadow-skew rounded-[8px] flex flex-row items-center gap-1 rounded-8px bg-[#7D48DF] text-white px-[14px] py-[10px]"
                    )}
                  >
                    Escalate to{" "}
                    {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
                        {/* Avatar */}
                        <div className="relative">
                          <Image
                            src={person.avatar}
                            alt={person.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          {/* Status dot */}
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                        </div>

                        {/* Name + Role */}
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
          </div>
        </section>
      </section>
    </>
  );
};

export default AllAlertsPage;
