import { useCallback } from "react";
import { ITENS_PER_PAGE } from "../constants";
import {
  fetchSpecificPokemon,
  fetchAllPokemons,
  fetchEndpoints,
  fetchPokemonSpecificType,
  fetchPokemonHabitat,
} from "../services/api";

export function useFetch() {
  const getPokemons = useCallback(async (endpoints: string[]) => {
    const responses = await fetchSpecificPokemon(endpoints);

    if (!responses) return;

    return responses;
  }, []);

  const getAllPokemonsEndpoints = useCallback(async () => {
    const response = await fetchAllPokemons();

    return response.results;
  }, []);

  const getEndpoints = useCallback(async (actualPage: number) => {
    const offset = (actualPage - 1) * ITENS_PER_PAGE;

    const response = await fetchEndpoints(offset);

    return response;
  }, []);

  const getPokemonsFromSpecificType = useCallback(async (type: string) => {
    const response = await fetchPokemonSpecificType(type);

    return response;
  }, []);

  const getPokemonsFromHabitat = useCallback(async (habitat: string) => {
    const response = await fetchPokemonHabitat(habitat);

    return response;
  }, []);

  return {
    getPokemons,
    getAllPokemonsEndpoints,
    getEndpoints,
    getPokemonsFromSpecificType,
    getPokemonsFromHabitat,
  };
}
