
import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import sigapImg from "@/public/images/roondev-logo.png"
import getConfig from "next/config"
import Link from "next/link"

export function VersionSwitcher() {
  const { publicRuntimeConfig } = getConfig();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Link href="/" className="flex flex-row items-center gap-2">
            <Image
              alt="sigap-image"
              className="size-12 py-1"
              src={sigapImg}
              placeholder="blur"
              style={{ objectFit: "contain" }}
              priority={true}
            />
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">{publicRuntimeConfig.title}</span>
              <span className="">v {publicRuntimeConfig.version}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
