import { iconsForPokemonsType } from "../../constants";
import { PokemonsPossibleTypes, PokemonStatsType } from "../../types";
import { useSearchParams } from "react-router-dom";

type CardProps = {
  imgURL: string;
  pokemonName: string;
  pokemonId: number;
  stats: PokemonStatsType[];
  types: PokemonsPossibleTypes[];
};

export function Card({ imgURL, pokemonName, pokemonId, types }: CardProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("visualization", pokemonId.toString());

    setSearchParams(updatedParams);
  }

  return (
    <div
      role="button"
      onClick={handleClick}
      className="w-full h-[272px] px-16 py-9 relative bg-[#191B20] rounded-md border border-[#23262E] flex-grow group cursor-pointer hover:scale-105 transition-transform duration-150"
    >
      <span className="absolute text-xs top-3 right-3 text-white/30">
        #{pokemonId}
      </span>
      <div className="flex items-center justify-center gap-[22px]">
        <div className="flex items-center justify-center w-24 h-24">
          <img
            src={imgURL}
            alt=""
            className="group-[&:not(:hover)]:grayscale transition-all duration-300 object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2.5 gap-2.5">
        <span className="mt-2.5 font-semibold text-white text-center">
          {pokemonName}
        </span>
        <div className="flex items-center flex-1">
          {types.map((type) => (
            <img
              src={
                iconsForPokemonsType[
                  type.type.name as keyof typeof iconsForPokemonsType
                ]
              }
              alt={type.type.name}
              className="-mt-1 h-10 w-10 group-[&:not(:hover)]:grayscale transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
