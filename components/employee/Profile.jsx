import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CircularProgress from "@/components/ui/circularProgress";
import { Separator } from "@/components/ui/separator";
import Timeline from "./../Timeline";
import { Table } from "@/components/Table";

const timeline = [
  {
    time: "10:12:03 AM",
    description: "Safety Checklist submitted",
  },
  {
    time: "10:12:25 AM",
    description: "Clocked In",
  },
  {
    time: "10:14:05 AM",
    description: "Clocked Out",
  },
  {
    time: "10:28:03 AM",
    description: "PPE Violation: No Helmet",
  },
  {
    time: "10:29:03 AM",
    description: "PPE Violation: No Helmet",
  },
];

const columns = [
  { title: "Date", key: "date" },
  { title: "Task", key: "task" },
  { title: "Duration", key: "duration" },
  { title: "Status", key: "status" },
];

const data = [
  {
    date: "Aug 21, 2025",
    task: "Safety Checklist",
    duration: "45 min",
    status: "Done",
  },
  {
    date: "Aug 20, 2025",
    task: "Machine Check",
    duration: "2.5 hrs",
    status: "Issue",
  },
  {
    date: "Aug 19, 2025",
    task: "Report Draft",
    duration: "1 hr",
    status: "Pending",
  },
  {
    date: "Aug 19, 2025",
    task: "Machine Check",
    duration: "45 mins",
    status: "Done",
  },
  {
    date: "Aug 19, 2025",
    task: "Machine Check",
    duration: "45 mins",
    status: "Done",
  },
];

const Profile = ({ currentItem }) => {
  return (
    <>
      <div className="bg-white rounded-[8px] border px-9 py-6">
        <div className="flex flex-row items-center justify-between text-[#414651]">
          <div className="flex flex-row gap-5 items-center">
            <Avatar className="size-25">
              <AvatarImage src={currentItem?.avatarUrl} />
              <AvatarFallback>{currentItem?.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h5 className="text-xl font-semibold text-[#181d27]">
                {currentItem.name}
              </h5>
              <p className="my-[2px]">Logged In</p>
              <p className="text-[#717680]">Today at 9:30</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CircularProgress progress={75} size={90} strokeWidth={8} />
            <p className="font-[#535862] font-medium">Compliance Score</p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-3 gap-[114px]">
          <div className="border-r ">
            <h5 className="text-[#414651] font-medium mb-[6px]">Employee ID</h5>
            <h5 className="text-[#181D27] text-[18px] font-medium">
              #ID {currentItem.id}
            </h5>
          </div>
          <div className="border-r ">
            <h5 className="text-[#414651] font-medium mb-[6px]">Department</h5>
            <h5 className="text-[#181D27] text-[18px] font-medium">
              {currentItem.department}
            </h5>
          </div>
          <div>
            <h5 className="text-[#414651] font-medium mb-[6px]">Email</h5>
            <h5 className="text-[#181D27] text-[18px] font-medium">
              {currentItem.email}
            </h5>
          </div>
        </div>
      </div>
      <div className="my-4 w-full flex flex-row gap-[14px]">
        <div className="p-6 bg-white border rounded-[8px] min-w-fit w-full">
          <h5 className="text-[#414651] font-medium mb-[6px]">Tenure</h5>
          <h5 className="text-[#181D27] text-[18px] font-medium">
            2 yrs 3 months
          </h5>
        </div>
        <div className="p-6 bg-white border rounded-[8px] min-w-fit w-full">
          <h5 className="text-[#414651] font-medium mb-[6px]">Shift Type</h5>
          <h5 className="text-[#181D27] text-[18px] font-medium">Day</h5>
        </div>
        <div className="p-6 bg-white border rounded-[8px] min-w-fit w-full">
          <h5 className="text-[#414651] font-medium mb-[6px]">
            Shift Hours (This week)
          </h5>
          <h5 className="text-[#181D27] text-[18px] font-medium">
            D34 hrs-40 hrsay
          </h5>
        </div>
        <div className="p-6 bg-white border rounded-[8px] min-w-fit w-full">
          <h5 className="text-[#414651] font-medium mb-[6px]">Access Level </h5>
          <h5 className="text-[#181D27] text-[18px] font-medium">
            Standard(View + Log Reports)
          </h5>
        </div>
      </div>
      <div className="flex flex-row gap-[14px]">
        <div className="p-6 bg-white border rounded-[8px] max-w-[350px] w-full text-sm h-[378px] overflow-y-auto hide-scrollbar">
          <h4 className="font-medium text-base">Recent Activity</h4>
          <Separator className="my-3" />
          <Timeline timeline={timeline} direction={"col"} />
        </div>
        <div className="p-6 bg-white border rounded-[8px] flex-1 w-full">
          <div className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M20.7 11.5L18.7005 9.5L16.7 11.5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C13.3019 1 16.1885 2.77814 17.7545 5.42909M10 5V10L13 12"
                stroke="#181D27"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className="font-medium">Work Metrices</h4>
          </div>
          <Separator className="my-3" />
          <div className="rounded-[8px] border overflow-hidden h-[280px] overflow-y-auto hide-scrollbar">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
