import { AppSidebar } from "@/components/app-sidebar"
import QueryProviders from "@/components/query-client-provider"
import { SiteFooter } from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { headers } from "next/headers"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = (await headers()).get("x-url")
  const strings = pathname?.split('/')

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader stringPath={strings} />
        <QueryProviders>
          {children}
        </QueryProviders>
        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}
