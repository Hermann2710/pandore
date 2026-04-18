import { SectionHeading } from "@/components/shared"
import { CartItem, OrderSummary } from "@/components/store"
import Link from "next/link"

export default function CartPage() {
  return (
    <div id="cart-page-container">
      <SectionHeading
        title="Votre Panier"
        subtitle="Vérifiez vos articles avant de passer au paiement"
      />

      <div className="cart-layout">
        <section id="cart-items-list">
          <CartItem />
          <CartItem />

          <div className="cart-actions">
            <Link href="/shop">Continuer mes achats</Link>
          </div>
        </section>

        <aside id="cart-summary">
          <OrderSummary />
        </aside>
      </div>
    </div>
  )
}
