import { SectionHeading, Container } from "@/components/shared"
import { ProductCard, CategorySidebar } from "@/components/store"

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  return (
    <Container>
      <div className="shop-layout">
        <aside>
          <CategorySidebar />
        </aside>

        <main>
          <SectionHeading
            title={`Rayon : ${params.category}`}
            subtitle="Découvrez notre sélection rigoureuse"
          />

          <div className="product-grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </main>
      </div>
    </Container>
  )
}
