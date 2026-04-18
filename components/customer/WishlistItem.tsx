export const WishlistItem = ({ name, price }: any) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{price}€</p>
      <button>Ajouter au panier</button>
      <button>Supprimer</button>
    </div>
  )
}
