import { MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container, Content, ListItem } from "./style";

interface SidebarProps {
  isActive: "pokemons" | "favorites";
}

interface NavLinkProps {
  isActive: boolean;
  title: string;
  path: string;
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
              path="/"
            />
            <NavLink
              isActive={isActive === "favorites" ? true : false}
              title="favorites"
              path="/favorites"
            />
          </ul>
        </nav>
      </Content>
    </Container>
  );
}

function NavLink({ isActive, path, title }: NavLinkProps) {
  return (
    <ListItem isActive={isActive}>
      <Link to={path}>{title}</Link>
    </ListItem>
  );
}
