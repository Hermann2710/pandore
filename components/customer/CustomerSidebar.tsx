import Link from "next/link"

export const CustomerSidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">Vue d'ensemble</Link>
          </li>
          <li>
            <Link href="/dashboard/orders">Mes commandes</Link>
          </li>
          <li>
            <Link href="/dashboard/wishlist">Ma liste d'envies</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Paramètres</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
