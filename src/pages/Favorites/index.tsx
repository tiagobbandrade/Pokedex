import styled from "styled-components";
import { Pokedex } from "../../components/Pokedex";
import { Sidebar } from "../../components/Sidebar";

import { PageProps } from "../../interfaces/interfaces";

export function Favorites({ isLoading, pokemons }: PageProps) {
  return (
    <FavoritesContainer>
      <Sidebar isActive="favorites" />
      <Pokedex
        isLoading={isLoading}
        pokemons={pokemons}
        title="favorites"
        onlyFavorites
      />
    </FavoritesContainer>
  );
}

const FavoritesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
