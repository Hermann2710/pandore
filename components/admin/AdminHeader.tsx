"use client"

import React from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AdminBreadcrumb } from "./AdminBreadcrumb"
import { LanguageSwitcher, ThemeSwitcher } from "../shared"

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-2" />
        <div className="hidden h-4 w-px bg-border md:block" />
        <AdminBreadcrumb />
      </div>

      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
