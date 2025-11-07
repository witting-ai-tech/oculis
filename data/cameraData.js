import { CheckCircle, LockKeyholeSquare, Perspective01, Shield01, Stars02, Tool02, Truck02, User01, UsersPlus, VideoRecorder } from "@untitledui/icons";

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
    icon: (<Shield01 size={20}/>),
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
    icon: (<LockKeyholeSquare size={20}/>),
    items: [
      { value: "restricted_access", label: "Restricted Access" },
      { value: "tailgating_detection", label: "Tailgating Detection" },
      { value: "wrong_direction_entry", label: "Wrong Direction Entry" },
      { value: "emergency_exit_misuse", label: "Emergency Exit Misuse" },
    ],
  },
  {
    category: "Staff Monitoring",
    icon: (<User01 size={20}/>),
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
    icon: (<Tool02 size={20}/>),
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
    icon: (<Shield01 size={20}/>),
    items: [
      { value: "smoke_detection", label: "Smoke Detection" },
      { value: "fire_flame_detection", label: "Fire/Flame Detection" },
      { value: "blocked_safety_equipment", label: "Blocked Safety Equipment" },
      { value: "chemical_spill_leak", label: "Chemical Spill/ Leak Detection" },
    ],
  },
  {
    category: "Vehicle and Forklifting Monitoring",
    icon: (<Truck02 size={20}/>),
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
    icon: (<CheckCircle size={20}/>),
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
        required: true,
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
        required: true,
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
          { value: "gurgaon", label: "Gurgaon" },
          { value: "noida", label: "Noida" },
          { value: "mumbai", label: "Mumbai" },
        ],
      },
      {
        type: "select",
        name: "floor",
        label: "Floor",
        required: true,
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
        required: true,
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
        required: true,
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
        required: true,
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
    icon: (<VideoRecorder size={20}/>),
    description: "Add basic camera info & connect feed",
  },
  {
    id: 1,
    title: "Region Setup",
    icon: (<Perspective01 size={20}/>),
    description: "Select or draw regions for monitoring",
  },
  {
    id: 2,
    title: "Assign Tasks",
    icon: (<UsersPlus size={20}/>),
    description: "Choose detection tasks & AI model settings",
  },
  {
    id: 3,
    title: "Review & Save",
    icon: (<Stars02 size={20}/>),
    description: "Confirm all details before finishing",
  },
];
