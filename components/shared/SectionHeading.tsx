interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground italic lg:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
