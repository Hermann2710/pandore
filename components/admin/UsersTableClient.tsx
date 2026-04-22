"use client"

import { useTranslations } from "next-intl"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable, UserActions } from "@/components/admin"
import { SectionHeading } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  avatarUrl?: string
  role: "admin" | "delivery" | "customer"
  status: "active" | "disabled"
}

export function UsersTableClient() {
  const t = useTranslations("Admin.users")

  const columns: ColumnDef<User>[] = [
    {
      id: "user",
      header: t("table.user"),
      cell: ({ row }) => {
        const user = row.original
        const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
        return (
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border">
              <AvatarImage src={user.avatarUrl} alt={user.firstName} />
              <AvatarFallback className="bg-slate-100 text-[10px] font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm leading-none font-semibold">
                {user.firstName} {user.lastName}
              </span>
              <span className="mt-1 font-mono text-[10px] text-muted-foreground">
                {user.id}
              </span>
            </div>
          </div>
        )
      },
    },
    {
      id: "contact",
      header: t("table.contact"),
      cell: ({ row }) => (
        <div className="flex flex-col gap-0.5">
          <span className="text-sm">{row.original.email}</span>
          <span className="text-xs text-muted-foreground">
            {row.original.phoneNumber}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "role",
      header: t("table.role"),
      cell: ({ row }) => {
        const role = row.getValue("role") as string
        return (
          <Badge variant="secondary" className="font-medium">
            {t(`roles.${role}`)}
          </Badge>
        )
      },
    },
    {
      accessorKey: "status",
      header: t("table.status"),
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <Badge
            variant="outline"
            className={
              status === "active"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "bg-slate-50 text-slate-500"
            }
          >
            {t(`edit.${status}`)}
          </Badge>
        )
      },
    },
    {
      id: "actions",
      header: () => <div className="text-right">{t("table.actions")}</div>,
      cell: ({ row }) => <UserActions user={row.original} />,
    },
  ]

  const data: User[] = [
    {
      id: "USR-7721",
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@email.com",
      phoneNumber: "+33 6 12 34 56 78",
      avatarUrl: "https://github.com/shadcn.png",
      role: "delivery",
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
