import { AuthWrapper } from "@/components/auth"
import { LanguageSwitcher, ThemeSwitcher } from "@/components/shared"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { ChevronLeft } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = useTranslations("Auth")

  return (
    <AuthWrapper>
      <div className="relative flex min-h-screen w-full flex-col bg-background text-foreground transition-colors duration-500">
        <header className="fixed top-0 right-0 left-0 z-100 flex animate-in items-center justify-between p-4 duration-700 fade-in slide-in-from-top">
          <Link
            href="/"
            className={
              "flex items-center gap-2 rounded-full border bg-card/50 px-5 py-2 shadow-sm backdrop-blur-md transition-colors duration-500"
            }
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold tracking-tight">
              {t("backToHome")}
            </span>
          </Link>

          <div className="flex items-center gap-2 rounded-full border bg-card/50 p-1 shadow-sm backdrop-blur-md transition-colors duration-500">
            <LanguageSwitcher />
            <div className="mx-1 h-4 w-px bg-border" />
            <ThemeSwitcher />
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-primary/5 via-background to-background p-6">
          <div className="w-full max-w-md animate-in duration-1000 ease-out fade-in slide-in-from-bottom-4 zoom-in">
            {children}
          </div>
        </main>

        <footer className="animate-in py-8 text-center delay-500 duration-1000 fade-in">
          <p className="text-sm tracking-wide text-muted-foreground">
            &copy; {new Date().getFullYear()} —{" "}
            <span className="font-semibold text-primary">
              {t("footerBrand")}
            </span>
          </p>
        </footer>
      </div>
    </AuthWrapper>
  )
}
