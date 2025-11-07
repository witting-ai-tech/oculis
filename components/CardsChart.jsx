"use client";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DotsVertical } from "@untitledui/icons";
import { Separator } from "@/components/ui/separator";

const CardsChart = ({ data }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const processedData = processChartData(data);

    // Prepare possible names for each series
    const possibleNames = [
      ["Hardhat", "Helmet", "Headgear"],
      ["Safety Goggles", "Eye Protection", "Goggles"],
      ["Safety Shoes", "Footwear", "Boots"],
    ];

    // Randomly pick one name for each series
    const getRandomName = (names) =>
      names[Math.floor(Math.random() * names.length)];

    const seriesData = [
      {
        name: getRandomName(possibleNames[0]),
        data: processedData.hardhat,
        color: "#FF9900",
      },
      {
        name: getRandomName(possibleNames[1]),
        data: processedData.goggles,
        color: "#A020F0",
      },
      {
        name: getRandomName(possibleNames[2]),
        data: processedData.shoes,
        color: "#4169E1",
      },
    ];

    // Shuffle the series array so the order is random
    for (let i = seriesData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [seriesData[i], seriesData[j]] = [seriesData[j], seriesData[i]];
    }

    setChartOptions({
      chart: {
        type: "spline",
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: processedData.categories,
        title: {
          text: "Day of the Week",
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: "Number of Incidents",
          enabled: false,
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
      series: seriesData,
    });
  }, [data]);

  const processChartData = (data) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const violations = { Hardhat: [], Goggles: [], Shoes: [] };

    // days.forEach(() => {
    //   violations.Hardhat.push(Math.floor(Math.random() * 10));
    //   violations.Goggles.push(Math.floor(Math.random() * 10));
    //   violations.Shoes.push(Math.floor(Math.random() * 10));
    // });

    // Process the data to count violations per day
    days.forEach(() => {
      violations.Hardhat.push(0);
      violations.Goggles.push(0);
      violations.Shoes.push(0);
    });

    data.forEach((item) => {
      const date = new Date(item.date);
      const dayIndex = date.getDay(); // 0 (Sun) to 6 (Sat)

      if (item.violation === "Hardhat") {
        violations.Hardhat[dayIndex]++;
      } else if (item.violation === "Goggles") {
        violations.Goggles[dayIndex]++;
      } else if (item.violation === "Shoes") {
        violations.Shoes[dayIndex]++;
      }
    });

    return {
      categories: days,
      hardhat: violations.Hardhat,
      goggles: violations.Goggles,
      shoes: violations.Shoes,
    };
  };

  return (
    <div className="shadow-card relative w-full z-0 p-4 mt-2 mb-8">
      <div className="flex flex-row justify-between items-center p-2 pb-4">
        <h2 className="py-2 text-[#181d27] font-semibold">
          Incident Over Time
        </h2>
        <DotsVertical className="text-[#a4a7ae]" size={20} />
      </div>
      <Separator />
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default CardsChart;
