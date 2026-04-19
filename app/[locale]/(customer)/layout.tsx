import { ReactNode } from "react"
import { getTranslations } from "next-intl/server"
import { Container } from "@/components/shared"
import { CustomerSidebar } from "@/components/customer"
import { HeaderBreadcrumb } from "@/components/customer"
import { ThemeSwitcher, LanguageSwitcher } from "@/components/shared"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

interface CustomerLayoutProps {
  children: ReactNode
}

export async function generateMetadata() {
  const t = await getTranslations("Customer")

  return {
    title: {
      template: `%s | ${t("nav.home")}`,
      default: t("nav.home"),
    },
    description: t("metadata.description"),
  }
}

export default function CustomerLayout({ children }: CustomerLayoutProps) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen w-full bg-background">
        <CustomerSidebar />

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-l bg-background/80 px-4 backdrop-blur-md md:px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-2" />
              <div className="hidden h-4 w-px bg-border md:block" />
              <HeaderBreadcrumb />
            </div>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </header>

          <main id="customer-main-content" className="flex-1">
            <div className="p-4 lg:p-8">
              <Container>
                <div className="mx-auto max-w-6xl">{children}</div>
              </Container>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
