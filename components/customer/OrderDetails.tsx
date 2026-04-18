export const OrderDetails = ({ id }: { id: string }) => {
  return (
    <div className="order-details-view">
      <header>
        <h3>Détails de la commande #{id}</h3>
        <p>Passée le : 18 Avril 2026</p>
      </header>

      <section id="order-items">
        <h4>Articles</h4>
        <ul>
          <li>Produit A - 1 x 25.00 €</li>
          <li>Produit B - 2 x 10.00 €</li>
        </ul>
      </section>

      <section id="order-shipping">
        <h4>Livraison</h4>
        <p>
          Statut : <strong>En cours de préparation</strong>
        </p>
        <p>Adresse : 123 Rue de la République, Paris</p>
      </section>

      <section id="order-billing">
        <h4>Paiement</h4>
        <p>Total : 45.00 € (Payé par Carte Bancaire)</p>
      </section>
    </div>
  )
}
