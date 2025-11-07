"use client";

import { useState } from "react";
import { XClose, User01, Plus } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import SelectComp from "../SelectComp";

const RoleData = {
  defaultValue: "admin",
  options: [
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "operator", label: "Operator" },
    { value: "viewer", label: "Viewer" },
  ],
};

const StatusData = {
  defaultValue: "active",
  options: [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "pending", label: "Pending" },
  ],
};

export default function AddUser({ onClose, handleFormSubmit, editItem }) {
  const [formData, setFormData] = useState({
    name: editItem?.name || "",
    username: editItem?.username || "",
    email: editItem?.email || "",
    role: editItem?.role?.toLowerCase() || RoleData.defaultValue,
    status: editItem?.status.toLowerCase() || StatusData.defaultValue,
    avatar: editItem?.avatar || "",
    lastActive: editItem?.lastActive || new Date().toISOString().split("T")[0],
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const formattedData = {
      ...formData,
      lastActive: new Date().toISOString().split("T")[0], // Ensure correct date format
    };
    handleFormSubmit(formattedData);
  };

  return (
    <div className="fixed inset-0 bg-[#0A0D12]/80 backdrop-blur-[8px] flex items-center justify-center z-60 text-[#414651]">
      <div className="hide-scrollbar bg-white rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-600">
              <User01 className="h-5 w-5" />
              <h2 className="text-lg font-medium">
                {editItem ? "Edit" : "Add New"} User
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#535862] hover:text-gray-600"
            >
              <XClose className="h-5 w-5" />
            </button>
          </div>

          {/* User Details */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              User Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs text-gray-500 mb-1 block"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Phoenix Baker"
                  className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="text-xs text-gray-500 mb-1 block"
                >
                  Username *
                </label>
                <div className="flex">
                  <span className="bg-gray-100 text-gray-500 px-3 pt-2 text-sm border border-r-0 border-gray-300 rounded-l-md">
                    @
                  </span>
                  <Input
                    id="username"
                    value={formData.username}
                    onChange={(e) =>
                      handleInputChange("username", e.target.value)
                    }
                    placeholder="phoenix"
                    className="rounded-l-none focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs text-gray-500 mb-1 block"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="phoenix@example.com"
                  className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="avatar"
                  className="text-xs text-gray-500 mb-1 block"
                >
                  Avatar URL
                </label>
                <Input
                  id="avatar"
                  value={formData.avatar}
                  onChange={(e) => handleInputChange("avatar", e.target.value)}
                  placeholder="https://github.com/username.png"
                  className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Role & Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="role"
                className="text-xs text-gray-500 mb-1 block"
              >
                Role
              </label>
              <SelectComp
                data={RoleData}
                value={formData.role}
                onChange={(value) => handleInputChange("role", value)}
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="text-xs text-gray-500 mb-1 block"
              >
                Status
              </label>
              <SelectComp
                data={StatusData}
                value={formData.status}
                onChange={(value) => handleInputChange("status", value)}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full gap-2 flex items-center justify-around p-4">
          <Button
            className="w-full bg-[#7d48df] hover:bg-[#6037ac] text-white flex items-center gap-2"
            onClick={handleSubmit}
          >
            <Plus />
            {editItem ? "Update" : "Add"} User
          </Button>
        </div>
      </div>
    </div>
  );
}
