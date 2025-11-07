"use client";

import { useState } from "react";
import { XClose, User01, Trash02 } from "@untitledui/icons";
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
 
export default function DeleteUser({ onClose, handleFormSubmit, deleteItem }) {
  const [formData, setFormData] = useState({
    name: deleteItem?.name || "",
    username: deleteItem?.username || "",
    email: deleteItem?.email || "",
    role: deleteItem?.role?.toLowerCase() || RoleData.defaultValue,
    status: deleteItem?.status.toLowerCase() || StatusData.defaultValue,
    avatar: deleteItem?.avatar || "",
    lastActive: deleteItem?.lastActive || new Date().toISOString().split("T")[0],
  });

  const handleDeleteUser =()=>{
    handleFormSubmit(deleteItem);
  }

  return (
    <div className="fixed inset-0 bg-[#0A0D12]/80 backdrop-blur-[8px] flex items-center justify-center z-60 text-[#414651]">
      <div className="hide-scrollbar bg-white rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-600">
              <User01 className="h-5 w-5" />
              <h2 className="text-lg font-medium">
                Delete User
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
             Are You Sure you want to delete User?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs text-gray-500 mb-1 block"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  disabled
                  className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="text-xs text-gray-500 mb-1 block"
                >
                  Username
                </label>
                <div className="flex">
                  <span className="bg-gray-100 text-gray-500 px-3 pt-2 text-sm border border-r-0 border-gray-300 rounded-l-md">
                    @
                  </span>
                  <Input
                    id="username"
                    value={formData.username}
                    disabled
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
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  disabled
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
                  disabled
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
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-1/2 gap-2 flex items-center justify-around p-4">
          <Button
            className="w-full bg-[#7d48df] hover:bg-[#6037ac] text-white flex items-center gap-2"
            onClick={handleDeleteUser}
          >
            <Trash02 />
            Delete User
          </Button>
          <Button
            className="w-full bg-[#7d48df] hover:bg-[#6037ac] text-white flex items-center gap-2"
            onClick={onClose}
          >
            <X />
            Cancel
            </Button>
        </div>
      </div>
    </div>
  );
}

