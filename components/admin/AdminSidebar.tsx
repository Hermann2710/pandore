"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import {
  LayoutDashboard,
  Package,
  Tags,
  ShoppingCart,
  Users,
  Megaphone,
  Star,
  Settings,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
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
import { AdminUserDropdown } from "./AdminUserDropdown"

export function AdminSidebar() {
  const t = useTranslations("Admin.nav")
  const pathname = usePathname()

  const navItems = [
    { title: t("dashboard"), href: "/admin", icon: LayoutDashboard },
    { title: t("products"), href: "/admin/products", icon: Package },
    { title: t("categories"), href: "/admin/categories", icon: Tags },
    { title: t("orders"), href: "/admin/orders", icon: ShoppingCart },
    { title: t("users"), href: "/admin/users", icon: Users },
    { title: t("marketing"), href: "/admin/marketing", icon: Megaphone },
    { title: t("reviews"), href: "/admin/reviews", icon: Star },
    { title: t("settings"), href: "/admin/settings", icon: Settings },
  ]

  return (
    <Sidebar collapsible="icon" className="border-none shadow-sm">
      <SidebarHeader className="py-6 group-data-[collapsible=icon]:py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/admin">
              <SidebarMenuButton
                size="lg"
                className="pointer-events-none group-data-[collapsible=icon]:justify-center! group-data-[collapsible=icon]:p-0!"
              >
                <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded-lg bg-orange-600 text-white">
                  <ShieldCheck className="size-6" />
                </div>

                <div className="ml-2 flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
                  <span className="text-base font-bold tracking-tight">
                    ADMIN PANEL
                  </span>
                  <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                    Store Manager
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
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href)

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className={cn(
                        "h-12 rounded-lg transition-all group-data-[collapsible=icon]:justify-center! group-data-[collapsible=icon]:p-0!",
                        isActive
                          ? "bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
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
        <AdminUserDropdown />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
