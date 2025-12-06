"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  alertsTableData,
  timeFilterOptions,
  severityOptions,
  assignedToOptions,
  statusOptions,
  extraFilters,
} from "@/components/alerts/escalated.js";

import Search from "@components/Search";
import {
  ListFilter,
  ChevronDown,
  ChevronUp,
  EllipsisVertical,
  XIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/Button";
import Drop from "@/components/Drop";
import { Table } from "@/components/Tables";
import SelectComp from "@/components/SelectComp";
import { cn, snakeToTitle, formatDate } from "@/lib/utils";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { escalateAlert, getAlertByID, getAlertsData, updateAlert } from "@/lib/api/alert-timeline";
import { CheckCircle, ClockSnooze, Eye, Share01, Users01, Users02 } from "@untitledui/icons";
import Incident from "@/components/Incident";
import AlertIncident from "@/components/AlertIncident";
import { severityIcons } from "@/data/severityIcons";
import { BadgePill, Pill } from "@/data/pillConfig";
import { getAllAlertsColumns } from "@/data/tableColumns";


const people = [
  {
    id:1,
    name: "John Lee",
    role: "Supervisor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id:2,
    name: "Olivia Rhye",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  { id:3,
    name: "Jane Doe",
    role: "Manager",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];


const AllAlertsPage = () => {

  const [alerts, setAlerts] = useState([]);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAssignedTo, setSelectedAssignedTo] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("");

  const [filteredAlertsData, setFilteredAlertsData] = useState(alerts);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [overlay, setOverlay] =useState(false);

  const [selectedCount, setSelectedCount] = useState(0);
  const [open, setOpen] = useState(false);
  //const [escalateTarget, setEscalateTarget] = useState(null);
  const [escalateLoading, setEscalateLoading] = useState(false);
  
  
    useEffect(()=>{
      getAlertsData().then(
        (data)=>{
          setAlerts(data);
      }).catch(console.error);
    },[]);

  const applyFilters = useCallback(() => {
    let filtered = alerts;

    if (selectedStatus && selectedStatus !== "All") {
      filtered = filtered.filter((alert) => alert.status === selectedStatus.toLowerCase());
    }
    if (selectedAssignedTo && selectedAssignedTo !== "Anyone") {
      filtered = filtered.filter(
        (alert) => snakeToTitle(alert.assignedTo) === selectedAssignedTo
      );
    }
    if (selectedSeverity && selectedSeverity !== "All") {
      filtered = filtered.filter(
        (alert) => snakeToTitle(alert.severity) === selectedSeverity
      );
    }
    // selectedTimeFilter placeholder for future when timestamps exist

    setFilteredAlertsData(filtered);
  }, [alerts, selectedAssignedTo, selectedSeverity, selectedStatus]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const columns = getAllAlertsColumns(
    updateAlert, setOverlay, setAlerts
  );

return (
    <>
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
              <div className="relative w-full max-w-[200px] focus-within:max-w-[300px] transition-all duration-300">
                <Search 
                  placeholder="Search"
                  className="size={20}"
                  showShortcutHint={false}
                />
              </div>

              <Drop
                icon={<ListFilter />}
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
              columns = {columns}
              data={filteredAlertsData}
              selectable
              setCurrentItem={(alert)=>{
                setOverlay();
                setCurrentItem(alert)
                updateAlert()
              }}
              setOverlay={setOverlay}
               onSelectionChange={(indexes) => {
                setSelectedIndexes(indexes);
                setSelectedCount(indexes.length);
              }}
            />
          </div>
          {overlay && (
          <div className="inset-0 z-25 fixed top-17 right-0 w-full h-full bg-[#54565a]/80 flex items-center justify-end">
            <div className="bg-white h-full w-[50%] flex flex-row justify-between items-start p-2 xl:p-4 text-sm">
              <AlertIncident
                selectedIncident={currentItem}
                severityIcons={severityIcons}
              />
              <XIcon
                className="p-2 cursor-pointer text-[#54565a]"
                size={40}
                onClick={() => setOverlay(false)}
              />
            </div>
          </div>
        )}
          
          <div //className={`absolute right-0 bottom-0 z-10 w-[calc(100%-294px)] min-[1025px]:w-[calc(100%-332px)]`}
            className={`absolute right-0 bottom-0 z-10 w-full`}
          > 
            <div className="control bg-white w-full flex flex-row items-center gap-3 justify-between px-12 py-[18px] mt-8 text-sm">
              <p className="text-[#535862] font-bold">
                {selectedCount} alerts Selected
              </p>
              <div className="flex gap-3">
                <Button
                onClick={async ()=>{
                  if(selectedIndexes.length==0) return;
                  const selectedIds = selectedIndexes.map(
                    (i) => filteredAlertsData[i]._id
                  );
                  try{
                    await Promise.all(
                      selectedIds.map((_id)=>
                      updateAlert("671c6d5fb2f4a95c7baf2143",  //client id
                      _id,
                      {
                        title: "No Helmet Violation - Verified",
                        severity: "critical",
                        status: "acknowledged",
                        metadata: {
                          reviewed_by: "Supervisor",
                          note: "On-site inspection requested"
                        }
                      }
                      )
                    ));
                    setAlerts((prev)=>
                    prev.map((a)=> selectedIds.includes(a._id)
                      ?{...a, status:"acknowledged"}
                      :a
                    )
                  );

                  }catch(err){
                    console.error("Failed to acknowldge alert:", err);
                  };
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
                        onClick={async ()=>{
                          const selectedIds = selectedIndexes.map(i=> filteredAlertsData[i]._id);
                          try{
                            await Promise.all(
                              selectedIds.map(_id=>
                                escalateAlert( "671c6d5fb2f4a95c7baf2143", _id,
                                {
                                  recipients: [
                                    {
                                      id: person.id ?? "U-temp",
                                      name: person.name,
                                      role: person.role?.toLowerCase().replace(" ", "_")
                                    }
                                  ],
                                  note: "Escalated via Alert Center",
                                  by: {
                                    id: "dashboard-user",
                                    name: "Admin User"
                                  }
                                }
                              )
                              )
                            );
                            setAlerts(prev =>
                              prev.map(a =>
                                selectedIds.includes(a._id)
                                  ? { ...a, assignedTo: person.name, status: "escalated" }
                                  : a
                              )
                            );  
                            setOpen(false);
                            }catch(err){
                              console.error("Escalation Failed:", err);
                            }
                        }}
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