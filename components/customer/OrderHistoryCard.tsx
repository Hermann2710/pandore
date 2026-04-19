"use client"

import { useTranslations } from "next-intl"
import { Eye, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

interface OrderHistoryCardProps {
  id: string
  date: string
  total: string
  status: string
}

export function OrderHistoryCard({
  id,
  date,
  total,
  status,
}: OrderHistoryCardProps) {
  const t = useTranslations("Driver.delivery")
  const d = useTranslations("Customer.orders")

  return (
    <Card className="transition-hover overflow-hidden border-none shadow-sm hover:bg-muted/50">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Package className="size-6" />
            </div>
            <div className="grid gap-1">
              <p className="text-sm leading-none font-medium">
                {t("order")} <span className="text-primary">#{id}</span>
              </p>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <div className="flex flex-col items-end gap-1">
              <Badge variant="secondary" className="font-medium">
                {status}
              </Badge>
              <p className="text-sm font-bold">{total}€</p>
            </div>

            <Button variant="outline" size="sm" className="gap-2" asChild>
              <Link href={`/dashboard/orders/${id}`}>
                <Eye className="size-4" />
                <span className="hidden sm:inline">{d("viewDetails")}</span>
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
