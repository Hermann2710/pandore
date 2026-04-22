"use client"

import { useTranslations } from "next-intl"
import { Eye, Mail, Phone, MapPin, Package, CreditCard } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface OrderDetailsProps {
  orderId: string
  trigger?: React.ReactNode
}

export function OrderDetailsSheet({ orderId, trigger }: OrderDetailsProps) {
  const t = useTranslations("Admin.orders.details")
  const ts = useTranslations("Admin.orders.statuses")
  const tc = useTranslations("Common.actions")

  const order = {
    id: orderId,
    status: "processing",
    customer: {
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      phone: "+33 6 12 34 56 78",
      address: "12 Rue de la Paix, 75002 Paris",
    },
    items: [
      { id: 1, name: "T-shirt Premium", qty: 2, price: 29.99 },
      { id: 2, name: "Jean Slim Fit", qty: 1, price: 59.99 },
    ],
    financials: {
      subtotal: 119.97,
      shipping: 5.0,
      total: 124.97,
    },
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="sm" className="h-8 px-2 lg:px-3">
            <Eye className="mr-2 h-4 w-4" />
            {useTranslations("Admin.orders.table")("view_details")}
          </Button>
        )}
      </SheetTrigger>

      <SheetContent className="flex flex-col p-0 sm:max-w-xl">
        <SheetHeader className="space-y-4 border-b p-6 pr-12 text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <SheetTitle className="text-2xl font-bold">
                {t("title")}
              </SheetTitle>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="border-blue-200 bg-blue-50 px-3 py-0.5 text-blue-700"
              >
                {ts(order.status)}
              </Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <SheetDescription className="font-mono text-xs tracking-tighter uppercase">
                Ref: {order.id}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="flex-1 space-y-8 overflow-y-auto p-6">
          <section className="grid gap-4">
            <h3 className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              <Mail className="h-4 w-4" /> {t("customer_info")}
            </h3>
            <div className="grid gap-3 rounded-lg border bg-slate-50/50 p-4">
              <p className="text-base font-semibold">{order.customer.name}</p>
              <div className="grid gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> {order.customer.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> {order.customer.phone}
                </div>
                <div className="mt-1 flex items-start gap-2 border-t pt-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{order.customer.address}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              <Package className="h-4 w-4" /> {t("items_list")}
            </h3>
            <div className="overflow-hidden rounded-md border">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="py-3">{t("table.product")}</TableHead>
                    <TableHead className="text-center">
                      {t("table.qty")}
                    </TableHead>
                    <TableHead className="text-right">
                      {t("table.price")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.items.map((item) => (
                    <TableRow key={item.id} className="hover:bg-transparent">
                      <TableCell className="py-4 font-medium">
                        {item.name}
                      </TableCell>
                      <TableCell className="text-center">{item.qty}</TableCell>
                      <TableCell className="text-right font-mono">
                        {item.price.toFixed(2)}€
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          <section className="space-y-4 pb-4">
            <h3 className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              <CreditCard className="h-4 w-4" /> {t("summary")}
            </h3>
            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {t("fields.subtotal")}
                </span>
                <span className="font-mono">
                  {order.financials.subtotal.toFixed(2)}€
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {t("fields.shipping")}
                </span>
                <span className="font-mono">
                  {order.financials.shipping.toFixed(2)}€
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between pt-1">
                <span className="text-base font-bold">{t("fields.total")}</span>
                <span className="font-mono text-xl font-bold text-orange-600">
                  {order.financials.total.toFixed(2)}€
                </span>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-auto border-t bg-slate-50/50 p-6">
          <SheetClose asChild>
            <Button className="w-full" variant="outline">
              {tc("close")}
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
