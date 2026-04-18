import { cn } from "@/lib/utils"

export const CredentialFields = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <fieldset className={cn("m-0 border-none p-0", className)}>
      <legend className="sr-only">Identifiants</legend>
      <div className="flex flex-col gap-6">{children}</div>
    </fieldset>
  )
}
