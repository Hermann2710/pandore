"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Settings, LogOut, ChevronsUpDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function AdminUserDropdown() {
  const t = useTranslations("Admin.nav")
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="h-14 group-data-[collapsible=icon]:justify-center! group-data-[collapsible=icon]:p-0! data-[state=open]:bg-sidebar-accent"
            >
              <Avatar className="size-10 rounded-lg">
                <AvatarImage src="/admin-avatar.jpg" alt="Admin" />
                <AvatarFallback className="rounded-lg bg-orange-600 text-white">
                  AD
                </AvatarFallback>
              </Avatar>

              <div className="ml-2 grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate text-base font-semibold text-orange-600">
                  Admin
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  admin@eshop.com
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarFallback className="bg-orange-600 text-[10px] text-white">
                    AD
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Administrator</span>
                  <span className="truncate text-xs text-muted-foreground">
                    admin@eshop.com
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="cursor-pointer py-2">
                <Link
                  href="/admin/settings"
                  className="flex w-full items-center"
                >
                  <Settings className="mr-2 size-5" />
                  <span className="text-base">{t("settings")}</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer py-2 text-destructive focus:bg-destructive/10">
              <LogOut className="mr-2 size-5" />
              <span className="text-base font-medium">{t("logout")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
