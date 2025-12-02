"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  alertsTableData,
  timeFilterOptions,
  severityOptions,
  assignedToOptions,
  statusOptions,
  extraFilters,
  people,
} from "@/components/alerts/escalated.js";
import Search from "@components/Search";
import {
  ListFilter,     
  ChevronDown,
  ChevronUp,
  EllipsisVertical,
} from "lucide-react";
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
import {
  escalateAlert,
  getAlertsData,
  updateAlert,
} from "@/lib/api/alert-timeline";
import {
  CheckCircle,
  ClockSnooze,
  Eye,
  Share01,
  Users01,
  Users02,
} from "@untitledui/icons";
import { Button as ShadButton } from "@/components/ui/button";

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

const formatLabel = (s) =>
  s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const AllAlertsPage = () => {
  const alertColumns = [
    {
      title: "Alert Type",
      key: "alertType",
      width: "25%",
      render: (item) => {
        const alertType = formatLabel(item.alertType);
        return <span>{alertType}</span>;
      },
    },
    {
      title: "Severity",
      key: "severity",
      render: (item) => {
        const severityColors = {
          critical: "text-[#B42318] ",
          high: "text-[#F04438] ",
          medium: "text-[#F79009] ",
          low: "text-green-600 ",
        };
        const severity = formatLabel(item.severity);

        return (
          <span className={`${severityColors[item.severity] || ""}`}>
            {severity}
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

        if (camera.status === "acknowledged") {
          textColor = "text-[#067647]";
          bgColor = "bg-[#ECFDF3]";
          borderColor = "border-[#aaefc6]";
        } else if (
          camera.status === "pending" ||
          camera.status === "in_progress"
        ) {
          textColor = "text-[#b54708]";
          bgColor = "bg-[#FFFAEB]";
          borderColor = "border-[#fee396]";
        } else if (camera.status === "dismissed") {
          textColor = "text-[#414651]";
          bgColor = "bg-[#fafafa]";
          borderColor = "border-gray-500";
        } else {
          textColor = "text-[#B42318]";
          bgColor = "bg-[#FEF3F2]";
          borderColor = "border-[#fca5a1]";
        }
        const cameraStatus = formatLabel(camera.status);
        return (
          <p
            className={`h-[22px] text-xs w-fit ${bgColor} ${borderColor} ${textColor} font-medium rounded-full border-1 text-center px-[8px] py-[2px] flex items-center justify-center`}
          >
            {cameraStatus}
          </p>
        );
      },
    },
    { title: "Assigned to", key: "assignedTo" },
    {
      title: "Actions",
      key: "action",
      render: (item) => {
        const alertId = item.id;
        const clientId = "671c6d5fb2f4a95c7baf2143";

        return (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="rounded-md border-2 hover:border-[#9e77ed] w-fit p-1">
                <EllipsisVertical size={20} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
              <DropdownMenuItem>
                <Eye /> View Details
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={async () => {
                  try {
                    await updateAlert(clientId, alertId, "acknowledged");
                    setAlerts((prev) =>
                      prev.map((a) =>
                        a.id === alertId ? { ...a, status: "acknowledged" } : a
                      )
                    );
                  } catch (err) {
                    console.error("Acknowlegde Failed: ", err);
                  }
                }}
              >
                <CheckCircle /> Acknowledge
              </DropdownMenuItem>

              {/* <DropdownMenuItem
              //onClick={() => setEscalateTarget(alertId)} // open escalate modal
            ><Share01/> Escalate to</DropdownMenuItem>
             */}
              <DropdownMenuItem>
                <ClockSnooze /> Snooze
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={async () => {
                  try {
                    await updateAlert(clientId, alertId, "dismissed");
                    setAlerts((prev) =>
                      prev.map((a) =>
                        a.id === alertId ? { ...a, status: "dismissed" } : a
                      )
                    );
                  } catch (err) {
                    console.error("Dismissed Failed: ", err);
                  }
                }}
              >
                <Users01 /> Dismiss
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const [alerts, setAlerts] = useState([]);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAssignedTo, setSelectedAssignedTo] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("");

  const [filteredAlertsData, setFilteredAlertsData] = useState(alerts);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [open, setOpen] = useState(false);
  //const [escalateTarget, setEscalateTarget] = useState(null);
  const [escalateLoading, setEscalateLoading] = useState(false);
  useEffect(() => {
    getAlertsData()
      .then((data) =>
        setAlerts(
          data.map((item) => ({
            id: item._id,
            alertType: item.alert_type,
            severity: item.severity,
            worker: item.worker?.name ?? "Unknown",
            timeDetected: formatDate(item.detected_at),
            status: item.status,
            assignedTo: "Unassigned",
          }))
        )
      )
      .catch(console.error);
  }, []);

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
    setFilteredAlertsData(filtered);
  }, [alerts, selectedAssignedTo, selectedSeverity, selectedStatus]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <>
      <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27] mb-6">
        All Alerts
      </h1>
      <section className="flex-1 min-h-0">
        <div className="w-full flex flex-col gap-4 pb-4">
          <div className="w-full flex flex-row flex-wrap justify-between items-center gap-3">
            <div className="flex flex-row items-center gap-3">
              {/* Status Filter */}
              <SelectComp
                data={{
                  options: statusOptions.map((o) => ({
                    value: o.value,
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
                    value: o.value,
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
                    value: o.value,
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
                    value: o.value,
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
          <div className="border rounded-lg overflow-hidden">
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
          <div className={`absolute right-0 bottom-0 z-10 w-full`}>
            <div className="control bg-white w-full flex flex-row items-center gap-3 justify-between px-12 py-[18px] mt-8 text-sm">
              <p className="text-[#535862] font-bold">
                {selectedCount} alerts Selected
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={async () => {
                    if (selectedIndexes.length == 0) return;
                    const selectedIds = selectedIndexes.map(
                      (i) => filteredAlertsData[i].id
                    );
                    try {
                      await Promise.all(
                        selectedIds.map((alertId) =>
                          updateAlert(
                            "671c6d5fb2f4a95c7baf2143", //client id
                            alertId,
                            "acknowledged"
                          )
                        )
                      );
                      setAlerts((prev) =>
                        prev.map((a) =>
                          selectedIds.includes(a.id)
                            ? { ...a, status: "acknowledged" }
                            : a
                        )
                      );
                    } catch (err) {
                      console.error("Failed to acknowldge alert:", err);
                    }
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
                        onClick={async () => {
                          const selectedIds = selectedIndexes.map(
                            (i) => filteredAlertsData[i].id
                          );
                          try {
                            await Promise.all(
                              selectedIds.map((alertId) =>
                                escalateAlert(
                                  "671c6d5fb2f4a95c7baf2143", // client_id
                                  alertId,
                                  {
                                    recipients: [
                                      {
                                        id: person.id ?? "U-temp",
                                        name: person.name,
                                        role: person.role
                                          ?.toLowerCase()
                                          .replace(" ", "_"),
                                      },
                                    ],
                                    note: "Escalated via dashboard",
                                    by: {
                                      id: "dashboard-user",
                                      name: "Admin User",
                                    },
                                  }
                                )
                              )
                            );
                            setAlerts((prev) =>
                              prev.map((a) =>
                                selectedIds.includes(a.id)
                                  ? {
                                      ...a,
                                      assignedTo: person.name,
                                      status: "escalated",
                                    }
                                  : a
                              )
                            );
                            setOpen(false);
                          } catch (err) {
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
