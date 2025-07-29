import {
  fetchPokemonDetail,
  fetchPokemonList,
  fetchPokemonSpecies,
} from "@/api/pokemon";
import { QUERY_KEYS } from "@/constants/query-keys";
import displayErrorToast from "@/utils/display-error-toast";
import { getPokemonIdFromUrl } from "@/utils/pokemon";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const usePokemonList = ({ page = "1", limit = 20 }) => {
  const pageNumber = typeof page === "string" ? parseInt(page, 10) : page;

  const query = useQuery({
    queryKey: QUERY_KEYS.POKEMON_LIST(pageNumber, limit),
    queryFn: async () => {
      const data = await fetchPokemonList(pageNumber, limit);

      const detailedList = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonId = getPokemonIdFromUrl(pokemon.url);
          return fetchPokemonDetail(pokemonId!);
        })
      );

      return {
        pokemons: detailedList,
        pagination: {
          count: data.count,
          next: data.next,
          previous: data.previous,
          currentPage: pageNumber,
        },
      };
    },
    placeholderData: keepPreviousData,
    throwOnError: (error: Error) => {
      displayErrorToast(error);
      return false;
    },
  });

  const pokemons = query.data?.pokemons || [];
  const pagination = query.data?.pagination || {
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
  };

  return { pokemons, pagination, ...query };
};

export const usePokemonDetail = (id: string | number) => {
  const pokemonId = typeof id === "string" ? parseInt(id, 10) : id;

  const query = useQuery({
    queryKey: QUERY_KEYS.POKEMON_DETAIL(pokemonId),
    queryFn: async () => fetchPokemonDetail(pokemonId),
    enabled: !!pokemonId,
    placeholderData: keepPreviousData,
    throwOnError: (error: Error) => {
      displayErrorToast(error);
      return false;
    },
  });

  const pokemon = query.data || null;

  return { pokemon, ...query };
};

export const usePokemonSpecies = (id: string | number | null) => {
  const speciesId = typeof id === "string" ? parseInt(id, 10) : id;

  const query = useQuery({
    queryKey: QUERY_KEYS.POKEMON_SPECIES(speciesId!),
    queryFn: () => fetchPokemonSpecies(speciesId!),
    enabled: !!speciesId,
    placeholderData: keepPreviousData,
    throwOnError: (error: Error) => {
      displayErrorToast(error);
      return false;
    },
  });

  const species = query.data || null;

  return { species, ...query };
};
