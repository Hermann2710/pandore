import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { routing } from "@/i18n/routing"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
