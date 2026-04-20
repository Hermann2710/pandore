import React from "react"
import { SidebarTrigger } from "../ui/sidebar"
import { HeaderBreadcrumb } from "./HeaderBreadcrumb"
import { LanguageSwitcher, ThemeSwitcher } from "../shared"

export function CustomerHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-l bg-background/80 px-4 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-2" />
        <div className="hidden h-4 w-px bg-border md:block" />
        <HeaderBreadcrumb />
      </div>

      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
