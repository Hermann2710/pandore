import { getTranslations } from "next-intl/server"
import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  SocialProviderList,
} from "@/components/auth"
import { RegisterForm } from "@/components/auth"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: "Auth" })
  return {
    title: t("registerMetadataTitle"),
    description: t("registerMetadataDescription"),
  }
}

export default async function RegisterPage() {
  const t = await getTranslations("Auth")

  return (
    <AuthCard>
      <AuthHeader title={t("registerTitle")} subtitle={t("registerSubtitle")} />

      <SocialProviderList />

      <RegisterForm />

      <AuthFooter
        label={t("alreadyHaveAccount")}
        linkText={t("loginLink")}
        href="/login"
      />
    </AuthCard>
  )
}
