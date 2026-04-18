export default function AdminMarketingPage() {
  return (
    <>
      <h2>Marketing & Promotions</h2>
      <section className="promo-form">
        <h3>Créer un code promo</h3>
        <input type="text" placeholder="Code (ex: SUMMER20)" />
        <input type="number" placeholder="Remise (%)" />
        <button>Générer</button>
      </section>
      <div className="active-promos">
        <h3>Campagnes actives</h3>
        <p>
          Bannière d'été : <strong>Active</strong>
        </p>
      </div>
    </>
  )
}
