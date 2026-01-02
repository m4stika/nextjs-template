import { AppSidebar } from "@/components/app-sidebar"
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
        {children}
        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}
