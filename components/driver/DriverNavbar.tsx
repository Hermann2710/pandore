import Link from "next/link"

export const DriverNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/delivery/available">Disponibles</Link>
        </li>
        <li>
          <Link href="/delivery/active">En cours</Link>
        </li>
        <li>
          <Link href="/delivery/history">Historique</Link>
        </li>
      </ul>
    </nav>
  )
}
