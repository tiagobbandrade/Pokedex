import { useSearchParams } from "react-router-dom";
import { Header } from "../components/containers/Header";
import { Hero } from "../components/containers/Hero";
import { Pagination } from "../components/containers/Pagination";
import { PokemonList } from "../components/containers/PokemonList";
import { Slider } from "../components/containers/Slider";
import { Filter } from "../components/ui/Filter/Filter";
import { FilterOption } from "../components/ui/Filter/FilterOption";
import { FilterSubmit } from "../components/ui/Filter/FilterSubmit";
import { Option } from "../components/ui/Filter/Option";
import { Modal } from "../components/ui/Modal";
import { Switcher } from "../components/ui/Switcher";
import { PaginationContextProvider } from "../contexts/PaginationContext/PaginationContext";
import { PokemonsContextProvider } from "../contexts/PokemonsContext/PokemonsContext";

export function Index() {
  const [searchParams] = useSearchParams();

  return (
    <div className="relative w-screen peer-data-[open=true]:h-screen peer-data-[open=true]:overflow-hidden bg-background">
      <div className="absolute w-full h-[809px] bg-mosaic bg-green-background blue-circle">
        <div className="w-full h-[700px] bg-dark-fade-to-top absolute bottom-0 z-0" />
      </div>
      <Header />
      <Hero />
      <Slider />

      <Switcher />
      <main className="flex flex-col items-end justify-center mx-auto w-fit">
        <PaginationContextProvider>
          <PokemonsContextProvider>
            <Filter>
              <FilterOption
                id="habitat"
                label="Habitat:"
                defaultValue={searchParams.get("habitat") || ""}
              >
                <Option value="">Todos</Option>

                <Option value="cave">Caverna</Option>
                <Option value="forest">Floresta</Option>
                <Option value="grassland">Pastagem</Option>
                <Option value="mountain">Montanha</Option>
                <Option value="rare">Raro</Option>
                <Option value="sea">Mar</Option>
                <Option value="rough-terrain">Tereno acidentado</Option>
                <Option value="urban">Urbano</Option>
                <Option value="waters-edge">Beira de água</Option>
              </FilterOption>
              <FilterOption
                id="type"
                label="Tipo:"
                defaultValue={searchParams.get("type") || ""}
              >
                <Option value="">Todos</Option>
                <Option value="normal">Normal</Option>
                <Option value="fighting">Lutador</Option>
                <Option value="flying">Voador</Option>
                <Option value="poison">Venenoso</Option>
                <Option value="ground">Terrestre</Option>
                <Option value="rock">Pedra</Option>
                <Option value="bug">Inseto</Option>
                <Option value="ghost">Fantasma</Option>
                <Option value="steel">Aço</Option>
                <Option value="fire">Fogo</Option>
                <Option value="water">Água</Option>
                <Option value="grass">Grama</Option>
                <Option value="electric">Elétrico</Option>
                <Option value="psychic">Psiquico</Option>
                <Option value="ice">Gelo</Option>
                <Option value="dragon">Dragão</Option>
                <Option value="dark">Sombrio</Option>
                <Option value="fairy">Fada</Option>
                <Option value="stellar">Estelar</Option>
                <Option value="shadow">Sombra</Option>
                <Option value="unknown">Desconhecido</Option>
              </FilterOption>
              <FilterSubmit />
            </Filter>
            <PokemonList />
            <Modal />
          </PokemonsContextProvider>
          <Pagination />
        </PaginationContextProvider>
      </main>

      <footer className="w-full mt-32 border-t py-9 border-white/5">
        <p className="text-xs font-light text-center text-white/10 ">
          Copyright (c) 2024 Tiago Andrade
        </p>
      </footer>
    </div>
  );
}
