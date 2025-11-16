import React, { useState } from "react";
import AnnotationCanvas from "@/components/annotation/AnnotationCanvas";
import Controls from "@/components/Controls";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { modelsConfig } from "@/data/cameraData";
import { cn } from "@/lib/utils";
const AnnonationSetup = ({
  selectedColor,
  selectedTool,
  rects,
  setRects,
  paths,
  setPaths,
  polygons,
  setPolygons,
  setSelectedColor,
  setColorPickerVisible,
  setSelectedTool,
  primaryAction,
  secondaryAction,
  children,
  showControls,
  step = 1, // Add step prop to determine which form to show
  regionData = {},
  setRegionData,
  modelsData = [],
  setModelsData,
}) => {


  const handleRegionChange = (field, value) => {
    setRegionData((prev) => ({ ...prev, [field]: value }));
  };

  const handleModelChange = (category, value, isCheckedRaw) => {
    const isChecked = Boolean(isCheckedRaw);
    setModelsData((prev) => {
      const previous = Array.isArray(prev) ? prev : [];
      const existingIndex = previous.findIndex((item) => item.category === category);

      if (existingIndex !== -1) {
        const updated = [...previous];
        const currentValues = updated[existingIndex].values || [];

        let newValues;
        if (isChecked) {
          newValues = currentValues.includes(value)
            ? currentValues
            : [...currentValues, value];
        } else {
          newValues = currentValues.filter((v) => v !== value);
        }

        if (newValues.length === 0) {
          updated.splice(existingIndex, 1);
        } else {
          updated[existingIndex] = { category, values: newValues };
        }
        return updated;
      }

      return isChecked ? [...previous, { category, values: [value] }] : previous;
    });
  };

  return (
    <>
      <section className="flex flex-row h-screen xl:pb-20">
        <div className="flex-grow bg-white w-full">
          <div className="h-full flex justify-center items-start px-8">
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
              showControls={showControls}
            />
          </div>
        </div>
        <div className="w-full max-w-[324px] bg-[#F5F5F5] space-y-4 border-l border-[#E9EAEB] px-6 py-6 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#181D27] mb-4">
                  Region Setup
                </h3>
                <div className="space-y-4">
                  <div>
                    <label
                      className="text-sm font-medium text-[#414651]"
                      htmlFor="regionName"
                    >
                      Region Name *
                    </label>
                    <Input
                      id="regionName"
                      name="regionName"
                      placeholder="e.g. Walkway, Restricted Zone"
                      value={regionData.regionName || ""}
                      onChange={(e) =>
                        handleRegionChange("regionName", e.target.value)
                      }
                      className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 text-[#414651]">
              <div>
                <h3 className="text-lg font-semibold mb-4">Models to Run</h3>
                <Accordion type="multiple" className="w-full">
                  {modelsConfig.map((model, index) => (
                    <AccordionItem key={index} value={model.category}>
                      <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                        <div className="flex flex-row gap-3 items-center">
                          <span>{model.icon}</span> {model.category}
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="space-y-4">
                        {model.items.map((option, i) => {
                          const id = `${model.category}-${option.value}`;

                          return (
                            <div key={i} className="flex items-center gap-2">
                              <Checkbox
                                id={id}
                                checked={
                                  (Array.isArray(modelsData) ? modelsData : [])
                                    .find(
                                      (item) => item.category === model.category
                                    )
                                    ?.values.includes(option.value) || false
                                }
                                onCheckedChange={(checked) =>
                                  handleModelChange(
                                    model.category,
                                    option.value,
                                    checked
                                  )
                                }
                              />

                              <label
                                htmlFor={id}
                                className="text-sm font-medium cursor-pointer flex items-center gap-2"
                              >
                                {/* placeholder for icon */}
                                <span
                                  className="inline-block h-4 w-4 rounded bg-muted"
                                  aria-hidden
                                  title={option.icon}
                                />
                                <span>{option.label}</span>
                              </label>
                            </div>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          )}
        </div>
      </section>
      <div
        className={`fixed left-16 bottom-0 z-20 w-[calc(100%-64px)]`}
      >
        <Controls
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          setColorPickerVisible={setColorPickerVisible}
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
          showControls={showControls}
        >
          {children}
        </Controls>
      </div>
    </>
  );
};

export default AnnonationSetup;
