import { getTranslations } from "next-intl/server"
import { AuthCard, AuthHeader, AuthFooter } from "@/components/auth"
import { ForgotPasswordForm } from "@/components/auth"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: "Auth" })
  return {
    title: t("forgotPasswordMetadataTitle"),
    description: t("forgotPasswordMetadataDescription"),
  }
}

export default async function ForgotPasswordPage() {
  const t = await getTranslations("Auth")

  return (
    <AuthCard>
      <AuthHeader
        title={t("forgotPasswordTitle")}
        subtitle={t("forgotPasswordSubtitle")}
      />

      <ForgotPasswordForm />

      <AuthFooter
        label={t("rememberPassword")}
        linkText={t("loginLink")}
        href="/login"
      />
    </AuthCard>
  )
}
