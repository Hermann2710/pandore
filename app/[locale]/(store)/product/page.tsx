import { SectionHeading, Container } from "@/components/shared"
import { ProductCard, SearchBar } from "@/components/store"

export default function AllProductsPage() {
  return (
    <Container>
      <header>
        <SectionHeading
          title="Tous nos produits"
          subtitle="Découvrez l'ensemble de notre catalogue"
        />
        <SearchBar />
      </header>

      <section id="products-grid">
        {/* On bouclera ici sur la liste des produits */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </Container>
  )
}
