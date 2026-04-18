import { Container, SectionHeading } from "@/components/shared"
import { ProductCard, PromoBanner } from "@/components/store"

export default function HomePage() {
  return (
    <div id="home-page">
      <section className="hero-section">
        <Container>
          <h1>Nouvelle Collection 2026</h1>
          <p>Découvrez nos produits exclusifs avec 20% de réduction.</p>
          <button>Acheter maintenant</button>
        </Container>
      </section>

      <Container>
        <section className="featured-categories">
          <SectionHeading title="Nos Univers" />
          <div className="category-grid">
            <div className="cat-card">Électronique</div>
            <div className="cat-card">Mode</div>
            <div className="cat-card">Maison</div>
          </div>
        </section>

        <section className="best-sellers">
          <SectionHeading
            title="Meilleures Ventes"
            subtitle="Les articles les plus plébiscités"
          />
          <div className="product-grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>

        <section className="reassurance">
          <div className="reassurance-item">🚚 Livraison Gratuite</div>
          <div className="reassurance-item">🔒 Paiement Sécurisé</div>
          <div className="reassurance-item">🔄 Retour sous 30 jours</div>
        </section>
      </Container>
    </div>
  )
}
