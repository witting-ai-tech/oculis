import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditLabel({
  open,
  title = "Edit Region Label",
  value,
  onChange,
  onCancel,
  onSave,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-[#0A0D12]/80 backdrop-blur-[8px] flex items-center justify-center z-60 text-[#414651]">
      <div className="absolute inset-0 " onClick={onCancel} />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-[#181D27] mb-4">{title}</h3>
        <div className="space-y-2">
          <label className="text-sm text-[#414651]">Region Label</label>
          <Input
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder="e.g. Worker Safety Zone"
            className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
          />
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}
