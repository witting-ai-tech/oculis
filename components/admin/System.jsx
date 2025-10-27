"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import DynamicForm from "./../forms/DynamicForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const org = [
  [
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "Timezone",
      name: "timezone",
      type: "select",
      required: true,
      options: [
        { label: "UTC", value: "utc" },
        { label: "GMT", value: "gmt" },
      ],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "Language",
      name: "language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Spanish", value: "spanish" },
      ],
    },
  ],
  [
    {
      id: Math.random().toString(36).substring(2, 9),
      heading: "Units of Measurement",
      name: "measurement",
      type: "radio-group",
      required: true,
      options: [
        { label: "Metric (m, kg, km)", value: "metric" },
        { label: "Imperial (ft, lb, mi)", value: "imperial" },
      ],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      heading: "Temperature Units",
      name: "temperature",
      type: "radio-group",
      required: true,
      options: [
        { label: "Celsius (°C)", value: "celsius" },
        { label: "Fahrenheit (°F)", value: "fahrenheit" },
      ],
    },
  ],
  [
    {
      id: Math.random().toString(36).substring(2, 9),
      heading: "Notification Preferences",
      subHeading: "Set default notification frequency for the organization",
      name: "notifications",
      type: "radio-group-vertical",
      required: true,
      options: [
        {
          value: "immediate",
          label: "Immediate",
          description: "Receive notifications instantly when events occur",
        },
        {
          value: "daily",
          label: "Daily Digest",
          description: "Receive a summary of events once per day",
        },
        {
          value: "weekly",
          label: "Weekly",
          description: "Receive a weekly summary of all events",
        },
      ],
    },
  ],
];

const System = () => {
  const [formData, setFormData] = useState({});

  return (
    <section>
      <DynamicForm
        formData={org}
        title="Regional Settings"
        description="Set timezone, language, and measurement preferences"
        onFormDataChange={setFormData}
        formDataState={formData}
      />
    </section>
  );
};

export default System;
