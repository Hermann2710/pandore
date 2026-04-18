import {
  LegalContainer,
  LegalHeader,
  LegalSection,
  LegalBreadcrumbs,
} from "@/components/legal"

export default function PrivacyPage() {
  return (
    <LegalContainer>
      <LegalBreadcrumbs />
      <LegalHeader title="Confidentialité" lastUpdated="18/04/2026" />

      <LegalSection title="Données collectées">
        <p>Contenu de l'article...</p>
      </LegalSection>
    </LegalContainer>
  )
}
