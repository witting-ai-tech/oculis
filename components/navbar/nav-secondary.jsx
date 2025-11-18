import React from 'react'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from "next/link";

import { SidebarGroup, SidebarMenu, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar';


const NavSecondary = () => {
  const pathname = usePathname();
    
    return (<>
    <SidebarGroup>
        <SidebarGroupContent className="flex-col gap-2">
            <SidebarMenu>
                {items.map((item)=>(
                    <SidebarMenuItem key={item.title}>
                         <SidebarMenuButton
                      className={cn(
                        "group transition-colors duration-300 hover:bg-[#f8f5ff] hover:text-[#7d48df]",
                        pathname === item.href ? "text-[#7d48df] bg-[#f8f5ff]" : "text-grey"
                      )}
                    >
                      <Link href={item.href} className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  </>)
}

export default NavSecondary