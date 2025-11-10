import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card } from "./Card";

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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                d="M14.6673 16.5C14.6673 15.337 14.6673 14.7555 14.5238 14.2824C14.2006 13.217 13.3669 12.3834 12.3016 12.0602C11.8284 11.9167 11.247 11.9167 10.084 11.9167H5.91732C4.75435 11.9167 4.17286 11.9167 3.6997 12.0602C2.63436 12.3834 1.80068 13.217 1.47752 14.2824C1.33398 14.7555 1.33398 15.337 1.33398 16.5M11.7507 5.25C11.7507 7.32107 10.0717 9 8.00065 9C5.92958 9 4.25065 7.32107 4.25065 5.25C4.25065 3.17893 5.92958 1.5 8.00065 1.5C10.0717 1.5 11.7507 3.17893 11.7507 5.25Z"
                stroke="#252B37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
            >
              <path
                d="M10 13H7C5.13623 13 4.20435 13 3.46927 13.3045C2.48915 13.7105 1.71046 14.4892 1.30448 15.4693C1 16.2044 1 17.1362 1 19M14.5 1.29076C15.9659 1.88415 17 3.32131 17 5M10.9999 19.5L13.025 19.095C13.2015 19.0597 13.2898 19.042 13.3721 19.0097C13.4452 18.9811 13.5147 18.9439 13.579 18.899C13.6516 18.8484 13.7152 18.7848 13.8426 18.6574L20.5 12C21.0524 11.4477 21.0523 10.5523 20.5 9.99997C19.9477 9.4477 19.0523 9.44771 18.5 9.99999L11.8425 16.6575C11.7152 16.7848 11.6516 16.8484 11.601 16.921C11.5561 16.9853 11.5189 17.0548 11.4902 17.1278C11.458 17.2102 11.4403 17.2984 11.405 17.475L10.9999 19.5ZM12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
            >
              <path
                d="M14.6673 15.8337V13.3337H3.83398C2.45327 13.3337 1.33398 14.4529 1.33398 15.8337M5.33398 18.3337H12.0007C12.9341 18.3337 13.4008 18.3337 13.7573 18.152C14.0709 17.9922 14.3259 17.7372 14.4857 17.4236C14.6673 17.0671 14.6673 16.6004 14.6673 15.667V4.33366C14.6673 3.40024 14.6673 2.93353 14.4857 2.57701C14.3259 2.2634 14.0709 2.00844 13.7573 1.84865C13.4008 1.66699 12.9341 1.66699 12.0007 1.66699H5.33398C3.93385 1.66699 3.23379 1.66699 2.69901 1.93948C2.2286 2.17916 1.84615 2.56161 1.60647 3.03202C1.33398 3.5668 1.33398 4.26686 1.33398 5.66699V14.3337C1.33398 15.7338 1.33398 16.4339 1.60647 16.9686C1.84615 17.439 2.2286 17.8215 2.69901 18.0612C3.23379 18.3337 3.93385 18.3337 5.33398 18.3337Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M4 13.2864C2.14864 14.1031 1 15.2412 1 16.5C1 18.9853 5.47715 21 11 21C16.5228 21 21 18.9853 21 16.5C21 15.2412 19.8514 14.1031 18 13.2864M17 7C17 11.0637 12.5 13 11 16C9.5 13 5 11.0637 5 7C5 3.68629 7.68629 1 11 1C14.3137 1 17 3.68629 17 7ZM12 7C12 7.55228 11.5523 8 11 8C10.4477 8 10 7.55228 10 7C10 6.44772 10.4477 6 11 6C11.5523 6 12 6.44772 12 7Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M16.5 9.16699L10.1716 2.83856C9.73919 2.40619 9.523 2.19 9.27071 2.03539C9.04703 1.89832 8.80317 1.79731 8.54808 1.73607C8.26036 1.66699 7.95462 1.66699 7.34314 1.66699L4 1.66699M1.5 7.25033L1.5 8.89576C1.5 9.30341 1.5 9.50723 1.54605 9.69904C1.58688 9.8691 1.65422 10.0317 1.7456 10.1808C1.84867 10.349 1.9928 10.4931 2.28105 10.7814L8.78105 17.2814C9.44108 17.9414 9.77109 18.2714 10.1516 18.3951C10.4864 18.5038 10.847 18.5038 11.1817 18.3951C11.5622 18.2714 11.8923 17.9414 12.5523 17.2814L14.6144 15.2193C15.2744 14.5592 15.6044 14.2292 15.7281 13.8487C15.8368 13.5139 15.8368 13.1534 15.7281 12.8186C15.6044 12.4381 15.2744 12.1081 14.6144 11.448L8.53105 5.36471C8.2428 5.07645 8.09867 4.93233 7.93048 4.82926C7.78135 4.73788 7.61878 4.67054 7.44872 4.62971C7.25691 4.58366 7.05308 4.58366 6.64543 4.58366H4.16667C3.23325 4.58366 2.76654 4.58366 2.41002 4.76531C2.09641 4.9251 1.84145 5.18007 1.68166 5.49367C1.5 5.85019 1.5 6.3169 1.5 7.25033Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
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
