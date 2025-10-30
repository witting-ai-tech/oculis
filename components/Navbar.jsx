// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   BellRing,
//   Users,
//   LogIn,
//   ArrowLeftFromLine,
//   ArrowRightFromLine,
//   Video,
//   OctagonAlert,
//   Settings,
// } from "lucide-react";
// import { useSelector } from "react-redux";
// import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

// const SidebarNavigation = () => {
//   const pathname = usePathname();
//   const [expanded, setExpanded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const hasNewNotifications = useSelector(
//     (state) => state.notification.hasNewNotifications
//   );

//   const navItems = [
//     {
//       name: "Overview",
//       href: "/",
//       icon: (
//         <svg
//           width="20"
//           height="20"
//           viewBox="0 0 20 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className={cn(
//             "stroke-[#717680] transition-colors duration-300",
//             "group-hover:stroke-[#7d48df]",
//             pathname === "/" && "stroke-[#7d48df]"
//           )}
//         >
//           <path
//             d="M6.66667 10.8333V14.1667M13.3333 9.16667V14.1667M10 5.83333V14.1667M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z"
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//     },
//     // {
//     //   name: "Admin Panel",
//     //   href: "/admin-panel",
//     //   icon: (
//     //     <div className="relative">
//     //       <Settings size={20} />
//     //     </div>
//     //   ),
//     // },
//     {
//       name: "Alerts Center",
//       href: "/alerts-center/all-alerts",
//       icon: (
//         <div className="relative">
//           <BellRing size={20} />
//           {hasNewNotifications && pathname !== "/alerts-center" && (
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
//           )}
//         </div>
//       ),
//     },

//     {
//       name: "Monitoring",
//       href: "/monitoring",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 20 20"
//           fill="none"
//           className={cn(
//             "stroke-[#717680] transition-colors duration-300",
//             "group-hover:stroke-[#7d48df]",
//             pathname === "/monitoring" && "stroke-[#7d48df]"
//           )}
//         >
//           <path
//             d="M18.3337 7.44216C18.3337 6.93731 18.3337 6.68489 18.2338 6.568C18.1472 6.46658 18.0173 6.41276 17.8843 6.42322C17.7311 6.43528 17.5526 6.61377 17.1956 6.97075L14.167 9.99935L17.1956 13.0279C17.5526 13.3849 17.7311 13.5634 17.8843 13.5755C18.0173 13.5859 18.1472 13.5321 18.2338 13.4307C18.3337 13.3138 18.3337 13.0614 18.3337 12.5565V7.44216Z"
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M1.66699 8.16602C1.66699 6.76588 1.66699 6.06582 1.93948 5.53104C2.17916 5.06063 2.56161 4.67818 3.03202 4.4385C3.5668 4.16602 4.26686 4.16602 5.66699 4.16602H10.167C11.5671 4.16602 12.2672 4.16602 12.802 4.4385C13.2724 4.67818 13.6548 5.06063 13.8945 5.53104C14.167 6.06582 14.167 6.76588 14.167 8.16602V11.8327C14.167 13.2328 14.167 13.9329 13.8945 14.4677C13.6548 14.9381 13.2724 15.3205 12.802 15.5602C12.2672 15.8327 11.5671 15.8327 10.167 15.8327H5.66699C4.26686 15.8327 3.5668 15.8327 3.03202 15.5602C2.56161 15.3205 2.17916 14.9381 1.93948 14.4677C1.66699 13.9329 1.66699 13.2328 1.66699 11.8327V8.16602Z"
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "Users & Roles",
//       href: "/users-and-roles",
//       icon: <Users size={20} />,
//     },
//     {
//       name: "Camera Config",
//       href: "/camera-configuration",
//       icon: (
//         <svg
//           width="20"
//           height="20"
//           viewBox="0 0 20 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className={cn(
//             "stroke-[#717680] transition-colors duration-300",
//             "group-hover:stroke-[#7d48df]",
//             pathname === "/camera-configuration" && "stroke-[#7d48df]"
//           )}
//         >
//           <path
//             d="M12.5421 7.5H4.58333C3.43274 7.5 2.5 6.56726 2.5 5.41667C2.5 4.26607 3.43274 3.33333 4.58333 3.33333H12.5421M7.45791 16.6667H15.4167C16.5673 16.6667 17.5 15.7339 17.5 14.5833C17.5 13.4327 16.5673 12.5 15.4167 12.5H7.45791M2.5 14.5833C2.5 16.1942 3.80584 17.5 5.41667 17.5C7.0275 17.5 8.33333 16.1942 8.33333 14.5833C8.33333 12.9725 7.0275 11.6667 5.41667 11.6667C3.80584 11.6667 2.5 12.9725 2.5 14.5833ZM17.5 5.41667C17.5 7.0275 16.1942 8.33333 14.5833 8.33333C12.9725 8.33333 11.6667 7.0275 11.6667 5.41667C11.6667 3.80584 12.9725 2.5 14.5833 2.5C16.1942 2.5 17.5 3.80584 17.5 5.41667Z"
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//     },
//   ];

//   // Mobile Toggle Handler
//   const handleToggle = () => {
//     setExpanded((prev) => !prev);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;

//       const isMobile = width < 768;

//       // Tablet: Width between 768px and 1024px
//       const isTablet = width >= 768 && width < 1024;

//       // Combine conditions for mobile or tablet
//       setIsMobile(isMobile || isTablet);
//       console.log("Window resized:", width, "Orientation:", window.orientation);
//     };

//     // Call once on mount
//     handleResize();

//     // Event listeners for resize and orientationchange
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("orientationchange", handleResize);

//     // Cleanup event listeners on unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("orientationchange", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {/* Add a button for mobile toggle */}

//       {expanded && (
//         <div className="fixed z-20 inset-0 bg-[#54565a]/50 bg-opacity-80" />
//       )}
//       <motion.section
//         className="fixed z-50 top-0 p-1 bg-[#f5f5f5] shadow-md"
//         onMouseEnter={!isMobile ? () => setExpanded(true) : null} // Mouse enter on large screens
//         onMouseLeave={!isMobile ? () => setExpanded(false) : null} // Mouse leave on large screens
//       >
//         <motion.div
//           animate={{ width: expanded ? 192 : 64 }}
//           transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           className={cn(
//             "flex h-screen flex-col items-center border-2 border-[#E9EAEB] bg-white py-4 rounded-xl overflow-hidden"
//           )}
//         >
//           <div className="h-full w-full flex flex-1 flex-col space-y-2 items-center">
//             <div
//               className={cn(
//                 "w-full mb-6 cursor-pointer",
//                 expanded ? "justify-start px-5" : "justify-center px-4"
//               )}
//             >
//               <Image src="/logo.svg" alt="Logo" width={32} height={32} />
//             </div>

//             {navItems.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className={cn(
//                   "group flex h-10  p-2 items-center rounded-md transition-colors duration-300 hover:bg-[#f8f5ff] text-[#717680] hover:text-[#7d48df]",
//                   pathname === item.href
//                     ? "text-[#7d48df] stroke-[#7d48df] bg-[#f8f5ff]"
//                     : "bg-white ",
//                   expanded
//                     ? "justify-start px-4 w-[90%]"
//                     : "justify-center w-[70%]"
//                 )}
//               >
//                 {item.icon}
//                 <AnimatePresence>
//                   {expanded && (
//                     <motion.span
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="ml-3 text-sm font-medium"
//                     >
//                       {item.name}
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </Link>
//             ))}

//             {/* Logout Button */}
//             <div className="w-[90%] flex-1 flex flex-col space-y-2 items-center justify-end mb-4">
//               {isMobile && (
//                 <div className="w-full lg:hidden flex justify-end p-4">
//                   <button
//                     onClick={handleToggle}
//                     className="w-full flex flex-row items-center gap-3 font-medium text-[#717680] hover:text-[#7d48df] transition duration-300"
//                   >
//                     {expanded ? (
//                       <>
//                         <ArrowRightFromLine size={20} />
//                         <span>Close</span>
//                       </>
//                     ) : (
//                       <ArrowLeftFromLine size={20} />
//                     )}
//                   </button>
//                 </div>
//               )}
//               <Link
//                 href="/admin-panel/settings"
//                 className={cn(
//                   "group flex h-10  p-2 items-center rounded-md transition-colors duration-300 hover:bg-[#f8f5ff] text-[#717680] hover:text-[#7d48df]",
//                   pathname === "/admin-panel"
//                     ? "text-[#7d48df] stroke-[#7d48df] bg-[#f8f5ff]"
//                     : "bg-white ",
//                   expanded
//                     ? "justify-start px-4 w-[90%]"
//                     : "justify-center w-[70%]"
//                 )}
//               >
//                 <Settings size={20} />
//                 <AnimatePresence>
//                   {expanded && (
//                     <motion.span
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="ml-3 text-sm font-medium"
//                     >
//                       Admin Panel
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </Link>
//               <Link
//                 href="/login"
//                 variant="ghost"
//                 size="icon"
//                 className={cn(
//                   "group flex h-10 w-full p-2 items-center rounded-md transition-colors duration-300 hover:bg-[#f8f5ff] text-[#717680] hover:text-red-500",
//                   expanded
//                     ? "justify-start px-4 w-[90%]"
//                     : "justify-center w-[70%]"
//                 )}
//               >
//                 <LogIn size={20} />
//                 <AnimatePresence>
//                   {expanded && (
//                     <motion.span
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="ml-3 text-sm font-medium"
//                     >
//                       Logout
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </motion.section>
//     </>

//   );
// };

// export default SidebarNavigation;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  BellRing,
  Users,
  LogIn,
  ArrowLeftFromLine,
  ArrowRightFromLine,
  Settings,
  ChevronDown,
} from "lucide-react";
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
  SidebarTrigger,
} from "./ui/sidebar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";


const SidebarNavigation = () => {
  const pathname = usePathname();
  const { open, setOpen, isMobile } = useSidebar();
  const hasNewNotifications = useSelector(
    (state) => state.notification.hasNewNotifications
  );

  const navItems = [
    {
      name: "Overview",
      href: "/",
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
            pathname === "/" && "stroke-[#7d48df]"
          )}
        >
          <path
            d="M6.66667 10.8333V14.1667M13.3333 9.16667V14.1667M10 5.83333V14.1667M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Alerts Center",
      href: "/alerts-center/all-alerts",
      icon: (
        <div className="relative">
          <BellRing size={20} />
          {hasNewNotifications && pathname !== "/alerts-center" && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
        </div>
      ),
      submenu: [
        { id: 0, title: "All Alerts", href: "/alerts-center/all-alerts" },
        { id: 1, title: "Escalated Incidents", href: "/alerts-center/escalated-incidents" },
        { id: 2, title: "Alert Timeline", href: "/alerts-center/alert-timeline" },
      ]
    },
    {
      name: "Monitoring",
      href: "/monitoring",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={cn(
            "stroke-[#717680] transition-colors duration-300",
            "group-hover:stroke-[#7d48df]",
            pathname === "/monitoring" && "stroke-[#7d48df]"
          )}
        >
          <path
            d="M18.3337 7.44216C18.3337 6.93731 18.3337 6.68489 18.2338 6.568C18.1472 6.46658 18.0173 6.41276 17.8843 6.42322C17.7311 6.43528 17.5526 6.61377 17.1956 6.97075L14.167 9.99935L17.1956 13.0279C17.5526 13.3849 17.7311 13.5634 17.8843 13.5755C18.0173 13.5859 18.1472 13.5321 18.2338 13.4307C18.3337 13.3138 18.3337 13.0614 18.3337 12.5565V7.44216Z"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66699 8.16602C1.66699 6.76588 1.66699 6.06582 1.93948 5.53104C2.17916 5.06063 2.56161 4.67818 3.03202 4.4385C3.5668 4.16602 4.26686 4.16602 5.66699 4.16602H10.167C11.5671 4.16602 12.2672 4.16602 12.802 4.4385C13.2724 4.67818 13.6548 5.06063 13.8945 5.53104C14.167 6.06582 14.167 6.76588 14.167 8.16602V11.8327C14.167 13.2328 14.167 13.9329 13.8945 14.4677C13.6548 14.9381 13.2724 15.3205 12.802 15.5602C12.2672 15.8327 11.5671 15.8327 10.167 15.8327H5.66699C4.26686 15.8327 3.5668 15.8327 3.03202 15.5602C2.56161 15.3205 2.17916 14.9381 1.93948 14.4677C1.66699 13.9329 1.66699 13.2328 1.66699 11.8327V8.16602Z"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      submenu: [
      { id: 0, title: "Live Camera View", href:"/monitoring" },
      // { id: 1, title: "Camera Feed" },
      { id: 2, title: "Heatmap View", href:"/monitoring" },
    ]
    },
    {
      name: "Users & Roles",
      href: "/users-and-roles",
      icon: <Users size={20} />,
    },
    {
      name: "Camera Config",
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
  ];
  const footerNavItems = [
    { name:"Admin Panel",
      href:"/admin-panel",
      submenu:[
        { id: 0, title: "Organization Settings", href: "/admin-panel/settings" },
        { id: 1, title: "Connectors", href: "/admin-panel/connectors" },
        { id: 2, title: "Employees", href: "/admin-panel/employees" },
        { id: 3, title: "Camera Setup", href: "/camera-configuration/add-camera" },
      ],
    },
    {
      name:"Logout",
      href:"/login"
    }
  ]

  return (
    <> 
    <Sidebar
      collapsible="icon"
      className="border-r-2 border-[#E9EAEB]"
    >

      {/* Header with Logo */}
      <SidebarHeader className="py-4 pb-4 flex justify-start items-start">
        <div className="flex w-full">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={32}
          height={32}
        />
        <SidebarTrigger className={cn(open?"ml-44":"ml-2", "z-50 mr-0")} />
        </div>
        
      </SidebarHeader>

      {/* Main Navigation Content */}
      <SidebarContent className="px-2">
        <SidebarMenu>
          {navItems.map((item, index) => (
            item.submenu ? (
              <Collapsible key={index}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      // isActive={pathname === item.href}
                      tooltip={item.name}
                      className={cn("flex justify-between items-center w-full",
                        "group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df]",
                        pathname === item.href
                          ? "text-[#7d48df] bg-[#f8f5ff]"
                          : "text-[#717680]"
                      )}
                    >
                    <span className="flex items-center gap-2">{item.icon}{item.name}</span>
                    <ChevronDown className="ml-2"/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
                <CollapsibleContent>
                <SidebarMenuSub>
                  {item.submenu.map((sub) => (
                    <SidebarMenuSubItem key={sub.id}>
                      <SidebarMenuSubButton asChild className={cn(
                  "group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df]",
                  pathname === item.href
                    ? "text-[#7d48df] bg-[#f8f5ff]"
                    : "text-[#717680]"
                )}>
                  <Link href={sub.href} className={cn()}> {sub.title}</Link>
                    </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
              </Collapsible>
            ):(
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.name}
                className={cn(
                  "group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df]",
                  pathname === item.href
                    ? "text-[#7d48df] bg-[#f8f5ff]"
                    : "text-[#717680]"
                )}
              >
                <Link href={item.href}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            )
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer with Admin Panel and Logout */}
      <SidebarFooter className="mt-auto">
        <SidebarMenu>
          {/* Mobile Toggle Button */}
          {isMobile && (
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setOpen(!open)}
                className="hover:bg-[#f8f5ff] hover:text-[#7d48df]"
              >
                {open ? (
                  <>
                    <ArrowRightFromLine size={20} />
                    <span>Close</span>
                  </>
                ) : (
                  <>
                    <ArrowLeftFromLine size={20} />
                    <span>Open</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
          {footerNavItems.map((item, index) => (
            item.submenu ? (
              <Collapsible key={index}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      // isActive={pathname === item.href}
                      tooltip={item.name}
                      className={cn("flex justify-between items-center w-full",
                        "group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df]",
                        pathname === item.href
                          ? "text-[#7d48df] bg-[#f8f5ff]"
                          : "text-[#717680]"
                      )}
                    >
                    <span className="flex items-center gap-2">
                      <Settings size={20} />{item.name}</span>
                    <ChevronDown className="ml-2"/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
                <CollapsibleContent>
                <SidebarMenuSub>
                  {item.submenu.map((sub) => (
                    <SidebarMenuSubItem key={sub.id}>
                      <SidebarMenuSubButton asChild className={cn(
                  "group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df]",
                  pathname === item.href
                    ? "text-[#7d48df] bg-[#f8f5ff]"
                    : "text-[#717680]"
                )}>
                  <Link href={sub.href} className={cn()}> {sub.title}</Link>
                    </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
              </Collapsible>
            ):(
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.name}
                className={cn(
                  "group transition-colors duration-300 hover:bg-[#f8f5ff]  hover:text-red-500",
                  pathname === item.href
                    ? "text-[#7d48df] bg-[#f8f5ff]"
                    : "text-[#717680]"
                )}
               // className="hover:bg-[#f8f5ff] text-[#717680] "

              >
                <Link href={item.href}>
                  <LogIn size={20} />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
          </SidebarMenuItem>
            )
          ))}        
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    </>
   
  );
};

export default SidebarNavigation;


