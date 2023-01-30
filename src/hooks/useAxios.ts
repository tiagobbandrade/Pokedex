import { useEffect, useState } from "react";
import { SpecsFromPokemonType } from "../interfaces/interfaces";
import { getPokemons, getSpecsFromPokemon } from "../services/api";

export function useAxios() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<SpecsFromPokemonType[]>([]);

  async function fetchPokemons() {
    const { pokemonsCompleteResponse } = await getPokemons();
    const specsFromPokemonPromise = pokemonsCompleteResponse?.map(
      (pokemon: { url: string }) => getSpecsFromPokemon(pokemon.url)
    );

    await Promise.all(specsFromPokemonPromise)
      .then((response) => setPokemons(response))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, isLoading };
}
