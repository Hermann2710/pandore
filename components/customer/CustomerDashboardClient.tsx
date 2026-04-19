"use client"

import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/shared"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Heart, Star, Clock } from "lucide-react"

export function CustomerDashboardClient() {
  const t = useTranslations("Customer")

  const stats = [
    {
      title: t("nav.orders"),
      value: "3",
      icon: Package,
      description: t("dashboard.stats.activeOrders", { count: 2 }),
    },
    {
      title: t("nav.wishlist"),
      value: "12",
      icon: Heart,
      description: t("dashboard.stats.savedProducts"),
    },
    {
      title: t("dashboard.stats.loyaltyPoints"),
      value: "450",
      icon: Star,
      description: t("dashboard.stats.availableDiscount", { amount: 5 }),
    },
    {
      title: t("dashboard.stats.lastOrder"),
      value: t("dashboard.stats.daysAgo", { count: 2 }),
      icon: Clock,
      description: t("dashboard.stats.deliveryFinished"),
    },
  ]

  return (
    <div className="space-y-8">
      <SectionHeading title={t("nav.home")} subtitle={t("dashboard.welcome")} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">
              {t("dashboard.sections.upcomingDeliveries")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {t("dashboard.sections.noDeliveries")}
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">
              {t("dashboard.sections.recentMessages")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {t("dashboard.sections.noMessages")}
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
