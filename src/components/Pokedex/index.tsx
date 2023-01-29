import { useContext } from "react";
import { FavoritesPokemonsContext } from "../../App";
import { PokemonCard } from "../PokemonCard";

import { PokedexContainer, PokedexGrid } from "./style";

import { PokedexProps } from "../../interfaces/interfaces";

export function Pokedex({
  title,
  onlyFavorites,
  isLoading,
  pokemons,
}: PokedexProps) {
  const { favoritesPokemons } = useContext(FavoritesPokemonsContext);

  return (
    <PokedexContainer>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{title}</h1>
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
        </>
      )}
    </PokedexContainer>
  );
}
