import { useContext } from "react";

import { HeartStraight } from "phosphor-react";

import { Header, Main, PokemonContainer, PokemonInfo } from "./style";
import { FavoritesPokemonsContext } from "../../App";

import { PokemonCardProps } from "../../interfaces/interfaces";

export function PokemonCard({ id, image_url, name, types }: PokemonCardProps) {
  const { favoritesPokemons, setFavoritesPokemons } = useContext(
    FavoritesPokemonsContext
  );

  const concatanetedTypesInAnArray = types.map(({ type }) => type.name);

  function handleFavoriteClick(id: number) {
    favoritesPokemons.includes(id)
      ? setFavoritesPokemons((oldArray) =>
          oldArray.filter((pokemonId) => pokemonId !== id)
        )
      : setFavoritesPokemons((oldArray) => [...oldArray, id]);
  }

  return (
    <PokemonContainer>
      <Header>
        <button onClick={() => handleFavoriteClick(id)}>
          <HeartStraight
            size={16}
            fill="#DA2626"
            weight={favoritesPokemons.includes(id) ? "fill" : "regular"}
          />
        </button>
        <span>#{String(id).padStart(2, "0")}</span>
      </Header>
      <Main>
        <img src={image_url} alt="Pokemon Image" />
        <PokemonInfo>
          <span id="name">{name}</span>
          <span id="type">{concatanetedTypesInAnArray.join(", ")}</span>
        </PokemonInfo>
      </Main>
    </PokemonContainer>
  );
}
