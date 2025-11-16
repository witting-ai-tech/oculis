import React, { useState } from 'react'

import { ChevronsUpDown, Image, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
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
                  : "pb-5 px-2.5 py-3"
              )}
            >
              <div className={cn("aspect-square size-8 rounded-lg",
              )}>
                <activeTeam.logo className="flex size-6" />
                 {/* <Image
                  src={activeTeam.logo}
                  alt="team logo"
                  width={32}
                  height={32}
                /> */}
              </div>
              <div className="grid flex-1 text-left leading-tight gap-0.5">
                <span className="truncate font-semibold text-sm text-gray-900">{activeTeam.name}</span>
                <span className="truncate font-normal text-xs text-gray-600">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" color="gray" size="20px" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md">
                  <team.logo className="size-4 shrink-0" color="#717680" />
                   {/* <Image
                    src={team.logo}
                    alt="team logo"
                    width={32}
                    height={32}
                  /> */}
                </div>
                <span className="font-semibold text-sm text-gray-700">{team.name}</span>
                <DropdownMenuShortcut className="border text-sm rounded-sm p-0.5">⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className="gap-2 my-1 mx-1.5 items-center justify-center border bg-transparent rounded-lg">
              <div className="flex gap-2 py-1">
                <Plus className="size-4"/><span className="font-semibold text-gray-700">Add Client</span>
              </div>
              {/* <div className="text-muted-foreground font-medium">Add team</div> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default TeamSwitcher