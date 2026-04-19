import { useTranslations } from "next-intl"
import { Container } from "@/components/shared"
import { DriverNavbar } from "@/components/driver"
import Link from "next/link"

export default function DriverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = useTranslations("Driver")

  return (
    <div id="driver-dashboard" className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link href="/delivery">
            <div className="flex shrink-0 items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20">
                D
              </span>
              <h1 className="hidden text-lg font-bold tracking-tight sm:block">
                {t("title")}
              </h1>
            </div>
          </Link>

          <DriverNavbar />
        </Container>
      </header>

      <main className="py-6 lg:py-10">
        <Container>{children}</Container>
      </main>
    </div>
  )
}
