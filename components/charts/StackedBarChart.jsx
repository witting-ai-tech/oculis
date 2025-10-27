"use client";

import React, { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const FALLBACK_COLORS = ["--chart-5", "--chart-4", "--chart-3"];

export default function StackedBarChart({
  data,
  xKey,
  series,
  height = 280,
  margin = { top: 0, right: 12, bottom: 0, left: 0 },
  showGrid = true,
  showYAxis = false,
  yAxisProps = {},
  xTickFormatter,
  xPadding = { left: 0, right: 12 },
  barCategoryGap = 24,
  barGap = 0,
  showLegend = true,
  legendContent,
  tooltipContent,
  stackId = "a",
}) {
  // Build ChartConfig used by ChartContainer to expose CSS vars
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
      <BarChart
        data={data}
        accessibilityLayer
        margin={margin}
        barCategoryGap={barCategoryGap}
        barGap={barGap}
        barSize={40}
      >
        {showGrid && <CartesianGrid vertical={false} />}

        <XAxis
          dataKey={xKey}
          tickLine={false}
          axisLine={true}
          tickMargin={10}
          padding={xPadding}
          tickFormatter={xTickFormatter}
        />

        {showYAxis && (
          <YAxis
            width={36}
            tickLine={false}
            axisLine={false}
            tickMargin={6}
            {...yAxisProps}
          />
        )}

        <ChartTooltip
          content={tooltipContent ?? <ChartTooltipContent hideLabel />}
        />
        {showLegend && (
          <ChartLegend
            verticalAlign="top"
            horizontalAlign="right"
            content={legendContent ?? <ChartLegendContent />}
          />
        )}

        {series.map((s, i) => (
          <Bar
            key={s.key}
            dataKey={s.key}
            stackId={s.stackId ?? stackId}
            fill={`var(--color-${s.key})`}
            radius={i === series.length - 1 ? [5, 5, 0, 0] : [0, 0, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}

// Example usage:
// const data = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];
//
// <StackedBarChart
//   data={data}
//   xKey="month"
//   series={[
//     { key: "desktop", label: "Desktop" },
//     { key: "mobile", label: "Mobile" },
//   ]}
//   xTickFormatter={(v) => String(v).slice(0, 3)}
//   showYAxis
// />
