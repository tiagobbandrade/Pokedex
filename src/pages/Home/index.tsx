import styled from "styled-components";
import { Pokedex } from "../../components/Pokedex";
import { Sidebar } from "../../components/Sidebar";

import { PageProps } from "../../interfaces/interfaces";

export function Home({ isLoading, pokemons }: PageProps) {
  return (
    <HomeContainer>
      <Sidebar isActive="pokemons" />
      <Pokedex isLoading={isLoading} pokemons={pokemons} title="pokemons" />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
