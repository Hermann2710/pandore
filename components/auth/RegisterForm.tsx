"use client"

import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, type RegisterInput } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CredentialFields } from "./CredentialFields"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export const RegisterForm = () => {
  const t = useTranslations("Auth")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema as any),
  })

  const onSubmit = async (data: RegisterInput) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 py-2">
      <CredentialFields className="grid gap-6">
        {/* Prénom & Nom sur la même ligne */}
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <Label htmlFor="firstName" className="ml-1 text-sm font-semibold">
              {t("firstNameLabel")}
            </Label>
            <Input
              id="firstName"
              placeholder="John"
              {...register("firstName")}
              className={cn(
                "h-12 bg-background/50",
                errors.firstName && "border-destructive"
              )}
            />
            {errors.firstName && (
              <span className="ml-1 text-xs text-destructive">
                {t(errors.firstName.message as string)}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="lastName" className="ml-1 text-sm font-semibold">
              {t("lastNameLabel")}
            </Label>
            <Input
              id="lastName"
              placeholder="Doe"
              {...register("lastName")}
              className={cn(
                "h-12 bg-background/50",
                errors.lastName && "border-destructive"
              )}
            />
            {errors.lastName && (
              <span className="ml-1 text-xs text-destructive">
                {t(errors.lastName.message as string)}
              </span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="grid gap-3">
          <Label htmlFor="email" className="ml-1 text-sm font-semibold">
            {t("emailLabel")}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={cn(
              "h-12 bg-background/50",
              errors.email && "border-destructive"
            )}
          />
          {errors.email && (
            <span className="ml-1 text-xs text-destructive">
              {t(errors.email.message as string)}
            </span>
          )}
        </div>

        {/* Mot de passe */}
        <div className="grid gap-3">
          <Label htmlFor="password" className="ml-1 text-sm font-semibold">
            {t("passwordLabel")}
          </Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            className={cn(
              "h-12 bg-background/50",
              errors.password && "border-destructive"
            )}
          />
          {errors.password && (
            <span className="ml-1 text-xs text-destructive">
              {t(errors.password.message as string)}
            </span>
          )}
        </div>

        {/* Confirmation Mot de passe */}
        <div className="grid gap-3">
          <Label
            htmlFor="confirmPassword"
            className="ml-1 text-sm font-semibold"
          >
            {t("confirmPasswordLabel")}
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className={cn(
              "h-12 bg-background/50",
              errors.confirmPassword && "border-destructive"
            )}
          />
          {errors.confirmPassword && (
            <span className="ml-1 text-xs text-destructive">
              {t(errors.confirmPassword.message as string)}
            </span>
          )}
        </div>
      </CredentialFields>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full text-base font-bold shadow-lg transition-all active:scale-[0.98]"
      >
        {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        {t("registerButton")}
      </Button>
    </form>
  )
}
