"use client"

import { useTranslations } from "next-intl"
import { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"

import { DataTable } from "@/components/admin"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared"
import { OrderDetailsSheet } from "./OrderSheetDetail"

type Order = {
  id: string
  customer: string
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
}

export function OrdersTableClient() {
  const t = useTranslations("Admin.orders")

  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "id",
      header: t("table.id"),
      cell: ({ row }) => (
        <span className="font-mono font-medium">{row.getValue("id")}</span>
      ),
    },
    {
      accessorKey: "customer",
      header: t("table.customer"),
    },
    {
      accessorKey: "total",
      header: t("table.total"),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("total"))
        return <span>{amount.toFixed(2)} €</span>
      },
    },
    {
      accessorKey: "status",
      header: t("table.status"),
      cell: ({ row }) => {
        const status = row.getValue("status") as Order["status"]
        const colors = {
          pending: "border-slate-200 bg-slate-50 text-slate-700",
          processing: "border-blue-200 bg-blue-50 text-blue-700",
          shipped: "border-purple-200 bg-purple-50 text-purple-700",
          delivered: "border-emerald-200 bg-emerald-50 text-emerald-700",
          cancelled: "border-rose-200 bg-rose-50 text-rose-700",
        }
        return (
          <Badge variant="outline" className={colors[status]}>
            {t(`statuses.${status}`)}
          </Badge>
        )
      },
    },
    {
      id: "actions",
      header: t("table.actions"),
      cell: ({ row }) => (
        <div>
          <OrderDetailsSheet orderId={row.getValue("id")} />
        </div>
      ),
    },
  ]

  const data: Order[] = [
    {
      id: "#ORD-5542",
      customer: "Jean Dupont",
      total: 89.99,
      status: "processing",
    },
    {
      id: "#ORD-5543",
      customer: "Marie Curie",
      total: 150.0,
      status: "delivered",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
