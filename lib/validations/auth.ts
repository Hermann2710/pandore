import * as z from "zod"

export const loginSchema = z.object({
  email: z.email({ message: "emailInvalid" }),
  password: z.string().min(8, { message: "passwordTooShort" }),
})

export type LoginInput = z.infer<typeof loginSchema>

export const registerSchema = z
  .object({
    firstName: z.string().min(2, { message: "firstNameTooShort" }),
    lastName: z.string().min(2, { message: "lastNameTooShort" }),
    email: z.email({ message: "emailInvalid" }),
    password: z.string().min(8, { message: "passwordTooShort" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsDontMatch",
    path: ["confirmPassword"],
  })

export type RegisterInput = z.infer<typeof registerSchema>

export const forgotPasswordSchema = z.object({
  email: z.email({ message: "emailInvalid" }),
})

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>
