"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { Tag, Megaphone, Loader2, Edit2, Trash2 } from "lucide-react"

import { SectionHeading } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { promoSchema, PromoFormValues } from "@/lib/validations/marketing"
import { CampaignFormDialog } from "./CampaignFormDialog"

export function MarketingClient() {
  const t = useTranslations("Admin.marketing")
  const tc = useTranslations("Admin.marketing.campaigns")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PromoFormValues>({
    resolver: zodResolver(promoSchema as any),
    defaultValues: { code: "", discount: 0 },
  })

  const onSubmit = async (data: PromoFormValues) => {
    console.log("Promo Data:", data)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    reset()
  }

  const campaignsData = [
    {
      id: "1",
      name: "Bannière d'été",
      imageUrl: "https://example.com/summer.jpg",
      isActive: true,
      endDate: "2024-08-30",
    },
  ]

  return (
    <div className="space-y-8">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <Tag className="size-5" />
              {t("create_coupon.title")}
            </CardTitle>
            <CardDescription>{t("create_coupon.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    placeholder={t("create_coupon.code_placeholder")}
                    {...register("code")}
                    className={errors.code ? "border-destructive" : ""}
                  />
                  {errors.code && (
                    <p className="text-xs text-destructive">
                      {t(`create_coupon.errors.${errors.code.message}`)}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    type="number"
                    placeholder={t("create_coupon.discount_placeholder")}
                    {...register("discount")}
                    className={errors.discount ? "border-destructive" : ""}
                  />
                  {errors.discount && (
                    <p className="text-xs text-destructive">
                      {t(`create_coupon.errors.${errors.discount.message}`)}
                    </p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {t("create_coupon.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <Megaphone className="size-5" />
              {tc("title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 transition-colors hover:bg-slate-50/50">
              <div>
                <p className="font-medium">{tc("banner_summer")}</p>
                <p className="text-sm text-muted-foreground">
                  {tc("expires_in", { days: 12 })}
                </p>
              </div>
              <Badge
                variant="outline"
                className="border-emerald-200 bg-emerald-50 text-emerald-700"
              >
                {tc("status_active")}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>{tc("banners_title")}</CardTitle>
            <CardDescription>{tc("banners_description")}</CardDescription>
          </div>
          <CampaignFormDialog />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{tc("table.name")}</TableHead>
                <TableHead>{tc("table.status")}</TableHead>
                <TableHead>{tc("table.expiry")}</TableHead>
                <TableHead className="text-right">
                  {tc("table.actions")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaignsData.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        campaign.isActive
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : ""
                      }
                    >
                      {campaign.isActive ? tc("status_active") : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>{campaign.endDate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <CampaignFormDialog
                        initialData={campaign}
                        trigger={
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-blue-600"
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        }
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
