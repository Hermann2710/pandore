import { LanguageSwitcher } from "@/components/shared"
import { SearchBar } from "./SearchBar"

export const Navbar = () => {
  return (
    <nav>
      <div id="logo">Logo</div>
      <SearchBar />
      <ul>
        <li>Boutique</li>
        <li>Compte</li>
        <li>Panier (0)</li>
      </ul>
      <LanguageSwitcher />
    </nav>
  )
}
