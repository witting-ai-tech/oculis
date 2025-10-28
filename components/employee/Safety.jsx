import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { Card } from "./Card";
import { Table } from "./../Table";
import MultiLineChart from "./../charts/MultiLineChart";
const emp_safety = [
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
          d="M7.41899 18.0127C7.60349 18.1203 7.69573 18.1741 7.82592 18.2021C7.92695 18.2237 8.07435 18.2237 8.17538 18.2021C8.30557 18.1741 8.39782 18.1203 8.58231 18.0127C10.2057 17.0656 14.6673 14.0907 14.6673 10.0003V6.01497C14.6673 5.34871 14.6673 5.01558 14.5584 4.72922C14.4621 4.47625 14.3057 4.25053 14.1026 4.07157C13.8727 3.869 13.5608 3.75203 12.937 3.51809L8.46882 1.84253C8.29557 1.77756 8.20895 1.74508 8.11983 1.7322C8.04079 1.72078 7.96051 1.72078 7.88147 1.7322C7.79236 1.74508 7.70573 1.77756 7.53249 1.84253L3.06432 3.51809C2.44048 3.75203 2.12856 3.869 1.8987 4.07157C1.69564 4.25053 1.53921 4.47625 1.44295 4.72922C1.33398 5.01558 1.33398 5.34871 1.33398 6.01497V10.0003C1.33398 14.0907 5.79562 17.0656 7.41899 18.0127Z"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "PPE Compliance Score",
    value: "96%",
    description: "Modules",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M16.6673 15.8337V13.3337H5.83398C4.45327 13.3337 3.33398 14.4529 3.33398 15.8337M7.33398 18.3337H14.0007C14.9341 18.3337 15.4008 18.3337 15.7573 18.152C16.0709 17.9922 16.3259 17.7372 16.4857 17.4236C16.6673 17.0671 16.6673 16.6004 16.6673 15.667V4.33366C16.6673 3.40024 16.6673 2.93353 16.4857 2.57701C16.3259 2.2634 16.0709 2.00844 15.7573 1.84865C15.4008 1.66699 14.9341 1.66699 14.0007 1.66699H7.33398C5.93385 1.66699 5.23379 1.66699 4.69901 1.93948C4.2286 2.17916 3.84615 2.56161 3.60647 3.03202C3.33398 3.5668 3.33398 4.26686 3.33398 5.66699V14.3337C3.33398 15.7338 3.33398 16.4339 3.60647 16.9686C3.84615 17.439 4.2286 17.8215 4.69901 18.0612C5.23379 18.3337 5.93385 18.3337 7.33398 18.3337Z"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Violations Recorded",
    value: 10,
    description: "In last 30 days",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_20562_13940)">
          <path
            d="M6.24935 10.0003L8.74935 12.5003L13.7493 7.50033M18.3327 10.0003C18.3327 14.6027 14.6017 18.3337 9.99935 18.3337C5.39698 18.3337 1.66602 14.6027 1.66602 10.0003C1.66602 5.39795 5.39698 1.66699 9.99935 1.66699C14.6017 1.66699 18.3327 5.39795 18.3327 10.0003Z"
            stroke="#414651"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_20562_13940">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Safety Trainings Completed",
    value: "8/10",
    description: "Modules",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
      >
        <path
          d="M4.41667 16.667H3.16667C2.24619 16.667 1.5 15.9208 1.5 15.0003V3.33366C1.5 2.41318 2.24619 1.66699 3.16667 1.66699H14.8333C15.7538 1.66699 16.5 2.41318 16.5 3.33366V15.0003C16.5 15.9208 15.7538 16.667 14.8333 16.667H13.5833M9 15.8337C10.3807 15.8337 11.5 14.7144 11.5 13.3337C11.5 11.9529 10.3807 10.8337 9 10.8337C7.61929 10.8337 6.5 11.9529 6.5 13.3337C6.5 14.7144 7.61929 15.8337 9 15.8337ZM9 15.8337L9.01787 15.8335L6.35723 18.4941L4.0002 16.1371L6.51638 13.6209M9 15.8337L11.6607 18.4941L14.0177 16.1371L11.5015 13.6209M6.5 5.00033H11.5M4.83333 7.91699H13.1667"
          stroke="#414651"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Certifications Active",
    value: 3,
    description: "",
  },
];

const trainingCertifications = [
  {
    icon: "/file-icons/pdf.svg",
    title: "Fire Safety Certification",
    size: "200 KB",
  },
  {
    icon: "/file-icons/pdf.svg",
    title: "Machine Operation Training.pdf",
    size: "200 KB",
  },
  {
    icon: "/file-icons/pdf.svg",
    title: "First Aid Certification.pdf",
    size: "300 KB",
  },
  {
    icon: "/file-icons/pdf.svg",
    title: "First Aid Certification.pdf",
    size: "300 KB",
  },
  {
    icon: "/file-icons/pdf.svg",
    title: "First Aid Certification.pdf",
    size: "300 KB",
  },
  {
    icon: "/file-icons/pdf.svg",
    title: "First Aid Certification.pdf",
    size: "300 KB",
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

const violationHistory = [
  {
    date: "28 Aug 2025",
    severity: "High",
    description: "No helmet Detected",
    action: "Warning Issued",
  },
  {
    date: "27 Aug 2025",
    severity: "Medium",
    description: "No Safety Vest Detected",
    action: "Training Assigned",
  },
  {
    date: "20 Aug 2025",
    severity: "Low",
    description: "Gloves Not Worn",
    action: "",
  },
];

const chartData = [
  { month: "Sunday", desktop: 214, mobile: 140 },
  { month: "Monday", desktop: 186, mobile: 80 },
  { month: "Tuesday", desktop: 305, mobile: 200 },
  { month: "Wednesday", desktop: 237, mobile: 120 },
  { month: "Thursday", desktop: 73, mobile: 190 },
  { month: "Friday", desktop: 209, mobile: 130 },
  { month: "Saturday", desktop: 214, mobile: 140 },
];

const Safety = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="grid grid-cols-4 gap-3 justify-between items-center">
        {emp_safety.map((card, index) => (
          <div
            key={index}
            className="shadow-card p-5 flex flex-col gap-3 w-full h-full mt-2"
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
          title="PPE Compliance Trend"
        >
          <MultiLineChart
            data={chartData}
            xKey="month"
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
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
            >
              <path
                d="M4 14.0903V21L8.70289 19.1188C8.81265 19.0749 8.86753 19.053 8.92419 19.0443C8.97444 19.0366 9.02556 19.0366 9.07581 19.0443C9.13247 19.053 9.18735 19.0749 9.29711 19.1188L14 21V14.0903M16.5 8.5C16.5 12.6421 13.1421 16 9 16C4.85786 16 1.5 12.6421 1.5 8.5C1.5 4.35786 4.85786 1 9 1C13.1421 1 16.5 4.35786 16.5 8.5Z"
                stroke="#414651"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title="Trainings and Certifications"
        >
          <div className="space-y-1 h-[296px] overflow-y-auto hide-scrollbar">
            {trainingCertifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-[12px] border flex flex-row items-center justify-between"
              >
                <div className="flex flex-row items-center gap-3">
                  <Image src={cert.icon} alt="pdf" width={40} height={40} />
                  <div className="text-sm">
                    <h4 className="text-[#414651] font-medium">{cert.title}</h4>
                    <p className="text-[#535862]">{cert.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="flex flex-row gap-[14px]">
        <Card
          className="flex-1 text-sm h-[378px] overflow-y-auto hide-scrollbar"
          title="Compliance Timeline"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6 11V15M14 9V15M10 5V15M5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                stroke="#414651"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          <div className="rounded-[8px] border overflow-hidden h-[280px] overflow-y-auto hide-scrollbar">
            <Table columns={columns} data={data} />
          </div>
        </Card>
        <Card
          className="max-w-[360px] w-full text-sm h-[378px] overflow-y-auto hide-scrollbar flex flex-col space-y-4"
          title="Violation History"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          {violationHistory.map((violation, index) => (
            <div key={index} className="space-y-1 text-sm">
              <h5 className="text-[#535862] font-medium">{violation.date}</h5>
              <h5 className="text-base text-[#252B37] font-medium">
                {violation.severity} Severity - {violation.description}
              </h5>
              <h5 className="text-[#535862]">{violation.description}</h5>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default Safety;
