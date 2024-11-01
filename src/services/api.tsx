import axios from "axios";
import { ITENS_PER_PAGE } from "../constants";

export async function fetchSpecificPokemon(endpoints: string[]) {
  try {
    const responses = await Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint))
    );

    return responses;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}

export async function fetchEndpoints(offset: number) {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        offset,
        limit: ITENS_PER_PAGE,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching endpoints:", error);
    return [];
  }
}

export async function fetchAllPokemons() {
  const limit = 999_999; // Infinite value to get all pokémons

  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        limit,
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching all pokémons:", error);
    return [];
  }
}

export async function fetchPokemonSpecificType(type: string) {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

    return data;
  } catch (error) {
    console.error("Error fetching all pokémons:", error);
    return [];
  }
}

export async function fetchPokemonHabitat(habitat: string) {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`
    );

    return data;
  } catch (error) {
    console.error("Error fetching all pokémons:", error);
    return [];
  }
}
