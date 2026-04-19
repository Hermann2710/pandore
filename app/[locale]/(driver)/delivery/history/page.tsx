import { getTranslations } from "next-intl/server"
import { SectionHeading } from "@/components/shared"
import { DeliveryCard } from "@/components/driver"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export async function generateMetadata() {
  const t = await getTranslations("Driver")

  return {
    title: `${t("historyTitle")} | Mon E-commerce`,
    description: t("historySubtitle"),
  }
}

export default async function DeliveryHistory() {
  const t = await getTranslations("Driver")

  const historyData = [
    {
      id: "#901",
      address: "12 Rue de la Paix, Paris",
      customer: "Jean Dupont",
      date: "18/04",
    },
    {
      id: "#895",
      address: "45 Ave des Ternes, Paris",
      customer: "Marie Curie",
      date: "17/04",
    },
    {
      id: "#882",
      address: "5 Rue de Rivoli, Paris",
      customer: "Victor Hugo",
      date: "17/04",
    },
    {
      id: "#870",
      address: "10 Rue de la Pompe, Paris",
      customer: "Sacha Leduc",
      date: "16/04",
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        title={t("historyTitle")}
        subtitle={t("historySubtitle")}
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {historyData.map((order) => (
          <div key={order.id} className="group relative">
            <span className="absolute -top-3 left-6 z-10 bg-background px-2 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              {order.date}
            </span>
            <DeliveryCard
              orderId={order.id}
              address={order.address}
              customerName={order.customer}
              status="completed"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 pt-8">
        <Button variant="outline" size="icon" className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="h-10 w-10 rounded-full font-bold"
          >
            1
          </Button>
          <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full">
            2
          </Button>
          <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full">
            3
          </Button>
        </div>
        <Button variant="outline" size="icon" className="rounded-full">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
