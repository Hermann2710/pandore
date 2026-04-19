"use client"

import { useTranslations } from "next-intl"
import { Trash2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

interface WishlistItemProps {
  name: string
  price: string
  image?: string
}

export function WishlistItem({ name, price, image }: WishlistItemProps) {
  const t = useTranslations("Customer.orders")

  return (
    <Card className="group overflow-hidden border-none shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      <CardContent className="p-3">
        <h3 className="line-clamp-1 text-sm font-medium">{name}</h3>
        <p className="text-base font-bold text-primary">{price} €</p>
      </CardContent>

      <CardFooter className="flex gap-2 p-3 pt-0">
        <Button size="sm" className="flex-1 gap-2 text-xs">
          <ShoppingCart className="size-3" />
          {t("addToCart")}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8 shrink-0 text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
