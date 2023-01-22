import { MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";
import { NavLinkProps, SidebarProps } from "../../types/types";

import { SidebarContainer, SidebarContent, ListItem } from "./style";

export function Sidebar({ isActive }: SidebarProps) {
  return (
    <SidebarContainer>
      <SidebarContent>
        <form>
          <input type="text" placeholder="Search a pokemon" />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            <MagnifyingGlass />
          </button>
        </form>
        <nav>
          <ul>
            <NavLink
              isActive={isActive === "pokemons" ? true : false}
              title="pokemons"
              path="/"
            />
            <NavLink
              isActive={isActive === "favorites" ? true : false}
              title="favorites"
              path="/favorites"
            />
          </ul>
        </nav>
      </SidebarContent>
    </SidebarContainer>
  );
}

function NavLink({ isActive, path, title }: NavLinkProps) {
  return (
    <ListItem isActive={isActive}>
      <Link to={path}>{title}</Link>
    </ListItem>
  );
}
