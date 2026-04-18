import { Container } from "@/components/shared"
import { ProductDetails, ReviewsSection, ProductCard } from "@/components/store"

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return (
    <Container>
      <article id="product-main-content">
        <ProductDetails />
      </article>

      <aside id="product-reviews">
        <ReviewsSection />
      </aside>

      <section id="related-products">
        <h3>Produits similaires</h3>
        <div className="related-grid">
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </Container>
  )
}
