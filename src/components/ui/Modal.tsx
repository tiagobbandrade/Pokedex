import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { PokemonType } from "../../types";
import { fetchSpecificPokemon } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import { iconsForPokemonsType } from "../../constants";
import CloseIcon from "../../assets/icons/Close Icon.svg";

export function Modal() {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonType | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const layerRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.delete("visualization");

    setPokemonInfo(null);
    setSearchParams(updatedParams);
  }

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      const pokemonId = searchParams.get("visualization");
      if (!pokemonId) return;

      try {
        const response = await fetchSpecificPokemon([
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        ]);

        if (response && response[0]) {
          setPokemonInfo(response[0].data);
        }
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    function handleClickOut(e: MouseEvent) {
      if (layerRef.current && !layerRef.current.contains(e.target as Node)) {
        closeModal();
      }
    }

    document.addEventListener("mousedown", handleClickOut);
    getPokemon();
    if (searchParams.get("visualization")) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [searchParams]);

  const ableToShow =
    !isLoading && searchParams.get("visualization") && pokemonInfo;

  return createPortal(
    <>
      {ableToShow && (
        <div
          data-open="true"
          className="fixed inset-0 z-[999999] bg-black/50 peer"
        >
          <div
            ref={layerRef}
            className="w-[620px] z-[999999] rounded-2xl bg-[#191B20] border border-[#23262E] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-14 px-6 flex flex-col items-center"
          >
            <button onClick={closeModal} className="absolute top-6 right-6">
              <img src={CloseIcon} alt="Close Icon" />
            </button>
            {pokemonInfo.sprites && (
              <img
                src={pokemonInfo.sprites.other.showdown.front_default || ""}
                alt={`${pokemonInfo.name} sprite`}
                className="w-40 h-40"
              />
            )}
            <h1 className="mt-4 text-3xl font-bold text-white">
              {pokemonInfo.name || "Loading..."}
            </h1>
            <div className="flex items-center gap-1">
              {pokemonInfo.types.map((type) => (
                <img
                  src={
                    iconsForPokemonsType[
                      type.type.name as keyof typeof iconsForPokemonsType
                    ]
                  }
                  alt={type.type.name}
                  className="w-16 h-16"
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
              {pokemonInfo.stats?.map((stat, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <span className="font-medium text-white text-end text-nowrap">
                    {stat.stat.name}:
                  </span>
                  <span className="text-[#33CC99] font-medium">
                    {stat.base_stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("root")!
  );
}
