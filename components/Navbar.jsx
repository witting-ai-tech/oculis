
"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  LogIn,
} from "lucide-react";
import {HomeLine, BarChartSquare01, Bell01,
   VideoRecorder, User01, Users01, Settings02, 
   HelpCircle, Server01, File05, ChevronDown,
   ChevronSelectorVertical,
   BookOpen01,
   Virus,
   LayersTwo01,
   Plus,
   Command} from "@untitledui/icons"

import { useSelector } from "react-redux";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator,
  SidebarGroupContent,
  SidebarGroup,
} from "./ui/sidebar";
import {useOnClickOutside} from "@/hooks/sideNavbar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";


const SidebarNavigation = () => {
  const pathname = usePathname();
  const { open, setOpen, isMobile } = useSidebar();
  const hasNewNotifications = useSelector(
    (state) => state.notification.hasNewNotifications
  );
  const sidebarRef = useRef(null);
  
  useOnClickOutside(sidebarRef, ()=> setOpen(false))

  const navItems = [
    { name: "Overview",
      href: "/",
      icon: (
        <HomeLine size={20} color="#717680"/>
      ),
      submenu: [
        { id: 0, title: "Executive Dashboard", href: "/" },
        { id: 1, title: "System Dashboard ", href: "/" },
      ]
    },
    { name: "Insights",
      href: "/not-found",
      icon: (
         <BarChartSquare01 size={20} color="#717680"/>
      ),
      submenu: [
        { id: 0, title: "Safety & Compliance", href: "/not-found" },
        { id: 1, title: "Quality & Defects", href: "/not-found" },
        { id: 2, title: "Workforce Monitoring", href: "/not-found" },
        { id: 3, title: "Machine Health", href: "/not-found" },

      ]
    },
    { name: "Alerts & Incidents",
      href: "/alerts-center/all-alerts",
      icon: (
        <div className="relative">
          <Bell01 size={20} color="#717680" />
          {hasNewNotifications && pathname !== "/alerts-center" && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
        </div>
      ),
      submenu: [
        { id: 0, title: "Alerts Center", href: "/alerts-center/all-alerts" },
        { id: 1, title: "Escalated Incidents", href: "/alerts-center/escalated-incidents" },
        { id: 2, title: "Alert Timeline", href: "/alerts-center/alert-timeline" },
      ]
    },
    { name: "Monitoring",
      href: "/monitoring",
      icon: (
        <VideoRecorder size={20} color="#717680"/>
      ),
      submenu: [
      { id: 0, title: "Live Camera View", href:"/monitoring" },
      // { id: 1, title: "Camera Feed" },
      { id: 1, title: "Heatmap View", href:"/monitoring" },
    ]
    },
    { name: "Reports",
      href: "/not-found",
      icon: (
        <File05 size={20} color="#717680"/>
      ),
      submenu: [
      { id: 0, title: "Incident Report", href:"/not-found" },
      { id: 1, title: "Audit Report", href:"/not-found" },
      ]
    },
    { name: "Camera Config",
      href: "/camera-configuration",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "stroke-[#717680] transition-colors duration-300",
            "group-hover:stroke-[#7d48df]",
            pathname === "/camera-configuration" && "stroke-[#7d48df]"
          )}
        >
          <path
            d="M12.5421 7.5H4.58333C3.43274 7.5 2.5 6.56726 2.5 5.41667C2.5 4.26607 3.43274 3.33333 4.58333 3.33333H12.5421M7.45791 16.6667H15.4167C16.5673 16.6667 17.5 15.7339 17.5 14.5833C17.5 13.4327 16.5673 12.5 15.4167 12.5H7.45791M2.5 14.5833C2.5 16.1942 3.80584 17.5 5.41667 17.5C7.0275 17.5 8.33333 16.1942 8.33333 14.5833C8.33333 12.9725 7.0275 11.6667 5.41667 11.6667C3.80584 11.6667 2.5 12.9725 2.5 14.5833ZM17.5 5.41667C17.5 7.0275 16.1942 8.33333 14.5833 8.33333C12.9725 8.33333 11.6667 7.0275 11.6667 5.41667C11.6667 3.80584 12.9725 2.5 14.5833 2.5C16.1942 2.5 17.5 3.80584 17.5 5.41667Z"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    { name: "People",
      href: "/users-and-roles",
      icon: <Users01 size={20}  color="#717680"/>,
      submenu:[
        {id:0, title:"Users", href:"/users-and-roles"},
        {id:1, title:"Employs", href:"/admin-panel/employees"}
      ]
    },
    { name:"System Management",
      href:"/not-found",
      icon:(
        <Server01 size={20} color="#717680"/>
      ),
      submenu:[
        { id: 0, title: "Cameras", href: "/" },
        { id: 1, title: "Edge Devices", href: "/" },
        { id: 2, title: "AI Models", href: "/" },
      ],
    },
    { name:"Admin Panel",
      href:"/admin-panel",
      icon: <Settings02 size={20} color="#717680"/>,
      submenu:[
        { id: 0, title: "Organization Settings", href: "/admin-panel/settings" },
        { id: 1, title: "Connectors", href: "/admin-panel/connectors" },
        { id: 2, title: "Employees", href: "/admin-panel/employees" },
        { id: 3, title: "Camera Setup", href: "/camera-configuration/add-camera" },
      ],
    },
    { name:"Support",
      href:"/not-found",
      icon: <HelpCircle size={20} color="#717680"/>
    }
  ];

  const navGroupedItems = [navItems.splice(0,1), navItems.splice(0,5), navItems.splice(0,1), navItems.splice(-3)];
  
  const organizations =[
    { name: "Acme Inc.",
      icon:(<LayersTwo01 size={20} color="#717680"/>),
      hash:{icon:(<Command size={15} color="#717680"/>), value:1}
    },
    { name: "Evil Inc.",
      icon:(<Virus size={20} color="#717680"/>),
      hash:{icon:(<Command size={15} color="#717680"/>), value:1}
    },
    { name: "Open Inc.",
      icon:(<BookOpen01 size={20} color="#717680"/>),
      hash:{icon:(<Command size={15} color="#717680"/>), value:1}
    }
  ];

  return (
    <div ref={sidebarRef} onPointerDown={(e)=>{
      if(!open) setOpen(true);
      e.stopPropagation()
    }}>
    <Sidebar
      collapsible="icon"
      className="border-r-2 border-[#E9EAEB] flex flex-col h-full"
    >

      {/* Header with Logo */}
      <SidebarHeader className="px-4 py-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {open == false ? (
              <button className="w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-gray-50 group transition-all duration-200">
                  <User01
                    alt="User Avatar"
                    className="rounded-full object-cover border w-8 h-8"
                  />
              </button>
            ):(
              <button className="w-full flex items-center relative rounded-xl bg-white shadow-sm px-2 py-2 hover:bg-gray-50 group transition-all duration-200">
                <User01
                  alt="User Avatar"
                  className="rounded-full object-cover border w-8 h-8"
                />
              <div className="ml-2 my-1 min-w-0 flex-1 text-left">
                <div className="font-semibold text-gray-900 text-md leading-tight truncate">Acme Inc.</div>
                <div className="text-xs text-gray-500 leading-tight truncate mt-1">Enterprise</div>
              </div>
              <ChevronSelectorVertical className="absolute top-0 right-0 mt-3.5 mr-2 text-gray-400 ml-2 group-hover:text-gray-600" />
            </button>
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent side="right" align="end" className="w-64 ml-1 mt-3 bg-white rounded-lg shadow-lg">
            {organizations.map((org, idx)=>(
              <DropdownMenuItem key={idx} className="px-4 py-2 flex justify-between w-full">
                <span className="flex items-center gap-3">
                  <span>{org.icon}</span>
                  <span>{org.name}</span>
                </span>
                <span className="flex items-center px-1 rounded-sm border">
                  <span>{org.hash.icon}</span><span className="text-sm text-gray-600">{org.hash.value}</span>
                </span>

              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className="flex px-2 py-2">
              <button className="flex w-full items-center justify-center gap-2 py-2 relative 
              rounded-lg border bg-white hover:bg-gray-50 group transition-all duration-200"
              onClick={console.log("Add client")}>
                <Plus/> <span>Add Client</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>

        </DropdownMenu>
      </SidebarHeader>

      {/* Main Navigation Content */}
      <SidebarContent className="flex-1 flex-col relative">
        {navGroupedItems.map((group, groupIdx)=>(
          <>
          <SidebarGroup key={groupIdx} className={cn("px-3 py-0", groupIdx==navGroupedItems.length-1 ? "absolute bottom-0":"")}>
            <SidebarGroupContent>
              {group.map((navItem, navIdx)=>(
                <SidebarMenu key={navIdx}>
                  {navItem.submenu ? (
                        <Collapsible>
                        <SidebarMenuItem className="py-2">
                          <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={navItem.name}
                            className={cn("flex justify-between items-center w-full",
                              "group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df]",
                            )}
                          >
                            <span className="flex items-center gap-2">
                            <span>{navItem.icon}</span><span>{navItem.name}</span>
                            </span>
                            <ChevronDown className={cn("transition-transform duration-200" )} />
                          </SidebarMenuButton>
                          </CollapsibleTrigger>    
                        </SidebarMenuItem>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {navItem.submenu.map((sub) => (
                            <SidebarMenuSubItem key={sub.id} className="py-1">
                              <SidebarMenuSubButton 
                              asChild 
                              className={cn(pathname === sub.href
                              ? "text-[#7d48df] bg-[#f8f5ff]"
                              : "text-grey")}>
                              <Link href={sub.href} className={cn()}>{sub.title}</Link>
                            </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible> 
                     
                       
                  ):(
                    <SidebarMenuItem className="py-2">
                    <SidebarMenuButton
                       className={cn("group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df]",
                        pathname === navItem.href ? "text-[#7d48df] bg-[#f8f5ff]" : "text-grey"
                      )}
                    >
                      <Link href={navItem.href} className="flex items-center gap-2">
                      <span>{navItem.icon}</span><span>{navItem.name}</span>
                      </Link>
                    </SidebarMenuButton>                  
                    </SidebarMenuItem>
                  )}
                  
                </SidebarMenu>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator
          className={cn(
            groupIdx==navGroupedItems.length-1 ? "hidden"
            : groupIdx == navGroupedItems.length-2 ? "hidden":"")}/>
          </>
          
        ))}
      

      </SidebarContent>

      <SidebarFooter className="px-4 py-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {open == false ? (
              <button className="w-8 h-8 flex items-center justify-center rounded-full shadow-sm hover:bg-gray-50 group transition-all duration-200">
                <div className="relative">
                  <Users01
                    alt="User Avatar"
                    className="rounded-full object-cover border w-8 h-8"
                  />
                  <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
              </button>
            ):(
              <button className="w-full flex items-center rounded-xl bg-white shadow-sm px-2 py-2 hover:bg-gray-50 group transition-all duration-200">
              <div className="relative">
                <User01
                  alt="User Avatar"
                  className="rounded-full object-cover border w-8 h-8"
                />
                <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div className="ml-2 min-w-0 flex-1 text-left">
                <div className="font-semibold text-gray-900 text-sm leading-tight truncate">Olivia Rhye</div>
                <div className="text-xs text-gray-500 leading-tight truncate">olivia@untitledui.com</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 ml-2 group-hover:text-gray-600" />
            </button>
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent side="right" align="end" className="w-64 ml-1 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-3 px-3 py-2 border-b border-grey">
              <User01 src="/avatar.png" alt="User" width={32} height={32} className="rounded-full" />
              <div>
                <span className="font-semibold block">Olivia Rhye</span>
                <span className="text-xs text-gray-400 block">olivia@untitledui.com</span>
              </div>
            </div>
            <DropdownMenuItem className="px-4 pb-1 pt-2">Profile</DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-1">Account</DropdownMenuItem>
                <DropdownMenuItem className="px-4 pb-2 pt-1 text-red-600 flex items-center">
                  <LogIn className="mr-2 w-4 h-4" />Log out
            </DropdownMenuItem>
          </DropdownMenuContent>

        </DropdownMenu>
      </SidebarFooter>


   
    </Sidebar>
    </div>
   
  );
};

export default SidebarNavigation;


