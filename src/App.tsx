import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar isActive="pokemons" />} />
        <Route path="/favorites" element={<Sidebar isActive="favorites" />} />
      </Routes>
    </BrowserRouter>
  );
}
