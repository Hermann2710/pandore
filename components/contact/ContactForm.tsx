export const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="Nom" />
      <input type="email" placeholder="Email" />
      <select>
        <option>Sujet de votre message</option>
        <option>Support technique</option>
        <option>Vente</option>
      </select>
      <textarea placeholder="Votre message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  )
}
