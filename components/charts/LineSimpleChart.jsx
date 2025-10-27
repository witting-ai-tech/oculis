"use client";

import React, { useMemo } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

/**
 * Reusable single-line chart (no Card wrapper)
 * Built on shadcn/ui ChartContainer + Recharts
 *
 * Minimal usage:
 * <LineChartSimple
 *   data={[{ month: "January", desktop: 186 }]}
 *   xKey="month"
 *   yKey="desktop"
 * />
 */
export default function LineChartSimple({
  data,
  xKey,
  yKey = "value",
  label,
  colorVar = "--chart-1",
  height = 45,
  margin = { top: 8, right: 8, bottom: 8, left: 8 },
  showGrid = true,
  showYAxis = false,
  yAxisProps = {},
  xTickFormatter,
  xPadding = { left: 0, right: 12 },
  lineType = "monotone", // "linear" | "basis" | "natural" | "step" etc.
  strokeWidth = 2,
  dot = false,
  tooltipContent,
}) {
  const chartConfig = useMemo(() => {
    const color = String(colorVar).startsWith("--")
      ? `var(${colorVar})`
      : colorVar;
    return {
      [yKey]: {
        label: label ?? yKey,
        color,
      },
    };
  }, [yKey, label, colorVar]);

  return (
    <ChartContainer config={chartConfig} className="w-full" style={{ height }}>
      <LineChart data={data} accessibilityLayer margin={margin}>
        {showGrid && <CartesianGrid vertical={false} horizontal={false} />}
        <XAxis
          dataKey={xKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          padding={xPadding}
          tickFormatter={xTickFormatter}
          hide
        />
        {showYAxis && (
          <YAxis
            width={40}
            tickLine={false}
            axisLine={false}
            tickMargin={6}
            {...yAxisProps}
          />
        )}
        {/* <ChartTooltip
          cursor={false}
          content={tooltipContent ?? <ChartTooltipContent hideLabel />}
        /> */}
        <Line
          dataKey={yKey}
          type={lineType}
          stroke={`var(--color-${yKey})`}
          strokeWidth={strokeWidth}
          dot={dot}
        />
      </LineChart>
    </ChartContainer>
  );
}

// Example usage with your data:
// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ];
//
// <LineChartSimple
//   data={chartData}
//   xKey="month"
//   yKey="desktop"
//   xTickFormatter={(v) => String(v).slice(0, 3)}
//   lineType="natural"
// />
