import { MagnifyingGlass } from "phosphor-react";
import { Container, Content, ListItem } from "./style";

interface SidebarProps {
  isActive: "pokemons" | "favorites";
}

interface NavLinkProps {
  isActive: boolean;
  title: string;
}

export function Sidebar({ isActive }: SidebarProps) {
  return (
    <Container>
      <Content>
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
            />
            <NavLink
              isActive={isActive === "favorites" ? true : false}
              title="favorites"
            />
          </ul>
        </nav>
      </Content>
    </Container>
  );
}

function NavLink({ isActive, title }: NavLinkProps) {
  return <ListItem isActive={isActive}>{title}</ListItem>;
}
