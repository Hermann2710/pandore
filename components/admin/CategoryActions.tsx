"use client"

import { MoreHorizontal, Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import { CategoryFormDialog } from "./CategoryFormDialog"

interface CategoryActionsProps {
  category: any
  t: any
}

export function CategoryActions({ category, t }: CategoryActionsProps) {
  const handleDelete = () => {
    console.log("Suppression de la catégorie :", category.id)
  }

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{t("columns.actions")}</DropdownMenuLabel>

          <CategoryFormDialog
            initialData={category}
            trigger={
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className="cursor-pointer"
              >
                <Edit className="mr-2 h-4 w-4" />
                {t("actions.edit")}
              </DropdownMenuItem>
            }
          />

          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive">
              <Trash className="mr-2 h-4 w-4" />
              {t("actions.delete")}
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("delete_dialog.title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("delete_dialog.description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("delete_dialog.cancel")}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="text-destructive-foreground bg-destructive hover:bg-destructive/90"
          >
            {t("delete_dialog.confirm")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
