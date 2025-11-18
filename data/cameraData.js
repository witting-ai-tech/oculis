export const cameraData = [
  {
    cameraName: "Floor Camera 1",
    username: "C-23XY5A",
    site: "Gurgaon",
    zone: "Assembly",
    floor: "Floor 2",
    modelsEnabled: "PPE, Fall Detection",
    status: "Online",
    lastSync: "Today, 9:13am",
  },
  {
    cameraName: "Floor Camera 2",
    username: "C-23XY5B",
    site: "Noida",
    zone: "Admin",
    floor: "Floor 2",
    modelsEnabled: "PPE, Fall Detection",
    status: "Online",
    lastSync: "Today, 9:13am",
  },
  {
    cameraName: "Floor Camera 3",
    username: "C-23XY5C",
    site: "Delhi",
    zone: "Supervisor",
    floor: "Floor 2",
    modelsEnabled: "Access Breaches",
    status: "Syncing",
    lastSync: "Today, 08:00am",
  },
  {
    cameraName: "Floor Camera 4",
    username: "C-23XY5D",
    site: "Gurgaon",
    zone: "Supervisor",
    floor: "Floor 2",
    modelsEnabled: "Entry/Exit Counting",
    status: "Online",
    lastSync: "Today, 9:13am",
  },
  {
    cameraName: "Floor Camera 5",
    username: "C-23XY5E",
    site: "Noida",
    zone: "Supervisor",
    floor: "Floor 1",
    modelsEnabled: "PPE",
    status: "Offline",
    lastSync: "Yesterday, 10:00pm",
  },
  {
    cameraName: "Floor Camera 6",
    username: "C-23XY5F",
    site: "Delhi",
    zone: "Admin",
    floor: "Floor 1",
    modelsEnabled: "Fall Detection",
    status: "Disabled",
    lastSync: "Today, 9:13am",
  },
  {
    cameraName: "Floor Camera 7",
    username: "C-23XY5G",
    site: "Gurgaon",
    zone: "Viewer",
    floor: "Viewer",
    modelsEnabled: "Access Breach",
    status: "Online",
    lastSync: "Today, 9:13am",
  },
];

export const modelsConfig = [
  {
    category: "PPE Violations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
      >
        <path
          d="M7.41899 18.0122C7.60349 18.1198 7.69573 18.1737 7.82592 18.2016C7.92695 18.2232 8.07435 18.2232 8.17538 18.2016C8.30557 18.1737 8.39782 18.1198 8.58231 18.0122C10.2057 17.0651 14.6673 14.0902 14.6673 9.99981V6.01448C14.6673 5.34822 14.6673 5.01509 14.5584 4.72873C14.4621 4.47576 14.3057 4.25004 14.1026 4.07109C13.8727 3.86851 13.5608 3.75154 12.937 3.5176L8.46882 1.84204C8.29557 1.77707 8.20895 1.74459 8.11983 1.73171C8.04079 1.72029 7.96051 1.72029 7.88147 1.73171C7.79236 1.74459 7.70573 1.77707 7.53249 1.84204L3.06432 3.5176C2.44048 3.75154 2.12856 3.86851 1.8987 4.07109C1.69564 4.25004 1.53921 4.47576 1.44295 4.72873C1.33398 5.01509 1.33398 5.34822 1.33398 6.01448V9.99981C1.33398 14.0902 5.79562 17.0651 7.41899 18.0122Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { value: "no_hardhats", label: "No Hardhats" },
      { value: "no_safety_goggles", label: "No Safety Goggles" },
      { value: "no_safety_shoes", label: "No Safety Shoes" },
      { value: "no_masks", label: "No Masks" },
      { value: "improper_vest", label: "Improper Vest (color or missing)" },
      { value: "ear_protection_missing", label: "Ear Protection Missing" },
    ],
  },
  {
    category: "Fall Incidents",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          d="M18.3327 9H14.9993L12.4993 16.5L7.49935 1.5L4.99935 9H1.66602"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { value: "fall_detection", label: "Fall Detection" },
      { value: "slip_trip_detection", label: "Slip/Trip Detection" },
      { value: "worker_down", label: "Worker Down" },
      {
        value: "unsafe_bending_lifting",
        label: "Unsafe Bending/Lifting Postures",
      },
    ],
  },
  {
    category: "Access Breach",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M12.5 16.5C13.9001 16.5 14.6002 16.5 15.135 16.2275C15.6054 15.9878 15.9878 15.6054 16.2275 15.135C16.5 14.6002 16.5 13.9001 16.5 12.5V5.5C16.5 4.09987 16.5 3.3998 16.2275 2.86502C15.9878 2.39462 15.6054 2.01217 15.135 1.77248C14.6002 1.5 13.9001 1.5 12.5 1.5L5.5 1.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5L1.5 12.5C1.5 13.9001 1.5 14.6002 1.77248 15.135C2.01217 15.6054 2.39462 15.9878 2.86502 16.2275C3.3998 16.5 4.09987 16.5 5.5 16.5H12.5Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.443 9.99557C10.3842 9.81921 10.3548 9.73103 10.3563 9.65889C10.3579 9.58302 10.3681 9.54325 10.403 9.47589C10.4362 9.41184 10.525 9.32919 10.7027 9.16391C11.1932 8.70746 11.5 8.05623 11.5 7.33333C11.5 5.95262 10.3807 4.83333 9 4.83333C7.61929 4.83333 6.5 5.95262 6.5 7.33333C6.5 8.05623 6.80682 8.70746 7.29734 9.16391C7.47496 9.32919 7.56378 9.41184 7.59699 9.47589C7.63193 9.54325 7.64208 9.58302 7.64368 9.65889C7.64521 9.73103 7.61582 9.81921 7.55703 9.99557L6.79249 12.2892C6.69374 12.5854 6.64437 12.7336 6.67397 12.8515C6.69989 12.9547 6.76431 13.0441 6.85403 13.1013C6.95653 13.1667 7.11267 13.1667 7.42495 13.1667H10.575C10.8873 13.1667 11.0435 13.1667 11.146 13.1013C11.2357 13.0441 11.3001 12.9547 11.326 12.8515C11.3556 12.7336 11.3063 12.5854 11.2075 12.2892L10.443 9.99557Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { value: "restricted_access", label: "Restricted Access" },
      { value: "tailgating_detection", label: "Tailgating Detection" },
      { value: "wrong_direction_entry", label: "Wrong Direction Entry" },
      { value: "emergency_exit_misuse", label: "Emergency Exit Misuse" },
    ],
  },
  {
    category: "Staff Monitoring",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
      >
        <path
          d="M14.6673 16.5C14.6673 15.337 14.6673 14.7555 14.5238 14.2824C14.2006 13.217 13.3669 12.3834 12.3016 12.0602C11.8284 11.9167 11.247 11.9167 10.084 11.9167H5.91732C4.75435 11.9167 4.17286 11.9167 3.6997 12.0602C2.63436 12.3834 1.80068 13.217 1.47752 14.2824C1.33398 14.7555 1.33398 15.337 1.33398 16.5M11.7507 5.25C11.7507 7.32107 10.0717 9 8.00065 9C5.92958 9 4.25065 7.32107 4.25065 5.25C4.25065 3.17893 5.92958 1.5 8.00065 1.5C10.0717 1.5 11.7507 3.17893 11.7507 5.25Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { value: "entry_exits", label: "Entry / Exits" },
      { value: "walkways", label: "Walkways" },
      { value: "productivity", label: "Productivity (beta)" },
      { value: "loitering_idle", label: "Loitering/ Idle Detection" },
      { value: "task_duration_tracking", label: "Task Duration Tracking" },
      { value: "worker_proximity_alerts", label: "Worker Proximity Alerts" },
    ],
  },
  {
    category: "Machine & Equipment Monitoring",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
      >
        <path
          d="M4.99935 4.99984L8.74935 8.74984M4.99935 4.99984H2.49935L1.66602 2.49984L2.49935 1.6665L4.99935 2.49984V4.99984ZM16.0485 2.28401L13.8588 4.47369C13.5288 4.80371 13.3638 4.96872 13.302 5.15899C13.2476 5.32636 13.2476 5.50665 13.302 5.67402C13.3638 5.86429 13.5288 6.0293 13.8588 6.35931L14.0565 6.55703C14.3866 6.88704 14.5516 7.05205 14.7418 7.11387C14.9092 7.16825 15.0895 7.16825 15.2569 7.11387C15.4471 7.05205 15.6121 6.88704 15.9422 6.55703L17.9904 4.50877C18.211 5.04557 18.3327 5.6335 18.3327 6.24984C18.3327 8.78114 16.2807 10.8332 13.7493 10.8332C13.4442 10.8332 13.146 10.8033 12.8575 10.7464C12.4524 10.6666 12.2498 10.6266 12.127 10.6388C11.9965 10.6518 11.9321 10.6714 11.8164 10.7333C11.7076 10.7915 11.5985 10.9007 11.3802 11.119L5.41602 17.0832C4.72566 17.7735 3.60637 17.7735 2.91602 17.0832C2.22566 16.3928 2.22566 15.2735 2.91602 14.5832L8.88021 8.61898C9.09849 8.40069 9.20764 8.29155 9.26586 8.18274C9.32777 8.06707 9.34734 8.00273 9.36035 7.87218C9.37258 7.74938 9.33263 7.54682 9.25274 7.1417C9.19584 6.85322 9.16602 6.55501 9.16602 6.24984C9.16602 3.71853 11.218 1.6665 13.7493 1.6665C14.5873 1.6665 15.3727 1.89136 16.0485 2.28401ZM9.99939 12.4998L14.5827 17.0831C15.273 17.7734 16.3923 17.7734 17.0827 17.0831C17.773 16.3927 17.773 15.2734 17.0827 14.5831L13.3121 10.8126C13.0452 10.7873 12.7849 10.7392 12.5333 10.6701C12.2091 10.5811 11.8535 10.6457 11.6157 10.8835L9.99939 12.4998Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { value: "operating_without_ppe", label: "Operating without PPE" },
      { value: "unauthorized_machine_use", label: "Unauthorized Machine Use" },
      { value: "abnormal_tool_usage", label: "Abnormal Tool Usage" },
      {
        value: "unsafe_distance_to_machines",
        label: "Unsafe Distance to moving Machines",
      },
    ],
  },
  {
    category: "Fire & Hazard Detection",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
      >
        <path
          d="M7.41899 18.0122C7.60349 18.1198 7.69573 18.1737 7.82592 18.2016C7.92695 18.2232 8.07435 18.2232 8.17538 18.2016C8.30557 18.1737 8.39782 18.1198 8.58231 18.0122C10.2057 17.0651 14.6673 14.0902 14.6673 9.99981V6.01448C14.6673 5.34822 14.6673 5.01509 14.5584 4.72873C14.4621 4.47576 14.3057 4.25004 14.1026 4.07109C13.8727 3.86851 13.5608 3.75154 12.937 3.5176L8.46882 1.84204C8.29557 1.77707 8.20895 1.74459 8.11983 1.73171C8.04079 1.72029 7.96051 1.72029 7.88147 1.73171C7.79236 1.74459 7.70573 1.77707 7.53249 1.84204L3.06432 3.5176C2.44048 3.75154 2.12856 3.86851 1.8987 4.07109C1.69564 4.25004 1.53921 4.47576 1.44295 4.72873C1.33398 5.01509 1.33398 5.34822 1.33398 6.01448V9.99981C1.33398 14.0902 5.79562 17.0651 7.41899 18.0122Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { value: "smoke_detection", label: "Smoke Detection" },
      { value: "fire_flame_detection", label: "Fire/Flame Detection" },
      { value: "blocked_safety_equipment", label: "Blocked Safety Equipment" },
      { value: "chemical_spill_leak", label: "Chemical Spill/ Leak Detection" },
    ],
  },
  {
    category: "Vehicle and Forklifting Monitoring",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <path
          d="M12.8327 12.3333V4.16667C12.8327 3.23325 12.8327 2.76654 12.651 2.41002C12.4912 2.09641 12.2363 1.84144 11.9227 1.68166C11.5661 1.5 11.0994 1.5 10.166 1.5H3.83268C2.89926 1.5 2.43255 1.5 2.07603 1.68166C1.76243 1.84144 1.50746 2.09641 1.34767 2.41002C1.16602 2.76654 1.16602 3.23325 1.16602 4.16667V9.66667C1.16602 10.6001 1.16602 11.0668 1.34767 11.4233C1.50746 11.7369 1.76243 11.9919 2.07603 12.1517C2.43255 12.3333 2.89926 12.3333 3.83268 12.3333H12.8327ZM12.8327 12.3333H16.4993C16.9661 12.3333 17.1994 12.3333 17.3777 12.2425C17.5345 12.1626 17.662 12.0351 17.7419 11.8783C17.8327 11.7001 17.8327 11.4667 17.8327 11V8.71895C17.8327 8.51513 17.8327 8.41321 17.8097 8.31731C17.7892 8.23228 17.7556 8.15099 17.7099 8.07643C17.6583 7.99233 17.5863 7.92027 17.4422 7.77614L15.7232 6.05719C15.5791 5.91306 15.507 5.841 15.4229 5.78947C15.3484 5.74378 15.2671 5.71011 15.182 5.68969C15.0861 5.66667 14.9842 5.66667 14.7804 5.66667H12.8327M6.99935 14.4167C6.99935 15.5673 6.06661 16.5 4.91602 16.5C3.76542 16.5 2.83268 15.5673 2.83268 14.4167C2.83268 13.2661 3.76542 12.3333 4.91602 12.3333C6.06661 12.3333 6.99935 13.2661 6.99935 14.4167ZM16.166 14.4167C16.166 15.5673 15.2333 16.5 14.0827 16.5C12.9321 16.5 11.9993 15.5673 11.9993 14.4167C11.9993 13.2661 12.9321 12.3333 14.0827 12.3333C15.2333 12.3333 16.166 13.2661 16.166 14.4167Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { value: "forklift_no_driver", label: "Forklift No Driver" },
      { value: "speeding_forklift", label: "Speeding Forklift" },
      {
        value: "forklift_near_pedestrians",
        label: "Forklift Near Pedestrians",
      },
      {
        value: "parking_unauthorized_zone",
        label: "Parking in Unauthorized Zone",
      },
    ],
  },
  {
    category: "Compliance & Quality",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
      >
        <path
          d="M5.74935 9.99984L8.24935 12.4998L13.2493 7.49984M17.8327 9.99984C17.8327 14.6022 14.1017 18.3332 9.49935 18.3332C4.89698 18.3332 1.16602 14.6022 1.16602 9.99984C1.16602 5.39746 4.89698 1.6665 9.49935 1.6665C14.1017 1.6665 17.8327 5.39746 17.8327 9.99984Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { value: "uniform_compliance", label: "Uniform Compliance" },
      { value: "proper_ppe_colors", label: "Proper PPE Colors" },
      { value: "quality_defect_detection", label: "Quality Defect Detection" },
    ],
  },
];

export const cameraFormInputs = [
  {
    title: "Camera Details",
    layout: "two",
    fields: [
      {
        type: "text",
        name: "cameraId",
        label: "Camera ID",
        placeholder: "e.g. CAM-2X57YA",
        required: false,
      },
      {
        type: "text",
        name: "cameraName",
        label: "Camera Name",
        placeholder: "e.g. Entry Gate – Shift A",
        required: true,
      },
      {
        type: "select",
        name: "cameraType",
        label: "Camera Type",
        required: false,
        options: [
          { value: "ip", label: "IP Camera" },
          { value: "rtsp", label: "RTSP Stream" },
          { value: "cctv", label: "CCTV" },
        ],
      },
      {
        type: "text",
        name: "cameraUrl",
        label: "Camera URL",
        placeholder: "https://www.example.com",
        required: true,
      },
    ],
  },
  {
    title: "Location",
    layout: "two",
    fields: [
      {
        type: "select",
        name: "site",
        label: "Site",
        required: true,
        options: [
          { value: "671c6e80b2f4a95c7baf2156", label: "Gurgaon" },
        ],
      },
      {
        type: "select",
        name: "floor",
        label: "Floor",
        required: false,
        options: [
          { value: "floor-1", label: "Floor 1" },
          { value: "floor-2", label: "Floor 2" },
          { value: "floor-3", label: "Floor 3" },
        ],
      },
      {
        type: "select",
        name: "zone",
        label: "Zone",
        required: false,
        options: [
          { value: "packaging", label: "Packaging Zone" },
          { value: "assembly", label: "Assembly" },
          { value: "warehouse", label: "Warehouse" },
        ],
      },
    ],
  },
  {
    title: "Detection Settings",
    layout: "two",
    fields: [
      {
        type: "select",
        name: "retentionPolicy",
        label: "Retention Policy",
        required: false,
        options: [
          { value: "7d", label: "7d" },
          { value: "30d", label: "30d" },
          { value: "90d", label: "90d" },
        ],
      },
      {
        type: "select",
        name: "detectionSensitivity",
        label: "Detection Sensitivity",
        required: false,
        options: [
          { value: "low", label: "Low (1 trigger per 10min)" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High" },
        ],
      },
    ],
  },
  {
    title: "Installation Notes",
    fields: [
      {
        type: "text",
        name: "notes",
        placeholder:
          "e.g. Mounted near the west gate to check for PPE Compliance - Safety Shoes",
      },
    ],
  },
];

export const steps = [
  {
    id: 0,
    title: "Add New Camera",
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
        <path
          d="M22 8.93137C22 8.32555 22 8.02265 21.8802 7.88238C21.7763 7.76068 21.6203 7.69609 21.4608 7.70865C21.2769 7.72312 21.0627 7.93731 20.6343 8.36569L17 12L20.6343 15.6343C21.0627 16.0627 21.2769 16.2769 21.4608 16.2914C21.6203 16.3039 21.7763 16.2393 21.8802 16.1176C22 15.9774 22 15.6744 22 15.0686V8.93137Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9.8C2 8.11984 2 7.27976 2.32698 6.63803C2.6146 6.07354 3.07354 5.6146 3.63803 5.32698C4.27976 5 5.11984 5 6.8 5H12.2C13.8802 5 14.7202 5 15.362 5.32698C15.9265 5.6146 16.3854 6.07354 16.673 6.63803C17 7.27976 17 8.11984 17 9.8V14.2C17 15.8802 17 16.7202 16.673 17.362C16.3854 17.9265 15.9265 18.3854 15.362 18.673C14.7202 19 13.8802 19 12.2 19H6.8C5.11984 19 4.27976 19 3.63803 18.673C3.07354 18.3854 2.6146 17.9265 2.32698 17.362C2 16.7202 2 15.8802 2 14.2V9.8Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Add basic camera info & connect feed",
  },
  {
    id: 1,
    title: "Region Setup",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15.8333 7.5V12.5M4.16667 5.83333V14.1667M14.1667 5.59524L5.83333 4.40476M14.1667 14.4048L5.83333 15.5952M3.83333 5.83333H4.5C4.96671 5.83333 5.20007 5.83333 5.37833 5.74251C5.53513 5.66261 5.66261 5.53513 5.74251 5.37833C5.83333 5.20007 5.83333 4.96671 5.83333 4.5V3.83333C5.83333 3.36662 5.83333 3.13327 5.74251 2.95501C5.66261 2.79821 5.53513 2.67072 5.37833 2.59083C5.20007 2.5 4.96671 2.5 4.5 2.5H3.83333C3.36662 2.5 3.13327 2.5 2.95501 2.59083C2.79821 2.67072 2.67072 2.79821 2.59083 2.95501C2.5 3.13327 2.5 3.36662 2.5 3.83333V4.5C2.5 4.96671 2.5 5.20007 2.59083 5.37833C2.67072 5.53513 2.79821 5.66261 2.95501 5.74251C3.13327 5.83333 3.36662 5.83333 3.83333 5.83333ZM3.83333 17.5H4.5C4.96671 17.5 5.20007 17.5 5.37833 17.4092C5.53513 17.3293 5.66261 17.2018 5.74251 17.045C5.83333 16.8667 5.83333 16.6334 5.83333 16.1667V15.5C5.83333 15.0333 5.83333 14.7999 5.74251 14.6217C5.66261 14.4649 5.53513 14.3374 5.37833 14.2575C5.20007 14.1667 4.96671 14.1667 4.5 14.1667H3.83333C3.36662 14.1667 3.13327 14.1667 2.95501 14.2575C2.79821 14.3374 2.67072 14.4649 2.59083 14.6217C2.5 14.7999 2.5 15.0333 2.5 15.5V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5ZM15.5 7.5H16.1667C16.6334 7.5 16.8667 7.5 17.045 7.40917C17.2018 7.32928 17.3293 7.20179 17.4092 7.04499C17.5 6.86673 17.5 6.63338 17.5 6.16667V5.5C17.5 5.03329 17.5 4.79993 17.4092 4.62167C17.3293 4.46487 17.2018 4.33739 17.045 4.25749C16.8667 4.16667 16.6334 4.16667 16.1667 4.16667H15.5C15.0333 4.16667 14.7999 4.16667 14.6217 4.25749C14.4649 4.33739 14.3374 4.46487 14.2575 4.62167C14.1667 4.79993 14.1667 5.03329 14.1667 5.5V6.16667C14.1667 6.63338 14.1667 6.86673 14.2575 7.04499C14.3374 7.20179 14.4649 7.32928 14.6217 7.40917C14.7999 7.5 15.0333 7.5 15.5 7.5ZM15.5 15.8333H16.1667C16.6334 15.8333 16.8667 15.8333 17.045 15.7425C17.2018 15.6626 17.3293 15.5351 17.4092 15.3783C17.5 15.2001 17.5 14.9667 17.5 14.5V13.8333C17.5 13.3666 17.5 13.1333 17.4092 12.955C17.3293 12.7982 17.2018 12.6707 17.045 12.5908C16.8667 12.5 16.6334 12.5 16.1667 12.5H15.5C15.0333 12.5 14.7999 12.5 14.6217 12.5908C14.4649 12.6707 14.3374 12.7982 14.2575 12.955C14.1667 13.1333 14.1667 13.3666 14.1667 13.8333V14.5C14.1667 14.9667 14.1667 15.2001 14.2575 15.3783C14.3374 15.5351 14.4649 15.6626 14.6217 15.7425C14.7999 15.8333 15.0333 15.8333 15.5 15.8333Z"
          stroke="currentColor"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Select or draw regions for monitoring",
  },
  {
    id: 2,
    title: "Assign Tasks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15.8337 17.5V12.5M13.3337 15H18.3337M10.0003 12.5H6.66699C5.11385 12.5 4.33728 12.5 3.72471 12.7537C2.90795 13.092 2.25904 13.741 1.92073 14.5577C1.66699 15.1703 1.66699 15.9469 1.66699 17.5M12.917 2.7423C14.1386 3.23679 15.0003 4.43443 15.0003 5.83333C15.0003 7.23224 14.1386 8.42988 12.917 8.92437M11.2503 5.83333C11.2503 7.67428 9.75794 9.16667 7.91699 9.16667C6.07604 9.16667 4.58366 7.67428 4.58366 5.83333C4.58366 3.99238 6.07604 2.5 7.91699 2.5C9.75794 2.5 11.2503 3.99238 11.2503 5.83333Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Choose detection tasks & AI model settings",
  },
  {
    id: 3,
    title: "Review & Save",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clipPath="url(#clip0_20153_620)">
          <path
            d="M3.75033 18.3332V14.1665M3.75033 5.83317V1.6665M1.66699 3.74984H5.83366M1.66699 16.2498H5.83366M10.8337 2.49984L9.38851 6.25722C9.1535 6.86825 9.036 7.17376 8.85327 7.43074C8.69132 7.6585 8.49232 7.8575 8.26456 8.01945C8.00758 8.20217 7.70207 8.31968 7.09104 8.55469L3.33366 9.99984L7.09105 11.445C7.70207 11.68 8.00758 11.7975 8.26456 11.9802C8.49232 12.1422 8.69132 12.3412 8.85327 12.5689C9.036 12.8259 9.1535 13.1314 9.38851 13.7425L10.8337 17.4998L12.2788 13.7425C12.5138 13.1314 12.6313 12.8259 12.8141 12.5689C12.976 12.3412 13.175 12.1422 13.4028 11.9802C13.6597 11.7975 13.9653 11.68 14.5763 11.445L18.3337 9.99984L14.5763 8.55469C13.9652 8.31968 13.6597 8.20217 13.4028 8.01945C13.175 7.8575 12.976 7.6585 12.8141 7.43074C12.6313 7.17376 12.5138 6.86825 12.2788 6.25722L10.8337 2.49984Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_20153_620">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    description: "Confirm all details before finishing",
  },
];
