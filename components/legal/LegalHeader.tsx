interface LegalHeaderProps {
  title: string
  lastUpdated: string
}

export const LegalHeader = ({ title, lastUpdated }: LegalHeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>Dernière mise à jour : {lastUpdated}</p>
    </header>
  )
}
