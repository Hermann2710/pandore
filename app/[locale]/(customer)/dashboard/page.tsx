import { getTranslations } from "next-intl/server"
import { CustomerDashboardClient } from "@/components/customer"

export async function generateMetadata() {
  const t = await getTranslations("Customer.nav")

  return {
    title: t("overview"),
  }
}

export default function CustomerDashboardPage() {
  return <CustomerDashboardClient />
}
