export const alertData = [
  {
    date: "25 March",
    incidents: [
      {
        type: "Fall Incident",
        time: "2:03pm",
        location: "Assembly Area → Floor 1 → Cam C-03",
        worker: "Amit Sharma",
        workerId: "#W-001",
        severity: "Critical",
        image: "/fall_incident.png",
        timeline: [
          {
            time: "2:00:00 PM",
            description: "Worker detected entering restricted area.",
          },
          {
            time: "2:02:30 PM",
            description: "Fall detected by Cam C-03.",
          },
          {
            time: "2:03:00 PM",
            description: "Emergency alert triggered for supervisor.",
          },
        ],
      },
      {
        type: "Access Breach: Unauthorized Entry",
        time: "1:14pm",
        location: "Chemical Storage → Floor 3 → Cam F-01",
        worker: "Ravi Singh",
        workerId: "#W-002",
        severity: "Breach",
        image: "/incident2.png",
        timeline: [
          {
            time: "1:12:00 PM",
            description: "Unauthorized access detected by Cam F-01.",
          },
          {
            time: "1:13:00 PM",
            description: "Worker identified as Ravi Singh.",
          },
          {
            time: "1:14:00 PM",
            description: "Security notified of breach.",
          },
        ],
      },
      {
        type: "PPE Violation: No Hardhat",
        time: "7:30am",
        location: "Assembly Area → Floor 1 → Cam C-03",
        worker: "Neha Gupta",
        workerId: "#W-003",
        severity: "Info",
        image: "/incident3.png",
        timeline: [
          {
            time: "7:29:00 AM",
            description: "Worker detected without hardhat.",
          },
          {
            time: "7:30:00 AM",
            description: "Supervisor notified of PPE violation.",
          },
        ],
      },
      {
        type: "Repeated PPE Violation: No Safety Goggles",
        time: "7:30am",
        location: "Assembly Area → Floor 1 → Cam C-03",
        worker: "Rajesh Kumar",
        workerId: "#W-004",
        severity: "Warning",
        image: "/incident4.png",
        timeline: [
          {
            time: "7:28:00 AM",
            description: "Worker detected without safety goggles.",
          },
          {
            time: "7:30:00 AM",
            description: "Repeated violation flagged for supervisor.",
          },
        ],
      },
    ],
  },
  {
    date: "24 March",
    incidents: [
      {
        type: "Access Breach: Unauthorized Entry",
        time: "1:14pm",
        location: "Chemical Storage → Floor 3 → Cam F-01",
        worker: "Sunita Yadav",
        workerId: "#W-005",
        severity: "Warning",
        image: "/incident21.png",
        timeline: [
          {
            time: "1:13:00 PM",
            description: "Unauthorized access detected by Cam F-01.",
          },
          {
            time: "1:14:00 PM",
            description: "Worker identified as Sunita Yadav.",
          },
          {
            time: "1:15:00 PM",
            description: "Security team alerted.",
          },
        ],
      },
      {
        type: "PPE Violation: No Hardhat",
        time: "7:30am",
        location: "Assembly Area → Floor 1 → Cam C-03",
        worker: "Manoj Tiwari",
        workerId: "#W-006",
        severity: "Info",
        image: "/incident31.png",
        timeline: [
          {
            time: "7:29:00 AM",
            description: "Worker detected without hardhat.",
          },
          {
            time: "7:30:00 AM",
            description: "Supervisor notified of PPE violation.",
          },
        ],
      },
      {
        type: "Repeated PPE Violation: No Safety Goggles",
        time: "7:30am",
        location: "Assembly Area → Floor 1 → Cam C-03",
        worker: "Anjali Verma",
        workerId: "#W-007",
        severity: "Warning",
        image: "/incident4.png",
        timeline: [
          {
            time: "7:28:00 AM",
            description: "Worker detected without safety goggles.",
          },
          {
            time: "7:30:00 AM",
            description: "Repeated violation flagged for supervisor.",
          },
        ],
      },
      {
        type: "Fall Incident: Critical",
        time: "2:03pm",
        location: "Assembly Area → Floor 1 → Cam C-03",
        worker: "Vikram Chauhan",
        workerId: "#W-008",
        severity: "Critical",
        image: "/fall_incident2.png",
        timeline: [
          {
            time: "2:00:00 PM",
            description: "Worker detected entering restricted area.",
          },
          {
            time: "2:02:30 PM",
            description: "Fall detected by Cam C-03.",
          },
          {
            time: "2:03:00 PM",
            description: "Emergency alert triggered for supervisor.",
          },
        ],
      },
    ],
  },
];
