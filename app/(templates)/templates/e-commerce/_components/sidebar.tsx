"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Chart03Icon,
  ChartUpIcon,
  DashboardCircleIcon,
  Factory01Icon,
  HelpCircleIcon,
  Invoice04Icon,
  Mail01Icon,
  Note05Icon,
  Notification01Icon,
  Settings02Icon,
  Trash2,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChatUser } from "../../chat/_components/nav-user";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  menu: [
    { title: "Dashboard", icon: DashboardCircleIcon },
    { title: "Products Analytics", icon: ChartUpIcon },
    { title: "Reporting", icon: Chart03Icon },
    { title: "Order Summary", icon: Note05Icon },
    { title: "Invoices", icon: Invoice04Icon },
    { title: "Manufactures", icon: Factory01Icon },
    { title: "Trash", icon: Trash2 },
  ],
  prenav: [
    { title: "Inbox", icon: Mail01Icon },
    { title: "Notifications", icon: Notification01Icon },
  ],
  preferences: [
    { title: "User Account", icon: UserCircleIcon },
    { title: "Settings", icon: Settings02Icon },
    { title: "Help  and Support", icon: HelpCircleIcon },
  ],
};

export const CommerceSidebar = () => {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-14 border-b flex! items-center!">
        <SidebarMenu className="flex flex-row items-center justify-between h-10">
          <SidebarMenuItem
            className={cn("w-full hidden", state === "expanded" && "block!")}
          >
            Metro
          </SidebarMenuItem>
          <SidebarTrigger />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mt-4">
          <SidebarMenu>
            {data.prenav.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={item.title === "Dashboard"}
                >
                  <a href="#" className="text-muted-foreground">
                    <HugeiconsIcon icon={item.icon} className="size-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>MENU</SidebarGroupLabel>
          <SidebarMenu>
            {data.menu.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={item.title === "Dashboard"}
                >
                  <a href="#" className="text-muted-foreground">
                    <HugeiconsIcon icon={item.icon} className="size-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>PREFERENCES</SidebarGroupLabel>
          <SidebarMenu>
            {data.preferences.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href="#" className="text-muted-foreground">
                    <HugeiconsIcon icon={item.icon} className="size-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ChatUser />
      </SidebarFooter>
    </Sidebar>
  );
};
