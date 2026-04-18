import { Container } from "@/components/shared"
import { DriverNavbar } from "@/components/driver"

export default function DriverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="driver-dashboard">
      <header>
        <Container>
          <h1>Espace Livreur</h1>
          <DriverNavbar />
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  )
}
