import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "HomePage" })

  return {
    title: t("metadata.title", { AppName: "Pandore" }),
    description: t("metadata.description", { AppName: "Pandore" }),
  }
}

export default function HomePage() {
  const t = useTranslations("HomePage")
  return <h1>{t("title")}</h1>
}
