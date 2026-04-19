"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function HeaderBreadcrumb() {
  const pathname = usePathname()
  const t = useTranslations("Customer.nav")

  const segments = pathname.split("/").filter(Boolean)

  const getTranslatedSegment = (segment: string) => {
    switch (segment) {
      case "dashboard":
        return t("overview")
      case "orders":
        return t("orders")
      case "wishlist":
        return t("wishlist")
      case "settings":
        return t("settings")
      default:
        return decodeURIComponent(segment)
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1
          const href = `/${segments.slice(0, index + 1).join("/")}`

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem className="hidden md:block">
                {isLast ? (
                  <BreadcrumbPage className="font-semibold text-foreground">
                    {getTranslatedSegment(segment)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{getTranslatedSegment(segment)}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
