import { HeartStraight } from "phosphor-react";
import { Header, Main, PokemonContainer, PokemonInfo } from "./style";

export function PokemonCard() {
  return (
    <PokemonContainer>
      <Header>
        <button>
          <HeartStraight size={16} />
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
