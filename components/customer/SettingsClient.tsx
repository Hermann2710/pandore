"use client"

import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/shared"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Lock, Trash2 } from "lucide-react"
import { ProfileForm } from "./ProfileForm"
import { SecurityForm } from "./SecurityForm"
import { DangerZone } from "./DangerZone"

export function SettingsClient() {
  const t = useTranslations("Customer.settings")

  return (
    <div className="space-y-6">
      <SectionHeading title={t("tabs.profile")} />

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-100">
          <TabsTrigger value="profile" className="gap-2">
            <User className="size-4" />
            <span className="hidden sm:inline">{t("tabs.profile")}</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Lock className="size-4" />
            <span className="hidden sm:inline">{t("tabs.security")}</span>
          </TabsTrigger>
          <TabsTrigger value="danger" className="gap-2 text-destructive">
            <Trash2 className="size-4" />
            <span className="hidden sm:inline">{t("tabs.danger")}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <ProfileForm />
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <SecurityForm />
        </TabsContent>

        <TabsContent value="danger" className="mt-6">
          <DangerZone />
        </TabsContent>
      </Tabs>
    </div>
  )
}
