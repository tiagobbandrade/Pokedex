import { usePageOffset } from "../../hooks/usePageOffset";
import PokedexLogo from "../../assets/Logo.svg";
import RightArrowIcon from "../../assets/icons/Right Arrow.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Header() {
  const { offsetY } = usePageOffset();
  const [value, setValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParam = searchParams.get("search");

  function handleEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter" && value.trim().length > 0) {
      const updatedSearch = new URLSearchParams(searchParams);
      updatedSearch.set("search", value);

      setSearchParams(updatedSearch);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.trim().length == 0) {
      const updatedSearch = new URLSearchParams(searchParams);
      updatedSearch.delete("search");

      setSearchParams(updatedSearch);
    }

    setValue(e.target.value);
  }

  useEffect(() => {
    setValue(searchParam || "");
  }, []);

  return (
    <header
      className={`z-50 flex items-center transition-header duration-300  ${
        offsetY > 0
          ? "w-fit justify-center mx-auto py-4 px-9 rounded-[54px] gap-14 sticky top-4 mb-4 bg-[#0E0F12]/65 z-[9999] backdrop-blur-lg border border-[#24262E]/40"
          : "w-full px-24 py-9 justify-between relative"
      }`}
    >
      <img src={PokedexLogo} alt="Pokedex logo" />

      <div className="relative rounded-2xl w-[496px] p-px bg-gradient-to-t from-[#1C4C4E] to-[#22686B]">
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="absolute -translate-y-1/2 top-1/2 left-4"
        />
        <input
          onKeyDown={handleEnter}
          defaultValue={searchParam || ""}
          value={value}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Pesquise por seu pokémon preferido"
          className="w-full bg-[#0A2B2C] text-white placeholder:text-[#2D8589] px-11 py-2 rounded-2xl placeholder:text-sm outline-none text-sm"
        />
      </div>

      {offsetY <= 0 && (
        <a
          href="#pokemon-list"
          className="rounded-[38px] text-base text-[#121316] px-6 py-2 bg-[#33CC99] font-medium flex items-center gap-1.5"
        >
          Ver todos
          <img src={RightArrowIcon} alt="Right Arrow Icon" />
        </a>
      )}
    </header>
  );
}
