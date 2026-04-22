import { UserCog } from "lucide-react"
import React from "react"
import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Select,
} from "../ui/select"
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Sheet,
} from "../ui/sheet"
import { Separator } from "../ui/separator"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { useTranslations } from "next-intl"

export default function UpdateUserDialog({ user }: { user: any }) {
  const t = useTranslations("Admin.users")
  const tc = useTranslations("Common.actions")
  const roles = ["admin", "delivery", "customer"] as const
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-2">
          <UserCog className="h-4 w-4" />
          {t("edit.title")}
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col p-0 sm:max-w-md">
        <SheetHeader className="shrink-0 border-b p-6 text-left">
          <SheetTitle className="text-xl">{t("edit.title")}</SheetTitle>
          <SheetDescription className="text-sm">{user.email}</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6 p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20 border shadow-sm">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback className="bg-slate-100 text-xl font-bold">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-lg leading-none font-semibold">
                  {user.firstName} {user.lastName}
                </h4>
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  ID: {user.id}
                </p>
              </div>
            </div>

            <Separator />

            <div className="grid gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    {t("edit.first_name")}
                  </Label>
                  <Input defaultValue={user.firstName} />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    {t("edit.last_name")}
                  </Label>
                  <Input defaultValue={user.lastName} />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">{t("edit.phone")}</Label>
                <Input defaultValue={user.phoneNumber} />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  {t("edit.role_label")}
                </Label>
                <Select defaultValue={user.role}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {t(`roles.${role}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between rounded-xl border bg-slate-50/30 p-4 shadow-sm">
                <div className="space-y-0.5">
                  <Label className="text-sm font-semibold">
                    {t("edit.status_label")}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    {user.status === "active"
                      ? t("edit.active")
                      : t("edit.disabled")}
                  </p>
                </div>
                <Switch
                  id="isActive"
                  defaultChecked
                  className="data-[state=checked]:bg-orange-600"
                />
              </div>
            </div>
          </div>
        </div>

        <SheetFooter className="shrink-0 border-t p-6">
          <Button className="h-11 w-full bg-orange-600 text-base font-semibold text-white hover:bg-orange-700 hover:text-white">
            {tc("save")}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
