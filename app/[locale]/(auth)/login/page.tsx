import {
  AuthCard,
  AuthHeader,
  CredentialFields,
  SocialProviderList,
  AuthFooter,
} from "@/components/auth"

export default function LoginPage() {
  return (
    <AuthCard>
      <AuthHeader title="Connexion" subtitle="Ravi de vous revoir" />

      <SocialProviderList />

      <form>
        <CredentialFields>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
        </CredentialFields>
        <button type="submit">Se connecter</button>
      </form>

      <AuthFooter
        label="Pas encore de compte ?"
        linkText="S'inscrire"
        href="/register"
      />
    </AuthCard>
  )
}
