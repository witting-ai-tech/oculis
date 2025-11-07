import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DotsVertical } from "@untitledui/icons";

const options = {
  chart: {
    type: "column",
    backgroundColor: "#ffffff",
  },
  title: {
    text: null,
  },
  xAxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    min: 0,
    title: { text: "" },
    gridLineColor: "#eeeeee",
    stackLabels: {
      enabled: false, // Remove values on top
    },
  },
  legend: {
    align: "right",
    verticalAlign: "top",
    layout: "horizontal",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    column: {
      stacking: "normal",
      borderRadius: 5, // Rounded bars
    },
  },
  series: [
    {
      name: "Minor",
      data: [6, 5, 7, 8, 7, 8, 7],
      color: "#FFECB3",
    },
    {
      name: "Moderate",
      data: [4, 5, 5, 6, 6, 6, 5],
      color: "#FFB300",
    },
    {
      name: "Critical",
      data: [5, 4, 6, 5, 4, 5, 5],
      color: "#E53935",
    },
  ],
};

export default function BarChart() {
  return (
    <div className="shadow-card w-full p-4">
      <div className="flex flex-row justify-between items-center p-2">
        <h2 className="py-2 text-[#181d27] font-semibold">
          Incident Severity Breakdown
        </h2>
        <DotsVertical className="text-[#a4a7ae]" size={20} />
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
