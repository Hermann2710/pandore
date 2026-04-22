import * as z from "zod"

export const productSchema = z.object({
  name: z.string().min(1, "errors.required"),
  description: z.string().min(1, "errors.required"),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "errors.invalid_slug"),
  price: z.coerce.number().min(0, "errors.invalid_price"),
  category: z.string().min(1, "errors.required"),
  quantity: z.coerce.number().min(0),
  images: z
    .array(z.string())
    .min(1, "errors.min_1_image")
    .max(5, "errors.max_5_images"),
  brand: z.string().optional(),
  manufacturer: z.string().optional(),
  createdAt: z.string().optional(),
  expiredAt: z.string().optional(),
})

export type ProductValues = z.infer<typeof productSchema>
