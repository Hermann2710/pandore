import { SectionHeading, Container } from "@/components/shared"
import { ProductCard, CategorySidebar, PromoBanner } from "@/components/store"

export default function ShopPage() {
  return (
    <Container>
      {/* Bannière de promotion en haut de boutique */}
      <PromoBanner message="Soldes d'été : Jusqu'à -50% sur la sélection textile !" />

      <div className="shop-layout">
        {/* Navigation par catégories */}
        <aside>
          <CategorySidebar />
        </aside>

        {/* Contenu principal */}
        <main>
          <SectionHeading
            title="La Boutique"
            subtitle="Explorez nos meilleures ventes"
          />

          <div className="product-grid">
            {/* Grille de produits mise en avant */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </main>
      </div>
    </Container>
  )
}
