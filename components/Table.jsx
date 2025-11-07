"use client";
import React, { useState, useEffect } from "react";
import { Edit01, Trash02 } from "@untitledui/icons";
import { Checkbox } from "@/components/ui/checkbox";
export function Table({
  columns = [],
  data,
  onDelete,
  onEdit,
  selectable = false,
  setCurrentItem,
  setOverlay,
  handleSort,
  sortConfig,
  onSelectionChange = () => {},
}) {
  const [selected, setSelected] = useState([]);
  const rows = Array.isArray(data) ? data : [];

  useEffect(() => {
    onSelectionChange(selected);
  }, [selected, onSelectionChange]);

  const handleSetCurrentItem = (item) => {
    console.log("setCurrentItem", item);
    if (setCurrentItem) {
      setCurrentItem(item);
      setOverlay(true);
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      const next = rows.map((_, idx) => idx);
      setSelected(next);
      onSelectionChange(next);
    } else {
      setSelected([]);
      onSelectionChange([]);
    }
  };

  const handleToggleOne = (idx, checked) => {
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
      <table className="relative w-full text-xs xl:text-sm text-[#717680] table-auto z-0">
        <thead className="bg-[#fafafa]">
          <tr className="border-b">
            {selectable && (
              <th className="p-3 pl-6 text-center">
                <Checkbox
                  checked={allChecked}
                  onCheckedChange={(val) => handleSelectAll(Boolean(val))}
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-4  text-left cursor-pointer select-none overflow-hidden"
                style={{ width: col.width }}
                onClick={() => handleSort && handleSort(col.key)}
              >
                {col.title}
              </th>
            ))}

            {(onDelete || onEdit) && <th className="p-3"></th>}
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
                  className="p-3 pl-6 text-center "
                  onClick={(e) => e.stopPropagation()}
                >
                  <Checkbox
                    checked={selected.includes(idx)}
                    onCheckedChange={(val) =>
                      handleToggleOne(idx, Boolean(val))
                    }
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="p-4">
                  {col.render ? col.render(item) : item[col.key]}
                </td>
              ))}
              {(onDelete || onEdit) && (
                <td
                  className="p-4 text-center lg:opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-center items-center gap-3">
                    {onDelete && (
                      <Trash02
                        size={16}
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => onDelete(item)}
                      />
                    )}
                    {onEdit && (
                      <Edit01
                        size={16}
                        className="cursor-pointer hover:text-[#181d27]"
                        onClick={() => {
                          onEdit(item);
                        }}
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

// Example usage of the Table component
// const columns = [
//   {
//     title: "Name",
//     key: "name",
//     width: "20%",
//     render: (user) => (
//       <div className="flex flex-row gap-2 items-center">
//         <Avatar>
//           <AvatarImage src={user.avatarUrl} alt={user.username} />
//           <AvatarFallback>NA</AvatarFallback>
//         </Avatar>
//         <div className="flex flex-col">
//           <p className="text-black">{user.name}</p>
//           <p>@{user.username}</p>
//         </div>
//       </div>
//     ),
//   },
//   { title: "Email", key: "email" },
//   { title: "Role", key: "role" },
//   { title: "Status", key: "status" },
//   { title: "Last Active", key: "lastActive" },
// ];

// const mockData = [
//   {
//     name: "Phoenix Baker",
//     username: "phoenix",
//     email: "phoenix@example.com",
//     role: "Admin",
//     status: "Active",
//     lastActive: "2023-10-01",
//     avatarUrl: "https://github.com/shadcn.png",
//   },
//   // Add more users as needed
// ];
