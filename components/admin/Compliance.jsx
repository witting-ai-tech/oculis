"use client";
import React, { useState } from "react";
import DynamicForm from "./../forms/DynamicForm";

const complianceForm = [
  [
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "Video Retention Policy",
      name: "video-rentention",
      type: "select",
      required: true,
      options: [
        { label: "7 Days", value: "7" },
        { label: "15 Days", value: "15" },
        { label: "30 Days", value: "30" },
      ],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "Audit Log Retention",
      name: "audio-log",
      type: "select",
      helperText: "Number of days to retain system logs",
      required: true,
      options: [
        { label: "7 Days", value: "7" },
        { label: "15 Days", value: "15" },
        { label: "30 Days", value: "30" },
      ],
    },
  ],
  [
    {
      id: Math.random().toString(36).substring(2, 9),
      heading: "Data Export Settings",
      subHeading: "Control data export capabilities and formats",
      name: "data-export",
      type: "checkbox",
      required: true,
    },
  ],
  [
    {
      id: "exportFormats",
      name: "exportFormats",
      type: "checkbox-group",
      heading: "Export Formats",
      required: true,
      min: 1,
      options: [
        { label: "CSV", value: "csv" },
        { label: "MP4", value: "mp4" },
        { label: "JSON", value: "json" },
      ],
    },
  ],
];

const Compliance = () => {
  const [formData, setFormData] = useState({});
  return (
    <section>
      <DynamicForm
        formData={complianceForm}
        title="Data Retention Policies"
        description="Control how long surveillance data is stored"
        onFormDataChange={setFormData}
        formDataState={formData}
      />
    </section>
  );
};

export default Compliance;
