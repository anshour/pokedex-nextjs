export interface PokemonAbility {
  ability: PokemonSpecies | null;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}

export interface PokemonGameIndex {
  game_index: number;
  version: PokemonSpecies;
}

export interface PokemonMove {
  move: PokemonSpecies;
  version_group_details: PokemonVersionGroupDetail[];
}

export interface PokemonVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PokemonSpecies;
  order: number | null;
  version_group: PokemonSpecies;
}

export interface PokemonPastAbility {
  abilities: PokemonAbility[];
  generation: PokemonSpecies;
}

export interface PokemonSprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Record<string, any>;
  versions?: Record<string, any>;
  animated?: PokemonSprites;
}
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonSpecies;
}

export interface PokemonType {
  slot: number;
  type: PokemonSpecies;
}
