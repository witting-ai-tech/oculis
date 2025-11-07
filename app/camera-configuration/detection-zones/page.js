"use client";

import React, { useState } from "react";
import { ChevronDown, Save02, Trash01 } from "@untitledui/icons";

import AnnotationCanvas from "@/components/annotation/AnnotationCanvas";
import DetectNav from "@/components/DetectNav";
import Controls from "@/components/Controls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const cameraData = {
  defaultValue: "Select Label",
  options: [
    { value: "camera-1", label: "Camera-1" },
    { value: "camera-2", label: "Camera-2" },
    { value: "camera-3", label: "Camera-3" },
  ],
};

const Page = () => {
  const [formData, setFormData] = useState({
    zoneLabel: "",
    zoneCategory: "",
    zoneDescription: "",
    label: cameraData.defaultValue,
    autoAlerts: true,
  });

  const [selectedColor, setSelectedColor] = useState("#FF6900");
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [selectedTool, setSelectedTool] = useState("move");

  const [rects, setRects] = useState([]);
  const [paths, setPaths] = useState([]);
  const [polygons, setPolygons] = useState([]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  console.log(rects);
  return (
    <>
      <section className="flex flex-row justify-between h-screen w-screen overflow-hidden xl:pb-20">
        {/* Left Panel */}
        <div className="flex-grow bg-white w-3/4">
          <DetectNav />
          <div className="h-full flex justify-center items-start px-8 py-6">
            <AnnotationCanvas
              imageSrc="/detected.png"
              selectedColor={selectedColor}
              tool={selectedTool}
              rects={rects}
              setRects={setRects}
              paths={paths}
              setPaths={setPaths}
              polygons={polygons}
              setPolygons={setPolygons}
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/4 bg-[#F5F5F5] space-y-4 border-l border-[#E9EAEB] px-6 py-6 overflow-y-auto">
          {/* Text Fields */}
          <div>
            <label
              htmlFor="zoneLabel"
              className="text-sm text-[#414651] mb-1 block"
            >
              Zone*
            </label>
            <Input
              id="zoneLabel"
              value={formData.zoneLabel}
              onChange={(e) => handleChange("zoneLabel", e.target.value)}
              placeholder="e.g. Walkway, Restricted Zone"
              className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="zoneCategory"
              className="text-sm text-[#414651] mb-1 block"
            >
              Zone Category
            </label>
            <Input
              id="zoneCategory"
              value={formData.zoneCategory}
              onChange={(e) => handleChange("zoneCategory", e.target.value)}
              placeholder="Zone Category"
              className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="zoneDescription"
              className="text-sm text-[#414651] mb-1 block"
            >
              Description
            </label>
            <Textarea
              id="zoneDescription"
              value={formData.zoneDescription}
              onChange={(e) => handleChange("zoneDescription", e.target.value)}
              placeholder="e.g. Area near the boiler with high heat risk"
              className="bg-white ring-0 focus-visible:ring-0 focus:outline-none"
            />
          </div>

          {/* Label Dropdown */}
          <div className="w-full">
            <label
              htmlFor="label"
              className="text-sm text-[#414651] mb-1 block"
            >
              Label
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full px-3 py-4 text-left"
                >
                  <div className="flex justify-between items-center w-full">
                    <span>{formData.label}</span>
                    <ChevronDown size={20} />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)]">
                {cameraData.options.map((item) => (
                  <DropdownMenuCheckboxItem
                    key={item.value}
                    checked={formData.label === item.label}
                    onCheckedChange={(checked) => {
                      if (checked) handleChange("label", item.label);
                    }}
                  >
                    {item.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {rects.length > 0 || paths.length > 0 || polygons.length > 0 ? (
            <div className="w-full">
              <label
                htmlFor="label"
                className="text-sm text-[#414651] mb-1 block"
              >
                Zone Annotations
              </label>
              {rects.map((rect, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[10px] px-[18px] lg:px-[22px] py-[10px] border-[2px] mb-2"
                  style={{ borderColor: rect.color }}
                >
                  <p className="text-sm xl:text-[16px] font-medium text-[#181D27]">
                    {rect.label || `Zone ${index + 1}`}
                  </p>
                  <p className="text-sm text-[#535862]">No Helmet</p>
                </div>
              ))}

              {polygons.map((polygon, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[10px] px-[18px] lg:px-[22px] py-[10px] border-[2px] mb-2"
                  style={{ borderColor: polygon.color }}
                >
                  <p className="text-sm xl:text-[16px] font-medium text-[#181D27]">
                    {polygon.label || `Zone ${index + 1}`}
                  </p>
                  <p className="text-sm text-[#535862]">No Helmet</p>
                </div>
              ))}
            </div>
          ) : null}
          {/* Auto-alert Toggle */}
          <div className="flex items-center justify-start gap-4 mt-8">
            <Switch
              id="auto-alerts"
              checked={formData.autoAlerts}
              onCheckedChange={() =>
                handleChange("autoAlerts", !formData.autoAlerts)
              }
            />
            <label htmlFor="auto-alerts" className="text-sm">
              Enable Auto-alerts
            </label>
          </div>
        </div>
      </section>

      {/* Controls Panel */}
      <div className="fixed bottom-0 w-full z-50">
        <Controls
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          setColorPickerVisible={setColorPickerVisible}
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
          primaryAction={
            <Button className="px-[14px] py-[10px] w-[150px]">
              <Save02 size={20} className="ml-2" />
              Save
            </Button>
          }
          secondaryAction={
            <Button
              variant="outline"
              className="ml-4 px-[14px] py-[10px] w-[150px]"
            >
              Discard
              <Trash01 size={20} className="ml-2" />
            </Button>
          }
        />
      </div>
    </>
  );
};

export default Page;
