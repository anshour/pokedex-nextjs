import {
  PokemonDetail,
  PokemonEvolutionResponse,
  PokemonMoveDetail,
  PokemonSpeciesDetail,
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

export const fetchPokemonList = async (page = 1, limit: number) => {
  const offset = (page - 1) * limit;

  return axios
    .get<PokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};

export const fetchPokemonDetail = async (id: number | string) => {
  return axios.get<PokemonDetail>(`/pokemon/${id}`).then((res) => res.data);
};

export const fetchPokemonSpecies = async (id: number | string) => {
  return axios
    .get<PokemonSpeciesDetail>(`/pokemon-species/${id}`)
    .then((res) => res.data);
};

export const fetchPokemonEvolution = async (id: number | string) => {
  return axios
    .get<PokemonEvolutionResponse>(`/evolution-chain/${id}`)
    .then((res) => res.data);
};

export const fetchPokemonMove = async (id: number | string) => {
  return axios.get<PokemonMoveDetail>(`/move/${id}`).then((res) => res.data);
};
