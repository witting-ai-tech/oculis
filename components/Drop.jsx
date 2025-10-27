"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Drop({
  icon,
  title,
  backIcon,
  items,
  selectedItem,
  onSelect,
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`text-xs xl:text-sm cursor-pointer hover:text-[#414651] ${
            selectedItem &&
            ![
              "All Time",
              "All Sites",
              "Filters",
              "Grid View",
              "All",
              "Anyone",
            ].includes(selectedItem)
              ? "text-purple-500 border-1 border-[#7d48df]"
              : "text-[#414651]"
          }`}
        >
          {icon} {title || selectedItem} {backIcon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.id}
            checked={selectedItem === item.title}
            onCheckedChange={(checked) => {
              if (checked) {
                onSelect?.(item);
              }
            }}
            className={
              selectedItem === item.title && !item.title.includes("All")
                ? "text-purple-500"
                : "text-[#414651]"
            }
          >
            {item.title}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
