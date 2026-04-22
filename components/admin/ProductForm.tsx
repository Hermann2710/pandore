"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { Save, ImagePlus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { productSchema, type ProductValues } from "@/lib/validations/product"

export function ProductForm({
  initialData,
}: {
  initialData?: Partial<ProductValues>
}) {
  const t = useTranslations("Admin.products")
  const tc = useTranslations("Common.actions")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductValues>({
    resolver: zodResolver(productSchema as any),
    defaultValues: initialData || {
      images: [],
      price: 0,
      quantity: 0,
    },
  })

  const onSubmit = (data: ProductValues) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-8 lg:grid-cols-3"
    >
      <div className="space-y-6 lg:col-span-2">
        <Card p-6>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label>{t("fields.name")}</Label>
              <Input {...register("name")} />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {t(errors.name.message as any)}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>{t("fields.slug")}</Label>
              <Input {...register("slug")} placeholder="iphone-15-pro" />
            </div>

            <div className="space-y-2">
              <Label>{t("fields.description")}</Label>
              <Textarea {...register("description")} className="min-h-37.5" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <Label>{t("fields.images")}</Label>
            <div className="grid grid-cols-5 gap-4">
              <div className="flex aspect-square cursor-pointer items-center justify-center rounded-lg border-2 border-dashed hover:bg-slate-50">
                <ImagePlus className="text-muted-foreground" />
              </div>
            </div>
            {errors.images && (
              <p className="text-xs text-destructive">
                {t(errors.images.message as any)}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label>{t("fields.price")}</Label>
              <Input type="number" step="0.01" {...register("price")} />
            </div>
            <div className="space-y-2">
              <Label>{t("fields.quantity")}</Label>
              <Input type="number" {...register("quantity")} />
            </div>
            <div className="space-y-2">
              <Label>{t("fields.category")}</Label>
              <Input {...register("category")} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label>{t("fields.brand")}</Label>
              <Input {...register("brand")} />
            </div>
            <div className="space-y-2">
              <Label>{t("fields.manufacturer")}</Label>
              <Input {...register("manufacturer")} />
            </div>
          </CardContent>
        </Card>

        <Button
          type="submit"
          className="w-full gap-2 bg-orange-600 text-white hover:bg-orange-700! hover:text-white"
        >
          <Save className="h-4 w-4" />
          {tc("save")}
        </Button>
      </div>
    </form>
  )
}
