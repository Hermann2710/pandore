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
import { cn } from "@/lib/utils"

export function AdminBreadcrumb() {
  const pathname = usePathname()
  const t = useTranslations("Admin.nav")

  const segments = pathname.split("/").filter(Boolean)

  const getTranslatedSegment = (segment: string) => {
    const mapping: Record<string, string> = {
      admin: "Admin",
      products: t("products"),
      categories: t("categories"),
      orders: t("orders"),
      users: t("users"),
      marketing: t("marketing"),
      reviews: t("reviews"),
      settings: t("settings"),
    }
    return mapping[segment] || decodeURIComponent(segment).replace(/-/g, " ")
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1
          const href = `/${segments.slice(0, index + 1).join("/")}`

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem className={cn(!isLast && "hidden md:block")}>
                {isLast ? (
                  <BreadcrumbPage className="font-semibold text-foreground">
                    {getTranslatedSegment(segment)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href} className="hover:text-foreground">
                      {getTranslatedSegment(segment)}
                    </Link>
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
