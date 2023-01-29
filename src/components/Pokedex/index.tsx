import { useContext } from "react";
import { FavoritesPokemonsContext } from "../../App";

import { PokedexContainer } from "./style";

import { PokedexProps } from "../../interfaces/interfaces";
import { Grid } from "../Grid";

export function Pokedex({
  title,
  onlyFavorites,
  isLoading,
  pokemons,
}: PokedexProps) {
  return (
    <PokedexContainer>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1 className="title">{title}</h1>
          <Grid onlyFavorites={onlyFavorites} pokemons={pokemons} />
        </>
      )}
    </PokedexContainer>
  );
}
