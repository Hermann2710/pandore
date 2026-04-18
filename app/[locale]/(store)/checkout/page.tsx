import { SectionHeading, Container } from "@/components/shared"
import { CheckoutForm, OrderSummary } from "@/components/store"

export default function CheckoutPage() {
  return (
    <div id="checkout-page">
      <SectionHeading
        title="Paiement Sécurisé"
        subtitle="Veuillez renseigner vos informations de livraison et de paiement"
      />

      <div className="checkout-layout">
        <section id="checkout-info">
          <CheckoutForm />
        </section>

        <aside id="checkout-sidebar">
          <OrderSummary />

          <div className="security-badges">
            <p>Paiement 100% sécurisé SSL</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
