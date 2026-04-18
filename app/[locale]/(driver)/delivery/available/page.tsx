import { DeliveryCard } from "@/components/driver"
import { SectionHeading } from "@/components/shared"

export default function AvailableDeliveries() {
  return (
    <>
      <SectionHeading title="Courses disponibles" />
      <DeliveryCard
        orderId="#987"
        address="12 rue de la Paix"
        status="available"
      />
    </>
  )
}
