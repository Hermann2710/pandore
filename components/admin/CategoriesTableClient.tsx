"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { DataTable } from "./DataTable"
import { ColumnDef } from "@tanstack/react-table"
import { CategoryActions } from "./CategoryActions"

export function CategoriesTableClient({ data }: { data: any[] }) {
  const t = useTranslations("Admin.categories")

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: t("columns.name"),
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "slug",
      header: t("columns.slug"),
      cell: ({ row }) => (
        <code className="rounded bg-muted px-1 text-xs">
          {row.getValue("slug")}
        </code>
      ),
    },
    {
      accessorKey: "products",
      header: t("columns.products"),
    },
    {
      id: "actions",
      cell: ({ row }) => <CategoryActions category={row.original} t={t} />,
    },
  ]

  return <DataTable columns={columns} data={data} />
}
