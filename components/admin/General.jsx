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
      label: "Organization Name",
      name: "organizationName",
      type: "text",
      required: true,
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "Industry",
      name: "industry",
      type: "select",
      required: true,
      options: [
        { label: "Industry 1", value: "industry1" },
        { label: "Industry 2", value: "industry2" },
      ],
    },
  ],
  [
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "Organization Logo",
      type: "file",
      name: "organizationLogo",
      required: false,
    },
  ],
  {
    id: Math.random().toString(36).substring(2, 9),
    label: "Street Address",
    type: "text",
    name: "streetAddress",
    required: true,
  },
  [
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "City",
      type: "select",
      required: true,
      name: "city",
      options: [
        { label: "City 1", value: "city1" },
        { label: "City 2", value: "city2" },
      ],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "State/Province",
      type: "select",
      required: true,
      name: "state",
      options: [
        { label: "State 1", value: "state1" },
        { label: "State 2", value: "state2" },
      ],
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "Zip/Postal Code",
      type: "text",
      name: "zipCode",
      required: true,
    },
    {
      id: Math.random().toString(36).substring(2, 9),
      label: "Country",
      type: "select",
      required: true,
      name: "country",
      options: [
        { label: "Country 1", value: "country1" },
        { label: "Country 2", value: "country2" },
      ],
    },
  ],
];

const General = () => {
  const [formData, setFormData] = useState({});

  return (
    <section>
      <DynamicForm
        formData={org}
        title="Organization Details"
        description="Basic information about your company"
        onFormDataChange={setFormData}
        formDataState={formData}
      />
    </section>
  );
};

export default General;
