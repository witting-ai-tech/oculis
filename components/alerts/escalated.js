const extraFilters = [
  { id: 1, title: "All Time" },
  { id: 2, title: "Gurgaon" },
  { id: 3, title: "Delhi" },
  { id: 4, title: "Noida" },
  { id: 5, title: "All" },
];

const statusOptions = [
  { id: 1, title: "All" },
  { id: 2, title: "Pending" },
  { id: 3, title: "Acknowledged" },
  { id: 4, title: "Escalated" },
  { id: 5, title: "Dismissed" },
];

const assignedToOptions = [
  { id: 1, title: "Anyone" },
  { id: 2, title: "Unassigned" },
  { id: 3, title: "John Lee" },
  { id: 4, title: "Jane Doe" },
  { id:5, title:"Olivia Rhye"}
];

const severityOptions = [
  { id: 1, title: "All" },
  { id: 2, title: "Critical" },
  { id: 3, title: "High" },
  { id: 4, title: "Medium" },
  { id: 5, title: "Low" },
];

const timeFilterOptions = [
  { id: 1, title: "All Time" },
  { id: 2, title: "7d" },
  { id: 3, title: "30d" },
  { id: 4, title: "90d" },
];

// Alerts table dummy data
const alertsTableData = [
  {
    alertType: "Fall Incident",
    severity: "High",
    worker: "Paul Jones",
    timeDetected: "1:01 PM",
    status: "Pending",
    assignedTo: "Unassigned",
  },
  {
    alertType: "Access Breach",
    severity: "Critical",
    worker: "Mary Smith",
    timeDetected: "12:48 PM",
    status: "Acknowledged",
    assignedTo: "John Lee",
  },
  {
    alertType: "Safety Violation",
    severity: "Critical",
    worker: "Kyle Harris",
    timeDetected: "12:31 PM",
    status: "Escalated",
    assignedTo: "Jane Doe",
  },
  {
    alertType: "Unauthorized Access",
    severity: "Medium",
    worker: "Anna Kim",
    timeDetected: "12:17 PM",
    status: "Dismissed",
    assignedTo: "John Lee",
  },
  {
    alertType: "Fall Incident",
    severity: "Critical",
    worker: "Lisa Chen",
    timeDetected: "11:48 AM",
    status: "Pending",
    assignedTo: "Unassigned",
  },
  {
    alertType: "PPE Violation",
    severity: "Medium",
    worker: "Olivia Rhye",
    timeDetected: "11:27 AM",
    status: "Acknowledged",
    assignedTo: "Jane Doe",
  },
];

const escalated_incidents = [
  // Unassigned
  [
    {
      imgsrc: "/helmet.png",
      severity: "Moderate",
      title: "Helmet Violation Zone -A",
      person: "Prashanth Kumar",
      alertId: "FA-2043",
      location: "Assembly → Floor 2 → Cam C-04",
      time: "10 mins ago",
    },
    {
      imgsrc: "/helmet.png",
      severity: "Minor",
      title: "Helmet Violation Zone -B",
      person: "Prashanth Kumar",
      alertId: "FA-2043",
      location: "Assembly → Floor 2 → Cam C-04",
      time: "1 day ago",
    },
  ],

  // Assigned
  [
    {
      imgsrc: "/worked_fall.png",
      severity: "Severe",
      title: "Worker Fall Detected",
      person: "Paul Jones",
      alertId: "FA-2043",
      location: "Zone C → Loading Dock → Cam 4",
      time: "10 mins ago",
    },
    {
      imgsrc: "/helmet.png",
      severity: "Moderate",
      title: "No Safety Vest",
      person: "Prashanth Kumar",
      alertId: "FA-2043",
      location: "Zone F → Storage Area → Cam C-8",
      time: "1 day ago",
    },
  ],

  // In Review
  [
    {
      imgsrc: "/helmet.png",
      severity: "Moderate",
      title: "Safety Violation",
      person: "Sarah Kim",
      alertId: "FA-2043",
      location: "Assembly → Floor 2 → Cam C-04",
      time: "09:45 AM, Sep 12",
    },
    {
      imgsrc: "/helmet.png",
      severity: "Minor",
      title: "Unauthorized Entry",
      person: "Unknown ID",
      alertId: "FA-2043",
      location: "Zone A → South Gate → Cam C-10",
      time: "1 day ago",
    },
  ],

  // Resolved
  [
    {
      imgsrc: "/helmet.png",
      severity: "Minor",
      title: "No Safety Vest",
      person: "Michael Chen",
      alertId: "FA-2043",
      location: "Zone E → Parking Bay → Cam C-04",
      time: "10:16 AM, Sep 1",
    },
    {
      imgsrc: "/helmet.png",
      severity: "Severe",
      title: "Helmet Violation Zone -B",
      person: "Prashanth Kumar",
      alertId: "FA-2043",
      location: "Assembly → Floor 2 → Cam C-04",
      time: "1 day ago",
    },
  ],
];
const columnTitles = ["Unassigned", "Assigned", "In Review", "Resolved"];
const severityColors = {
  Resolved: {
    text: "text-[#067647]",
    bg: "bg-[#ECFDF3]",
    border: "border-[#aaefc6]",
  },
  Moderate: {
    text: "text-[#b54708]",
    bg: "bg-[#FFFAEB]",
    border: "border-[#fee396]",
  },
  Severe: {
    text: "text-[#B42318]",
    bg: "bg-[#FEF3F2]",
    border: "border-[#fca5a1]",
  },
  Minor: {
    text: "text-[#414651]",
    bg: "bg-[#fafafa]",
    border: "border-gray-500",
  },
};
export {
  severityColors,
  columnTitles,
  escalated_incidents,
  timeFilterOptions,
  severityOptions,
  assignedToOptions,
  statusOptions,
  extraFilters,
  alertsTableData,
};
