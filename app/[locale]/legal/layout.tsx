import { Container } from "@/components/shared"

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main id="legal-layout">
      <Container>
        <div className="legal-wrapper">{children}</div>
      </Container>
    </main>
  )
}
