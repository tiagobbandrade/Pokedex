import styled from "styled-components";
import { Pokedex } from "../../components/Pokedex";
import { Sidebar } from "../../components/Sidebar";

export function Home() {
  return (
    <HomeContainer>
      <Sidebar isActive="pokemons" />
      <Pokedex title="pokemons" />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`;
