"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, PackageCheck, Star, Clock } from "lucide-react"

export const DriverStats = () => {
  const t = useTranslations("Driver.stats")

  const stats = [
    {
      title: t("todayRevenue"),
      value: "128.50 €",
      icon: Banknote,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: t("completedDeliveries"),
      value: "12",
      icon: PackageCheck,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: t("rating"),
      value: "4.9",
      icon: Star,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: t("activeTime"),
      value: "5h 20m",
      icon: Clock,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ]

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="border-none shadow-sm ring-1 ring-border transition-all hover:shadow-md"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`rounded-md p-2 ${stat.bg} ${stat.color}`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
