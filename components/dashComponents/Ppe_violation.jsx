import React from "react";
import DashCard from "./../DashCard";
import DashTabCard from "./../DashTabCard";
import { EllipsisVertical } from "lucide-react";
import MultiLineChart from "./../charts/MultiLineChart";
import StackedBarChart from "./../charts/StackedBarChart";

const chartData = [
  { day: "Sunday", PPE: 2, Helmet: 1 },
  { day: "Monday", PPE: 3, Helmet: 2 },
  { day: "Tuesday", PPE: 3, Helmet: 2.5 },
  { day: "Wednesday", PPE: 4, Helmet: 3 },
  { day: "Thursday", PPE: 5, Helmet: 3.5 },
  { day: "Friday", PPE: 6, Helmet: 4 },
  { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
];

const barCharts = [
  { day: "Sun", Minor: 6, Moderate: 4, Critical: 5 },
  { day: "Mon", Minor: 5, Moderate: 5, Critical: 4 },
  { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
  { day: "Wed", Minor: 8, Moderate: 6, Critical: 5 },
  { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
  { day: "Fri", Minor: 8, Moderate: 6, Critical: 5 },
  { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
];
const Ppe_violation = ({ primeCardsInfo, incidentData }) => {
  return (
    <>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
        {primeCardsInfo.map((card, index) => (
          <DashCard
            key={index}
            title={card.title}
            value={card.value}
            percentageChange={card.percentageChange}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {incidentData.map((card, index) => (
          <DashTabCard key={index} card={card} />
        ))}
      </div>
      <div className="grid grid-cols-1 min-[1025px]:grid-cols-2 mt-8 gap-8">
        <div className="w-full shadow-card p-4 ">
          <div className="flex flex-row justify-between items-center p-2">
            <h2 className="py-2 text-[#181d27] font-semibold">
              Incident Trends
            </h2>
            <EllipsisVertical className="text-[#a4a7ae]" size={20} />
          </div>
          <div className="w-full relative flex items-center justify-center mt-2 ">
            <MultiLineChart
              data={chartData}
              xKey="day"
              height={400}
              series={[
                { key: "PPE", label: "PPE", type: "linear" },
                {
                  key: "Helmet",
                  label: "Helmet",
                  dashed: true,
                  type: "linear",
                },
              ]}
              tickFormatter={(v) => String(v).slice(0, 3)}
            />
          </div>
        </div>

        <div className="w-full shadow-card p-4">
          <div className="flex flex-row justify-between items-center p-2">
            <h2 className="py-2 text-[#181d27] font-semibold">
              Incident Severity Breakdown
            </h2>
            <EllipsisVertical className="text-[#a4a7ae]" size={20} />
          </div>
          <div className="mt-2">
            <StackedBarChart
              data={barCharts}
              xKey="day"
              height={400}
              series={[
                { key: "Critical", label: "Critical" },
                { key: "Moderate", label: "Moderate" },
                { key: "Minor", label: "Minor" },
              ]}
              xTickFormatter={(v) => String(v).slice(0, 3)}
              showYAxis
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ppe_violation;
