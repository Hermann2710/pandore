"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { Store, Truck, Gift, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/shared"
import { settingsSchema, SettingsValues } from "@/lib/validations/settings"

export function SettingsForm() {
  const t = useTranslations("Admin.settings")
  const tc = useTranslations("Common.actions")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SettingsValues>({
    resolver: zodResolver(settingsSchema as any),
    defaultValues: {
      storeName: "Ma Super Boutique",
      defaultShippingFees: 5.99,
      freeShippingThreshold: 50,
    },
  })

  const onSubmit = (data: SettingsValues) => {
    console.log(data)
  }

  return (
    <div className="space-y-6">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Card className="shadow-sm">
          <CardHeader className="border-b bg-slate-50/50 dark:bg-card">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Store className="h-5 w-5 text-blue-600" />
              {t("fields.store_name")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-2">
              <Label htmlFor="storeName">{t("fields.store_name")}</Label>
              <Input
                id="storeName"
                {...register("storeName")}
                className={errors.storeName ? "border-destructive" : ""}
              />
              {errors.storeName && (
                <p className="text-xs font-medium text-destructive">
                  {t(errors.storeName.message as string)}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-sm">
            <CardHeader className="border-b bg-slate-50/50 dark:bg-card">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Truck className="h-4 w-4 text-blue-600" />
                {t("fields.shipping_fees")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                <Label htmlFor="defaultShippingFees">
                  {t("fields.shipping_fees")}
                </Label>
                <div className="relative">
                  <span className="absolute top-1.5 left-3 text-sm text-muted-foreground">
                    €
                  </span>
                  <Input
                    id="defaultShippingFees"
                    type="number"
                    step="0.01"
                    className={`pl-7 ${errors.defaultShippingFees ? "border-destructive" : ""}`}
                    {...register("defaultShippingFees")}
                  />
                </div>
                {errors.defaultShippingFees && (
                  <p className="text-xs font-medium text-destructive">
                    {t(errors.defaultShippingFees.message as string)}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="border-b bg-slate-50/50 dark:bg-card">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Gift className="h-4 w-4 text-blue-600" />
                {t("fields.free_shipping_threshold")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                <Label htmlFor="freeShippingThreshold">
                  {t("fields.free_shipping_threshold")}
                </Label>
                <div className="relative">
                  <span className="absolute top-1.5 left-3 text-sm text-muted-foreground">
                    €
                  </span>
                  <Input
                    id="freeShippingThreshold"
                    type="number"
                    step="0.01"
                    className={`pl-7 ${errors.freeShippingThreshold ? "border-destructive" : ""}`}
                    {...register("freeShippingThreshold")}
                  />
                </div>
                {errors.freeShippingThreshold && (
                  <p className="text-xs font-medium text-destructive">
                    {t(errors.freeShippingThreshold.message as string)}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="gap-2 bg-orange-600 px-10 font-bold text-white hover:bg-orange-700 hover:text-white"
          >
            <Save className="h-4 w-4" />
            {tc("save")}
          </Button>
        </div>
      </form>
    </div>
  )
}
