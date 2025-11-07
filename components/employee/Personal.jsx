import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card } from "./Card";
import { BookClosed, MarkerPin04, Tag03, User01, UsersEdit } from "@untitledui/icons";

const Label = ({ children }) => (
  <p className="text-[#414651] font-medium">{children}</p>
);
const Value = ({ children }) => (
  <p className="text-[#181D27] font-semibold">{children}</p>
);

const Personal = () => {
  return (
    <div className="flex flex-row gap-4">
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-4">
        <Card
          icon={<User01/>}
          title="Personal Information"
        >
          <div className="grid grid-cols-2 gap-x-[80px] xl:gap-x-[100px] gap-y-[14px] ">
            <div className="space-y-1">
              <Label>Full Name</Label>
              <Value>Olivia Rhye</Value>
            </div>
            <div className="space-y-1">
              <Label>Date of Birth</Label>
              <Value>01/01/1997</Value>
            </div>
            <div className="space-y-1">
              <Label>Gender</Label>
              <Value>Female</Value>
            </div>
            <div className="space-y-1">
              <Label>Age</Label>
              <Value>28</Value>
            </div>
            <div className="space-y-1">
              <Label>Marital Status</Label>
              <Value>Married</Value>
            </div>
            <div className="space-y-1">
              <Label>Blood Type</Label>
              <Value>A positive</Value>
            </div>
            <div className="space-y-1">
              <Label>Emergency Contact person</Label>
              <Value>Phoenix Baker (Spouse)</Value>
            </div>
            <div className="space-y-1">
              <Label>Nationality</Label>
              <Value>Indian</Value>
            </div>
          </div>
        </Card>

        <Card
          icon={<UsersEdit/>}
          title="Employment Overview"
        >
          <div className="grid grid-cols-2 gap-x-[100px] gap-y-[14px] ">
            <div className="space-y-1">
              <Label>Employee ID</Label>
              <Value>#ID 123456</Value>
            </div>
            <div className="space-y-1">
              <Label>Job Title</Label>
              <Value>Operator</Value>
            </div>
            <div className="space-y-1">
              <Label>Department/ Team</Label>
              <Value>Assembly Line A</Value>
            </div>
            <div className="space-y-1">
              <Label>Reporting to</Label>
              <Value>Team Leader</Value>
            </div>
            <div className="space-y-1">
              <Label>Employment Status</Label>
              <Value>Full time</Value>
            </div>
            <div className="space-y-1">
              <Label>Date of Joining</Label>
              <Value>24/08/2019</Value>
            </div>
            <div className="space-y-1">
              <Label>Status</Label>
              <Value>Active</Value>
            </div>
          </div>
        </Card>
      </div>

      {/* Right column */}
      <div className="max-w-[40%] flex flex-col gap-[14px]">
        <Card
          icon={<BookClosed/>}
          title="Contact Information"
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-[14px] ">
            <div className="space-y-1">
              <Label>Mobile Number</Label>
              <Value>9876543210</Value>
            </div>
            <div className="space-y-1">
              <Label>Alternate Phone</Label>
              <Value>8976543210</Value>
            </div>
            <div className="space-y-1">
              <Label>Work Email</Label>
              <Value>olivia@untitledui.com</Value>
            </div>
            <div className="space-y-1">
              <Label>Personal Email</Label>
              <Value>olivia@gmail.com</Value>
            </div>
          </div>
        </Card>

        <Card
          icon={<MarkerPin04/>}
          title="Address Information"
        >
          <div className=" flex flex-col gap-[14px] mb-[14px]">
            <div className="space-y-1">
              <Label>Current Residential Address</Label>
              <Value>xyz, Abc Street, 123</Value>
            </div>
            <div className="space-y-1">
              <Label>Permanent Address</Label>
              <Value>pqrs floor, kjh street.</Value>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-[14px] ">
            <div className="space-y-1">
              <Label>City</Label>
              <Value>Mumbai</Value>
            </div>
            <div className="space-y-1">
              <Label>State</Label>
              <Value>Maharashtra</Value>
            </div>
            <div className="space-y-1">
              <Label>Country</Label>
              <Value>India</Value>
            </div>
            <div className="space-y-1">
              <Label>Zip Code</Label>
              <Value>123456</Value>
            </div>
          </div>
        </Card>

        <Card
          icon={<Tag03/>}
          title="Tags"
        >
          <div className="">
            <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
              High Performer
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Personal;
