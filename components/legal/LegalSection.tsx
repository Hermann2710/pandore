import { SectionHeading } from "@/components/shared"

interface LegalSectionProps {
  title: string
  children: React.ReactNode
}

export const LegalSection = ({ title, children }: LegalSectionProps) => {
  return (
    <section>
      <SectionHeading title={title} />
      <div>{children}</div>
    </section>
  )
}
