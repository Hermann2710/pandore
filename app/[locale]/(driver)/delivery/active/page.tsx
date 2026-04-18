import { DeliveryCard } from "@/components/driver"

export default function ActiveDelivery() {
  return (
    <>
      <h2>Course en cours</h2>
      <DeliveryCard
        orderId="#985"
        address="45 Avenue des Champs"
        status="active"
      />
    </>
  )
}
