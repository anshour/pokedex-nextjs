export const QUERY_KEYS = {
  POKEMON_LIST: (page: number, limit: number) => ["pokemon", "list", page, limit],
  POKEMON_DETAIL: (id: number) => ["pokemon", "detail", id],
  POKEMON_SPECIES: (id: number) => ["pokemon", "species", id],
};
