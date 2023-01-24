export interface SidebarProps {
  isActive: "pokemons" | "favorites";
}

export interface NavLinkProps {
  isActive: boolean;
  title: string;
  path: string;
}

export interface PokemonCardProps {
  id: number;
  image_url: string;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
}
