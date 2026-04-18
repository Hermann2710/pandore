"use client"

import { cn } from "@/lib/utils"

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="auth-wrapper"
      className={cn(
        "relative min-h-screen w-full", // Retrait du flex-center ici
        "bg-background transition-colors duration-500 ease-in-out",
        "selection:bg-primary/10 selection:text-primary"
      )}
    >
      <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/noise.svg')] opacity-[0.03]" />

      <div className="relative z-10 w-full animate-in duration-700 fade-in">
        {children}
      </div>
    </div>
  )
}
