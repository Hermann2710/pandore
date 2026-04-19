import { getTranslations } from "next-intl/server"
import { OrderIdClient } from "@/components/customer"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const t = await getTranslations("Customer.nav")
  const { id } = await params

  return {
    title: `${t("orders")} #${id}`,
  }
}

export default async function OrderIdPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <OrderIdClient id={id} />
}
