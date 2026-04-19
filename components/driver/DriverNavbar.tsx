"use client"

import { Link, usePathname } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { Box, MapPin, History } from "lucide-react"
import { LanguageSwitcher, ThemeSwitcher } from "@/components/shared"

export const DriverNavbar = () => {
  const t = useTranslations("Driver.nav")
  const pathname = usePathname()

  const navLinks = [
    { href: "/delivery/available", label: t("available"), icon: Box },
    { href: "/delivery/active", label: t("active"), icon: MapPin },
    { href: "/delivery/history", label: t("history"), icon: History },
  ]

  return (
    <div className="flex items-center gap-4">
      {/* Navigation Links */}
      <nav className="flex items-center">
        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="hidden md:inline">{link.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="hidden h-6 w-px bg-border sm:block" />

      <div className="flex items-center gap-1 rounded-full border bg-muted/30 p-1 shadow-sm transition-colors">
        <LanguageSwitcher />
        <div className="mx-0.5 h-4 w-px bg-border" />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
