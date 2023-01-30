import { useContext } from "react";
import { FavoritesPokemonsContext } from "../../App";
import { PokemonCard } from "../PokemonCard";

import { PokedexGrid } from "./style";

import { GridProps, SpecsFromPokemonType } from "../../interfaces/interfaces";

export function Grid({ onlyFavorites, pokemons }: GridProps) {
  const { favoritesPokemons } = useContext(FavoritesPokemonsContext);

  function mapArray(array: SpecsFromPokemonType[]) {
    const pokemonArray = array.map(({ name, id, sprites, types }) => (
      <PokemonCard
        key={id}
        id={id}
        image_url={sprites.front_default}
        name={name}
        types={types}
      />
    ));
    return pokemonArray;
  }

  return (
    <PokedexGrid>
      {onlyFavorites ? (
        <>
          {favoritesPokemons.length > 0 ? (
            mapArray(
              pokemons.filter(({ id }) => favoritesPokemons.includes(id))
            )
          ) : (
            <h3>Not favorites pokemons yet</h3>
          )}
        </>
      ) : (
        <>{mapArray(pokemons)}</>
      )}
    </PokedexGrid>
  );
}
