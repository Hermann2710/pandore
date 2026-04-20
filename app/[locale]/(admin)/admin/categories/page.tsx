import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { SectionHeading } from "@/components/shared"
import { CategoriesTableClient, CategoryFormDialog } from "@/components/admin"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Admin.categories.metadata")
  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function AdminCategoriesPage() {
  const t = await getTranslations("Admin.categories")

  const data = [
    { id: "1", name: "Électronique", slug: "/electronics", products: 156 },
    { id: "2", name: "Mode", slug: "/fashion", products: 84 },
    { id: "3", name: "Maison", slug: "/home", products: 42 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <CategoryFormDialog />
      </div>

      <CategoriesTableClient data={data} />
    </div>
  )
}
