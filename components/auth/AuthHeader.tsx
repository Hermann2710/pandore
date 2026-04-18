interface AuthHeaderProps {
  title: string
  subtitle?: string
}

export const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <header className="mb-2 flex flex-col gap-3 text-center">
      <h1 className="animate-in text-3xl font-extrabold tracking-tight text-foreground duration-500 fade-in slide-in-from-top-4 lg:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="animate-in text-base text-muted-foreground delay-150 duration-700 fade-in slide-in-from-top-2 lg:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  )
}
