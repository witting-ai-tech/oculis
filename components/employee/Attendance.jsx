import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { Users } from "lucide-react";
import { Card } from "./Card";
import { Table } from "./../Table";
import MultiLineChart from "./../charts/MultiLineChart";

const emp_attendance = [
  {
    icon: <Users size={16} />,
    title: "Attendance Score",
    value: "92%",
    description: "this month",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
      >
        <path
          d="M9 6.66699L12.3333 10.0003M12.3333 10.0003L9 13.3337M12.3333 10.0003H1.5M1.78152 5.83366C3.22239 3.34282 5.91549 1.66699 9 1.66699C13.6024 1.66699 17.3333 5.39795 17.3333 10.0003C17.3333 14.6027 13.6024 18.3337 9 18.3337C5.91549 18.3337 3.22239 16.6578 1.78152 14.167"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Avg Check-in Time",
    value: "9:12 AM",
    description: "2 late arrivals",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          d="M14.9993 5.66667L18.3327 9M18.3327 9L14.9993 12.3333M18.3327 9H7.49935M12.4993 2.50337C11.4371 1.86523 10.2037 1.5 8.88824 1.5C4.89951 1.5 1.66602 4.85786 1.66602 9C1.66602 13.1421 4.89951 16.5 8.88824 16.5C10.2037 16.5 11.4371 16.1348 12.4993 15.4966"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Avg Check-Out Time",
    value: "5:31 PM",
    description: "2 early Check-outs",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <path
          d="M17.9166 8.58333L16.2505 10.25L14.5833 8.58333M16.4542 9.83333C16.4845 9.55972 16.5 9.28167 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C11.3561 16.5 13.4584 15.4136 14.8333 13.7144M9 4.83333V9L11.5 10.6667"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
      >
        <path
          d="M9 6.66699L12.3333 10.0003M12.3333 10.0003L9 13.3337M12.3333 10.0003H1.5M1.78152 5.83366C3.22239 3.34282 5.91549 1.66699 9 1.66699C13.6024 1.66699 17.3333 5.39795 17.3333 10.0003C17.3333 14.6027 13.6024 18.3337 9 18.3337C5.91549 18.3337 3.22239 16.6578 1.78152 14.167"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Late Check-In",
    description: "5 days ago",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          d="M14.9993 5.66667L18.3327 9M18.3327 9L14.9993 12.3333M18.3327 9H7.49935M12.4993 2.50337C11.4371 1.86523 10.2037 1.5 8.88824 1.5C4.89951 1.5 1.66602 4.85786 1.66602 9C1.66602 13.1421 4.89951 16.5 8.88824 16.5C10.2037 16.5 11.4371 16.1348 12.4993 15.4966"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Early Check-Out",
    description: "3 days ago",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
      >
        <path
          d="M12.166 15.7285C13.9338 14.4406 15.0827 12.3543 15.0827 9.99967C15.0827 6.08766 11.9114 2.91634 7.99935 2.91634H7.58268M7.99935 17.083C4.08733 17.083 0.916016 13.9117 0.916016 9.99967C0.916016 7.64506 2.0649 5.55878 3.83268 4.27084M7.16602 18.6663L8.83268 16.9997L7.16602 15.333M8.83268 4.66634L7.16602 2.99967L8.83268 1.33301"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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
              <BsThreeDotsVertical className="text-[#a4a7ae] cursor-pointer" />
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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
            >
              <path
                d="M21 1L13.1314 8.86863C12.7354 9.26465 12.5373 9.46265 12.309 9.53684C12.1082 9.6021 11.8918 9.6021 11.691 9.53684C11.4627 9.46265 11.2646 9.26465 10.8686 8.86863L8.13137 6.13137C7.73535 5.73535 7.53735 5.53735 7.30902 5.46316C7.10817 5.3979 6.89183 5.3979 6.69098 5.46316C6.46265 5.53735 6.26465 5.73535 5.86863 6.13137L1 11M21 1H14M21 1V8"
                stroke="#414651"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
            >
              <path
                d="M11.9998 8.00023V12.0002M11.9998 16.0002H12.0098M10.6151 2.89195L2.39019 17.0986C1.93398 17.8866 1.70588 18.2806 1.73959 18.6039C1.769 18.886 1.91677 19.1423 2.14613 19.309C2.40908 19.5002 2.86435 19.5002 3.77487 19.5002H20.2246C21.1352 19.5002 21.5904 19.5002 21.8534 19.309C22.0827 19.1423 22.2305 18.886 22.2599 18.6039C22.2936 18.2806 22.0655 17.8866 21.6093 17.0986L13.3844 2.89195C12.9299 2.10679 12.7026 1.71421 12.4061 1.58235C12.1474 1.46734 11.8521 1.46734 11.5935 1.58235C11.2969 1.71421 11.0696 2.10679 10.6151 2.89195Z"
                stroke="#414651"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M20.7 11.5L18.7005 9.5L16.7 11.5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C13.3019 1 16.1885 2.77814 17.7545 5.42909M10 5V10L13 12"
                stroke="#414651"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          <div className="rounded-[8px] border overflow-hidden max-h-[280px] overflow-y-auto hide-scrollbar">
            <Table columns={attendanceLogColumns} data={attendanceLogData} />
          </div>
        </Card>
        <Card
          className="flex-1 text-sm h-[378px] overflow-y-auto hide-scrollbar"
          title="Shift Summary"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M20.7 11.5L18.7005 9.5L16.7 11.5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C13.3019 1 16.1885 2.77814 17.7545 5.42909M10 5V10L13 12"
                stroke="#414651"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
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
