import { PokemonType } from "../../types";

export type ReducerActionType =
  | { type: "SET_POKEMONS"; payload: PokemonType[] }
  | { type: "SET_FILTERED_POKEMONS"; payload: PokemonType[] };

export type ReducerPayloadType = {
  pokemons: PokemonType[];
  filteredPokemons: PokemonType[];
};

export function pokemonReducer(
  state: ReducerPayloadType,
  action: ReducerActionType
) {
  switch (action.type) {
    case "SET_POKEMONS":
      return { ...state, pokemons: action.payload };
    case "SET_FILTERED_POKEMONS":
      return { ...state, filteredPokemons: action.payload };
    default:
      return state;
  }
}

export const initialState = {
  pokemons: [],
  filteredPokemons: [],
};
