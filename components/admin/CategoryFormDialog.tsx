"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, Edit } from "lucide-react"
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
import { Textarea } from "@/components/ui/textarea"
import { categorySchema, CategoryFormValues } from "@/lib/validations/category"

interface CategoryFormDialogProps {
  initialData?: CategoryFormValues & { id: string }
  trigger?: React.ReactNode
}

export function CategoryFormDialog({
  initialData,
  trigger,
}: CategoryFormDialogProps) {
  const t = useTranslations("Admin.categories.form")
  const isEditing = !!initialData

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema as any),
    defaultValues: initialData || {
      name: "",
      slug: "",
      description: "",
    },
  })

  const onSubmit = async (data: CategoryFormValues) => {
    console.log(isEditing ? "Update ID:" : "Create:", initialData?.id, data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (!isEditing) reset()
  }

  return (
    <Dialog onOpenChange={(open) => !open && !isEditing && reset()}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="mr-2 h-4 w-4" />
            {useTranslations("Admin.categories")("add_button")}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? t("edit_title") : t("add_title")}
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
              <p className="text-sm text-destructive">
                {t(`errors.${errors.name.message}`)}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">{t("slug_label")}</Label>
            <Input
              id="slug"
              placeholder={t("slug_placeholder")}
              {...register("slug")}
              className={errors.slug ? "border-destructive" : ""}
            />
            {errors.slug && (
              <p className="text-sm text-destructive">
                {t(`errors.${errors.slug.message}`)}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">{t("desc_label")}</Label>
            <Textarea
              id="description"
              placeholder={t("desc_placeholder")}
              {...register("description")}
              className={errors.description ? "border-destructive" : ""}
            />
            {errors.description && (
              <p className="text-sm text-destructive">
                {t(`errors.${errors.description.message}`)}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "..."
              : isEditing
                ? t("submit_edit")
                : t("submit_add")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
