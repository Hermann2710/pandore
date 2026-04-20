import * as z from "zod"

export const categorySchema = z.object({
  name: z.string().min(2, "name_required"),
  slug: z.string().min(2, "slug_required"),
  description: z.string().min(5, "desc_too_short").optional().or(z.literal("")),
})

export type CategoryFormValues = z.infer<typeof categorySchema>
