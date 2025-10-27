import Ppe_violation from "@/components/dashComponents/Ppe_violation";
import Fall_incident from "@/components/dashComponents/Fall_incident";
import AccessBreach from "@/components/dashComponents/AccessBreach";
import StaffMonitoring from "@/components/dashComponents/StaffMonitoring";
import Overall from "@/components/dashComponents/Overall";

import {
  incidentData,
  ppe_incidentData,
  fall_incidentData,
  access_incidentData,
  staff_incidentData,
} from "../data/incidentData";

const primeCardsInfo = [
  {
    title: "Total PPE Violations",
    value: 100,
    percentageChange: 15,
  },
  {
    title: "Days Since Last Incident",
    value: 5,
    percentageChange: 10,
  },
  {
    title: "Incident Compliance Rate",
    value: "89.4%",
    percentageChange: 10,
  },
];
const ppe_primeCardsInfo = [
  {
    title: "Total PPE Violations",
    value: 100,
    percentageChange: -10,
  },
  {
    title: "Compliance Rate",
    value: 50,
    percentageChange: -5,
  },
  {
    title: "Violation Spike Day Count",
    value: 13,
    percentageChange: 12,
  },
];
const fall_primeCardsInfo = [
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
];
const access_primeCardsInfo = [
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
];
const staff_primeCardsInfo = [
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
];

const menu = [
  {
    title: "Overall",
    component: (
      <Overall primeCardsInfo={primeCardsInfo} incidentData={incidentData} />
    ),
  },
  {
    title: "PPE Violations",
    component: (
      <Ppe_violation
        primeCardsInfo={ppe_primeCardsInfo}
        incidentData={ppe_incidentData}
      />
    ),
  },
  {
    title: "Fall Incidents",
    component: (
      <Fall_incident
        primeCardsInfo={fall_primeCardsInfo}
        incidentData={fall_incidentData}
      />
    ),
  },
  {
    title: "Access Breach",
    component: (
      <AccessBreach
        primeCardsInfo={access_primeCardsInfo}
        incidentData={access_incidentData}
      />
    ),
  },
  {
    title: "Staff Monitoring",
    component: (
      <StaffMonitoring
        primeCardsInfo={staff_primeCardsInfo}
        incidentData={staff_incidentData}
      />
    ),
  },
];

export {
  menu,
  primeCardsInfo,
  ppe_primeCardsInfo,
  fall_primeCardsInfo,
  access_primeCardsInfo,
  staff_primeCardsInfo,
};
