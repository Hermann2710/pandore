import { DataTable } from "@/components/admin"

export default function AdminUsersPage() {
  return (
    <>
      <h2>Utilisateurs</h2>
      <DataTable headers={["Nom", "Email", "Rôle", "Actions"]}>
        <tr>
          <td>Alice Smith</td>
          <td>alice@email.com</td>
          <td>Livreur</td>
          <td>
            <button>Gérer les accès</button>
          </td>
        </tr>
      </DataTable>
    </>
  )
}
