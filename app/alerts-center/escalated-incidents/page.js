"use client";
import React, { useMemo, useState } from "react";
import { ChevronRight, SearchLg, FilterLines, LayoutAlt04 } from "@untitledui/icons";
import SelectComp from "@/components/SelectComp";
import { Input } from "@/components/ui/input";
import Drop from "@/components/Drop";
import Image from "next/image";
import {
  severityColors,
  columnTitles,
  escalated_incidents,
  timeFilterOptions,
  extraFilters,
} from "@/components/alerts/escalated.js";

const EscalatedIncidentsPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAssignedTo, setSelectedAssignedTo] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("");

  // Build filter option lists based on dataset
  const statusFilterOptions = useMemo(
    () => [
      { value: "All", label: "All" },
      ...columnTitles.map((t) => ({ value: t, label: t })),
    ],
    []
  );
  const assignedToFilterOptions = useMemo(() => {
    const people = new Set();
    escalated_incidents.forEach((col) =>
      col.forEach((inc) => inc.person && people.add(inc.person))
    );
    return [
      { value: "Anyone", label: "Anyone" },
      { value: "Unassigned", label: "Unassigned" },
      ...Array.from(people).map((p) => ({ value: p, label: p })),
    ];
  }, []);
  const severityFilterOptions = useMemo(() => {
    const severities = new Set();
    escalated_incidents.forEach((col) =>
      col.forEach((inc) => inc.severity && severities.add(inc.severity))
    );
    const ordered = ["Severe", "Moderate", "Minor"].filter((s) =>
      severities.has(s)
    );
    return [
      { value: "All", label: "All" },
      ...ordered.map((s) => ({ value: s, label: s })),
    ];
  }, []);

  const filteredColumns = useMemo(() => {
    // Start with original columns
    let columns = escalated_incidents;

    // Status filter maps to column title
    if (selectedStatus && selectedStatus !== "All") {
      const idx = columnTitles.findIndex((t) => t === selectedStatus);
      columns = idx >= 0 ? [escalated_incidents[idx]] : [[]];
    }

    // Assigned to: map "Unassigned" to first column
    if (
      !selectedStatus &&
      selectedAssignedTo &&
      selectedAssignedTo !== "Anyone"
    ) {
      if (selectedAssignedTo === "Unassigned") {
        columns = [escalated_incidents[0]];
      } else {
        // If a specific name is selected but not present, filter items by person match
        columns = columns.map((col) =>
          col.filter((inc) => inc.person === selectedAssignedTo)
        );
      }
    }

    // Severity filter: match dataset severities directly
    if (selectedSeverity && selectedSeverity !== "All") {
      columns = columns.map((col) =>
        col.filter((inc) => inc.severity === selectedSeverity)
      );
    }

    // Time filter currently not applied due to relative string times; placeholder
    return columns;
  }, [selectedStatus, selectedAssignedTo, selectedSeverity]);

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
        <span className="text-[#7D48DF] font-semibold text-sm">
          Escalated Incidents
        </span>
      </div>

      <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27] mb-6">
        Escalated Incidents
      </h1>

      <section className="mt-6 flex-1 min-h-0">
        <div className="w-full flex flex-row justify-between items-center pb-4">
          <div className="flex flex-row items-center gap-3">
            {/* Status Filter */}
            <SelectComp
              data={{ options: statusFilterOptions }}
              value={selectedStatus}
              onChange={(val) => setSelectedStatus(val)}
              placeholder="Status"
            />

            {/* Assigned to Filter */}
            <SelectComp
              data={{ options: assignedToFilterOptions }}
              value={selectedAssignedTo}
              onChange={(val) => setSelectedAssignedTo(val)}
              placeholder="Assigned to"
            />

            {/* Severity Filter */}
            <SelectComp
              data={{ options: severityFilterOptions }}
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
        <section className="h-full overflow-y-auto hide-scrollbar pb-16">
          <main className="grid grid-cols-4 gap-3 mt-6">
            {filteredColumns.map((column, colIndex) => (
              <div
                key={colIndex}
                className="bg-[#F5F5F5] rounded-[8px] p-[14px] flex flex-col gap-[14px] "
              >
                <div className="flex flex-row  gap-3">
                  <h4 className="text-[#414651] font-semibold">
                    {columnTitles[colIndex] || ""}
                  </h4>
                  <div className="text-[#414651] flex items-center justify-center bg-[#fafafa] text-xs rounded-full w-6 h-6 border border-[#E9EAEB]">
                    {column.length}
                  </div>
                </div>

                {/* incidents inside each column */}
                {column.map((incident, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#D5D7DA] rounded-[8px] shadow-xs p-3 flex flex-col gap-2"
                  >
                    <span
                      className={`px-2 py-1 rounded-full text-xs w-fit border 
                  ${severityColors[incident.severity]?.text || "text-gray-600"} 
                  ${severityColors[incident.severity]?.bg || "bg-gray-100"} 
                  ${
                    severityColors[incident.severity]?.border ||
                    "border-gray-200"
                  }`}
                    >
                      {incident.severity}
                    </span>
                    <div className="my-2 rounded-[4px] overflow-hidden">
                      {incident.imgsrc && (
                        <Image
                          src={incident.imgsrc}
                          width={204}
                          height={122}
                          alt={incident.title}
                          className="w-full"
                        />
                      )}
                    </div>
                    <h5 className="font-semibold text-sm">{incident.title}</h5>
                    <p className=" text-xs font-medium">{incident.person}</p>
                    <p className="text-xs text-[#414651]">
                      Alert ID: {incident.alertId}
                    </p>
                    <p className="text-xs text-[#414651]">
                      {incident.location}
                    </p>
                    <p className="text-[10px] text-[#717680]">
                      {incident.time}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </main>
        </section>
      </section>
    </>
  );
};

export default EscalatedIncidentsPage;
