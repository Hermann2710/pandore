"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CredentialFields } from "./CredentialFields"
import { Loader2, MailCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export const ForgotPasswordForm = () => {
  const t = useTranslations("Auth")
  const [isSent, setIsSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema as any),
  })

  const onSubmit = async (data: ForgotPasswordInput) => {
    // Simulation d'envoi d'email
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(data)
    setIsSent(true)
  }

  if (isSent) {
    return (
      <div className="flex animate-in flex-col items-center justify-center space-y-4 py-6 text-center duration-500 fade-in zoom-in">
        <div className="rounded-full bg-primary/10 p-4">
          <MailCheck className="h-10 w-10 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{t("checkEmailTitle")}</h3>
          <p className="px-6 text-sm text-muted-foreground">
            {t("checkEmailDescription")}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSent(false)}
          className="mt-4"
        >
          {t("retryButton")}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 py-2">
      <CredentialFields>
        <div className="grid gap-3">
          <Label htmlFor="email" className="ml-1 text-sm font-semibold">
            {t("emailLabel")}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register("email")}
            className={cn(
              "h-12 bg-background/50",
              errors.email && "border-destructive"
            )}
          />
          {errors.email && (
            <span className="ml-1 animate-in text-xs text-destructive fade-in slide-in-from-left-2">
              {t(errors.email.message as string)}
            </span>
          )}
        </div>
      </CredentialFields>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full text-base font-bold shadow-lg active:scale-[0.98]"
      >
        {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        {t("sendResetLink")}
      </Button>
    </form>
  )
}
