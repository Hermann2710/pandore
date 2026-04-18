import Link from "next/link"

interface AuthFooterProps {
  label: string
  linkText: string
  href: string
}

export const AuthFooter = ({ label, linkText, href }: AuthFooterProps) => {
  return (
    <footer>
      <span>{label}</span>
      <Link href={href}>{linkText}</Link>
    </footer>
  )
}
