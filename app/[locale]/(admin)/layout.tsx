import { Container } from "@/components/shared"
import { AdminSidebar } from "@/components/admin"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-wrapper">
      <AdminSidebar />
      <main className="admin-main">
        <Container>{children}</Container>
      </main>
    </div>
  )
}
