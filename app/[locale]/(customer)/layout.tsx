import { ReactNode } from "react"
import { getTranslations } from "next-intl/server"
import { Container } from "@/components/shared"
import { CustomerSidebar, CustomerHeader } from "@/components/customer"
import { SidebarProvider } from "@/components/ui/sidebar"

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
          <CustomerHeader />

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
