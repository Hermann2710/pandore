import { ProductForm } from "@/components/admin"
import { SectionHeading } from "@/components/shared"
import { getTranslations } from "next-intl/server"

export async function generateMetadata() {
  const t = await getTranslations("Admin.products")
  return {
    title: t("add"),
    description: t("metadata.description"),
  }
}

export default async function AddProductPage() {
  const t = await getTranslations("Admin.products")

  return (
    <div className="space-y-6">
      <SectionHeading title={t("add")} subtitle={t("subtitle")} />
      <ProductForm />
    </div>
  )
}
