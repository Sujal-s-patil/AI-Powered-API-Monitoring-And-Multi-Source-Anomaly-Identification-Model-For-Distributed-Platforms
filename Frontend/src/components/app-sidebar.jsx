import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"

const data = {
  user: {
    name: "apiadmin",
    email: "admin@apimonitor.com",
    avatar: "/avatars/apiadmin.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Endpoints",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Logs",
      url: "#",
      icon: IconReport,
    },
    {
      title: "Alerts",
      url: "#",
      icon: IconInnerShadowTop,
    },
    {
      title: "Integrations",
      url: "#",
      icon: IconFolder,
    },
  ],
  navClouds: [
    {
      title: "API Keys",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Keys",
          url: "#",
        },
        {
          title: "Revoked Keys",
          url: "#",
        },
      ],
    },
    {
      title: "Usage",
      icon: IconChartBar,
      url: "#",
      items: [
        {
          title: "Current Usage",
          url: "#",
        },
        {
          title: "Historical Usage",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "API Docs",
          url: "#",
        },
        {
          title: "Guides",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Support",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "API Reference",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Error Logs",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Integration Guide",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">API Monitor</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
