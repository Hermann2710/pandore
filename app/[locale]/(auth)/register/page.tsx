import {
  AuthCard,
  AuthHeader,
  CredentialFields,
  SocialProviderList,
  AuthFooter,
} from "@/components/auth"

export default function RegisterPage() {
  return (
    <AuthCard>
      <AuthHeader
        title="Créer un compte"
        subtitle="Rejoignez notre communauté"
      />

      <SocialProviderList />

      <form>
        <CredentialFields>
          <input type="text" placeholder="Nom complet" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
        </CredentialFields>
        <button type="submit">S'inscrire</button>
      </form>

      <AuthFooter
        label="Déjà un compte ?"
        linkText="Se connecter"
        href="/login"
      />
    </AuthCard>
  )
}
