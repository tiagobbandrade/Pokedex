import { useAxios } from "../../hooks/useAxios";
import { PokemonCard } from "../PokemonCard";
import { PokedexContainer, PokedexGrid } from "./style";

interface PokedexProps {
  title: string;
  onlyFavorites?: boolean;
}

export function Pokedex({ title, onlyFavorites }: PokedexProps) {
  const { isLoading, pokemons } = useAxios();

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
                <h1>Favorites</h1>
              </>
            ) : (
              <>
                {pokemons?.map(({ id, name, sprites, types }) => (
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
