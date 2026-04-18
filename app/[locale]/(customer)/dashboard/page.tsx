import { SectionHeading } from "@/components/shared"

export default function CustomerDashboardPage() {
  return (
    <>
      <SectionHeading
        title="Mon Compte"
        subtitle="Bienvenue dans votre espace personnel."
      />
      <section>
        <p>
          Prochaines livraisons, points de fidélité ou messages récents ici.
        </p>
      </section>
    </>
  )
}
