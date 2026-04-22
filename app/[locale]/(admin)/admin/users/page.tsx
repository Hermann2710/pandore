import { UsersTableClient } from "@/components/admin"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Admin.users.metadata")
  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function AdminUsersPage() {
  return <UsersTableClient />
}
