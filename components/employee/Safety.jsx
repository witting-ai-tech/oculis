import React from "react";
import Image from "next/image";
import { Card } from "./Card";
import { Table } from "./../Table";
import MultiLineChart from "./../charts/MultiLineChart";
import { Award01, BarChartSquare01, BookClosed, Certificate01, CheckCircle, ClockRewind, DotsVertical, Shield01, TrendUp01 } from "@untitledui/icons";
const emp_safety = [
  {
    icon: (<Shield01 size={20}/>),
    title: "PPE Compliance Score",
    value: "96%",
    description: "Modules",
  },
  {
    icon: (<BookClosed size={20}/>),
    title: "Violations Recorded",
    value: 10,
    description: "In last 30 days",
  },
  {
    icon: (<CheckCircle size={20}/>),
    title: "Safety Trainings Completed",
    value: "8/10",
    description: "Modules",
  },
  {
    icon: (<Certificate01 size={20}/>),
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
          icon={<Award01/>}
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
          icon={<BarChartSquare01/>}
        >
          <div className="rounded-[8px] border overflow-hidden h-[280px] overflow-y-auto hide-scrollbar">
            <Table columns={columns} data={data} />
          </div>
        </Card>
        <Card
          className="max-w-[360px] w-full text-sm h-[378px] overflow-y-auto hide-scrollbar flex flex-col space-y-4"
          title="Violation History"
          icon={<ClockRewind/>}
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
