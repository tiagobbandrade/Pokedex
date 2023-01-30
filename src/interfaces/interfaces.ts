import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  isActive: "pokemons" | "favorites";
}

export interface NavLinkProps {
  isActive: boolean;
  title: string;
  path: string;
}

export interface PokemonCardProps {
  id: number;
  image_url: string;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface PokemonsResponseType {
  results: {
    url: string;
  }[];
}

export interface SpecsFromPokemonType {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface FavoritesPokemonsContextInterface {
  favoritesPokemons: number[];
  setFavoritesPokemons: Dispatch<SetStateAction<number[]>>;
}

export interface PageProps {
  isLoading: boolean;
  pokemons: SpecsFromPokemonType[];
}

export interface PokedexProps {
  title: string;
  onlyFavorites?: boolean;
  isLoading: boolean;
  pokemons: SpecsFromPokemonType[];
}

export interface GridProps {
  onlyFavorites?: boolean;
  pokemons: SpecsFromPokemonType[];
}
