import { getTranslations } from "next-intl/server"
import { SectionHeading } from "@/components/shared"
import { DeliveryCard } from "@/components/driver"

export async function generateMetadata() {
  const t = await getTranslations("Driver")

  return {
    title: `${t("availableTitle")} | Mon E-commerce`,
    description: t("dashboardSubtitle"),
  }
}

export default async function AvailableDeliveries() {
  const t = await getTranslations("Driver")

  const availableOrders = [
    {
      id: "#1024",
      address: "12 Rue de la Paix, 75002 Paris",
      customer: "Jean Dupont",
    },
    {
      id: "#1025",
      address: "45 Avenue des Ternes, 75017 Paris",
      customer: "Marie Curie",
    },
    {
      id: "#1026",
      address: "5 Rue de Rivoli, 75004 Paris",
      customer: "Victor Hugo",
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        title={t("availableTitle")}
        subtitle={t("dashboardSubtitle")}
      />

      {availableOrders.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {availableOrders.map((order) => (
            <DeliveryCard
              key={order.id}
              orderId={order.id}
              address={order.address}
              customerName={order.customer}
              status="ready"
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-100 flex-col items-center justify-center rounded-[2rem] border-2 border-dashed bg-muted/30 p-8 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            {t("noAvailableOrders")}
          </p>
        </div>
      )}
    </div>
  )
}
