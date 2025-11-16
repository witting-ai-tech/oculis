"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Settings } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Hnavbar from "@/components/Hnavbar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const connections = [
  [
    {
      id: 1,
      name: "Siemens",
      description: "Smart factory, IOT and industrial control systems.",
      imgsrc: "/siemens-logo.svg",
    },
    {
      id: 2,
      name: "Ignition",
      description: "Industrial SCADA and HMI platform for real-time control.",
      imgsrc: "/c_logo/Ignition.svg",
    },
    {
      id: 3,
      name: "AVEVA",
      description: "Digital twins and industrial operations management.",
      imgsrc: "/c_logo/Aveva_logo.svg",
    },
    {
      id: 4,
      name: "Allen-Bradley",
      description: "PLCs, motor controls and factory automation.",
      imgsrc: "/c_logo/allen-bradley-logo.svg",
    },
    {
      id: 5,
      name: "ABB",
      description: "Industrial automation and robotics systems.",
      imgsrc: "/c_logo/ABB_logo.svg",
    },
    {
      id: 6,
      name: "Omron",
      description: "Factory automation, sensors, and robotics.",
      imgsrc: "/c_logo/omron.svg",
    },
    {
      id: 7,
      name: "Litmus",
      description: "Edge data platform for industrial IoT devices.",
      imgsrc: "/c_logo/litmus-logo.svg",
    },
    {
      id: 8,
      name: "Honeywell",
      description: "Process automation and building technologies.",
      imgsrc: "/c_logo/Honeywell_logo.svg",
    },
    {
      id: 9,
      name: "GE Vernova",
      description: "Industrial software and grid solutions for power plants.",
      imgsrc: "/c_logo/ge.svg",
    },
    {
      id: 10,
      name: "Schneider Electric",
      description: "Power management and energy automation.",
      imgsrc: "/c_logo/sch.svg",
    },
    {
      id: 11,
      name: "Mitsubishi Electric",
      description: "Factory automation and CNC controls.",
      imgsrc: "/c_logo/mit.svg",
    },
    {
      id: 12,
      name: "SAP",
      description: "Enterprise resource planning and digital core platform.",
      imgsrc: "/c_logo/sap.svg",
    },
  ],
  [
    {
      id: 13,
      name: "WhatsApp",
      description: "Real-time alerts and communication for field teams.",
      imgsrc: "/c_logo/whatsapp.svg",
    },
    {
      id: 2,
      name: "Gmail",
      description: "Notification and email-based communication.",
      imgsrc: "/c_logo/mail.svg",
    },
    {
      id: 3,
      name: "Outlook",
      description: "Email alerts and calendar-based reminders.",
      imgsrc: "/c_logo/outlook.svg",
    },
    {
      id: 4,
      name: "Slack",
      description: "Team messaging and integration notifications.",
      imgsrc: "/c_logo/slack.svg",
    },
  ],
  [
    {
      id: 16,
      name: "Google Drive",
      description: "Enterprise resource planning and digital core platform.",
      imgsrc: "/siemens-logo.svg",
    },
    {
      id: 17,
      name: "Sharepoint",
      description: "Enterprise resource planning and digital core platform.",
      imgsrc: "/c_logo/sharepoint.svg",
    },
    {
      id: 18,
      name: "Confluence",
      description: "Knowledge base for audits, workflows, and teams.",
      imgsrc: "/c_logo/confluence.svg",
    },
  ],
];

const menu = [
  { id: 0, title: "Industrial Automation" },
  { id: 1, title: "Communication Channels" },
  { id: 2, title: "Knowledge Systems" },
];

const ConnectorsPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [items, setItems] = useState(() =>
    connections[currentTab].map((c) => ({ ...c, enabled: false }))
  );

  // Refresh items when tab changes
  useEffect(() => {
    setItems(connections[currentTab].map((c) => ({ ...c, enabled: false })));
  }, [currentTab]);

  const handleToggle = (key, value) => {
    setItems((prev) =>
      prev.map((it) =>
        (it.id ?? it.name) === key ? { ...it, enabled: value } : it
      )
    );
  };

  return (
    <>
      <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27] mb-6">
        Connectors
      </h1>

      <section>
        <nav className="w-full my-6 flex items-center justify-center">
          <div className="w-full max-w-[680px]">
            <Hnavbar
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              menu={menu}
            />
          </div>
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((connection) => {
            const key = connection.id ?? connection.name;
            return (
              <div
                key={key}
                className="max-w-[300px] w-full p-3 shadow-xs border rounded-[12px] relative group"
              >
                <div className="w-[54px] h-[42px] mb-2 bg-[#f5f5f5] flex items-center justify-center p-1">
                  <Image
                    src={connection.imgsrc}
                    width={46}
                    height={20}
                    alt={connection.name}
                  />
                </div>

                <h4 className="text-sm font-bold mb-[2px]">
                  {connection.name}
                </h4>
                <p className="text-xs text-[#535862]">
                  {connection.description}
                </p>

                <div className="w-full mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 border shadow-skew text-sm px-2 py-1 rounded-[8px] font-medium">
                    <Settings size={16} className="text-[#535862]" />
                    Settings
                  </button>

                  <Switch
                    id={`toggle-${key}`}
                    checked={connection.enabled}
                    onCheckedChange={(checked) => handleToggle(key, checked)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ConnectorsPage;
