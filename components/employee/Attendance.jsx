import React from "react";
import { Users01, ArrowCircleBrokenRight, DotsVertical, AlertTriangle, RefreshCcw04, TrendUp01, LogOut04, ClockFastForward, ClockRewind } from "@untitledui/icons";
import { Card } from "./Card";
import { Table } from "./../Table";
import MultiLineChart from "./../charts/MultiLineChart";

const emp_attendance = [
  {
    icon: <Users01 size={20} />,
    title: "Attendance Score",
    value: "92%",
    description: "this month",
  },
  {
    icon: ( <ArrowCircleBrokenRight size={20}/>
    ),
    title: "Avg Check-in Time",
    value: "9:12 AM",
    description: "2 late arrivals",
  },
  {
    icon: (<LogOut04 size={20}/>
    ),
    title: "Avg Check-Out Time",
    value: "5:31 PM",
    description: "2 early Check-outs",
  },
  {
    icon: (<ClockFastForward size={20}/>),
    title: "Avg Hours Worked",
    value: "7h 25m/day",
    description: "",
  },
];

const columns = [
  { title: "Date", key: "date" },
  { title: "Event", key: "event" },
  { title: "Acknowledged by", key: "acknowledgedBy" },
];

const data = [
  {
    date: "Aug 21, 2025",
    event: "No Helmet Detected",
    acknowledgedBy: "John Smith – Safety Officer",
  },
  {
    date: "Aug 20, 2025",
    event: "No Vest Detected",
    acknowledgedBy: "Maria Lopez – Supervisor",
  },
  {
    date: "Aug 19, 2025",
    event: "No Hardhat",
    acknowledgedBy: "Arun Mehta – Plant Supervisor",
  },
  {
    date: "Aug 19, 2025",
    event: "No Safety Vest",
    acknowledgedBy: "John Smith – Safety Officer",
  },
  {
    date: "Aug 22, 2025",
    event: "No Safety Vest",
    acknowledgedBy: "John Smith – Safety Officer",
  },
];

const attendanceLogColumns = [
  { title: "Date", key: "date" },
  { title: "Check In", key: "checkIn" },
  { title: "Check Out", key: "checkOut" },
  { title: "Total Hours", key: "totalHours" },
];

const attendanceLogData = [
  {
    date: "Aug 21, 2025",
    checkIn: "9:12 AM",
    checkOut: "5:30 PM",
    totalHours: "8 hrs 18 mins",
  },
  {
    date: "Aug 20, 2025",
    checkIn: "9:15 AM",
    checkOut: "5:31 PM",
    totalHours: "8 hrs 22 mins",
  },
  {
    date: "Aug 19, 2025",
    checkIn: "9:13 AM",
    checkOut: "5:31 PM",
    totalHours: "8 hrs 20 mins",
  },
];

const shiftSummaryColumns = [
  { title: "Shift", key: "shift" },
  { title: "Planned", key: "planned" },
  { title: "Present", key: "present" },
  { title: "Absent", key: "absent" },
];

const shiftSummaryData = [
  { shift: "Morning", planned: 50, present: 47, absent: 3 },
  { shift: "Evening", planned: 45, present: 43, absent: 2 },
  { shift: "Night", planned: 40, present: 38, absent: 2 },
  { shift: "Night", planned: 40, present: 38, absent: 2 },
  { shift: "Night", planned: 40, present: 38, absent: 2 },
];

const chartData = [
  { day: "Sunday", desktop: 214, mobile: 140 },
  { day: "Monday", desktop: 186, mobile: 80 },
  { day: "Tuesday", desktop: 305, mobile: 200 },
  { day: "Wednesday", desktop: 237, mobile: 120 },
  { day: "Thursday", desktop: 73, mobile: 190 },
  { day: "Friday", desktop: 209, mobile: 130 },
  { day: "Saturday", desktop: 214, mobile: 140 },
];

const exceptions = [
  {
    icon: (
      <AlertTriangle/>
    ),
    title: "Late Check-In",
    description: "5 days ago",
  },
  {
    icon: (
      <ArrowCircleBrokenRight/>
    ),
    title: "Early Check-Out",
    description: "3 days ago",
  },
  {
    icon: (
      <RefreshCcw04/>
    ),
    title: "Swift - Swap Request: Approved",
    description: "Aug 12, 2025",
  },
];

const Attendance = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row gap-3 justify-between items-center">
        {emp_attendance.map((card, index) => (
          <div
            key={index}
            className="shadow-card p-5 flex flex-col gap-3 w-[300px] h-fit cursor-pointer mt-2"
          >
            <div className="flex flex-row justify-between items-center mb-2">
              <div className="p-[10px] rounded-[8px] shadow-skew border">
                {card.icon}
              </div>
              <DotsVertical className="text-[#a4a7ae] cursor-pointer" />
            </div>
            <h2 className="text-[#252b37] text-[16px] font-semibold mb-2">
              {card.title}
            </h2>
            <h1 className="text-[#252b37] text-3xl font-bold">{card.value}</h1>
            <p className="text-sm text-[#535862]">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card
          icon={<TrendUp01/>}
          title="Attendance Log"
        >
          <MultiLineChart
            data={chartData}
            xKey="day"
            yAxis={false}
            series={[
              { key: "desktop", label: "Desktop", type: "linear" },
              { key: "mobile", label: "Mobile", dashed: true, type: "linear" },
            ]}
            tickFormatter={(v) => String(v).slice(0, 3)}
          />
        </Card>
        <Card
          icon={<AlertTriangle/>}
          title="Exceptions"
          className="flex flex-col space-y-3 overflow-y-auto text-sm max-h-[378px] hide-scrollbar"
        >
          {exceptions.map((exception, index) => (
            <div
              key={index}
              className="p-4 rounded-[12px] border flex flex-row items-center gap-3"
            >
              <div className="h-10 w-10 rounded-full p-[10px]">
                {exception.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#414651] font-semibold">
                  {exception.title}
                </h2>
                <p className="text-[#535862]">{exception.description}</p>
              </div>
            </div>
          ))}
        </Card>
      </div>
      <div className="flex flex-row gap-[14px]">
        <Card
          className="max-w-[55%] w-full text-sm h-[378px] overflow-y-auto hide-scrollbar"
          title="Attendance Log"
          icon={<ClockRewind/>}
        >
          <div className="rounded-[8px] border overflow-hidden max-h-[280px] overflow-y-auto hide-scrollbar">
            <Table columns={attendanceLogColumns} data={attendanceLogData} />
          </div>
        </Card>
        <Card
          className="flex-1 text-sm h-[378px] overflow-y-auto hide-scrollbar"
          title="Shift Summary"
          icon={<ClockRewind/>}
        >
          <div className="rounded-[8px] border overflow-hidden max-h-[280px] overflow-y-auto hide-scrollbar">
            <Table columns={shiftSummaryColumns} data={shiftSummaryData} />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Attendance;
