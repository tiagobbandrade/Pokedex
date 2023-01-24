export type PokemonsResponseType = {
  results: {
    url: string;
  }[];
};

export type SpecsFromPokemonType = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};
