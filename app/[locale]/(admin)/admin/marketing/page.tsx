import { MarketingClient } from "@/components/admin"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Admin.marketing.metadata")
  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function AdminMarketingPage() {
  return <MarketingClient />
}
