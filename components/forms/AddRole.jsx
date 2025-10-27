"use client";

import { useState } from "react";
import { X, Shield, Info, Plus, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import SelectComp from "../SelectComp";

const AccessLevelData = {
  defaultValue: "full access",
  options: [
    { value: "full access", label: "Full Access" },
    { value: "edit access", label: "Edit Access" },
    { value: "read access", label: "Read-Only Access" },
  ],
};

export default function AddRole({ onClose, handleFormSubmit, editItem }) {
  const [formData, setFormData] = useState({
    name: editItem?.name || "",
    userAssigned: editItem?.userAssigned || "0",
    role: editItem?.role.toLowerCase() || AccessLevelData.defaultValue,
    status: editItem?.status || "Admin", // Default created by
    lastActive: new Date().toISOString().split("T")[0], // Default to today's date
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePermissionChange = (permission, checked) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: checked,
      },
    }));
  };

  const handleSubmit = () => {
    const formattedData = {
      ...formData,
      userAssigned: parseInt(formData.userAssigned, 10).toString(), // Ensure userAssigned is a string
    };
    console.log("Form submitted with data:", formattedData);
    handleFormSubmit(formattedData);
  };

  return (
    <div className="fixed inset-0 bg-[#0A0D12]/80 backdrop-blur-[8px] flex items-center justify-center z-40 text-[#414651]">
      <div className="hide-scrollbar bg-white rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-600">
              <Shield className="h-5 w-5" />
              <h2 className="text-lg font-medium">
                {editItem ? "Edit" : "Add New"} Role
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#535862] hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Role Details */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Role Details
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="role-name"
                  className="text-xs text-gray-500 mb-1 block"
                >
                  Role Name *
                </label>
                <Input
                  id="role-name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="e.g. Supervisor, Manager"
                  className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="user-assigned"
                  className="text-xs text-gray-500 mb-1 block"
                >
                  Users Assigned
                </label>
                <Input
                  id="user-assigned"
                  value={formData.userAssigned}
                  onChange={(e) =>
                    handleInputChange("userAssigned", e.target.value)
                  }
                  placeholder="e.g. 5"
                  className="focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Access Level */}
          <div>
            <div className="flex items-center gap-1">
              <label
                htmlFor="access-level"
                className="text-xs text-gray-500 mb-1 block"
              >
                Access Level
              </label>
              <Info className="h-3 w-3 text-[#535862]" />
            </div>
            <SelectComp
              data={AccessLevelData}
              value={formData.role}
              onChange={(value) => handleInputChange("role", value)}
            />
          </div>

          {/* Permissions */}
          <div>
            <h3 className="text-[16px] font-medium text-gray-700 mb-3">
              Permissions
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">View Cameras</label>
                  <p className="text-xs text-gray-500">
                    Access to view camera feeds
                  </p>
                </div>
                <Switch
                  checked={formData.permissions?.viewCameras}
                  onCheckedChange={(checked) =>
                    handlePermissionChange("viewCameras", checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Manage Cameras</label>
                  <p className="text-xs text-gray-500">
                    Add, edit, or remove cameras
                  </p>
                </div>
                <Switch
                  checked={formData.permissions?.manageCameras}
                  onCheckedChange={(checked) =>
                    handlePermissionChange("manageCameras", checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">View Reports</label>
                  <p className="text-xs text-gray-500">
                    Access to view reports and analytics
                  </p>
                </div>
                <Switch
                  checked={formData.permissions?.viewReports}
                  onCheckedChange={(checked) =>
                    handlePermissionChange("viewReports", checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Manage Users</label>
                  <p className="text-xs text-gray-500">
                    Add, edit, or remove users
                  </p>
                </div>
                <Switch
                  checked={formData.permissions?.manageUsers}
                  onCheckedChange={(checked) =>
                    handlePermissionChange("manageUsers", checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">View Analytics</label>
                  <p className="text-xs text-gray-500">
                    Access to view analytics dashboard
                  </p>
                </div>
                <Switch
                  checked={formData.permissions?.viewAnalytics}
                  onCheckedChange={(checked) =>
                    handlePermissionChange("viewAnalytics", checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Export Data</label>
                  <p className="text-xs text-gray-500">
                    Export reports and data
                  </p>
                </div>
                <Switch
                  checked={formData.permissions?.exportData}
                  onCheckedChange={(checked) =>
                    handlePermissionChange("exportData", checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Manage Settings</label>
                  <p className="text-xs text-gray-500">
                    Access to system settings
                  </p>
                </div>
                <Switch
                  checked={formData.permissions?.manageSettings}
                  onCheckedChange={(checked) =>
                    handlePermissionChange("manageSettings", checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">
                    Receive Notifications
                  </label>
                  <p className="text-xs text-gray-500">
                    Get notified about alerts and updates
                  </p>
                </div>
                <Switch
                  checked={formData.permissions?.receiveNotifications}
                  onCheckedChange={(checked) =>
                    handlePermissionChange("receiveNotifications", checked)
                  }
                />
              </div>
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
            
            {editItem ? "Update" : "Add"} Role
          </Button>
        </div>
      </div>
    </div>
  );
}
