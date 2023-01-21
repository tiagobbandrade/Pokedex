import { MagnifyingGlass } from "phosphor-react";
import { Container, Content } from "./style";

export function Sidebar() {
  return (
    <Container>
      <Content>
        <form>
          <input type="text" placeholder="Search a pokemon" />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            <MagnifyingGlass />
          </button>
        </form>
        <ul>{/* <NavLink /> */}</ul>
      </Content>
    </Container>
  );
}
