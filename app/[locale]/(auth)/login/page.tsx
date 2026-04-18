import { getTranslations } from "next-intl/server"
import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  SocialProviderList,
} from "@/components/auth"
import { LoginForm } from "@/components/auth"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: "Auth" })
  return {
    title: t("loginMetadataTitle"),
    description: t("loginMetadataDescription"),
  }
}

export default async function LoginPage() {
  const t = await getTranslations("Auth")

  return (
    <AuthCard>
      <AuthHeader title={t("loginTitle")} subtitle={t("loginSubtitle")} />

      <SocialProviderList />

      <LoginForm />

      <AuthFooter
        label={t("noAccount")}
        linkText={t("registerLink")}
        href="/register"
      />
    </AuthCard>
  )
}
