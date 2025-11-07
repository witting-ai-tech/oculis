import React, { useState } from "react";
import { ArrowLeft, ChevronDown, SearchLg, FilterLines } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Drop from "@/components/Drop";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

const extraFilters = [
  { id: 1, title: "All Time" },
  { id: 2, title: "Gurgaon" },
  { id: 3, title: "Delhi" },
  { id: 4, title: "Noida" },
  { id: 5, title: "All" },
];

const cams = {
  defaultValue: "Select Camera",
  options: [
    { id: 1, title: "Floor Camera 1" },
    { id: 2, title: "Floor Camera 2" },
    { id: 3, title: "Floor Camera 3" },
    { id: 4, title: "Floor Camera 4" },
  ],
};

const DetectNav = () => {
  const [selectedCam, setSelectedCam] = useState(cams.defaultValue);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <nav className="mt-8 flex flex-row justify-between ml-8 mr-6">
      <div className="flex flex-row items-center gap-4">
        <button
          className="flex flex-row items-center gap-[6px] font-semibold text-base text-[#535862]"
          onClick={handleBack}
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`text-sm cursor-pointer hover:text-[#414651] ${
                selectedCam &&
                !["Filters", "Select Camera"].includes(selectedCam)
                  ? "text-[#181D27] border-1 border-[#7d48df]"
                  : ""
              }`}
            >
              <div className="flex flex-row items-center w-full gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3337 7.44313C18.3337 6.93829 18.3337 6.68586 18.2338 6.56898C18.1472 6.46756 18.0173 6.41373 17.8843 6.4242C17.7311 6.43626 17.5526 6.61475 17.1956 6.97173L14.167 10.0003L17.1956 13.0289C17.5526 13.3859 17.7311 13.5644 17.8843 13.5765C18.0173 13.5869 18.1472 13.5331 18.2338 13.4317C18.3337 13.3148 18.3337 13.0624 18.3337 12.5575V7.44313Z"
                    stroke="#717680"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.66699 8.16699C1.66699 6.76686 1.66699 6.0668 1.93948 5.53202C2.17916 5.06161 2.56161 4.67916 3.03202 4.43948C3.5668 4.16699 4.26686 4.16699 5.66699 4.16699H10.167C11.5671 4.16699 12.2672 4.16699 12.802 4.43948C13.2724 4.67916 13.6548 5.06161 13.8945 5.53202C14.167 6.0668 14.167 6.76686 14.167 8.16699V11.8337C14.167 13.2338 14.167 13.9339 13.8945 14.4686C13.6548 14.939 13.2724 15.3215 12.802 15.5612C12.2672 15.8337 11.5671 15.8337 10.167 15.8337H5.66699C4.26686 15.8337 3.5668 15.8337 3.03202 15.5612C2.56161 15.3215 2.17916 14.939 1.93948 14.4686C1.66699 13.9339 1.66699 13.2338 1.66699 11.8337V8.16699Z"
                    stroke="#717680"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {selectedCam}
              </div>
              <ChevronDown size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="lg:w-[250px] xl:w-[290px]">
            {cams.options.map((item) => (
              <DropdownMenuCheckboxItem
                key={item.id}
                checked={selectedCam === item.title}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCam(item.title);
                  }
                }}
                className={
                  selectedCam === item.title && !item.title.includes("All")
                    ? "text-purple-500"
                    : ""
                }
              >
                {item.title}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="relative w-[200px] xl:w-[320px] ">
          <SearchLg className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-10 py-[16px] bg-white focus:border-none focus-visible:ring-1"
          />
        </div>
        <Drop
          icon={<FilterLines />}
          title="Filters"
          items={extraFilters}
          selectedItem="Filters"
        />
      </div>
    </nav>
  );
};

export default DetectNav;
