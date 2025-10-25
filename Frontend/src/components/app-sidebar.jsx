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
      title: "API Monitor",
      view: "dashboard",
      icon: IconInnerShadowTop,
    },
    {
      title: "Logs",
      view: "logs",
      icon: IconReport,
    },
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

export function AppSidebar({ onSelectView, ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.view ? (
                <SidebarMenuButton onClick={() => onSelectView && onSelectView(item.view)} tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              ) : item.url ? (
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a href={item.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              ) : (
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
