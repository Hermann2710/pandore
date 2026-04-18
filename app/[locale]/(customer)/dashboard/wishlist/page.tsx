import { SectionHeading } from "@/components/shared"
import { WishlistItem } from "@/components/customer"

export default function WishlistPage() {
  return (
    <>
      <SectionHeading title="Ma Liste d'envies" />
      <div className="wishlist-grid">
        <WishlistItem name="Produit Coup de Coeur" price="29.99" />
      </div>
    </>
  )
}
