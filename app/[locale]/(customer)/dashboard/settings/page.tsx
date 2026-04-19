import { SettingsClient } from "@/components/customer"
import { getTranslations } from "next-intl/server"

export async function generateMetadata() {
  const t = await getTranslations("Customer.nav")

  return {
    title: t("settings"),
  }
}

export default function SettingsPage() {
  return <SettingsClient />
}
