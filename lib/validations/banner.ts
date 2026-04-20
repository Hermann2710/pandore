import * as z from "zod"

export const bannerSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  imageUrl: z.url("URL invalide"),
  isActive: z.boolean().default(true),
  endDate: z.string().optional(),
})

export type BannerFormValues = z.infer<typeof bannerSchema>
