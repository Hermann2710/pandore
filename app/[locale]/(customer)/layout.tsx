import { Container } from "@/components/shared"
import { CustomerSidebar } from "@/components/customer"

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
      <div className="customer-dashboard-layout">
        <CustomerSidebar />
        <main id="customer-main-content">{children}</main>
      </div>
    </Container>
  )
}
