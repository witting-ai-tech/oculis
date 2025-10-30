"use client";
import React, { useState, useEffect, useRef } from "react";
import { CircleHelp, Pen, Trash } from "lucide-react";
import Hnavbar from "@/components/Hnavbar";
import Cameras from "@/components/Cameras";
import DetectedZones from "@/components/DetectedZones";
import CustomLayout from "@/components/CustomLayout";
import { useRouter } from "next/navigation";
import { cameraData } from "@/data/cameraData";
import { detectData } from "@/data/detectData";
import Image from 'next/image';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";


const CamColumns = [
  {
    title: "Camera Name",
    key: "cameraName",
    width: "50%",
    render: (camera) => (
      <div className="flex flex-col gap-2 items-start justify-center min-w-[125px]">
        <p className="text-black">{camera.cameraName}</p>
        <p className="text-gray-500">@{camera.username}</p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Site
        <CircleHelp size={16} />
      </div>
    ),
    key: "site",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Zone
        <CircleHelp size={16} />
      </div>
    ),
    key: "zone",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Floor <CircleHelp size={16} />
      </div>
    ),
    key: "floor",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Models Enabled <CircleHelp size={16} />
      </div>
    ),
    key: "modelsEnabled",
  },
  {
    title: "Status",
    key: "status",
    render: (camera) => {
      let textColor = "";
      let bgColor = "";
      let borderColor = "";

      if (camera.status === "Online") {
        textColor = "text-[#067647]";
        bgColor = "bg-[#ECFDF3]";
        borderColor = "border-[#aaefc6]";
      } else if (camera.status === "Syncing") {
        textColor = "text-[#b54708]";
        bgColor = "bg-[#FFFAEB]";
        borderColor = "border-[#fee396]";
      } else if (camera.status === "Disabled") {
        textColor = "text-[#414651]";
        bgColor = "bg-[#fafafa]";
        borderColor = "border-gray-500";
      } else {
        textColor = "text-[#B42318]";
        bgColor = "bg-[##FEF3F2]";
        borderColor = "border-[#fca5a1]";
      }
      return (
        <p
          className={`h-[22px] text-xs w-fit ${bgColor} ${borderColor} ${textColor} font-medium rounded-full border-1 text-center px-[8px] py-[2px] flex items-center justify-center`}
        >
          {camera.status}
        </p>
      );
    },
  },
  { title: "Last Sync", key: "lastSync" },
   {
    title: "Actions",
    key: "action",
    render: (camera) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded-md border-2 hover:border-[#9e77ed] w-fit p-1">
              <EllipsisVertical size={20} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[100px]">
            <DropdownMenuItem onClick={()=>{
                handleEdit(camera);
              }}>
              <Pen size={16} className="cursor-pointer hover:text-[#181d27]"/> Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{
                handleDelete(camera);
              }}>
              <Trash size={16} className="cursor-pointer hover:text-[#181d27]"/> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// const detectColumns = [
//   {
//     title: "Camera Name",
//     key: "cameraName",
//     width: "30%",
//     render: (camera) => (
//       <div className="flex flex-col gap-2 items-start justify-center min-w-[125px]">
//         <p className="text-black">{camera.cameraName}</p>
//         <p className="text-gray-500">@{camera.username}</p>
//       </div>
//     ),
//   },
//   {
//     title: "Zone Label",
//     key: "zoneLabel",
//   },
//   {
//     title: "Zone Type",
//     key: "zoneType",
//   },
//   {
//     title: "Model Type",
//     key: "modelType",
//   },
//   {
//     title: "Created by",
//     key: "createdBy",
//   },
//   {
//     title: "Last Updated",
//     key: "lastUpdated",
//   },
//   {
//     title: "View",
//     key: "view",
//     render: (camera) => (
//       <Image
//         src={camera.viewImage}
//         alt="View"
//         className="w-16 h-16 object-cover rounded"
//       />
//     ),
//   },
// ];

// const menu = [
//   {
//     title: "Cameras",
//     component: <Cameras columns={CamColumns} cameraData={cameraData} />,
//   },
//   {
//     title: "Detected Zones",
//     component: (
//       <DetectedZones columns={detectColumns} detectData={detectData} />
//     ),
//   },
// ];

const Page = () => {

  const [currentCam, setCurrentCam] = useState(0);
  // const router = useRouter();
  // const init = useRef(true);

  // // 1️⃣ Hydrate from localStorage once
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const saved = localStorage.getItem("currentCam");
  //     if (saved !== null) setCurrentCam(parseInt(saved, 10));
  //   }
  // }, []);

  // // 2️⃣ Persist on change
  // useEffect(() => {
  //   localStorage.setItem("currentCam", currentCam);
  // }, [currentCam]);

  // // 3️⃣ Reset to 0 on any path change (skip first mount)
  // useEffect(() => {
  //   if (init.current) {
  //     init.current = false;
  //     return;
  //   }
  //   setCurrentCam(0);
  // }, [router.asPath]);

  return (
    <CustomLayout>
      <div className="xl:ml-16 pl-16 pr-8 pb-16">
        {/* <div className="w-[50%] xl:w-[40%]">
          <Hnavbar
            menu={menu}
            currentTab={currentCam}
            setCurrentTab={setCurrentCam}
          />
        </div> */}
        {/* <div className="mt-8">{menu[currentCam]?.component}</div> */}

        <Cameras columns={CamColumns} cameraData={cameraData} />
      </div>
    </CustomLayout>
  );
};

export default Page;
