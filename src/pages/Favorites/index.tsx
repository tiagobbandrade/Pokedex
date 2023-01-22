import styled from "styled-components";
import { Pokedex } from "../../components/Pokedex";
import { Sidebar } from "../../components/Sidebar";

export function Favorites() {
  return (
    <FavoritesContainer>
      <Sidebar isActive="favorites" />
      <Pokedex title="favorites" onlyFavorites />
    </FavoritesContainer>
  );
}

const FavoritesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
