"use client"

import { useTranslations } from "next-intl"
import { Trash2, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function DangerZone() {
  const t = useTranslations("Customer.settings.dangerZone")

  const onDeleteConfirm = () => {
    console.log("Compte supprimé définitivement")
  }

  return (
    <Card className="border-destructive/20 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-2 text-destructive">
          <AlertTriangle className="size-5" />
          <CardTitle>{t("title")}</CardTitle>
        </div>
        <CardDescription className="text-destructive/80">
          {t("description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="gap-2">
              <Trash2 className="size-4" />
              {t("deleteButton")}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t("title")}</AlertDialogTitle>
              <AlertDialogDescription>
                {t("description")}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
              <AlertDialogAction
                onClick={onDeleteConfirm}
                className="text-destructive-foreground bg-destructive hover:bg-destructive/90"
              >
                {t("deleteButton")}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  )
}
