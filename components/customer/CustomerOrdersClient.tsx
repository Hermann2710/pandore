"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/shared"
import { OrderHistoryCard } from "@/components/customer"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

export function CustomerOrdersClient() {
  const t = useTranslations("Customer")

  const [searchId, setSearchId] = useState("")
  const [sortOrder, setSortOrder] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const allOrders = [
    {
      id: "1234",
      date: "2026-04-15",
      total: 45.0,
      status: t("dashboard.stats.deliveryFinished"),
    },
    {
      id: "5678",
      date: "2026-04-18",
      total: 120.5,
      status: t("dashboard.stats.deliveryFinished"),
    },
    {
      id: "9101",
      date: "2026-03-10",
      total: 15.0,
      status: t("dashboard.stats.deliveryFinished"),
    },
    {
      id: "1121",
      date: "2026-04-19",
      total: 89.99,
      status: t("dashboard.stats.deliveryFinished"),
    },
    {
      id: "3344",
      date: "2026-04-01",
      total: 210.0,
      status: t("dashboard.stats.deliveryFinished"),
    },
    {
      id: "5566",
      date: "2026-02-15",
      total: 35.5,
      status: t("dashboard.stats.deliveryFinished"),
    },
  ]

  const filteredOrders = allOrders.filter((order) =>
    order.id.toLowerCase().includes(searchId.toLowerCase())
  )

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    switch (sortOrder) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case "price-asc":
        return a.total - b.total
      case "price-desc":
        return b.total - a.total
      default:
        return 0
    }
  })

  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage)
  const paginatedOrders = sortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-6">
      <SectionHeading title={t("nav.orders")} />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={t("orders.searchPlaceholder")}
              className="pl-9"
              value={searchId}
              onChange={(e) => {
                setSearchId(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>

          <Select
            value={itemsPerPage.toString()}
            onValueChange={(val) => {
              setItemsPerPage(Number(val))
              setCurrentPage(1)
            }}
          >
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 15, 20].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {t("orders.perPage", { count: num })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Select value={sortOrder} onValueChange={(val) => setSortOrder(val)}>
          <SelectTrigger className="w-full lg:w-50">
            <SelectValue placeholder={t("orders.sortBy")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">{t("orders.sort.newest")}</SelectItem>
            <SelectItem value="oldest">{t("orders.sort.oldest")}</SelectItem>
            <SelectItem value="price-asc">
              {t("orders.sort.priceAsc")}
            </SelectItem>
            <SelectItem value="price-desc">
              {t("orders.sort.priceDesc")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {paginatedOrders.length > 0 ? (
          paginatedOrders.map((order) => (
            <OrderHistoryCard
              key={order.id}
              id={order.id}
              date={new Date(order.date).toLocaleDateString()}
              total={order.total.toFixed(2)}
              status={order.status}
            />
          ))
        ) : (
          <div className="rounded-xl border border-dashed py-20 text-center text-muted-foreground">
            {t("orders.noOrders")}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {t("orders.showingOrders", { count: sortedOrders.length })}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="mr-2 size-4" />
              {t("orders.previous")}
            </Button>
            <span className="px-2 text-sm font-medium">
              {currentPage} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >
              {t("orders.next")}
              <ChevronRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
