interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <header>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
