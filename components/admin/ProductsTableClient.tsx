"use client"

import * as React from "react"
import { useTranslations, useFormatter } from "next-intl"
import { ColumnDef } from "@tanstack/react-table"
import { Plus, Edit, MoreHorizontal, Package } from "lucide-react"
import Link from "next/link"

import { DataTable } from "@/components/admin"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/shared"

type Product = {
  id: string
  name: string
  price: number
  stock: number
  imageUrl?: string
}

export function ProductsTableClient() {
  const t = useTranslations("Admin.products")
  const tc = useTranslations("Common.actions")
  const format = useFormatter()

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: t("table.name"),
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded border bg-slate-50">
            {row.original.imageUrl ? (
              <img
                src={row.original.imageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <Package className="h-5 w-5 text-slate-400" />
            )}
          </div>
          <span className="text-sm font-medium">{row.getValue("name")}</span>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: t("table.price"),
      cell: ({ row }) =>
        format.number(row.getValue("price"), {
          style: "currency",
          currency: "EUR",
        }),
    },
    {
      accessorKey: "stock",
      header: t("table.stock"),
      cell: ({ row }) => {
        const stock = row.getValue("stock") as number
        let variant: "outline" | "destructive" | "secondary" = "outline"
        let statusKey = "in_stock"

        if (stock === 0) {
          variant = "destructive"
          statusKey = "out_of_stock"
        } else if (stock < 10) {
          statusKey = "low_stock"
        }

        return (
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">{stock} units</span>
            <Badge
              variant={variant}
              className="h-4 w-fit px-1 text-[10px] uppercase"
            >
              {t(`stock_status.${statusKey}`)}
            </Badge>
          </div>
        )
      },
    },
    {
      id: "actions",
      header: t("table.actions"),
      cell: ({ row }) => (
        <div className="flex justify-start">
          <Button variant="ghost" size="sm" asChild className="h-8 gap-2">
            <Link href={`/admin/products/${row.original.id}`}>
              <Edit className="h-4 w-4" />
              {tc("edit")}
            </Link>
          </Button>
        </div>
      ),
    },
  ]

  const data: Product[] = [
    { id: "123", name: "iPhone 15", price: 999, stock: 24 },
    { id: "456", name: "MacBook Pro", price: 1999, stock: 5 },
    { id: "789", name: "AirPods Max", price: 549, stock: 0 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <Button
          asChild
          className="shrink-0 gap-2 bg-orange-600 font-bold text-white hover:bg-orange-700! hover:text-white"
        >
          <Link href="/admin/products/add">
            <Plus className="h-4 w-4" />
            {t("add")}
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
