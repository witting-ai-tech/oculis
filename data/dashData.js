export const menu =[
  {title:"OverAll"},
  {title:"Ppe Violation"},
  {title:"Fall Incident"},
  {title:"Access Breach"},
  {title:"Staff Monitoring"},
];

//dashboardConfig is the initial structure for API
export const dashboardConfig = {
  OverAll: {
    cardsInfo: [
      {
        title: "Total PPE Violations",
        value: 100,
        percentageChange: 15,
      },
      {
        title: "Day Since Last Incident",
        value: 5,
        percentageChange: 20,
      },
      {
        title: "Incident Compliance Rate",
        value: 89.4,
        percentageChange: 10,
      }
    ],
    incidentData: [
      {
        title: "PPE Violations",
        value: 23,
        percentageChange: -10,
        icon: "/ppe.svg",
      },
      {
        title: "Access Breaches",
        value: 4,
        percentageChange: -10,
        icon: "/access.svg",
      },
      {
        title: "Fall Incidents",
        value: 7,
        percentageChange: 10,
        icon: "/fall.svg",
      },
      {
        title: "Workforce Onsite",
        value: 75,
        percentageChange: 10,
        icon: "/workforce.svg",
      },
    ],
    chartSections: [
      {
        title: "Incident Trends",
        type: "line",
        data: [
          { day: "Sunday", PPE: 2, Helmet: 1 },
          { day: "Monday", PPE: 3, Helmet: 2 },
          { day: "Tuesday", PPE: 3, Helmet: 2.5 },
          { day: "Wednesday", PPE: 4, Helmet: 3 },
          { day: "Thursday", PPE: 5, Helmet: 3.5 },
          { day: "Friday", PPE: 6, Helmet: 4 },
          { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
        ],
        series: [
          { key: "PPE", label: "PPE", type: "linear" },
          { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
        ]
      },
      {
        title: "Incident Severity Breakdown",
        type: "bar",
        data: [
          { day: "Sun", Minor: 6, Moderate: 4, Critical: 5 },
          { day: "Mon", Minor: 5, Moderate: 5, Critical: 4 },
          { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
          { day: "Wed", Minor: 8, Moderate: 6, Critical: 5 },
          { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
          { day: "Fri", Minor: 8, Moderate: 6, Critical: 5 },
          { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
        ],
        series: [
          { key: "Critical", label: "Critical" },
          { key: "Moderate", label: "Moderate" },
          { key: "Minor", label: "Minor" },
        ],
      }
    ],
  },
  PpeViolation: {
    cardsInfo: [
      {
        title: "Total Fall Incidents",
        value: 100,
        percentageChange: -10,
      },
      {
        title: "Critical Fall Incidents",
        value: 3,
        percentageChange: 0,
      },
      {
        title: "Fall Incidents with Injury",
        value: 5,
        percentageChange: 2,
      },
    ],
    incidentData: [
      {
        title: "Repeat Violations",
        value: 10,
        percentageChange: 8,
        icon: "/ppe1.svg",
      },
      {
        title: "Pending Actions",
        value: 5,
        percentageChange: -2,
        icon: "/ppe2.svg",
      },
      {
        title: "Critical Violations",
        value: 6,
        percentageChange: 10,
        icon: "/ppe3.svg",
      },
      {
        title: "Avg. Violations per Day",
        value: 4.9,
        percentageChange: 10,
        icon: "/ppe4.svg",
      },
    ],
    chartSections: [
      {
        title: "Incident Trends",
        type: "line",
        data: [
          { day: "Sunday", PPE: 3, Helmet: 5 },
          { day: "Monday", PPE: 3, Helmet: 2 },
          { day: "Tuesday", PPE: 1, Helmet: 2.5 },
          { day: "Wednesday", PPE: 4, Helmet: 3 },
          { day: "Thursday", PPE: 5, Helmet: 3.5 },
          { day: "Friday", PPE: 6, Helmet: 6 },
          { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
        ],
        series: [
          { key: "PPE", label: "PPE", type: "linear" },
          { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
        ]
      },
      {
        title: "Incident Severity Breakdown",
        type: "bar",
        data: [
          { day: "Sun", Minor: 6, Moderate: 4, Critical: 2 },
          { day: "Mon", Minor: 5, Moderate: 5, Critical: 4 },
          { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
          { day: "Wed", Minor: 8, Moderate: 9, Critical: 5 },
          { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
          { day: "Fri", Minor: 3, Moderate: 6, Critical: 5 },
          { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
        ],
        series: [
          { key: "Critical", label: "Critical" },
          { key: "Moderate", label: "Moderate" },
          { key: "Minor", label: "Minor" },
        ],
      }
    ],
  },
  FallIncident: {
    cardsInfo: [
      {
        title: "Total Fall Incidents",
        value: 100,
        percentageChange: 20,
      },
      {
        title: "Critical Fall Incidents",
        value: 3,
        percentageChange: 0,
      },
      {
        title: "Fall Incidents with Injury",
        value: 5,
        percentageChange: 2,
      },
    ],
    incidentData: [
      {
        title: "Repeat Violations",
        value: 23,
        percentageChange: -10,
        icon: "/fall1.svg",
      },
      {
        title: "Access Breaches",
        value: 4,
        percentageChange: -10,
        icon: "/fall2.svg",
      },
      {
        title: "Fall Incidents",
        value: 7,
        percentageChange: 10,
        icon: "/fall3.svg",
      },
      {
        title: "Workforce Onsite",
        value: 75,
        percentageChange: 10,
        icon: "/fall4.svg",
      },
    ],
    chartSections: [
      {
        title: "Incident Trends",
        type: "line",
        data: [
          { day: "Sunday", PPE: 2, Helmet: 1 },
          { day: "Monday", PPE: 5, Helmet: 2 },
          { day: "Tuesday", PPE: 3, Helmet: 2.5 },
          { day: "Wednesday", PPE: 4, Helmet: 3 },
          { day: "Thursday", PPE: 1, Helmet: 3.5 },
          { day: "Friday", PPE: 6, Helmet: 0 },
          { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
        ],
        series: [
          { key: "PPE", label: "PPE", type: "linear" },
          { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
        ]
      },
      {
        title: "Incident Severity Breakdown",
        type: "bar",
        data: [
          { day: "Sun", Minor: 6, Moderate: 4, Critical: 5 },
          { day: "Mon", Minor: 5, Moderate: 5, Critical: 4 },
          { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
          { day: "Wed", Minor: 8, Moderate: 6, Critical: 5 },
          { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
          { day: "Fri", Minor: 8, Moderate: 6, Critical: 5 },
          { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
        ],
        series: [
          { key: "Critical", label: "Critical" },
          { key: "Moderate", label: "Moderate" },
          { key: "Minor", label: "Minor" },
        ],
      }
    ],
  },
  AccessBreach: {
    cardsInfo: [
      {
        title: "Total Access Breaches",
        value: 12,
        percentageChange: -20,
      },
      {
        title: "Unauthorized Entry Attempts",
        value: 50,
        percentageChange: -5,
      },
      {
        title: "Tailgating Events",
        value: 13,
        percentageChange: -12,
      },
    ],
    incidentData: [
      {
        title: "Repeat Violations",
        value: 23,
        percentageChange: -10,
        icon: "/access1.svg",
      },
      {
        title: "Access Breaches",
        value: 4,
        percentageChange: -10,
        icon: "/ppe2.svg",
      },
      {
        title: "Fall Incidents",
        value: 7,
        percentageChange: 10,
        icon: "/access3.svg",
      },
      {
        title: "Workforce Onsite",
        value: 75,
        percentageChange: 10,
        icon: "/access4.svg",
      },
    ],
    chartSections: [
      {
        title: "Incident Trends",
        type: "line",
        data: [
          { day: "Sunday", PPE: 2, Helmet: 1 },
          { day: "Monday", PPE: 4, Helmet: 2 },
          { day: "Tuesday", PPE: 3, Helmet: 2.5 },
          { day: "Wednesday", PPE: 6, Helmet: 3 },
          { day: "Thursday", PPE: 5, Helmet: 3.5 },
          { day: "Friday", PPE: 6, Helmet: 1 },
          { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
        ],
        series: [
          { key: "PPE", label: "PPE", type: "linear" },
          { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
        ]
      },
      {
        title: "Incident Severity Breakdown",
        type: "bar",
        data: [
          { day: "Sun", Minor: 6, Moderate: 4, Critical: 5 },
          { day: "Mon", Minor: 5, Moderate: 3, Critical: 4 },
          { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
          { day: "Wed", Minor: 2, Moderate: 6, Critical: 5 },
          { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
          { day: "Fri", Minor: 8, Moderate: 6, Critical: 5 },
          { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
        ],
        series: [
          { key: "Critical", label: "Critical" },
          { key: "Moderate", label: "Moderate" },
          { key: "Minor", label: "Minor" },
        ],
      }
    ],
  },
  StaffMonitoring: {
    cardsInfo: [
      {
        title: "Total Staff on Floor",
        value: 38,
        percentageChange: 5.3,
      },
      {
        title: "PPE Non-Compliance Incidents",
        value: 17,
        percentageChange: -10.5,
      },
      {
        title: "Staff Without ID Badges",
        value: 9,
        percentageChange: 2,
      },
    ],
    incidentData: [
      {
        title: "Repeat Violations",
        value: 23,
        percentageChange: -10,
        icon: "/staff1.svg",
      },
      {
        title: "Access Breaches",
        value: 4,
        percentageChange: -10,
        icon: "/staff2.svg",
      },
      {
        title: "Fall Incidents",
        value: 7,
        percentageChange: 10,
        icon: "/ppe2.svg",
      },
      {
        title: "Workforce Onsite",
        value: 75,
        percentageChange: 10,
        icon: "/staff4.svg",
      },
    ],
    chartSections: [
      {
        title: "Incident Trends",
        type: "line",
        data: [
          { day: "Sunday", PPE: 2, Helmet: 1 },
          { day: "Monday", PPE: 3, Helmet: 2 },
          { day: "Tuesday", PPE: 3, Helmet: 2.5 },
          { day: "Wednesday", PPE: 4, Helmet: 3 },
          { day: "Thursday", PPE: 5, Helmet: 3.5 },
          { day: "Friday", PPE: 6, Helmet: 4 },
          { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
        ],
        series: [
          { key: "PPE", label: "PPE", type: "linear" },
          { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
        ]
      },
      {
        title: "Incident Severity Breakdown",
        type: "bar",
        data: [
          { day: "Sun", Minor: 6, Moderate: 4, Critical: 5 },
          { day: "Mon", Minor: 2, Moderate: 5, Critical: 4 },
          { day: "Tue", Minor: 7, Moderate: 5, Critical: 0 },
          { day: "Wed", Minor: 8, Moderate: 6, Critical: 5 },
          { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
          { day: "Fri", Minor: 5, Moderate: 6, Critical: 5 },
          { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
        ],
        series: [
          { key: "Critical", label: "Critical" },
          { key: "Moderate", label: "Moderate" },
          { key: "Minor", label: "Minor" },
        ],
      }
    ],
  },
};


//updated API structure
export const dashConfig = [
  {
    id:"OverAll",
    title: "OverAll",
    enable:true,
    active:true,
    content:{
      cardsInfo: [
        {
          title: "Total PPE Violations",
          value: 100,
          percentageChange: 15,
        },
        {
          title: "Day Since Last Incident",
          value: 5,
          percentageChange: 20,
        },
        {
          title: "Incident Compliance Rate",
          value: 89.4,
          percentageChange: 10,
        }
      ],
      incidentData: [
        {
          title: "PPE Violations",
          value: 23,
          percentageChange: -10,
          icon: "/ppe.svg",
        },
        {
          title: "Access Breaches",
          value: 4,
          percentageChange: -10,
          icon: "/access.svg",
        },
        {
          title: "Fall Incidents",
          value: 7,
          percentageChange: 10,
          icon: "/fall.svg",
        },
        {
          title: "Workforce Onsite",
          value: 75,
          percentageChange: 10,
          icon: "/workforce.svg",
        },
      ],
      chartSections: [
        {
          id:"incident-trends",
          title: "Incident Trends",
          type: "line",
          // data: [
          //   { day: "Sunday", PPE: 2, Helmet: 1 },
          //   { day: "Monday", PPE: 3, Helmet: 2 },
          //   { day: "Tuesday", PPE: 3, Helmet: 2.5 },
          //   { day: "Wednesday", PPE: 4, Helmet: 3 },
          //   { day: "Thursday", PPE: 5, Helmet: 3.5 },
          //   { day: "Friday", PPE: 6, Helmet: 4 },
          //   { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
          // ],
          // series: [
          //   { key: "PPE", label: "PPE", type: "linear" },
          //   { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
          // ]
        },
        {
          id:"severity-breakdown",
          title: "Incident Severity Breakdown",
          type: "bar",
          // data: [
          //   { day: "Sun", Minor: 6, Moderate: 4, Critical: 5 },
          //   { day: "Mon", Minor: 5, Moderate: 5, Critical: 4 },
          //   { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
          //   { day: "Wed", Minor: 8, Moderate: 6, Critical: 5 },
          //   { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
          //   { day: "Fri", Minor: 8, Moderate: 6, Critical: 5 },
          //   { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
          // ],
          // series: [
          //   { key: "Critical", label: "Critical" },
          //   { key: "Moderate", label: "Moderate" },
          //   { key: "Minor", label: "Minor" },
          // ],
        }
      ],
    },
  },
  {
    id:"PpeViolation",
    title:"Ppe Violation",
    enable:true,
    active:false,
    content:{
      cardsInfo: [
      {
        title: "Total Fall Incidents",
        value: 100,
        percentageChange: -10,
      },
      {
        title: "Critical Fall Incidents",
        value: 3,
        percentageChange: 0,
      },
      {
        title: "Fall Incidents with Injury",
        value: 5,
        percentageChange: 2,
      },
      ],
      incidentData: [
        {
          title: "Repeat Violations",
          value: 10,
          percentageChange: 8,
          icon: "/ppe1.svg",
        },
        {
          title: "Pending Actions",
          value: 5,
          percentageChange: -2,
          icon: "/ppe2.svg",
        },
        {
          title: "Critical Violations",
          value: 6,
          percentageChange: 10,
          icon: "/ppe3.svg",
        },
        {
          title: "Avg. Violations per Day",
          value: 4.9,
          percentageChange: 10,
          icon: "/ppe4.svg",
        },
      ],
      chartSections: [
        {
          id:"incident-trends",
          title: "Incident Trends",
          type: "line",
        },
        {
          id:"severity-breakdown",
          title: "Incident Severity Breakdown",
          type:"bar"
        }
      ],
    },
  },
  {
    id:"FallIncident",
    title:"Fall Incident",
    enable:true,
    active:false,
    content:{
      cardsInfo: [
        {
          title: "Total Fall Incidents",
          value: 100,
          percentageChange: 20,
        },
        {
          title: "Critical Fall Incidents",
          value: 3,
          percentageChange: 0,
        },
        {
          title: "Fall Incidents with Injury",
          value: 5,
          percentageChange: 2,
        },
      ],
      incidentData: [
        {
          title: "Repeat Violations",
          value: 23,
          percentageChange: -10,
          icon: "/fall1.svg",
        },
        {
          title: "Access Breaches",
          value: 4,
          percentageChange: -10,
          icon: "/fall2.svg",
        },
        {
          title: "Fall Incidents",
          value: 7,
          percentageChange: 10,
          icon: "/fall3.svg",
        },
        {
          title: "Workforce Onsite",
          value: 75,
          percentageChange: 10,
          icon: "/fall4.svg",
        },
      ],
      chartSections: [
        {
          id: "incident-trends",
          title: "Incident Trends",
          type: "line"
        },
        {
          id: "severity-breakdown",
          title: "Incident Severity Breakdown",
          type: "bar"
        }
      ],
    }
  },
  {
    id:"AccessBreach",
    title:"Access Breach",
    enable:true,
    active:false,
    content:{
      cardsInfo: [
        {
          title: "Total Access Breaches",
          value: 12,
          percentageChange: -20,
        },
        {
          title: "Unauthorized Entry Attempts",
          value: 50,
          percentageChange: -5,
        },
        {
          title: "Tailgating Events",
          value: 13,
          percentageChange: -12,
        },
      ],
      incidentData: [
        {
          title: "Repeat Violations",
          value: 23,
          percentageChange: -10,
          icon: "/access1.svg",
        },
        {
          title: "Access Breaches",
          value: 4,
          percentageChange: -10,
          icon: "/ppe2.svg",
        },
        {
          title: "Fall Incidents",
          value: 7,
          percentageChange: 10,
          icon: "/access3.svg",
        },
        {
          title: "Workforce Onsite",
          value: 75,
          percentageChange: 10,
          icon: "/access4.svg",
        },
      ],
      chartSections: [
        {
          id:"incident-trends",
          title: "Incident Trends",
          type: "line",
        },
        {
          id:"severity-breakdown",
          title: "Incident Severity Breakdown",
          type: "bar",
        }
      ],
    }
  },
  {
    id:"StaffMonitoring",
    title:"Staff Monitoring",
    enable:true,
    active:false,
    content:{
      cardsInfo: [
        {
          title: "Total Staff on Floor",
          value: 38,
          percentageChange: 5.3,
        },
        {
          title: "PPE Non-Compliance Incidents",
          value: 17,
          percentageChange: -10.5,
        },
        {
          title: "Staff Without ID Badges",
          value: 9,
          percentageChange: 2,
        },
      ],
      incidentData: [
        {
          title: "Repeat Violations",
          value: 23,
          percentageChange: -10,
          icon: "/staff1.svg",
        },
        {
          title: "Access Breaches",
          value: 4,
          percentageChange: -10,
          icon: "/staff2.svg",
        },
        {
          title: "Fall Incidents",
          value: 7,
          percentageChange: 10,
          icon: "/ppe2.svg",
        },
        {
          title: "Workforce Onsite",
          value: 75,
          percentageChange: 10,
          icon: "/staff4.svg",
        },
      ],
      chartSections: [
        {
          id:"incident-trends",
          title: "Incident Trends",
          type: "line",
        },
        {
          id:"severity-breakdown",
          title: "Incident Severity Breakdown",
          type: "bar",
        }
      ],
    }
  }
]

export const overall_chartData = {
  tabId: "OverAll",
  timeRange: "7d",
  startDate: "2025-10-15",
  endDate: "2025-10-22",
  charts: [
    {
      chartId: "incident-trends",
      title: "Incident Trends",
      type: "line",
      data: [
          { day: "Sunday", PPE: 2, Helmet: 1 },
          { day: "Monday", PPE: 3, Helmet: 2 },
          { day: "Tuesday", PPE: 3, Helmet: 2.5 },
          { day: "Wednesday", PPE: 4, Helmet: 3 },
          { day: "Thursday", PPE: 5, Helmet: 3.5 },
          { day: "Friday", PPE: 6, Helmet: 4 },
          { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
        ],
        series: [
          { key: "PPE", label: "PPE", type: "linear" },
          { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
        ]
    },
    {
      chartId: "severity-breakdown",
      title: "Incident Severity Breakdown",
      type: "bar",
      data: [
        { day: "Sun", Minor: 6, Moderate: 4, Critical: 5 },
        { day: "Mon", Minor: 5, Moderate: 5, Critical: 4 },
        { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
        { day: "Wed", Minor: 8, Moderate: 6, Critical: 5 },
        { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
        { day: "Fri", Minor: 8, Moderate: 6, Critical: 5 },
        { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
      ],
      series: [
        { key: "Critical", label: "Critical" },
        { key: "Moderate", label: "Moderate" },
        { key: "Minor", label: "Minor" },
      ],
    }
  ]
}
export const ppe_chartData = {
  tabId: "PpeViolation",
  timeRange: "7d",
  startDate: "2025-10-15",
  endDate: "2025-10-22",
  charts:[
      {
        chartId: "incident-trends",
        title: "Incident Trends",
        type: "line",
        data: [
          { day: "Sunday", PPE: 3, Helmet: 5 },
          { day: "Monday", PPE: 3, Helmet: 2 },
          { day: "Tuesday", PPE: 1, Helmet: 2.5 },
          { day: "Wednesday", PPE: 4, Helmet: 3 },
          { day: "Thursday", PPE: 5, Helmet: 3.5 },
          { day: "Friday", PPE: 6, Helmet: 6 },
          { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
        ],
        series: [
          { key: "PPE", label: "PPE", type: "linear" },
          { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
        ]
      },
      {
        chartId: "severity-breakdown",
        title: "Incident Severity Breakdown",
        type: "bar",
        data: [
          { day: "Sun", Minor: 6, Moderate: 4, Critical: 2 },
          { day: "Mon", Minor: 5, Moderate: 5, Critical: 4 },
          { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
          { day: "Wed", Minor: 8, Moderate: 9, Critical: 5 },
          { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
          { day: "Fri", Minor: 3, Moderate: 6, Critical: 5 },
          { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
        ],
        series: [
          { key: "Critical", label: "Critical" },
          { key: "Moderate", label: "Moderate" },
          { key: "Minor", label: "Minor" },
        ],
      }
    ],
}
export const fall_chartData = {
  tabId: "FallIncident",
  timeRange: "7d",
  startDate: "2025-10-15",
  endDate: "2025-10-22",
  charts: [
    {
      chartId: "incident-trends",
      title: "Incident Trends",
      type: "line",
      data: [
        { day: "Sunday", PPE: 2, Helmet: 1 },
        { day: "Monday", PPE: 5, Helmet: 2 },
        { day: "Tuesday", PPE: 3, Helmet: 2.5 },
        { day: "Wednesday", PPE: 4, Helmet: 3 },
        { day: "Thursday", PPE: 1, Helmet: 3.5 },
        { day: "Friday", PPE: 6, Helmet: 0 },
        { day: "Saturday", PPE: 6.5, Helmet: 4.5 },
      ],
      series: [
        { key: "PPE", label: "PPE", type: "linear" },
        { key: "Helmet", label: "Helmet", dashed: true, type: "linear", },
      ]
    },
    {
      chartId: "severity-breakdown",
      title: "Incident Severity Breakdown",
      type: "bar",
      data: [
        { day: "Sun", Minor: 6, Moderate: 4, Critical: 5 },
        { day: "Mon", Minor: 5, Moderate: 5, Critical: 4 },
        { day: "Tue", Minor: 7, Moderate: 5, Critical: 6 },
        { day: "Wed", Minor: 8, Moderate: 6, Critical: 5 },
        { day: "Thu", Minor: 7, Moderate: 6, Critical: 4 },
        { day: "Fri", Minor: 8, Moderate: 6, Critical: 5 },
        { day: "Sat", Minor: 7, Moderate: 5, Critical: 5 },
      ],
      series: [
        { key: "Critical", label: "Critical" },
        { key: "Moderate", label: "Moderate" },
        { key: "Minor", label: "Minor" },
      ],
    }
  ],
}

