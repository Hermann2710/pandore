import { ProductsTableClient } from "@/components/admin"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Admin.products.metadata")
  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function AdminProductsPage() {
  return <ProductsTableClient />
}
