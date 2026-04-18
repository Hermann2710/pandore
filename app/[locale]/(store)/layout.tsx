import { Container } from "@/components/shared"
import { Navbar, Footer, PromoBanner } from "@/components/store"

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="store-root">
      <PromoBanner message="Livraison gratuite à partir de 50€ d'achat !" />
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}
