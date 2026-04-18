import { SectionHeading } from "@/components/shared"
import { OrderDetails } from "@/components/customer"
import Link from "next/link"

export default function OrderIdPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Link href="/dashboard/orders">← Retour à la liste</Link>

      <SectionHeading
        title={`Commande #${params.id}`}
        subtitle="Suivez l'avancement de votre colis"
      />

      <OrderDetails id={params.id} />

      <footer className="order-actions">
        <button>Télécharger la facture (PDF)</button>
        <button>Besoin d'aide ? Contactez le support</button>
      </footer>
    </>
  )
}
