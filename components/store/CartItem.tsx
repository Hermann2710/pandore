export const CartItem = () => {
  return (
    <div className="cart-item">
      <span>Produit A</span>
      <input type="number" defaultValue={1} />
      <span>19.99 €</span>
      <button>Supprimer</button>
    </div>
  )
}
