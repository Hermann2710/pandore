import { getTranslations } from "next-intl/server"
import { CustomerOrdersClient } from "@/components/customer"

export async function generateMetadata() {
  const t = await getTranslations("Customer.nav")

  return {
    title: t("orders"),
  }
}

export default function Page() {
  return <CustomerOrdersClient />
}
