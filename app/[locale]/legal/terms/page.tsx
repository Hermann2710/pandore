import {
  LegalContainer,
  LegalHeader,
  LegalSection,
  LegalBreadcrumbs,
} from "@/components/legal"

export default function TermsPage() {
  return (
    <LegalContainer>
      <LegalBreadcrumbs />
      <LegalHeader title="Termes" lastUpdated="18/04/2026" />

      <LegalSection title="Données collectées">
        <p>Contenu de l'article...</p>
      </LegalSection>
    </LegalContainer>
  )
}
