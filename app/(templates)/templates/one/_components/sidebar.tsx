"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  CompassIcon,
  Delete02Icon,
  MoreHorizontalIcon,
  Pen01Icon,
  PlusSignIcon,
  Share01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusIcon } from "lucide-react";
import { ChatUser } from "./nav-user";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

const recent = [
  "Color palette exploration",
  "AI never replace designers",
  "Dribble inspiration",
  "Saas product designer",
  "How to be productive",
  "How to become good at programming",
  "Top 10 Reading for 2026",
  "Nothing is coming to save your ass",
];

const dropdownitems = [
  { title: "Share", icon: Share01Icon },
  { title: "Rename", icon: Pen01Icon },
  { title: "Favorite", icon: StarIcon },
  { title: "Delete", icon: Delete02Icon },
];

export const ChatSidebar = () => {
  const { isMobile } = useSidebar();
  return (
    <Sidebar className="bg-sidebar" collapsible="none">
      <SidebarHeader className="flex items-center flex-row gap-2 px-4">
        <HugeiconsIcon icon={CompassIcon} />
        <span>compass</span>
      </SidebarHeader>
      <div className="px-4 my-4">
        <SidebarMenuButton
          className="flex items-center flex-row gap-2 justify-between"
          variant="outline"
        >
          <div className="flex items-center flex-row gap-2">
            <HugeiconsIcon icon={PlusSignIcon} className="size-4" />
            <span>New chat</span>
          </div>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>N</Kbd>
          </KbdGroup>
        </SidebarMenuButton>
      </div>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Recent</SidebarGroupLabel>
          <SidebarMenu>
            {recent.map((item, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton asChild>
                  <a href="#" title={item}>
                    <span>{item}</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction showOnHover>
                      <HugeiconsIcon icon={MoreHorizontalIcon} />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 rounded-lg"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    {dropdownitems.map((item, idx) => (
                      <DropdownMenuItem
                        key={idx}
                        className={cn(
                          item.title === "Delete" &&
                            "text-red-500! hover:text-red-600! hover:bg-red-50!"
                        )}
                      >
                        <HugeiconsIcon
                          icon={item.icon}
                          className={cn(
                            item.title === "Delete" &&
                              "text-red-500! hover:text-red-600! hover:bg-red-50!"
                          )}
                        />
                        <span>{item.title}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <HugeiconsIcon icon={MoreHorizontalIcon} />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ChatUser />
      </SidebarFooter>
    </Sidebar>
  );
};
