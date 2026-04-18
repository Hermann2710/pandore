import { DiscountBadge } from "./DiscountBadge"

export const ProductCard = () => {
  return (
    <article>
      <DiscountBadge percentage={20} />
      <div className="img-placeholder">Image</div>
      <h3>Nom du produit</h3>
      <p>29.99 €</p>
      <button>Ajouter au panier</button>
    </article>
  )
}
