"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AdminStatsCardProps {
  label: string
  value: string | number
  trend: string
  icon: React.ReactNode
  description: string
  trendValue: "up" | "down"
}

export function AdminStatsCard({
  label,
  value,
  trend,
  icon,
  description,
  trendValue,
}: AdminStatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <span
            className={cn(
              "flex items-center gap-0.5 font-medium",
              trendValue === "up" ? "text-emerald-600" : "text-destructive"
            )}
          >
            {trendValue === "up" ? (
              <TrendingUp className="size-3" />
            ) : (
              <TrendingDown className="size-3" />
            )}
            {trend}
          </span>
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
