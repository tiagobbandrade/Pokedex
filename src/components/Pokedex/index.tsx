import { PokemonCard } from "../PokemonCard";
import { PokedexContainer, PokedexGrid } from "./style";

interface PokedexProps {
  title: string;
  onlyFavorites?: boolean;
}

export function Pokedex({ title, onlyFavorites }: PokedexProps) {
  return (
    <PokedexContainer>
      <h1>{title}</h1>
      <PokedexGrid>
        {onlyFavorites ? (
          <>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </>
        ) : (
          <>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </>
        )}
      </PokedexGrid>
    </PokedexContainer>
  );
}
