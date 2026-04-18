interface AuthHeaderProps {
  title: string
  subtitle?: string
}

export const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
