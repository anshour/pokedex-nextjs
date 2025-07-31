import {
  fetchPokemonDetail,
  fetchPokemonEvolution,
  fetchPokemonList,
  fetchPokemonMove,
  fetchPokemonSpecies,
} from "@/api/pokemon";
import { QUERY_KEYS } from "@/constants/query-keys";
import {
  getEvolutionChainIdFromUrl,
  getEvolutionStep,
  getMoveIdFromUrl,
  getPokemonIdFromUrl,
  getSpeciesIdFromUrl,
} from "@/utils";
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
    queryFn: async () => {
      const data = await fetchPokemonDetail(pokemonId);

      const speciesId = getSpeciesIdFromUrl(data.species.url);
      const species = await fetchPokemonSpecies(speciesId!);

      const evolutionChainId = getEvolutionChainIdFromUrl(
        species.evolution_chain.url
      );
      const evolutionData = await fetchPokemonEvolution(evolutionChainId!);

      const evolutionStep = getEvolutionStep(evolutionData.chain);

      const detailedEvolutionStep = await Promise.all(
        evolutionStep.map(async (step) => {
          const pokemonId = getSpeciesIdFromUrl(step.species.url);
          const pokemonDetail = await fetchPokemonDetail(pokemonId!);
          return {
            ...step,
            pokemon: pokemonDetail,
          };
        })
      );

      const moves = await Promise.all(
        // Only get the first 10 moves
        data.moves.slice(0, 10).map(async (move) => {
          const moveId = getMoveIdFromUrl(move.move.url);
          const moveDetail = await fetchPokemonMove(moveId!);

          return moveDetail;
        })
      );

      return {
        pokemon: data,
        move_detail: moves,
        species,
        evolution_chain: evolutionData,
        evolution_step: detailedEvolutionStep,
      };
    },
    enabled: !!pokemonId,
  });

  const pokemon = query.data?.pokemon || null;
  const moves = query.data?.move_detail || [];
  const species = query.data?.species || null;
  const evolutionChain = query.data?.evolution_chain || null;
  const evolutionStep = query.data?.evolution_step || [];

  return { pokemon, moves, species, evolutionChain, evolutionStep, ...query };
};
