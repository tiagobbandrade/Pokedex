import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Page404 } from "./pages/Page404";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { useAxios } from "./hooks/useAxios";

export function MainRoutes() {
  const { isLoading, pokemons } = useAxios();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} pokemons={pokemons} />}
        />
        <Route
          path="/favorites"
          element={<Favorites isLoading={isLoading} pokemons={pokemons} />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
