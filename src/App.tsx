import { createContext, useState } from "react";
import { MainRoutes } from "./routes";

import { FavoritesPokemonsContextProps } from "./types/types";

export const FavoritesPokemonsContext =
  createContext<FavoritesPokemonsContextProps | null>(null);

export function App() {
  const [favorites, setFavorites] = useState<number[]>([]);

  return (
    <FavoritesPokemonsContext.Provider value={{ favorites, setFavorites }}>
      <MainRoutes />
    </FavoritesPokemonsContext.Provider>
  );
}
