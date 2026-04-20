"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"
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

  const [filtering, setFiltering] = React.useState("")

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          placeholder={t("search_placeholder")}
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <DataTable columns={columns} data={data} filterValue={filtering} />
    </div>
  )
}
