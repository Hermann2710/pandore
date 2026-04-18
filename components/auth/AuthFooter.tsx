import { Link } from "@/i18n/navigation"

interface AuthFooterProps {
  label: string
  linkText: string
  href: string
}

export const AuthFooter = ({ label, linkText, href }: AuthFooterProps) => {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-1.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <Link
        href={href}
        className="font-bold text-primary underline-offset-4 transition-all hover:underline"
      >
        {linkText}
      </Link>
    </footer>
  )
}
