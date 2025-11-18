"use client";
import React from 'react'
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";

import NavMain from "@components/navbar/nav-main";

import {HomeLine, BarChartSquare01, Bell01,
   VideoRecorder, Users01, Settings02, 
   HelpCircle, Server01, File05,
   Sliders03,
} from "@untitledui/icons";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar';
import NavUser from './nav-user';
import TeamSwitcher from './team-switcher';

const AppSidebar = ({...props}) => {
    const { open } =useSidebar();
    const pathname = usePathname();
    const hasNewNotifications = useSelector(
        (state) => state.notification.hasNewNotifications
    );

    const data = 
    {
        user:{
            name:"Olivia TRhye",
            email:"olivia@email.com",
            avatar:"https://randomuser.me/api/portraits/women/32.jpg",
        },
        teams:[
            {
            name: "Wittting AI",
            logo: "/logo.svg",
            }
        ],
        navMain:[
        [
            { name: "Overview",
            href: "/",
            icon: (
                <HomeLine size={20}/>
            ),
           // isActive:true,
            submenu: [
                { id: 0, title: "Executive Dashboard", href: "/" },
                { id: 1, title: "System Dashboard ", href: "/" },
            ]
            },
        ],
        [
            { name: "Insights",
            href: "/insights",
            icon: (
                <BarChartSquare01 size={20}/>
            ),
            submenu: [
                { id: 0, title: "Safety & Compliance", href: "/insights/safety-and-compliance" },
                { id: 1, title: "Quality & Defects", href: "/insights/quality-and-defects" },
                { id: 2, title: "Workforce Monitoring", href: "/insights/workforce-management" },
                { id: 3, title: "Machine Health", href: "/insights/machine-health" },
            ]},

            { name: "Alerts & Incidents",
            href: "/alerts-center/all-alerts",
            icon: (
                <div className="relative">
                <Bell01 size={20}/>
                {hasNewNotifications && pathname !== "/alerts-center" && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                )}
                </div>
            ),
            submenu: [
                { id: 0, title: "Alerts Center", href: "/alerts-center/all-alerts" },
                { id: 1, title: "Escalated Incidents", href: "/alerts-center/escalated-incidents" },
                { id: 2, title: "Alert Timeline", href: "/alerts-center/alert-timeline" },
            ]},

            { name: "Monitoring",
            href: "/monitoring",
            icon: (
                <VideoRecorder size={20}/>
            ),
            submenu: [
            { id: 0, title: "Live Camera View", href:"/monitoring" },
            // { id: 1, title: "Camera Feed" },
            { id: 1, title: "Heatmap View", href:"/monitoring" },
            ]},

            { name: "Reports",
            href: "/reports",
            icon: (
                <File05 size={20}/>
            ),
            submenu: [
            { id: 0, title: "Incident Report", href:"/reports/incident-report" },
            { id: 1, title: "Audit Report", href:"/reports/audit-report" },
            ]},

            { name: "Camera Config",
            href: "/camera-configuration",
            icon: (<Sliders03 size={20}/>),
            },
        ],
        [
            { name: "People",
            href: "/users-and-roles",
            icon: <Users01 size={20}/>,
            submenu:[
                {id:0, title:"Users", href:"/users-and-roles"},
                {id:1, title:"Employees", href:"/admin-panel/employees"}
            ]},
        ],
        [
            { name:"System Management",
            href:"/system-management",
            icon:(
                <Server01 size={20}/>
            ),
            submenu:[
                { id: 0, title: "Cameras", href: "/system-management/cameras" },
                { id: 1, title: "Edge Devices", href: "/system-management/edge-devices" },
                { id: 2, title: "AI Models", href: "/system-management/ai-models" },
            ]},

            { name:"Admin Panel",
            href:"/admin-panel",
            icon: <Settings02 size={20}/>,
            submenu:[
                { id: 0, title: "Organization Settings", href: "/admin-panel/settings" },
                { id: 1, title: "Connectors", href: "/admin-panel/connectors" },
                { id: 2, title: "Employees", href: "/admin-panel/employees" },
                { id: 3, title: "Camera Setup", href: "/camera-configuration/add-camera" },
            ]},

            { name:"Support",
            href:"/support",
            icon: <HelpCircle size={20}/>
            }       
        ],
        ]
    }

  return (<>
        <Sidebar collapsible="icon" {...props}>
      
            <SidebarHeader className="!bg-white mb-5">
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            
            <SidebarContent>
                <NavMain items={data.navMain[0]} className=""/>
                <hr className="my-2 bg-[#E9EAEB] h-[2px] rounded-full" />
                <NavMain items={data.navMain[1]} className=""/>
                <hr className="my-2 bg-[#E9EAEB] h-[2px] rounded-full" />
                <NavMain items={data.navMain[2]} className=""/>
                
                <NavMain items={data.navMain[3]} className="mt-auto mb-2" />
            </SidebarContent>
            
                        <SidebarFooter>
                            <NavUser user={data.user}/>
                        </SidebarFooter>
                        <SidebarRail/>

                
    </Sidebar>
  </>)
}

export default AppSidebar