import Link from "next/link"

export const LegalBreadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <span> / </span>
        </li>
        <li>Légal</li>
      </ul>
    </nav>
  )
}
