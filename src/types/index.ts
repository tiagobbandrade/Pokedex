export type PokemonsEndpointType = {
  count: number;
  next: string;
  previous: string;
  results: {
    url: string;
  };
};

export type PokemonType = {
  id: number;
  name: string;
  sprites: Sprites;
  stats: PokemonStatsType[];
  types: PokemonsPossibleTypes[];
};

export type PokemonStatsType = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonsPossibleTypes = {
  type: {
    name: string;
  };
};

type Sprites = {
  [key: string]: string | OtherSprites;
  other: OtherSprites;
};

type OtherSprites = {
  dream_world: { [key: string]: string };
  home: { [key: string]: string };
  "official-artwork": { [key: string]: string };
  showdown: { [key: string]: string };
};
