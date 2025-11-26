import React, { useState } from 'react'

import { ChevronsUpDown, Plus } from "lucide-react"
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

const TeamSwitcher = ({teams}) => {
    const {state, isMobile} = useSidebar();
    const [activeTeam, setActiveTeam] = useState(teams[0]);

    if(!activeTeam) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "w-full data-[state=open]:bg-[#FDFDFD] rounded-[12px] flex items-center gap-3 ",
                state !== "collapsed"
                  ? "p-3 bg-white border border-[#E9EAEB]"
                  : "pb-5"
              )}
            >
              <div className="text-sidebar flex aspect-square size-8 items-center justify-center rounded-lg">
                <Image
                  src="/logo.svg"
                  alt="team logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="grid flex-1 text-left leading-tight text-sm">
                <span className="truncate font-medium text-sm text-gray-900">{activeTeam.name}</span>
                <span className="truncate font-normal text-xs text-gray-600">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto text-[#A4A7AE]" size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
               <div className="flex size-6 items-center justify-center rounded-md border">
                  <Image
                    src={team.logo}
                    alt="team logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="font-semibold text-sm text-gray-700">{team.name}</span>
                <DropdownMenuShortcut className="border text-sm rounded-sm p-0.5">⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default TeamSwitcher