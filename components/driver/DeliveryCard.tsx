"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Package, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface DeliveryCardProps {
  orderId: string
  address: string
  status: "ready" | "active" | "completed" | "pending"
  customerName?: string
}

export const DeliveryCard = ({
  orderId,
  address,
  status,
  customerName,
}: DeliveryCardProps) => {
  const t = useTranslations("Driver.delivery")

  const statusConfig = {
    ready: {
      color: "bg-amber-500/10 text-amber-600 border-amber-200",
      label: t("ready"),
    },
    active: {
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
      label: t("active"),
    },
    completed: {
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
      label: t("completed"),
    },
    pending: {
      color: "bg-slate-500/10 text-slate-600 border-slate-200",
      label: t("ready"),
    },
  }

  const currentStatus = statusConfig[status] || statusConfig.pending

  return (
    <Card className="overflow-hidden border-none shadow-lg ring-1 ring-border transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-muted/30 pb-4">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-background p-2 shadow-sm">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              {t("order")}
            </p>
            <span className="text-lg font-bold tracking-tight">{orderId}</span>
          </div>
        </div>
        <Badge
          variant="outline"
          className={cn("font-semibold", currentStatus.color)}
        >
          {currentStatus.label}
        </Badge>
      </CardHeader>

      <CardContent className="grid gap-4 pt-6">
        {customerName && (
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold">
              {customerName.charAt(0)}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("client")}</p>
              <p className="font-semibold">{customerName}</p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
          <p className="text-sm leading-relaxed font-medium">{address}</p>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 pt-2">
        {status === "active" ? (
          <>
            <Button
              variant="outline"
              className="h-11 flex-1 gap-2 border-primary/20 hover:bg-primary/5"
            >
              <Navigation className="h-4 w-4" />
              {t("seeOnMap")}
            </Button>
            <Button className="h-11 flex-1 gap-2 shadow-md">
              <CheckCircle2 className="h-4 w-4" />
              {t("finishDelivery")}
            </Button>
          </>
        ) : status === "completed" ? (
          <Button
            variant="secondary"
            className="h-11 w-full cursor-default gap-2 opacity-70"
          >
            <CheckCircle2 className="h-4 w-4" />
            {t("completed")}
          </Button>
        ) : (
          <Button className="h-11 w-full gap-2 shadow-lg">
            {t("acceptDelivery")}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
