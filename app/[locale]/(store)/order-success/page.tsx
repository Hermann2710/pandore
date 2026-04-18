import { Container, SectionHeading } from "@/components/shared"
import { SuccessMessage } from "@/components/store"
import Link from "next/link"

export default function OrderSuccessPage() {
  return (
    <Container>
      <div id="success-page-layout">
        <div className="status-icon">✅</div>

        <SuccessMessage />

        <SectionHeading
          title="Merci pour votre commande !"
          subtitle="Un email de confirmation vient de vous être envoyé."
        />

        <section id="order-summary-quickview">
          <h3>Commande n° #12345</h3>
          <p>Statut : En cours de préparation</p>
        </section>

        <nav className="success-actions">
          <Link href="/shop">Continuer mes achats</Link>
          <Link href="/customer/orders">Suivre ma commande</Link>
        </nav>
      </div>
    </Container>
  )
}
