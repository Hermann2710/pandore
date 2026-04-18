"use client"

import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginInput } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CredentialFields } from "./CredentialFields"
import { Loader2 } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

export const LoginForm = () => {
  const t = useTranslations("Auth")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema as any),
  })

  const onSubmit = async (data: LoginInput) => {
    // Logique de connexion ici
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 py-2">
      <CredentialFields className="grid gap-6">
        <div className="grid gap-3">
          <Label
            htmlFor="email"
            className="ml-1 text-sm font-semibold tracking-wide text-foreground/90"
          >
            {t("emailLabel")}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            {...register("email")}
            className={cn(
              "h-12 bg-background/50 px-4 transition-all duration-200 focus:bg-background",
              errors.email
                ? "border-destructive shadow-[0_0_0_1px_rgba(239,68,68,0.1)] focus-visible:ring-destructive"
                : "border-border focus-visible:ring-primary/20"
            )}
          />
          {errors.email && (
            <span className="ml-1 animate-in text-xs font-medium text-destructive fade-in slide-in-from-left-2">
              {t(errors.email.message as string)}
            </span>
          )}
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between px-1">
            <Label
              htmlFor="password"
              className="text-sm font-semibold tracking-wide text-foreground/90"
            >
              {t("passwordLabel")}
            </Label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
            >
              {t("forgotPasswordLink")}
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
            className={cn(
              "h-12 bg-background/50 px-4 transition-all duration-200 focus:bg-background",
              errors.password
                ? "border-destructive shadow-[0_0_0_1px_rgba(239,68,68,0.1)] focus-visible:ring-destructive"
                : "border-border focus-visible:ring-primary/20"
            )}
          />
          {errors.password && (
            <span className="ml-1 animate-in text-xs font-medium text-destructive fade-in slide-in-from-left-2">
              {t(errors.password.message as string)}
            </span>
          )}
        </div>
      </CredentialFields>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "h-12 w-full text-base font-bold shadow-lg transition-all",
          "hover:shadow-primary/20 active:scale-[0.98] disabled:opacity-70",
          "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        {isSubmitting ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : null}
        {t("loginButton")}
      </Button>
    </form>
  )
}
