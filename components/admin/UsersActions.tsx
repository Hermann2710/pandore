"use client"

import DeleteUserDialog from "./DeleteUserDialog"
import UpdateUserDialog from "./UpdateUserDialog"

export function UserActions({ user }: { user: any }) {
  return (
    <div className="flex items-center justify-end gap-2">
      <UpdateUserDialog user={user} />

      <DeleteUserDialog />
    </div>
  )
}
