import { AdminStatsCard } from "@/components/admin"
import { SectionHeading } from "@/components/shared"

export default function AdminDashboardPage() {
  return (
    <>
      <SectionHeading
        title="Vue d'ensemble"
        subtitle="Statistiques en temps réel"
      />
      <div className="stats-grid">
        <AdminStatsCard label="Ventes" value="12,450 €" trend="+12%" />
        <AdminStatsCard label="Commandes" value="142" trend="+5%" />
        <AdminStatsCard label="Nouveaux Clients" value="28" trend="+8%" />
      </div>
    </>
  )
}
