"use client"

import { AdminStatsCard } from "@/components/admin"
import { SectionHeading } from "@/components/shared"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatItem {
  label: string
  value: string | number
  trend: string
  trendValue: "up" | "down"
  icon: React.ReactNode
}

interface AdminDashboardClientProps {
  stats: StatItem[]
  translations: {
    title: string
    subtitle: string
    trendsUp: string
    charts: {
      revenue: string
      sales: string
    }
  }
}

export function AdminDashboardClient({
  stats,
  translations,
}: AdminDashboardClientProps) {
  return (
    <div className="space-y-8">
      <SectionHeading
        title={translations.title}
        subtitle={translations.subtitle}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <AdminStatsCard
            key={i}
            label={stat.label}
            value={stat.value}
            trend={stat.trend}
            trendValue={stat.trendValue}
            icon={stat.icon}
            description={translations.trendsUp}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              {translations.charts.revenue}
            </CardTitle>
            <Skeleton className="h-4 w-37.5" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-75 w-full rounded-xl" />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              {translations.charts.sales}
            </CardTitle>
            <Skeleton className="h-4 w-25" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="size-9 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-30" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Skeleton className="ml-auto h-4 w-15" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
