import { useState } from "react"
import { AppSidebar } from "../components/app-sidebar"
import { ChartAreaInteractive } from "../components/chart-area-interactive"
import { DataTable } from "../components/data-table"
import { SectionCards } from "../components/section-cards"
import { SiteHeader } from "../components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "../components/ui/sidebar"
import data from "../app/data.json"

export default function Page() {
  const [view, setView] = useState("dashboard")

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }
    >
      <AppSidebar onSelectView={setView} variant="inset" />
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {view === "dashboard" ? (
                <>
                  <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748' }}>API Monitoring Dashboard</h1>
                  <SectionCards metrics={data.metrics} />
                  <div className="px-4 lg:px-6">
                    <ChartAreaInteractive chartData={data.chart} />
                  </div>
                </>
              ) : (
                <>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748' }}>Recent API Logs</h2>
                  <DataTable logs={data.logs} />
                </>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
