export const CredentialFields = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return (
    <fieldset>
      <legend>Identifiants</legend>
      {children}
    </fieldset>
  )
}
