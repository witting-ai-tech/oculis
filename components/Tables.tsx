"use client";

import React, { useEffect, useState } from "react";
import { Trash2, Pen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Column, SortConfig, Accessor } from "@/types/table";

// Dont touch

type TableProps<T> = {
  columns: Column<T>[];
  data: T[] | null | undefined;
  onDelete?: (row: T) => void;
  onEdit?: (row: T) => void;
  selectable?: boolean;
  setCurrentItem?: (row: T) => void;
  setOverlay?: (open: boolean) => void;
  handleSort?: (key: Accessor<T>) => void;
  sortConfig?: SortConfig<T>;
  onSelectionChange?: (selectedIndexes: number[]) => void;
};

// ===== Component =====
export function Table<T>({
  columns,
  data,
  onDelete,
  onEdit,
  selectable = false,
  setCurrentItem,
  setOverlay,
  handleSort,
  sortConfig, // available if you want to show sort indicators
  onSelectionChange = () => {},
}: TableProps<T>) {
  const [selected, setSelected] = useState<number[]>([]);
  const rows = Array.isArray(data) ? (data as T[]) : [];

  useEffect(() => {
    onSelectionChange(selected);
  }, [selected, onSelectionChange]);

  const handleSetCurrentItem = (item: T) => {
    if (setCurrentItem) {
      setCurrentItem(item);
      console.log("item", item);
      setOverlay?.(true);
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const next = rows.map((_, idx) => idx);
      setSelected(next);
      onSelectionChange(next);
    } else {
      setSelected([]);
      onSelectionChange([]);
    }
  };

  const handleToggleOne = (idx: number, checked: boolean) => {
    setSelected((prev) => {
      const set = new Set(prev);
      if (checked) set.add(idx);
      else set.delete(idx);
      const next = Array.from(set);
      onSelectionChange(next);
      return next;
    });
  };

  const allChecked =
    selectable && rows.length > 0 && selected.length === rows.length;

  return (
    <div className="overflow-x-auto">
      <table className="relative w-full text-xs md:text-sm text-[#535862] table-auto whitespace-nowrap md:whitespace-nowrap">
        <thead className="bg-[#fafafa]">
          <tr className="border-b">
            {selectable && (
              <th className="p-3 pl-6 text-center">
                <Checkbox
                  className=""
                  checked={allChecked}
                  onCheckedChange={(val: CheckedState) =>
                    handleSelectAll(val === true)
                  }
                />
              </th>
            )}

            {columns.map((col) => (
              <th
                key={col.key}
                className="p-4 text-left cursor-pointer select-none truncate max-w-[180px] md:max-w-[220px]"
                style={{ width: col.width }}
                onClick={() => handleSort?.(col.key)}
                aria-sort={
                  sortConfig?.key === col.key
                    ? sortConfig.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : undefined
                }
              >
                {col.title}
              </th>
            ))}

            {(onDelete || onEdit) && <th className="p-3" />}
          </tr>
        </thead>

        <tbody className="font-medium">
          {rows.map((item, idx) => (
            <tr
              key={idx}
              className="border-b hover:bg-[#fafafa] cursor-pointer group"
              onClick={() => handleSetCurrentItem(item)}
            >
              {selectable && (
                <td
                  className="p-3 pl-6 text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Checkbox
                    className=""
                    checked={selected.includes(idx)}
                    onCheckedChange={(val: CheckedState) =>
                      handleToggleOne(idx, val === true)
                    }
                  />
                </td>
              )}

              {columns.map((col) => (
                <td
                  key={col.key}
                  className="p-4 truncate max-w-[180px] md:max-w-[220px]"
                >
                  {col.render
                    ? col.render(item, idx)
                    : ((item as Record<string, unknown>)[
                        col.key
                      ] as React.ReactNode)}
                </td>
              ))}

              {(onDelete || onEdit) && (
                <td
                  className="p-4 text-center lg:opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-center items-center gap-3">
                    {onDelete && (
                      <Trash2
                        size={16}
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => onDelete(item)}
                        aria-label="Delete row"
                      />
                    )}
                    {onEdit && (
                      <Pen
                        size={16}
                        className="cursor-pointer hover:text-[#181d27]"
                        onClick={() => onEdit(item)}
                        aria-label="Edit row"
                      />
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
