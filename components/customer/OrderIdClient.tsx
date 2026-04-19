"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { SectionHeading } from "@/components/shared"
import { OrderDetails } from "@/components/customer"
import { Button } from "@/components/ui/button"
import { ChevronLeft, FileText, LifeBuoy } from "lucide-react"

export function OrderIdClient({ id }: { id: string }) {
  const t = useTranslations("Customer")

  return (
    <div className="space-y-8">
      <Button variant="ghost" size="sm" asChild className="-ml-2">
        <Link href="/dashboard/orders" className="flex items-center gap-2">
          <ChevronLeft className="size-4" />
          {t("orders.backToList")}
        </Link>
      </Button>

      <SectionHeading
        title={`${t("dashboard.stats.lastOrder")} #${id}`}
        subtitle={t("dashboard.sections.upcomingDeliveries")}
      />

      <OrderDetails id={id} />

      <footer className="flex flex-wrap gap-4 border-t pt-6">
        <Button className="gap-2">
          <FileText className="size-4" />
          {t("orders.downloadInvoice")}
        </Button>
        <Button variant="outline" className="gap-2">
          <LifeBuoy className="size-4" />
          {t("orders.support")}
        </Button>
      </footer>
    </div>
  )
}
