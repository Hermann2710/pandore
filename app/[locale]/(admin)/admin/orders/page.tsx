import { DataTable } from "@/components/admin"

export default function AdminOrdersPage() {
  return (
    <>
      <h2>Gestion des Commandes</h2>
      <DataTable headers={["ID", "Client", "Total", "Statut", "Actions"]}>
        <tr>
          <td>#ORD-5542</td>
          <td>Jean Dupont</td>
          <td>89.99 €</td>
          <td>
            <span className="status-badge">En préparation</span>
          </td>
          <td>
            <button>Détails</button>
          </td>
        </tr>
      </DataTable>
    </>
  )
}
