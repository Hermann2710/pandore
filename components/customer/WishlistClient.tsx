"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/shared"
import { WishlistItem } from "@/components/customer"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { HeartOff, Search, ChevronLeft, ChevronRight } from "lucide-react"

export function WishlistClient() {
  const t = useTranslations("Customer")

  const [search, setSearch] = useState("")
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)

  const allItems = [
    {
      id: "1",
      name: "Produit Coup de Coeur",
      price: 29.99,
      image: "/images/product-1.jpg",
    },
    {
      id: "2",
      name: "Clavier Mécanique RGB",
      price: 89.0,
      image: "/images/product-2.jpg",
    },
    {
      id: "3",
      name: "Souris Gaming",
      price: 45.5,
      image: "/images/product-3.jpg",
    },
    {
      id: "4",
      name: "Casque Audio",
      price: 120.0,
      image: "/images/product-4.jpg",
    },
    {
      id: "5",
      name: "Tapis de souris XXL",
      price: 19.99,
      image: "/images/product-5.jpg",
    },
    {
      id: "6",
      name: "Support Casque",
      price: 25.0,
      image: "/images/product-6.jpg",
    },
    {
      id: "7",
      name: "Écran 27 pouces",
      price: 299.0,
      image: "/images/product-7.jpg",
    },
  ]

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-6">
      <SectionHeading title={t("nav.wishlist")} />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("orders.searchPlaceholder")}
            className="pl-9"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
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
            {[4, 8, 12, 16].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {t("orders.perPage", { count: num })}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {paginatedItems.length > 0 ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {paginatedItems.map((item) => (
              <WishlistItem
                key={item.id}
                name={item.name}
                price={item.price.toFixed(2)}
                image={item.image}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                {t("orders.showingOrders", { count: filteredItems.length })}
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
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
          <HeartOff className="mb-4 size-12 text-muted-foreground/50" />
          <p className="text-muted-foreground">
            {search ? t("orders.noOrders") : t("dashboard.sections.noWishlist")}
          </p>
        </div>
      )}
    </div>
  )
}
