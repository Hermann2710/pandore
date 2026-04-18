import { DataTable } from "@/components/admin"
import Link from "next/link"

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex-header">
        <h2>Gestion des Produits</h2>
        <button>+ Nouveau Produit</button>
      </div>
      <DataTable headers={["Nom", "Prix", "Stock", "Actions"]}>
        <tr>
          <td>iPhone 15</td>
          <td>999 €</td>
          <td>24</td>
          <td>
            <Link href="/admin/products/123">Modifier</Link>
          </td>
        </tr>
      </DataTable>
    </>
  )
}
