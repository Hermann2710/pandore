import { DataTable } from "@/components/admin"

export default function AdminReviewsPage() {
  return (
    <>
      <h2>Modération des Avis</h2>
      <DataTable
        headers={["Produit", "Note", "Commentaire", "Statut", "Actions"]}
      >
        <tr>
          <td>Produit X</td>
          <td>⭐⭐⭐⭐</td>
          <td>"Super qualité !"</td>
          <td>
            <button>Approuver</button> <button>Supprimer</button>
          </td>
        </tr>
      </DataTable>
    </>
  )
}
