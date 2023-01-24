import axios, { AxiosError } from "axios";
import { PokemonsResponseType, SpecsFromPokemonType } from "../types/types";

export async function getPokemons() {
  try {
    const pokemonsResponse: PokemonsResponseType = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((response) => response.data);

    const pokemonsCompleteResponse = pokemonsResponse.results;
    return { pokemonsCompleteResponse };
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(`Ops: ${error}`);
  }
}

export async function getSpecsFromPokemon(url: string) {
  try {
    const specsFromPokemonsResponse: SpecsFromPokemonType = await axios
      .get(url)
      .then((response) => response.data);
    return specsFromPokemonsResponse;
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(`Ops: ${error}`);
  }
}
