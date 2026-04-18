import { DataTable } from "@/components/admin"

export default function AdminCategoriesPage() {
  return (
    <>
      <div className="flex-header">
        <h2>Catégories</h2>
        <button>+ Ajouter une catégorie</button>
      </div>
      <DataTable headers={["Nom", "Slug", "Produits liés", "Actions"]}>
        <tr>
          <td>Électronique</td>
          <td>/electronics</td>
          <td>156</td>
          <td>
            <button>Éditer</button>
          </td>
        </tr>
      </DataTable>
    </>
  )
}
