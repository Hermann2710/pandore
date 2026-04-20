import * as z from "zod"

export const promoSchema = z.object({
  code: z.string().min(1, "code_required").toUpperCase(),
  discount: z.coerce.number().min(1, "discount_min").max(100, "discount_max"),
})

export type PromoFormValues = z.infer<typeof promoSchema>
