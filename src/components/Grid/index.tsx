import { useContext } from "react";
import { FavoritesPokemonsContext } from "../../App";
import { PokemonCard } from "../PokemonCard";

import { PokedexGrid } from "./style";

import { GridProps } from "../../interfaces/interfaces";

export function Grid({ onlyFavorites, pokemons }: GridProps) {
  const { favoritesPokemons } = useContext(FavoritesPokemonsContext);

  return (
    <PokedexGrid>
      {onlyFavorites ? (
        <>
          {favoritesPokemons.length > 0 ? (
            pokemons
              .filter(({ id }) => favoritesPokemons.includes(id))
              .map(({ name, id, sprites, types }) => (
                <PokemonCard
                  key={id}
                  id={id}
                  image_url={sprites.front_default}
                  name={name}
                  types={types}
                />
              ))
          ) : (
            <h3>Not favorites pokemons yet</h3>
          )}
        </>
      ) : (
        <>
          {pokemons.map(({ id, name, sprites, types }) => (
            <PokemonCard
              key={id}
              id={id}
              image_url={sprites.front_default}
              name={name}
              types={types}
            />
          ))}
        </>
      )}
    </PokedexGrid>
  );
}
