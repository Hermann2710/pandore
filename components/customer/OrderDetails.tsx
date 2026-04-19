"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CreditCard, MapPin, Calendar, Package } from "lucide-react"

interface OrderDetailsProps {
  id: string
}

export function OrderDetails({ id }: OrderDetailsProps) {
  const t = useTranslations("Customer.orders")
  const tDash = useTranslations("Customer.dashboard")

  const orderData = {
    date: "2026-04-18",
    status: tDash("stats.activeOrders", { count: 1 }),
    address: "123 Rue de la République, Paris",
    paymentMethod: "Carte Bancaire",
    total: 45.0,
    items: [
      { name: "Produit A", quantity: 1, price: 25.0 },
      { name: "Produit B", quantity: 2, price: 10.0 },
    ],
  }

  return (
    <div className="grid gap-6">
      <Card className="border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="grid gap-1">
            <CardTitle className="text-xl">
              {t("details")} #{id}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="size-4" />
              {new Date(orderData.date).toLocaleDateString()}
            </div>
          </div>
          <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
            {orderData.status}
          </Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("table.product")}</TableHead>
                <TableHead className="text-center">
                  {t("table.quantity")}
                </TableHead>
                <TableHead className="text-right">{t("table.price")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderData.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    {item.price.toFixed(2)} €
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={2} className="pt-6 text-right font-bold">
                  {t("totalLabel")}
                </TableCell>
                <TableCell className="pt-6 text-right text-lg font-bold">
                  {orderData.total.toFixed(2)} €
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
            <MapPin className="size-5 text-primary" />
            <CardTitle className="text-base">{t("shipping")}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Separator />
            <div className="pt-2">
              <p className="text-sm font-medium">{t("address")}</p>
              <p className="text-sm text-muted-foreground">
                {orderData.address}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
            <CreditCard className="size-5 text-primary" />
            <CardTitle className="text-base">{t("billing")}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Separator />
            <div className="pt-2">
              <p className="text-sm font-medium">{orderData.paymentMethod}</p>
              <p className="text-sm text-muted-foreground">
                {t("paymentConfirmed")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
