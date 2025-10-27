import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const generateRandomData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 50) + 20);
};

const AreaSpline = ({ isPositive }) => {
  const color = isPositive ? "#17b26a" : "#FF0000";

  const data = generateRandomData(7);

  const options = {
    chart: {
      type: "spline",
      backgroundColor: "transparent",
      height: 50,
    },
    title: { text: "" },
    credits: { enabled: false },
    xAxis: { visible: false },
    yAxis: { visible: false },
    legend: { enabled: false },
    tooltip: { enabled: false },
    plotOptions: {
      spline: {
        marker: { enabled: false },
        lineWidth: 3, // Adjust line thickness
      },
    },
    series: [
      {
        name: "Performance",
        data: data, // Use the random data
        color: color, // Apply the conditional color here
      },
    ],
  };

  return (
    <div className="w-[150px] h-[40px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default AreaSpline;
