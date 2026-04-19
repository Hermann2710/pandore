"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { LayoutDashboard, Package, Heart, UserCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { UserDropdown } from "./UserDropdown"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar"

export function CustomerSidebar() {
  const t = useTranslations("Customer.nav")
  const pathname = usePathname()

  const navItems = [
    { title: t("overview"), href: "/dashboard", icon: LayoutDashboard },
    { title: t("orders"), href: "/dashboard/orders", icon: Package },
    { title: t("wishlist"), href: "/dashboard/wishlist", icon: Heart },
  ]

  return (
    <Sidebar collapsible="icon" className="border-none shadow-sm">
      <SidebarHeader className="py-6 group-data-[collapsible=icon]:py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/">
              <SidebarMenuButton
                size="lg"
                className="pointer-events-none group-data-[collapsible=icon]:justify-center! group-data-[collapsible=icon]:p-0!"
              >
                <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <UserCircle className="size-6" />
                </div>

                <div className="ml-2 flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
                  <span className="text-base font-bold tracking-tight">
                    E-SHOP
                  </span>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(item.href)

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className={cn(
                        "h-12 rounded-lg transition-all group-data-[collapsible=icon]:justify-center! group-data-[collapsible=icon]:p-0!",
                        isActive
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                    >
                      <Link href={item.href} className="flex items-center">
                        <item.icon className="size-6 shrink-0" />

                        <span className="ml-3 text-base font-medium group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="pb-6 group-data-[collapsible=icon]:pb-4">
        <UserDropdown />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
