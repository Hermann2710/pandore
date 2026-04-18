interface ContactCardProps {
  title: string
  value: string
  icon?: string
}

export const ContactCard = ({ title, value }: ContactCardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  )
}
