import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  initialState,
  pokemonReducer,
  ReducerActionType,
  ReducerPayloadType,
} from "./reducer";
import { useFetch } from "../../hooks/useFetch";
import { usePaginationContext } from "../PaginationContext/PaginationContext";
import { ITENS_PER_PAGE } from "../../constants";
import { useSearchParams } from "react-router-dom";

type PokemonsContextType = {
  state: ReducerPayloadType;
  dispatch: Dispatch<ReducerActionType>;
};

const PokemonsContext = createContext<PokemonsContextType>(
  {} as PokemonsContextType
);

export function PokemonsContextProvider({ children }: PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  const { actualPage, setTotalPages, setRender } = usePaginationContext();
  const {
    getEndpoints,
    getPokemons,
    getPokemonsFromHabitat,
    getPokemonsFromSpecificType,
    getAllPokemonsEndpoints,
  } = useFetch();

  const habitatParam = searchParams.get("habitat");
  const typeParam = searchParams.get("type");
  const searchParam = searchParams.get("search");

  const handleError = (error: unknown, message: string) => {
    console.error(message, error);
  };

  const fetchFilteredPokemons = async () => {
    let filteredEndpoints: string[] = [];

    try {
      if (habitatParam) {
        const habitatResponse = await getPokemonsFromHabitat(habitatParam);
        filteredEndpoints = habitatResponse.pokemon_species.map(
          (poke: { url: string }) => {
            const id = poke.url.split("/").slice(-2, -1)[0];
            return `https://pokeapi.co/api/v2/pokemon/${id}/`;
          }
        );
      }
      if (typeParam) {
        const typeResponse = await getPokemonsFromSpecificType(typeParam);
        const typeEndpoints = typeResponse.pokemon.map(
          (poke: { pokemon: { url: string } }) => {
            const id = poke.pokemon.url.split("/").slice(-2, -1)[0];
            return `https://pokeapi.co/api/v2/pokemon/${id}/`;
          }
        );

        filteredEndpoints = filteredEndpoints.length
          ? filteredEndpoints.filter((url) => typeEndpoints.includes(url))
          : typeEndpoints;
      }

      if (searchParam) {
        const allPokemons = await getAllPokemonsEndpoints();
        const filteredPokemons = allPokemons.filter(
          (pokemon: { name: string }) =>
            pokemon.name.toLowerCase().includes(searchParam)
        );
        console.log(filteredPokemons);

        const searchEndpoints = allPokemons
          .filter((pokemon: { name: string }) =>
            pokemon.name.toLowerCase().includes(searchParam.toLowerCase())
          )
          .map((pokemon: { url: string }) => pokemon.url);

        console.log(searchEndpoints);
        console.log(filteredEndpoints);

        filteredEndpoints = filteredEndpoints.length
          ? filteredEndpoints.filter((url) => searchEndpoints.includes(url))
          : searchEndpoints;
      }

      console.log();

      const totalItems = filteredEndpoints.length;
      setTotalPages(Math.ceil(totalItems / ITENS_PER_PAGE));

      const paginatedEndpoints = filteredEndpoints.slice(
        (actualPage - 1) * ITENS_PER_PAGE,
        actualPage * ITENS_PER_PAGE
      );

      const responses = await getPokemons(paginatedEndpoints);
      dispatch({
        type: "SET_FILTERED_POKEMONS",
        payload: responses!.map((res) => res.data),
      });
    } catch (error) {
      handleError(error, "Error fetching filtered Pokemons:");
    }
  };

  const fetchPokemons = async () => {
    try {
      if (!habitatParam && !typeParam && !searchParam) {
        await fetchDefaultPokemons();
      } else {
        await fetchFilteredPokemons();
      }
    } catch (error) {
      handleError(error, "Error fetching Pokemons:");
    }
  };

  const fetchDefaultPokemons = async () => {
    const { count, results } = await getEndpoints(actualPage);
    if (results.length) {
      setTotalPages(Math.ceil(count / ITENS_PER_PAGE));
      const endpoints = results.map((item: { url: string }) => item.url);
      const responses = await getPokemons(endpoints);

      dispatch({
        type: "SET_POKEMONS",
        payload: responses!.map((res) => res.data),
      });
      dispatch({ type: "SET_FILTERED_POKEMONS", payload: [] });
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [actualPage, habitatParam, typeParam, searchParam]);

  const conditionToRenderAllPokemons =
    state.filteredPokemons.length == 0 &&
    !searchParam &&
    !habitatParam &&
    !typeParam;

  setRender(conditionToRenderAllPokemons);

  return (
    <PokemonsContext.Provider value={{ dispatch, state }}>
      {children}
    </PokemonsContext.Provider>
  );
}

export function usePokemonsContext() {
  return useContext(PokemonsContext);
}
