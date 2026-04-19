import { getTranslations } from "next-intl/server"
import { WishlistClient } from "@/components/customer"

export async function generateMetadata() {
  const t = await getTranslations("Customer.nav")

  return {
    title: t("wishlist"),
  }
}

export default function WishlistPage() {
  return <WishlistClient />
}
