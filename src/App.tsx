import { createContext, useState } from "react";
import { FavoritesPokemonsContextInterface } from "./interfaces/interfaces";

import { MainRoutes } from "./routes";

export const FavoritesPokemonsContext =
  createContext<FavoritesPokemonsContextInterface>({
    favoritesPokemons: [],
    setFavoritesPokemons: () => {},
  });

export function App() {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  return (
    <FavoritesPokemonsContext.Provider
      value={{ favoritesPokemons, setFavoritesPokemons }}
    >
      <MainRoutes />
    </FavoritesPokemonsContext.Provider>
  );
}
