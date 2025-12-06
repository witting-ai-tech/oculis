"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

// ============================================================================
// PILL COLOR VARIANTS
// ============================================================================

export type PillVariant =
  | "orange" // Warning/In Progress
  | "green" // Success/Completed
  | "red" // Error/Cancelled
  | "gray" // Neutral/Scheduled
  | "purple" // Primary/Required
  | "blue" // Info/Active
  | "yellow" // Warning/Pending
  | "darkred";

export const pillVariants: Record<PillVariant, string> = {
  orange:
    "text-[var(--color-orange-700)] bg-[var(--color-orange-50)] border border-[var(--color-orange-200)]",
  green:
    "text-[var(--color-green-700)] bg-[var(--color-green-50)] border border-[var(--color-green-200)]",
  red: "text-[var(--color-red-700)] bg-[var(--color-red-50)] border border-[var(--color-red-200)]",
  gray: "text-[var(--color-gray-700)] bg-[var(--color-gray-50)] border border-[var(--color-gray-200)]",
  purple:
    "text-[var(--color-purple-700)] bg-[var(--color-purple-50)] border border-[var(--color-purple-200)]",
  blue: "text-[var(--color-blue-700)] bg-[var(--color-blue-50)] border border-[var(--color-blue-200)]",
  yellow:
    "text-[var(--color-orange-700)] bg-[var(--color-yellow-50)] border border-[var(--color-yellow-600)]",
  darkred: "text-[var(--color-red-900)] bg-[var(--color-red-60)] border border-[var(--color-red-400)]",
};

export const pillVariantsAlt: Record<PillVariant, string> = {
  orange:
    "text-[var(--color-orange-700)] bg-[var(--color-orange-50)] border border-[var(--color-orange-200)]",
  green:
    "text-[var(--color-green-700)] bg-[var(--color-green-50)] border border-[var(--color-green-200)]",
  red: "text-[var(--color-red-700)] bg-[var(--color-red-50)] border border-[var(--color-red-200)]",
  gray: "text-[var(--color-gray-700)] bg-[var(--color-gray-50)] border border-[var(--color-gray-200)]",
  purple:
    "text-[var(--color-purple-700)] bg-[var(--color-purple-50)] border border-[var(--color-purple-200)]",
  blue: "text-[var(--color-blue-700)] bg-[var(--color-blue-50)] border border-[var(--color-blue-200)]",
  yellow:
    "text-[var(--color-orange-700)] bg-[var(--color-yellow-50)] border border-[var(--color-yellow-600)]",
  darkred: "text-[var(--color-red-900)] bg-[var(--color-red-60)] border border-[var(--color-red-400)]",

};

// ============================================================================
// STATUS MAPPINGS
// ============================================================================

/**
 * Map status values to their color variants
 * You can add more mappings here as needed
 */
export const statusVariantMap: Record<string, PillVariant> = {
  
  //Alert Statuses
  Acknowledged :"green",
  Dismissed: "gray",
  "In Progress": "yellow",
  Pending: "yellow",
  Escalated: "red",

  //Severity colors
  Low: "green",
  Medium:"yellow",
  High: "orange",
  Critical: "red",

    // Meeting statuses
  Ongoing: "orange",
  Completed: "green",
  Cancelled: "red",
  Scheduled: "gray",

  // User statuses
  Active: "green",
  Suspended: "red",
  Invited: "orange",

  // Field mappings
  Required: "purple",
  Optional: "gray",

  // Access statuses
  "Platform Access": "purple",
  NA: "gray",

  // User types
  Internal: "gray",
  External: "orange",

  // Roles
  Admin: "red",
  Manager: "blue",
  Viewer: "gray",
  Supervisor: "purple",
};

// ============================================================================
// PILL COMPONENT
// ============================================================================

export interface PillProps {
  /** The text to display in the pill */
  label: string;
  /** The color variant to use. If not provided, will try to map from label */
  variant?: PillVariant;
  /** Use alternative color scheme */
  useAlt?: boolean;
  /** Custom className to override default styles */
  className?: string;
  /** Size variant */
  size?: "sm" | "md" | "lg";
}

/**
 * Generic Pill component for consistent styling across tables
 * Automatically maps status labels to color variants
 */
const PillComponent: React.FC<PillProps> = ({
  label,
  variant,
  useAlt = false,
  className = "",
  size = "md",
}) => {
  // Determine variant from label if not provided
  const resolvedVariant = variant || statusVariantMap[label] || "gray";

  // Get color scheme
  const colorScheme = useAlt
    ? pillVariantsAlt[resolvedVariant]
    : pillVariants[resolvedVariant];

  // Size classes
  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5 h-5",
    md: "text-[12px] leading-[18px] px-2.5 h-6",
    lg: "text-sm px-3 py-1 h-7",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full text-xs font-medium whitespace-nowrap
         ${colorScheme} ${sizeClasses[size]} ${className}`}
    >
      {label}
    </span>
  );
};

PillComponent.displayName = "Pill";
export const Pill = PillComponent;

/**
 * Badge-based Pill component (uses shadcn Badge component)
 */
const BadgePillComponent: React.FC<PillProps> = ({
  label,
  variant,
  useAlt = false,
  className = "",
  size = "md",
}) => {
  const resolvedVariant = variant || statusVariantMap[label] || "gray";
  const colorScheme = useAlt
    ? pillVariantsAlt[resolvedVariant]
    : pillVariants[resolvedVariant];

  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5",
    md: "px-2.5 py-0.5 text-xs",
    lg: "px-3 py-1 text-sm",
  };

  return (
    <Badge
      variant="outline"
      className={`${colorScheme} border rounded-full ${sizeClasses[size]} font-medium ${className} whitespace-nowrap`}
    >
      {label}
    </Badge>
  );
};

BadgePillComponent.displayName = "BadgePill";
export const BadgePill = BadgePillComponent;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get the variant for a given status label
 */
export const getStatusVariant = (label: string): PillVariant => {
  return statusVariantMap[label] || "gray";
};
