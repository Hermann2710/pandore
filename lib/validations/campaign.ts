import * as z from "zod"

export const campaignSchema = z.object({
  name: z.string().min(1, "name_required"),
  imageUrl: z.string().url("url_invalid"),
  isActive: z.boolean().default(true),
  endDate: z.string().min(1, "date_invalid"),
})

export type CampaignFormValues = z.infer<typeof campaignSchema>
