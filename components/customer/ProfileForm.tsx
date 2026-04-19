"use client"

import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { profileSchema } from "@/lib/validations/profile"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"

export function ProfileForm() {
  const t = useTranslations("Customer.settings")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema as any),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phoneNumber: "+33 6 00 00 00 00",
    },
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle>{t("profile.title")}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6 pb-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="group relative">
              <Avatar className="size-24 border-2 border-muted transition-opacity group-hover:opacity-80">
                <AvatarImage src="/avatar-placeholder.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <label className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <Camera className="size-6 text-white" />
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium">{t("profile.avatar")}</p>
              <p className="text-xs text-muted-foreground">
                {t("profile.imageConstraints")}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">{t("profile.firstName")}</Label>
                <Input id="firstName" {...register("firstName")} />
                {errors.firstName && (
                  <p className="text-xs text-destructive">
                    {t(`${errors.firstName.message}`)}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">{t("profile.lastName")}</Label>
                <Input id="lastName" {...register("lastName")} />
                {errors.lastName && (
                  <p className="text-xs text-destructive">
                    {t(`${errors.lastName.message}`)}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">{t("profile.email")}</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && (
                  <p className="text-xs text-destructive">
                    {t(`${errors.email.message}`)}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">{t("profile.phoneNumber")}</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-destructive">
                    {t(`${errors.phoneNumber.message}`)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t">
          <Button type="submit">{t("profile.save")}</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
