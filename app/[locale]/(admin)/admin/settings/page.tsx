export default function AdminSettingsPage() {
  return (
    <>
      <h2>Paramètres Généraux</h2>
      <form className="settings-grid">
        <label>Nom de la boutique</label>
        <input type="text" defaultValue="Ma Super Boutique" />

        <label>Frais de livraison par défaut</label>
        <input type="number" defaultValue={5.99} />

        <label>Seuil de livraison gratuite</label>
        <input type="number" defaultValue={50} />

        <button type="submit">Sauvegarder la configuration</button>
      </form>
    </>
  )
}
