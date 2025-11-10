import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { EllipsisVertical } from "lucide-react";

const options = {
  chart: {
    type: "line",
    backgroundColor: "#ffffff",
  },
  title: {
    text: null, // Hide the title
  },
  xAxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    title: { text: "" },
    gridLineColor: "#eeeeee",
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    line: {
      marker: { enabled: false }, // Remove dots on the line
    },
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Solid Line",
      data: [2, 3, 3, 4, 5, 6, 6.5],
      color: "#1A1A1A",
      lineWidth: 2,
    },
    {
      name: "Dotted Line",
      data: [1, 2, 2.5, 3, 3.5, 4, 4.5],
      color: "#1A1A1A",
      dashStyle: "Dot", // Dotted line style
      lineWidth: 1.5,
    },
  ],
};

export default function LineChart() {
  return (
    <div className="shadow-card relative w-full xl:w-[48%] z-0 p-4 mt-2">
      <div className="flex flex-row justify-between items-center p-2">
        <h2 className="py-2 text-[#181d27] font-semibold">Incident Trends</h2>
        <EllipsisVertical className="text-[#a4a7ae]" size={20} />
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
