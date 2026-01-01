import { ModeSwitcher } from "./mode-switcher";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { UserToggle } from "./user-toggle";

export default function SiteHeader({ stringPath }: { stringPath?: string[] }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
      <div className="flex flex-row items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">
                {stringPath && stringPath[1] || 'Root'}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {stringPath && stringPath?.length > 2 ?
              <BreadcrumbSeparator className="hidden md:block" /> : null
            }
            {stringPath && stringPath?.length > 2 ?
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {stringPath && stringPath[stringPath.length - 1] || 'Dashboard'}
                </BreadcrumbPage>
              </BreadcrumbItem>
              : null
            }
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-row items-center gap-2">
        <ModeSwitcher />
        <UserToggle />
      </div>
    </header>
  )
}

