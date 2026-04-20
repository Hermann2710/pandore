import { ReactNode } from "react"
import { getTranslations } from "next-intl/server"
import { Container } from "@/components/shared"
import { AdminSidebar, AdminHeader } from "@/components/admin"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

interface AdminLayoutProps {
  children: ReactNode
}

export async function generateMetadata() {
  const t = await getTranslations("Admin")

  return {
    title: {
      template: `%s | ${t("nav.dashboard")}`,
      default: t("nav.dashboard"),
    },
    description: t("metadata.description"),
  }
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen w-full bg-muted/40">
        <AdminSidebar />

        <SidebarInset className="flex flex-1 flex-col">
          <AdminHeader />

          <main id="admin-main-content" className="flex-1">
            <div className="p-4 lg:p-8">
              <Container>
                <div className="mx-auto max-w-6xl">{children}</div>
              </Container>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
