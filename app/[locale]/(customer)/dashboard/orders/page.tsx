import { SectionHeading } from "@/components/shared"
import { OrderHistoryCard } from "@/components/customer"

export default function CustomerOrdersPage() {
  return (
    <>
      <SectionHeading title="Mes commandes" />
      <div className="orders-list">
        <OrderHistoryCard
          id="1234"
          date="15/04/2026"
          total="45.00"
          status="Livré"
        />
      </div>
    </>
  )
}
