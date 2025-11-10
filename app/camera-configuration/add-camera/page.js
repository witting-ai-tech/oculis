"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { steps, cameraFormInputs } from "@/data/cameraData";
import { snakeToTitle } from "@/lib/utils";
import DynamicForm2 from "@/components/forms/DynamicForm2";
import AnnonationSetup from "@/components/AnnonationSetup";
import { Wrench, ArrowRight, SkipForward, ArrowLeft } from "lucide-react";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Success from "@/components/Success";

const Page = () => {
  const [activeStep, setActiveStep] = useSessionStorage("activeStep", 0);
  const [success, setSuccess] = useState(false);
  // cam form states
  const [formData, setFormData] = useSessionStorage("formData", {});

  // region setup states
  const [regionData, setRegionData] = useSessionStorage("regionData", {});
  const [modelsData, setModelsData] = useSessionStorage("modelsData", []);

  const [selectedColor, setSelectedColor] = useState("#FF6900");
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [selectedTool, setSelectedTool] = useState("move");

  const [rects, setRects] = useSessionStorage("rects", []);
  const [paths, setPaths] = useSessionStorage("paths", []);
  const [polygons, setPolygons] = useSessionStorage("polygons", []);

  const [camStatus, setCamStatus] = useState("Not Connected");
  const [selectedRegionIndex, setSelectedRegionIndex] = useSessionStorage(
    "selectedRegionIndex",
    0
  );

  const handleFormSubmit = (e) => {
    console.log("Camera Form Data:", formData);
    setFormData({});
    setRegionData({});
    setModelsData([]);
    setRects([]);
    setPaths([]);
    setPolygons([]);
    setActiveStep(0);
    setSuccess(true);
  };

  const handleRegionSubmit = () => {
    console.log("Region Data:", regionData);
    setActiveStep((prev) => prev + 1);
  };

  const handleModelsSubmit = () => {
    console.log("Models Data:", modelsData);
    setActiveStep((prev) => prev + 1);
  };

  const anotherCamera = () => {
    setActiveStep(0);
    setFormData({});
    setRegionData({});
    setModelsData([]);
    setRects([]);
    setPaths([]);
    setPolygons([]);
    setSuccess(false);
  };

  const logAllData = () => {
    console.log("=== ALL FORM DATA ===");
    console.log("Camera Data:", formData);
    console.log("Region Data:", regionData);
    console.log("Models Data:", modelsData);
    console.log("===================");
  };

  const handleNext = (e) => {
    setActiveStep((prev) => prev + 1);
  };

  const tabs = {
    0: (
      <section className="pr-8">
        <DynamicForm2
          title="Add New Camera"
          sections={cameraFormInputs}
          primaryAction="Add Camera"
          secondaryAction={
            <Link href="/camera-configuration/add-camera/cam-setup">
              <Button
                type="button"
                variant="outline"
                className="py-[22px] rounded-[8px] font-semibold hover:opacity-90"
                onClick={() => setActiveStep((prev) => prev + 1)}
              >
                <Wrench size={20} /> Test Connection
              </Button>
            </Link>
          }
          onFormDataChange={(vals) => setFormData(vals)}
          onSubmit={(vals) => {
            setFormData(vals);
            setActiveStep((prev) => prev + 1);
          }}
        />
      </section>
    ),
    1: (
      <AnnonationSetup
        step={1}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedTool={selectedTool}
        rects={rects}
        setRects={setRects}
        paths={paths}
        setPaths={setPaths}
        polygons={polygons}
        setPolygons={setPolygons}
        setColorPickerVisible={setColorPickerVisible}
        setSelectedTool={setSelectedTool}
        regionData={regionData}
        setRegionData={setRegionData}
        primaryAction={
          <Button
            className="px-[14px] py-[10px] w-fit"
            onClick={handleRegionSubmit}
          >
            <ArrowRight size={20} className="ml-2" />
            Next
          </Button>
        }
        secondaryAction={
          <Button
            variant="outline"
            className="px-[14px] py-[10px] w-fit"
            onClick={() => setActiveStep(2)}
          >
            <SkipForward size={20} className="ml-2" />
            Skip
          </Button>
        }
      >
        <Button
          variant="outline"
          className="px-[14px] py-[10px] w-fit"
          onClick={() => setActiveStep((prev) => prev - 1)}
        >
          <ArrowLeft size={20} className="ml-2" />
          Previous
        </Button>
      </AnnonationSetup>
    ),
    2: (
      <>
        <div className="pr-8 mb-4">
          {[...rects, ...polygons].length > 0 && (
            <Select
              value={String(
                Math.min(
                  selectedRegionIndex || 0,
                  Math.max([...rects, ...polygons].length - 1, 0)
                )
              )}
              onValueChange={(val) => setSelectedRegionIndex(Number(val))}
            >
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                {[...rects, ...polygons].map((shape, index) => {
                  const label =
                    shape?.label && String(shape.label).trim().length > 0
                      ? shape.label
                      : `Zone ${index + 1}`;
                  return (
                    <SelectItem key={index} value={String(index)}>
                      {`Region ${index + 1} - ${label}`}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          )}
        </div>
        {(() => {
          const total = [...rects, ...polygons].length;
          const safeIndex = Math.min(
            selectedRegionIndex || 0,
            Math.max(total - 1, 0)
          );
          const isRect = safeIndex < rects.length;
          const rectsForStep =
            isRect && rects[safeIndex] ? [rects[safeIndex]] : [];
          const polygonsForStep =
            !isRect && polygons[safeIndex - rects.length]
              ? [polygons[safeIndex - rects.length]]
              : [];

          const regionModels = Array.isArray(modelsData)
            ? modelsData[safeIndex] || []
            : [];
          const setRegionModels = (updater) => {
            setModelsData((prev) => {
              const next = Array.isArray(prev) ? [...prev] : [];
              const current = next[safeIndex] || [];
              const updated =
                typeof updater === "function" ? updater(current) : updater;
              next[safeIndex] = updated;
              return next;
            });
          };

          return (
            <AnnonationSetup
              step={2}
              showControls={false}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              rects={rectsForStep}
              setRects={setRects}
              paths={paths}
              setPaths={setPaths}
              polygons={polygonsForStep}
              setPolygons={setPolygons}
              setColorPickerVisible={setColorPickerVisible}
              setSelectedTool={setSelectedTool}
              modelsData={regionModels}
              setModelsData={setRegionModels}
              primaryAction={
                <Button
                  className="px-[14px] py-[10px] w-fit"
                  onClick={handleModelsSubmit}
                >
                  <ArrowRight size={20} className="ml-2" />
                  Next
                </Button>
              }
            >
              <Button
                variant="outline"
                className="px-[14px] py-[10px] w-fit"
                onClick={() => setActiveStep((prev) => prev - 1)}
              >
                <ArrowLeft size={20} className="ml-2" />
                Previous
              </Button>
            </AnnonationSetup>
          );
        })()}
      </>
    ),
    3: (
      <section className="pr-8 pb-20">
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="p-5 shadow-skew border rounded-[8px] w-full max-w-[600px]">
            <h4 className="text-[18px] font-semibold">Camera Info</h4>
            <div className="grid grid-cols-2 mt-4 text-sm">
              <div className="text-[#414651] font-semibold flex flex-col gap-3">
                <p>Camera Name</p>
                <p>Camera ID</p>
                <p>Camera status</p>
                <p>Location</p>
                <p>Type </p>
              </div>
              <div className="text-[#535862] flex flex-col gap-3">
                <p>{formData.cameraName || "-"}</p>
                <p>{"CAM-" + formData.cameraId || "-"}</p>
                <p>{camStatus || "-"}</p>
                <p>
                  {`${formData.site || "-"} ${formData.floor || "-"} ${
                    formData.zone || "-"
                  }`
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </p>
                <p>{formData?.cameraType?.toUpperCase() || "-"}</p>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-skew border rounded-[8px] w-full max-w-[600px]">
            <h4 className="text-[18px] font-semibold">Region Configured</h4>
            <div className="text-[#414651] font-semibold flex flex-col gap-3 mt-3">
              {[...rects, ...polygons].length === 0 && (
                <p className="text-sm text-[#535862] font-normal">
                  No regions defined
                </p>
              )}
              {[...rects, ...polygons].map((shape, idx) => {
                const label =
                  shape?.label && String(shape.label).trim().length > 0
                    ? shape.label
                    : "-";
                const perRegion =
                  Array.isArray(modelsData) &&
                  modelsData.length > 0 &&
                  Array.isArray(modelsData[0]);
                const regionModels = perRegion
                  ? Array.isArray(modelsData[idx])
                    ? modelsData[idx]
                    : []
                  : Array.isArray(modelsData)
                  ? modelsData
                  : [];
                return (
                  <div key={idx} className="flex flex-col">
                    <p className="font-semibold mb-2">
                      Region {idx + 1} - {label}
                    </p>
                    {regionModels.length === 0 ? (
                      <p className="text-sm text-[#535862] mb-2">
                        No categories selected
                      </p>
                    ) : (
                      regionModels.map((model, index) => (
                        <div key={index} className="font-normal">
                          <h4 className="text-sm text-[#535862] mb-2">
                            {model?.category || "-"}
                          </h4>
                        </div>
                      ))
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-5 shadow-skew border rounded-[8px] w-full max-w-[600px]">
            <h4 className="text-[18px] font-semibold"> Tasks</h4>
            <div className="mt-3">
              {(() => {
                const isPerRegion =
                  Array.isArray(modelsData) &&
                  modelsData.some((m) => Array.isArray(m));
                if (isPerRegion) {
                  return modelsData.map((regionModels, rIdx) => (
                    <div key={rIdx} className="mb-4">
                      <h5 className="text-[#414651] font-semibold mb-2">
                        Region {rIdx + 1}
                      </h5>
                      {(Array.isArray(regionModels) ? regionModels : []).map(
                        (model, index) => (
                          <div
                            key={index}
                            className="mb-2 text-sm flex flex-row gap-[76px] justify-start"
                          >
                            <h4 className="text-[#414651] font-semibold w-full max-w-[110px]">
                              {model?.category || "-"}
                            </h4>
                            <p className="text-[#535862]">
                              {(Array.isArray(model?.values)
                                ? model.values
                                : []
                              )
                                .map((v) => snakeToTitle(v))
                                .join(", ")}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  ));
                }
                return (Array.isArray(modelsData) ? modelsData : []).map(
                  (model, index) => (
                    <div
                      key={index}
                      className="mb-3 text-sm flex flex-row gap-[76px] justify-start"
                    >
                      <h4 className="text-[#414651] font-semibold w-full max-w-[110px]">
                        {model?.category || "-"}
                      </h4>
                      <p className="text-[#535862]">
                        {(Array.isArray(model?.values) ? model.values : [])
                          .map((v) => snakeToTitle(v))
                          .join(", ")}
                      </p>
                    </div>
                  )
                );
              })()}
            </div>
          </div>

          <div className={`fixed left-16 bottom-0 z-20 w-[calc(100%-64px)]`}>
            <div className="control bg-white w-full flex flex-row gap-3 justify-between px-8 py-[18px] mt-8 text-sm">
              <Button
                variant="outline"
                className="px-[14px] py-[10px] w-fit"
                onClick={() => setActiveStep((prev) => prev - 1)}
              >
                <ArrowLeft size={20} className="ml-2" />
                Previous
              </Button>

              <Button
                type="button"
                className="w-fit bg-[#7d48df] hover:bg-[#6037ac] text-white flex items-center gap-2"
                onClick={handleFormSubmit}
              >
                Finish Setup
              </Button>
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return (
    <>
      <Navbar />
      <section className="ml-12 xl:ml-16 pl-16 pt-12">
        {/* stepper */}

        <div className="w-full flex flex-row items-start justify-center gap-4 mb-8 relative">
          <div className="absolute top-5 left-0 w-full flex justify-center -z-1">
            <div className="relative w-[740px] h-[2px] bg-[#E5E7EB]">
              <div
                className="absolute top-0 left-0 h-[2px] bg-[#414651] transition-all duration-800"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {steps.map((step) => {
            return (
              <div
                className="flex flex-col items-center justify-center w-60 text-sm text-center transition-all"
                key={step.id}
              >
                {activeStep > step.id ? (
                  <div className="w-10 h-10 p-[10px] mb-3 rounded-full bg-[#DCFAE6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6673 5L7.50065 14.1667L3.33398 10"
                        stroke="#079455"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div
                    className={`w-10 h-10 p-[10px] mb-3 ${
                      activeStep == step.id
                        ? "rounded-full bg-[#E7DCFE] text-[#7d48df]"
                        : "shadow-skew rounded-[8px] border bg-white text-[#A4A7AE]"
                    }`}
                  >
                    {step?.icon}
                  </div>
                )}
                <div
                  className={` ${activeStep == step.id ? "" : "opacity-50"}`}
                >
                  <h4 className="text-[#414651] font-semibold">{step.title}</h4>
                  <p className="text-[#535862]">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {!success ? (
          <>{tabs[activeStep]}</>
        ) : (
          <Success
            anotherCamera={anotherCamera}
            noOfRegions={regionData.length}
          />
        )}
      </section>
    </>
  );
};

export default Page;

// <Button
//   type="button"
//   className="rounded-[8px] font-semibold hover:opacity-90 bg-gray-600 hover:bg-gray-700"
//   onClick={logAllData}
// >
//   Log All Data
// </Button>
