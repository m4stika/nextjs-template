
"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { useAuth } from "@/hooks/use-auth-state";
// import { clientApi } from "@/lib/client-api";
import { randomInt } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
// import { useRouter } from "next/navigation";

export function UserToggle() {
  // const router = useRouter();
  // const { removeUser, user } = useAuth()
  //
  // const handleLogout = async () => {
  //   try {
  //     await clientApi.post<any, any>({ url: "logout", data: { status: "logout" } });
  //     removeUser()
  //     router.replace(
  //       "/?message=Unauthorized&authorized=false&server_error_status=401"
  //     );
  //   } catch (error) {
  //     router.replace(
  //       "/?message=Something went wrong [Server API Disconnected]&server_error_status=500"
  //     );
  //   }
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={`https://randomuser.me/api/portraits/men/${randomInt(30, 50)}.jpg`}
              alt="@avatar"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{'user?.name'}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {'user?.email'}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => console.log('ok')}>
          <LogOutIcon className="mr-2 h-4 w-4" />
          <span>Log out</span>
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
