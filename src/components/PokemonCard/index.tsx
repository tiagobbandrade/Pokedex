import { useContext } from "react";

import { HeartStraight } from "phosphor-react";

import { FavoritesPokemonsContext } from "../../App";
import { Header, Main, PokemonContainer, PokemonInfo } from "./style";

export function PokemonCard() {
  const favoriteContext = useContext(FavoritesPokemonsContext);

  return (
    <PokemonContainer>
      <Header>
        <button>
          <HeartStraight
            size={16}
            weight={favoriteContext?.favorites.includes(1) ? "fill" : "regular"}
            fill="#DA2626"
          />
        </button>
        <span>#001</span>
      </Header>
      <Main>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
          alt="Pokemon Image"
        />
        <PokemonInfo>
          <span id="name">Clefairy</span>
          <span id="type">fire, water, grass</span>
        </PokemonInfo>
      </Main>
    </PokemonContainer>
  );
}
