"use client";

import React, { useMemo } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const FALLBACK_COLORS = [
  "--chart-1",
  "--chart-2",
  "#FF9900",
  "--chart-4",
  "--chart-5",
];

export default function MultiLineChart({
  data,
  xKey,
  series,
  height = 260,
  margin = { left: 0, right: 20, top: 0, bottom: 0 },
  tickFormatter,
  yAxis = true,
  yAxisProps = {},
  showVerticalGrid = false,
  tooltipContent,
}) {
  // Build ChartConfig for ChartContainer to expose CSS vars like --color-<seriesKey>
  const chartConfig = useMemo(() => {
    return series.reduce((acc, s, i) => {
      const colorToken =
        s.colorVar ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length];
      acc[s.key] = {
        label: s.label ?? s.key,
        color: String(colorToken).startsWith("--")
          ? `var(${colorToken})`
          : colorToken,
      };
      return acc;
    }, {});
  }, [series]);

  return (
    <ChartContainer config={chartConfig} className="w-full" style={{ height }}>
      <LineChart data={data} margin={margin} accessibilityLayer>
        <CartesianGrid vertical={showVerticalGrid} />
        <XAxis
          dataKey={xKey}
          tickLine={false}
          axisLine={true}
          tickMargin={8}
          padding={{ left: 20, right: 20 }}
          tickFormatter={tickFormatter}
        />
        {yAxis && (
          <YAxis
            {...yAxisProps}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={36}
          />
        )}
        <ChartTooltip
          cursor={false}
          content={tooltipContent ?? <ChartTooltipContent />}
        />

        {series.map((s) => (
          <Line
            key={s.key}
            dataKey={s.key}
            type={s.type ?? "monotone"}
            stroke={`var(--color-${s.key})`}
            strokeWidth={s.strokeWidth ?? 2}
            strokeDasharray={s.dashed ? "3 3" : undefined}
            dot={s.dot ?? false}
          />
        ))}
      </LineChart>
    </ChartContainer>
  );
}

// Example usage (paste where needed):
// const data = [
//   { month: "Sunday", desktop: 214, mobile: 140 },
//   { month: "Monday", desktop: 186, mobile: 80 },
//   { month: "Tuesday", desktop: 305, mobile: 200 },
//   { month: "Wednesday", desktop: 237, mobile: 120 },
//   { month: "Thursday", desktop: 73, mobile: 190 },
//   { month: "Friday", desktop: 209, mobile: 130 },
//   { month: "Saturday", desktop: 214, mobile: 140 },
// ];
//
// <MultiLineChart
//   data={data}
//   xKey="month"
//   series={[
//     { key: "desktop", label: "Desktop" },
//     { key: "mobile", label: "Mobile", dashed: true },
//   ]}
//   tickFormatter={(v) => String(v).slice(0, 3)}
//   yAxisProps={{ tickFormatter: (val) => `${val}` }}
// />
