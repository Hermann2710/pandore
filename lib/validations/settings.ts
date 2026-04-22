import * as z from "zod"

export const settingsSchema = z.object({
  storeName: z.string().min(2, "errors.min_2").max(50, "errors.max_50"),
  defaultShippingFees: z.coerce
    .number("errors.invalid_number")
    .min(0, "errors.min_0"),
  freeShippingThreshold: z.coerce
    .number("errors.invalid_number")
    .min(0, "errors.min_0"),
})

export type SettingsValues = z.infer<typeof settingsSchema>
