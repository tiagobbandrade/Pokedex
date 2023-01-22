import { Dispatch, SetStateAction } from "react";

export interface FavoritesPokemonsContextProps {
  favorites: Array<Number>;
  setFavorites: Dispatch<SetStateAction<number[]>>;
}

export interface SidebarProps {
  isActive: "pokemons" | "favorites";
}

export interface NavLinkProps {
  isActive: boolean;
  title: string;
  path: string;
}
