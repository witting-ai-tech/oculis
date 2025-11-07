import React from "react";
import { Hand, PenTool01, Brush01, Square, Plus  } from "@untitledui/icons";
import Pop from "./Pop";
import { CirclePicker } from "react-color";
import { Button } from "@/components/ui/button";

const Controls = ({
  selectedColor,
  setSelectedColor,
  setColorPickerVisible,
  selectedTool,
  setSelectedTool,
  primaryAction,
  secondaryAction,
  children,
  showControls = true,
}) => {
  const handleToolChange = (tool) => {
    setSelectedTool(tool);
    console.log(`Selected tool: ${tool}`);
  };

  return (
    <div className="control flex flex-row items-center justify-between min-h-12 px-8 py-4 bg-white border-t border-[#E9EAEB]">
      {children}
      {showControls && (
        <div className="flex flex-row items-center w-fit gap-2 p-2 border border-[#D5D7DA] rounded-[8px] text-sm font-semibold">
          <button
            className={`px-4 py-2 flex flex-row gap-2 items-center ${
              selectedTool === "move" ? "bg-[#f8f5ff] text-[#7d48df]" : ""
            }`}
            onClick={() => handleToolChange("move")}
          >
            <Hand
              size={20}
              className={
                selectedTool === "move" ? "text-[#7d48df]" : "text-[#717680]"
              }
            />
            Move
          </button>
          <Pop
            trigger={
              <div className="px-4 py-2 flex flex-row gap-2 items-center cursor-pointer">
                <Plus size={20} className="text-[#717680]" />
                Add Region
              </div>
            }
          >
            <div className="px-[6px] py-1 text-[#414651] font-semibold text-sm w-[150px] xl:w-[188px]">
              <ul>
                <li
                  className={`py-2 px-[10px] w-full rounded-lg flex flex-row gap-2 items-center hover:bg-[#fafafa] cursor-pointer ${
                    selectedTool === "pen" ? "bg-[#f8f5ff] text-[#7d48df]" : ""
                  }`}
                  onClick={() => handleToolChange("pen")}
                >
                  <PenTool01
                    size={16}
                    className={
                      selectedTool === "pen"
                        ? "text-[#7d48df]"
                        : "text-[#717680]"
                    }
                  />
                  Pen
                </li>
                <li
                  className={`py-2 px-[10px] w-full rounded-lg flex flex-row gap-2 items-center hover:bg-[#fafafa] cursor-pointer ${
                    selectedTool === "rect" ? "bg-[#f8f5ff] text-[#7d48df]" : ""
                  }`}
                  onClick={() => handleToolChange("rect")}
                >
                  <Square
                    size={16}
                    className={
                      selectedTool === "rect"
                        ? "text-[#7d48df]"
                        : "text-[#717680]"
                    }
                  />
                  Rectangle
                </li>
                <li
                  className={`py-2 px-[10px] w-full rounded-lg  flex flex-row gap-2 items-center hover:bg-[#fafafa] cursor-pointer ${
                    selectedTool === "brush"
                      ? "bg-[#f8f5ff] text-[#7d48df]"
                      : ""
                  }`}
                  onClick={() => handleToolChange("brush")}
                >
                  <Brush01
                    size={16}
                    className={
                      selectedTool === "brush"
                        ? "text-[#7d48df]"
                        : "text-[#717680]"
                    }
                  />
                  Brush
                </li>
              </ul>
            </div>
          </Pop>

          <Pop
            trigger={
              <div
                className="px-4 py-2 flex flex-row gap-2 relative items-center"
                onClick={() => setColorPickerVisible((prev) => !prev)}
              >
                <div
                  className="w-4 h-4 rounded-full border border-[#D5D7DA] cursor-pointer"
                  style={{ backgroundColor: selectedColor }}
                />
                Color
              </div>
            }
          >
            <div className="p-2">
              <CirclePicker
                color={selectedColor}
                onChangeComplete={(color) => setSelectedColor(color.hex)}
                colors={[
                  "#FF6900",
                  "#FCB900",
                  "#7BDCB5",
                  "#00D084",
                  "#8ED1FC",
                  "#0693E3",
                ]}
              />
            </div>
          </Pop>
        </div>
      )}
      <div className="flex flex-row items-center gap-3">
        {secondaryAction && secondaryAction}
        {primaryAction}
      </div>
    </div>
  );
};

export default Controls;
