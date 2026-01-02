import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { headers } from "next/headers"
import { VersionSwitcher } from "./version-switcher"

// This is sample data.
export type DataNav = { title: string, url: string, isActive?: boolean, items?: DataNav[] }
type SideBarProp = { versions: string[], navMain: DataNav[] }
const data: SideBarProp = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Pelayanan",
      url: "#",
      items: [
        {
          title: "Master Unit",
          url: "#",
        },
        {
          title: "Monitoring",
          url: "#",
        },
      ],
    },
    {
      title: "Keuangan",
      url: "#",
      items: [
        {
          title: "Saldo Awal kas/bank",
          url: "#",
        },
        {
          title: "Penerimaan",
          url: "#",
          isActive: true,
        },
        {
          title: "Pengeluaran",
          url: "#",
        },
      ],
    },
    {
      title: "General Leadger",
      url: "#",
      items: [
        {
          title: "Daftar Perkiraan",
          url: "accounting",
        },
        {
          title: "Neraca Awal",
          url: "#",
        },
        {
          title: "Journal Transaksi",
          url: "#",
        },
      ],
    },
    {
      title: "Report",
      url: "#",
      items: [
        {
          title: "Pelayanan",
          url: "#",
        },
        {
          title: "Keuangan",
          url: "#",
        },
        {
          title: "General Leadger",
          url: "#",
        },
      ],
    },
  ],
}

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = (await headers()).get("x-url")
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
        {/* <SidebarMenu> */}
        {/*   <SidebarMenuItem> */}
        {/*     <SidebarMenuButton size="lg" asChild> */}
        {/*       <a href="#"> */}
        {/*         <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"> */}
        {/*           <GalleryVerticalEnd className="size-4" /> */}
        {/*         </div> */}
        {/*         <div className="flex flex-col gap-0.5 leading-none"> */}
        {/*           <span className="font-medium">Documentation</span> */}
        {/*           <span className="">v1.0.0</span> */}
        {/*         </div> */}
        {/*       </a> */}
        {/*     </SidebarMenuButton> */}
        {/*   </SidebarMenuItem> */}
        {/* </SidebarMenu> */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.url === pathname}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
