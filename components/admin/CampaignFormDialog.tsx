"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { campaignSchema, CampaignFormValues } from "@/lib/validations/campaign"

interface CampaignFormDialogProps {
  initialData?: CampaignFormValues & { id: string }
  trigger?: React.ReactNode
}

export function CampaignFormDialog({
  initialData,
  trigger,
}: CampaignFormDialogProps) {
  const t = useTranslations("Admin.marketing.campaigns.form")
  const isEditing = !!initialData

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignSchema as any),
    defaultValues: initialData || {
      name: "",
      imageUrl: "",
      isActive: true,
      endDate: "",
    },
  })

  const isActive = watch("isActive")

  const onSubmit = async (data: CampaignFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (!isEditing) reset()
  }

  return (
    <Dialog onOpenChange={(open) => !open && !isEditing && reset()}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            size="sm"
            className="bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            {useTranslations("Admin.marketing.campaigns")("add_banner")}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? t("title_edit") : t("title_add")}
          </DialogTitle>
          <DialogDescription>{t("description_text")}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("name_label")}</Label>
            <Input
              id="name"
              placeholder={t("name_placeholder")}
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-xs text-destructive">
                {t(`errors.${errors.name.message}`)}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageUrl">{t("image_label")}</Label>
            <Input
              id="imageUrl"
              placeholder={t("image_placeholder")}
              {...register("imageUrl")}
              className={errors.imageUrl ? "border-destructive" : ""}
            />
            {errors.imageUrl && (
              <p className="text-xs text-destructive">
                {t(`errors.${errors.imageUrl.message}`)}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">{t("expiry_label")}</Label>
            <Input
              id="endDate"
              type="date"
              {...register("endDate")}
              className={errors.endDate ? "border-destructive" : ""}
            />
            {errors.endDate && (
              <p className="text-xs text-destructive">
                {t(`errors.${errors.endDate.message}`)}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <Label htmlFor="isActive" className="cursor-pointer">
              {t("active_label")}
            </Label>
            <Switch
              id="isActive"
              checked={isActive}
              onCheckedChange={(checked) => setValue("isActive", checked)}
              className="data-[state=checked]:bg-orange-600"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? t("submit_edit") : t("submit_add")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
