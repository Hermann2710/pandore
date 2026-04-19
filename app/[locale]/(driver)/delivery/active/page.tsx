import { getTranslations } from "next-intl/server"
import { SectionHeading } from "@/components/shared"
import { DeliveryCard } from "@/components/driver"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Clock } from "lucide-react"
import { CheckCircle } from "lucide-react"

export default async function ActiveDeliveryPage() {
  const t = await getTranslations("Driver")

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          title={t("activeTitle")}
          subtitle={t("activeSubtitle")}
        />

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full border-primary/20 bg-primary/5 text-primary"
          >
            <Phone className="h-4 w-4" />
            <span className="font-bold">{t("delivery.callClient")}</span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full border-primary/20 bg-primary/5 text-primary"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="font-bold">{t("delivery.messageClient")}</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DeliveryCard
            orderId="#985"
            address="45 Avenue des Champs, 75008 Paris"
            status="active"
            customerName="Alice Martin"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-[2rem] border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-amber-500/10 p-2">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t("delivery.estimatedArrival")}
                </p>
                <p className="text-xl font-bold text-amber-600 italic">
                  ~ 12 min
                </p>
              </div>
            </div>

            <div className="relative space-y-8 before:absolute before:top-2 before:left-2.75 before:h-[calc(100%-16px)] before:w-0.5 before:bg-muted">
              <div className="relative flex items-center gap-4">
                <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-background">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm font-semibold">
                  {t("delivery.steps.pickup")}
                </p>
              </div>
              <div className="relative flex items-center gap-4">
                <div className="z-10 h-6 w-6 animate-pulse rounded-full bg-primary ring-4 ring-background" />
                <p className="text-sm font-bold text-primary">
                  {t("delivery.steps.delivery")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
