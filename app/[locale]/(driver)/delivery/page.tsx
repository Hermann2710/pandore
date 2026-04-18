import { SectionHeading } from "@/components/shared"
import { DriverStats } from "@/components/driver"

export default function DriverDashboardPage() {
  return (
    <>
      <SectionHeading
        title="Tableau de bord"
        subtitle="Bienvenue, prêt pour vos courses ?"
      />
      <DriverStats />
    </>
  )
}
