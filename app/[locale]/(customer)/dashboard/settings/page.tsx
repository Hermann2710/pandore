import { SectionHeading } from "@/components/shared"

export default function SettingsPage() {
  return (
    <>
      <SectionHeading title="Paramètres" />
      <form>
        <fieldset>
          <legend>Informations personnelles</legend>
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
        </fieldset>
        <button type="submit">Enregistrer les modifications</button>
      </form>
    </>
  )
}
