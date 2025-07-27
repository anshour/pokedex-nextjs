import {
  PokemonAbility,
  PokemonCries,
  PokemonGameIndex,
  PokemonMove,
  PokemonPastAbility,
  PokemonSpecies,
  PokemonSprites,
  PokemonStat,
  PokemonType,
} from "@/types/pokemon";
import { default as baseAxios } from "axios";

const axios = baseAxios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetailResponse {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: PokemonCries;
  forms: PokemonSpecies[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_abilities: PokemonPastAbility[];
  past_types: any[];
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export const fetchPokemonList = async (page = 1) => {
  const limit = 20;
  const offset = (page - 1) * limit;

  return axios
    .get<PokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

export const fetchPokemonDetail = async (id: number | string) => {
  return axios
    .get<PokemonDetailResponse>(`/pokemon/${id}`)
    .then((res) => res.data);
};


