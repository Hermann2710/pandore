import {
  AuthCard,
  AuthHeader,
  CredentialFields,
  AuthFooter,
} from "@/components/auth"

export default function ForgotPasswordPage() {
  return (
    <AuthCard>
      <AuthHeader
        title="Mot de passe oublié ?"
        subtitle="Entrez votre email pour recevoir un lien de récupération"
      />

      <form>
        <CredentialFields>
          <input type="email" placeholder="Votre email" />
        </CredentialFields>
        <button type="submit">Envoyer le lien</button>
      </form>

      <AuthFooter label="Retourner à la" linkText="connexion" href="/login" />
    </AuthCard>
  )
}
