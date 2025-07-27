import { fetchPokemonDetail, fetchPokemonList } from "@/api/pokemon";
import { QUERY_KEYS } from "@/constants/query-keys";
import displayErrorToast from "@/utils/display-error-toast";
import { getPokemonIdFromUrl } from "@/utils/pokemon";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const usePokemonList = (page = 1) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.POKEMON_LIST, page],
    queryFn: async () => {
      const data = await fetchPokemonList(page);

      const detailedList = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonId = getPokemonIdFromUrl(pokemon.url);
          return fetchPokemonDetail(pokemonId!);
        })
      );

      return detailedList;
    },
    placeholderData: keepPreviousData,
    throwOnError: (error: Error) => {
      displayErrorToast(error);
      return false;
    },
  });

  const pokemons = query.data || [];

  return { pokemons, ...query };
};

export const usePokemonDetail = (id: string | number) => {
  const pokemonId = typeof id === "string" ? parseInt(id, 10) : id;

  const query = useQuery({
    queryKey: [QUERY_KEYS.POKEMON_DETAIL(pokemonId)],
    queryFn: async () => {
      const data = await fetchPokemonDetail(pokemonId);
      return data;
    },
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
