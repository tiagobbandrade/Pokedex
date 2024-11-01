import { useSearchParams } from "react-router-dom";
import { usePokemonsContext } from "../../contexts/PokemonsContext/PokemonsContext";
import { Card } from "../ui/Card";
import { CardSkeleton } from "../skeletons/CardSkeleton";

export function PokemonList() {
  const {
    state: { pokemons, filteredPokemons },
    isLoading,
  } = usePokemonsContext();
  const [searchParams] = useSearchParams();

  const searchParam = searchParams.get("search");
  const habitatParam = searchParams.get("habitat");
  const typeParam = searchParams.get("type");

  const conditionToRenderAllPokemons =
    filteredPokemons.length == 0 && !searchParam && !habitatParam && !typeParam;

  const notFoundPokemonCondition =
    filteredPokemons.length == 0 && (searchParam || habitatParam || typeParam);

  if (isLoading) {
    return (
      <section
        id="pokemon-list"
        className={
          "grid items-stretch justify-center grid-cols-5 gap-4 mx-auto mt-5 place-items-center w-fit"
        }
      >
        {new Array(10).fill(0).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </section>
    );
  }

  return (
    <section
      id="pokemon-list"
      className={`${
        conditionToRenderAllPokemons || filteredPokemons.length > 0
          ? "grid items-stretch justify-center grid-cols-5 gap-4 mx-auto mt-5 place-items-center w-fit"
          : "flex items-center justify-center mt-12 mx-auto"
      }`}
    >
      {filteredPokemons.length > 0 &&
        filteredPokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemonId={pokemon.id}
            imgURL={
              pokemon.sprites.other.showdown.front_default ||
              pokemon.sprites.other["official-artwork"].front_default
            }
            pokemonName={pokemon.name}
            stats={pokemon.stats}
            types={pokemon.types}
          />
        ))}

      {notFoundPokemonCondition && (
        <p className="font-extralight text-white/40">
          Não achamos o pokémon buscado
        </p>
      )}
      {conditionToRenderAllPokemons &&
        pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemonId={pokemon.id}
            imgURL={
              pokemon.sprites.other.showdown.front_default ||
              pokemon.sprites.other["official-artwork"].front_default
            }
            pokemonName={pokemon.name}
            stats={pokemon.stats}
            types={pokemon.types}
          />
        ))}
    </section>
  );
}
