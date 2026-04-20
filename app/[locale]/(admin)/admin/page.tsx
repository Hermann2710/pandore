import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Euro, ShoppingCart, Users, TrendingUp } from "lucide-react"
import { AdminDashboardClient } from "@/components/admin"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Admin.dashboard.metadata")
  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function AdminDashboardPage() {
  const t = await getTranslations("Admin.dashboard")

  const stats = [
    {
      label: t("revenue"),
      value: "12,450.00 €",
      trend: "+12.5%",
      trendValue: "up" as const,
      icon: <Euro className="size-4" />,
    },
    {
      label: t("orders"),
      value: "+142",
      trend: "+5.2%",
      trendValue: "up" as const,
      icon: <ShoppingCart className="size-4" />,
    },
    {
      label: t("customers"),
      value: "+28",
      trend: "+8.1%",
      trendValue: "up" as const,
      icon: <Users className="size-4" />,
    },
    {
      label: t("sales"),
      value: "45",
      trend: "-2.4%",
      trendValue: "down" as const,
      icon: <TrendingUp className="size-4" />,
    },
  ]

  const translations = {
    title: t("title"),
    subtitle: t("subtitle"),
    trendsUp: t("trends.up"),
    charts: {
      revenue: t("charts.revenue"),
      sales: t("charts.sales"),
    },
  }

  return <AdminDashboardClient stats={stats} translations={translations} />
}
