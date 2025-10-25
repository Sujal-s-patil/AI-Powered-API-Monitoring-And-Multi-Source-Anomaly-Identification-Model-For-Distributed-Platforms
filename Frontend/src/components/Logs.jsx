import data from "../app/data.json"
import { AppSidebar } from "../components/app-sidebar"
import { DataTable } from "../components/data-table"
import {
  SidebarInset,
  SidebarProvider,
} from "../components/ui/sidebar"


export default function LogsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        {/*  <SiteHeader /> */}
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="px-4 lg:px-6">
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748' }}>
                Recent API Logs
              </h2>
              <DataTable logs={data.logs} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>

  )
}