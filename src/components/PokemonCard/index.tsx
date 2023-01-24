import { useContext } from "react";

import { HeartStraight } from "phosphor-react";

import { Header, Main, PokemonContainer, PokemonInfo } from "./style";
import { PokemonCardProps } from "../../interfaces/interfaces";

export function PokemonCard({ id, image_url, name, types }: PokemonCardProps) {
  const concatanetedTypesInAnArray = types.map(({ type }) => type.name);

  return (
    <PokemonContainer>
      <Header>
        <button>
          <HeartStraight size={16} />
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
