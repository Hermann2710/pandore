import { LegalContainer, LegalHeader } from "@/components/legal"
import Link from "next/link"

export default function LegalIndexPage() {
  return (
    <LegalContainer>
      <LegalHeader title="Centre Juridique" lastUpdated="2026" />

      <nav>
        <ul>
          <li>
            <Link href="/legal/terms">Conditions Générales de Vente</Link>
          </li>
          <li>
            <Link href="/legal/privacy">Politique de Confidentialité</Link>
          </li>
        </ul>
      </nav>
    </LegalContainer>
  )
}
