import { AuthWrapper } from "@/components/auth"
import { LanguageSwitcher } from "@/components/shared"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <header>
        <Link href="/">Retour</Link>
        <LanguageSwitcher />
      </header>
      <main>{children}</main>
      <footer>
        <p>© {new Date().getFullYear()} - E-commerce</p>
      </footer>
    </AuthWrapper>
  )
}
