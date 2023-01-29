import { Fade, PokedexContainer } from "./style";

import { PokedexProps } from "../../interfaces/interfaces";
import { Grid } from "../Grid";
import { Loader } from "../Loader";

export function Pokedex({
  title,
  onlyFavorites,
  isLoading,
  pokemons,
}: PokedexProps) {
  return (
    <PokedexContainer isLoading={isLoading}>
      {isLoading ? (
        <Loader />
      ) : (
        <Fade>
          <h1 className="title">{title}</h1>
          <Grid onlyFavorites={onlyFavorites} pokemons={pokemons} />
        </Fade>
      )}
    </PokedexContainer>
  );
}
