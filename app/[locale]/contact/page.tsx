import { Container } from "@/components/shared"
import {
  ContactHero,
  ContactGrid,
  ContactCard,
  ContactForm,
  FaqPreview,
} from "@/components/contact"

export default function ContactPage() {
  return (
    <Container>
      <ContactHero />

      <ContactGrid>
        {/* Colonne des infos */}
        <aside>
          <ContactCard title="Email" value="support@votre-ecom.com" />
          <ContactCard title="Téléphone" value="+33 1 23 45 67 89" />
        </aside>

        {/* Colonne du formulaire */}
        <main>
          <ContactForm />
        </main>
      </ContactGrid>

      <FaqPreview />
    </Container>
  )
}
