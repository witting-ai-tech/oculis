import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from "next/link";

import { SidebarGroup, SidebarMenu, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, useSidebar } from '../ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ChevronDown, ChevronRight } from '@untitledui/icons';
import { ChevronsRight } from 'lucide-react';

const NavMain = ({items, ...props}) => {
    const pathname = usePathname();
    const {open} =useSidebar();

    return (<>
    <SidebarGroup {...props}>
        <SidebarMenu>
            {items.map((item)=>(
                <Collapsible key={item.name} asChild
                 defaultOpen={item.iaActive}
                 className="group/collapsible"
                >
                    <SidebarMenuItem>
                        {item?.submenu ? (
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton
                                tooltip={item.name}
                                className="!text-sm !text-[#414651] hover:bg-white"
                                >
                                    {item.icon && <div className={`w-5 h5 
                                        ${(pathname.match(/^\/[^\/]+/)?.[0] ?? '')=== (item.href.match(/^\/[^\/]+/)?.[0] ?? '')  ? "text-[#7d48df]" : "text-[#717680]"}
                                        `}>
                                            {item.icon}
                                        </div>
                                    }
                                    <span>{item.name}
                                    </span>
                                    {item?.submenu && (
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    )}
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                        ):(
                            <Link href={item.href}
                                className={`group text-sm px-[6px] py-2 flex flex-row gap gap-3 items-center justify-left transition-transform rounded-[6px] hover:bg-white 
                                    ${ pathname === item.href ? "text-[#7d48df]" : "text-[#414651]"
                                }`}
                            >
                                {item.icon && (
                                    <div className={`w-5 h5 
                                    ${pathname === item.href 
                                    ? "text-[#7d48df]" 
                                    : "text-[#717680]"}`}>
                                        {item.icon}
                                    </div>
                                )}
                                <span>{item.name}</span>
                                {item?.submenu && 
                                    <div className="ml-auto">
                                        <ChevronsRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </div>
                                }
                            </Link>
                        )}
                        <CollapsibleContent>
                        <SidebarMenuSub>
                            {item.submenu?.map((subItem)=>(
                                <SidebarMenuSubItem key={subItem.id}>
                                    <SidebarMenuSubButton asChild
                                     className="!text-sm !text-[#414651] hover:bg-white">
                                        <Link href={subItem.href}>
                                            <span className={`${pathname === subItem.href 
                                    ? "!text-[#7d48df]" 
                                    : "text-[#414651]"}`}>{subItem.title}</span>
                                        </Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>

                </Collapsible>
            ))}
        </SidebarMenu>
    </SidebarGroup>
  </>)
}

export default NavMain;