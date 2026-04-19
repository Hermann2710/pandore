import * as z from "zod"

export const profileSchema = z.object({
  firstName: z.string().min(2, "errors.minChar"),
  lastName: z.string().min(2, "errors.minChar"),
  email: z.string().email("errors.invalidEmail"),
  phoneNumber: z.string().min(10, "errors.invalidPhone"),
})

export const securitySchema = z
  .object({
    currentPassword: z.string().min(8, "errors.passwordLength"),
    newPassword: z.string().min(8, "errors.passwordLength"),
    confirmPassword: z.string().min(8, "errors.passwordLength"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "errors.passwordMatch",
    path: ["confirmPassword"],
  })
