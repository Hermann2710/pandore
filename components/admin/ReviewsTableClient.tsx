"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { ColumnDef } from "@tanstack/react-table"
import { Check, X, Star, Trash2 } from "lucide-react"

import { DataTable } from "@/components/admin"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Review = {
  id: string
  product: string
  rating: number
  comment: string
  status: "pending" | "approved" | "rejected"
}

export function ReviewsTableClient() {
  const t = useTranslations("Admin.reviews")

  const columns: ColumnDef<Review>[] = [
    {
      accessorKey: "product",
      header: t("table.product"),
      cell: ({ row }) => (
        <span className="font-medium">{row.getValue("product")}</span>
      ),
    },
    {
      accessorKey: "rating",
      header: t("table.rating"),
      cell: ({ row }) => {
        const rating = row.getValue("rating") as number
        return (
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
              />
            ))}
          </div>
        )
      },
    },
    {
      accessorKey: "comment",
      header: t("table.comment"),
      cell: ({ row }) => (
        <p className="max-w-75 truncate text-sm text-muted-foreground italic">
          "{row.getValue("comment")}"
        </p>
      ),
    },
    {
      accessorKey: "status",
      header: t("table.status"),
      cell: ({ row }) => {
        const status = row.getValue("status") as Review["status"]
        const styles = {
          pending: "bg-amber-50 text-amber-700 border-amber-200",
          approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
          rejected: "bg-rose-50 text-rose-700 border-rose-200",
        }
        return (
          <Badge variant="outline" className={styles[status]}>
            {t(`status.${status}`)}
          </Badge>
        )
      },
    },
    {
      id: "actions",
      header: t("table.actions"),
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 text-emerald-600 hover:bg-emerald-50"
                >
                  <Check className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t("actions.approve")}</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 text-rose-600 hover:bg-rose-50"
                >
                  <X className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t("actions.reject")}</TooltipContent>
            </Tooltip>

            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </TooltipProvider>
        </div>
      ),
    },
  ]

  const data: Review[] = [
    {
      id: "rev-1",
      product: "Produit X",
      rating: 4,
      comment:
        "Super qualité, je recommande vivement ce produit pour son design !",
      status: "pending",
    },
    {
      id: "rev-2",
      product: "Smartphone Y",
      rating: 5,
      comment: "Incroyable autonomie.",
      status: "approved",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
