import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { SectionHeading } from "@/components/shared"
import { ProductForm, DeleteProductAction } from "@/components/admin"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const t = await getTranslations("Admin.products")
  return {
    title: `${t("edit_title")} #${id}`,
    description: t("metadata.description"),
  }
}

export default async function AdminProductEditPage({ params }: Props) {
  const { id } = await params
  const t = await getTranslations("Admin.products")

  const mockProductData = {
    name: "iPhone 15",
    slug: "iphone-15",
    description: "Le dernier smartphone avec un appareil photo incroyable.",
    price: 999,
    category: "Smartphones",
    quantity: 24,
    images: ["https://placeholder.com/iphone15.jpg"],
    brand: "Apple",
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SectionHeading
          title={`${t("edit_title")} #${id}`}
          subtitle={t("subtitle")}
        />
        <DeleteProductAction id={id} />
      </div>

      <ProductForm initialData={mockProductData} />
    </div>
  )
}
