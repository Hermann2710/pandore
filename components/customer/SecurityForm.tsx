"use client"

import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { securitySchema } from "@/lib/validations/profile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"

export function SecurityForm() {
  const t = useTranslations("Customer.settings")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(securitySchema as any),
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle>{t("security.title")}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4 pb-4">
          <div className="grid gap-2">
            <Label htmlFor="current">{t("security.currentPassword")}</Label>
            <Input
              id="current"
              type="password"
              {...register("currentPassword")}
            />
            {errors.currentPassword && (
              <p className="text-xs text-destructive">
                {t(`${errors.currentPassword.message}`)}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new">{t("security.newPassword")}</Label>
            <Input id="new" type="password" {...register("newPassword")} />
            {errors.newPassword && (
              <p className="text-xs text-destructive">
                {t(`${errors.newPassword.message}`)}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm">{t("security.confirmPassword")}</Label>
            <Input
              id="confirm"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {t(`${errors.confirmPassword.message}`)}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" variant="secondary">
            {t("security.update")}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
