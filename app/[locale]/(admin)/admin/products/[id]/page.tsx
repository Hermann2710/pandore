export default function AdminProductEditPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <form>
      <h2>Modifier le produit #{params.id}</h2>
      <input
        type="text"
        placeholder="Nom du produit"
        defaultValue="iPhone 15"
      />
      <textarea placeholder="Description"></textarea>
      <input type="number" placeholder="Prix" defaultValue={999} />
      <button type="submit">Enregistrer les modifications</button>
    </form>
  )
}
