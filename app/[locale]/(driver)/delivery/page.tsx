import { getTranslations } from "next-intl/server"
import { SectionHeading } from "@/components/shared"
import { DriverStats } from "@/components/driver"

export async function generateMetadata() {
  const t = await getTranslations("Driver")

  return {
    title: `${t("dashboardTitle")} | Mon E-commerce`,
    description: t("dashboardSubtitle"),
  }
}

export default async function DriverDashboardPage() {
  const t = await getTranslations("Driver")

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        title={t("dashboardTitle")}
        subtitle={t("dashboardSubtitle")}
      />

      <DriverStats />
    </div>
  )
}
