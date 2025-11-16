import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from "next/link";

import { SidebarGroup, SidebarMenu, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, useSidebar } from '../ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ChevronDown } from '@untitledui/icons';

const NavMain = ({items, ...props}) => {
    const pathname = usePathname();
    const {open} =useSidebar();

    return (<>
    <SidebarGroup {...props}>
        <SidebarGroupContent className="flex-col gap-2">
            <SidebarMenu>
                {items.map((item)=>(
                    <Collapsible key={item.name} asChild 
                    //defaultOpen={item.isActive}
                    className="group/collapsible">
                        <SidebarMenuItem className={!open?"pl-1 py-1":""}>
                            <CollapsibleTrigger asChild>
                            <SidebarMenuButton tooltip={item.name}
                            className={cn("!text-sm group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df] justify-between",
                                "font-inter font-semibold py-5.5 text-base",
                                 pathname === item.href ? "text-[#7d48df] bg-[#f8f5ff]" : "text-gray-700",
                                 
                             )}
                            >
                                <Link href={item.href} className="flex items-center gap-3 ">
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                                {item.submenu && <ChevronDown color="gray"
                                    className={cn(
                                    "transition-transform duration-200",
                                    "group-data-[state=open]/collapsible:rotate-180",
                                    )}
                                />}
                            </SidebarMenuButton>
                            </CollapsibleTrigger>
                        <CollapsibleContent>
                        <SidebarMenuSub>
                            {item.submenu?.map((subItem)=>(
                                <SidebarMenuSubItem key={subItem.id}>
                                    <SidebarMenuSubButton asChild
                                      className={cn( "font-semibold py-4 pl-4 text-sm",
                                        pathname === subItem.href ? "text-[#7d48df] bg-[#f8f5ff]" : "text-gray-700")}
                                    >
                                        <Link href={subItem.href}>{subItem.title}</Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            ))}

                        </SidebarMenuSub>
                        </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  </>)
}

export default NavMain;