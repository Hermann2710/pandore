import Link from "next/link"

export const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <nav>
        <ul>
          <li>
            <Link href="/admin">Tableau de bord</Link>
          </li>
          <li>
            <Link href="/admin/products">Produits</Link>
          </li>
          <li>
            <Link href="/admin/categories">Catégories</Link>
          </li>
          <li>
            <Link href="/admin/orders">Commandes</Link>
          </li>
          <li>
            <Link href="/admin/users">Utilisateurs</Link>
          </li>
          <li>
            <Link href="/admin/marketing">Marketing</Link>
          </li>
          <li>
            <Link href="/admin/reviews">Avis</Link>
          </li>
          <li>
            <Link href="/admin/settings">Paramètres</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
