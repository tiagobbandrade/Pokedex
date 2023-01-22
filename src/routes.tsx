import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Sidebar isActive="favorites" />} />
      </Routes>
    </BrowserRouter>
  );
}
