import { PokemonCard } from "../PokemonCard";
import { PokedexContainer, PokedexGrid } from "./style";

interface PokedexProps {
  title: string;
}

export function Pokedex({ title }: PokedexProps) {
  return (
    <PokedexContainer>
      <h1>{title}</h1>
      <PokedexGrid>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </PokedexGrid>
    </PokedexContainer>
  );
}
