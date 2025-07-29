interface BasicProperty {
  name: string;
  url: string;
}

interface PokemonAbility {
  ability: BasicProperty | null;
  is_hidden: boolean;
  slot: number;
}

interface SpeciesVariety {
  is_default: boolean;
  pokemon: BasicProperty;
}

interface SpeciesFlavorTextEntry {
  flavor_text: string;
  language: BasicProperty;
  version: BasicProperty;
}

interface PokemonCries {
  latest: string;
  legacy: string;
}

interface SpeciesGenus {
  genus: string;
  language: BasicProperty;
}

interface SpeciesName {
  language: BasicProperty;
  name: string;
}

interface SpeciesPalParkEncounter {
  area: BasicProperty;
  base_score: number;
  rate: number;
}

interface SpeciesPokedexNumber {
  entry_number: number;
  pokedex: BasicProperty;
}

interface PokemonGameIndex {
  game_index: number;
  version: BasicProperty;
}

interface PokemonMove {
  move: BasicProperty;
  version_group_details: PokemonVersionGroupDetail[];
}

interface PokemonVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: BasicProperty;
  order: number | null;
  version_group: BasicProperty;
}

interface PokemonPastAbility {
  abilities: PokemonAbility[];
  generation: BasicProperty;
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
  stat: BasicProperty;
}

interface PokemonType {
  slot: number;
  type: BasicProperty;
}

export interface PokemonDetail {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: PokemonCries;
  forms: BasicProperty[];
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
  species: BasicProperty;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonSpeciesDetail {
  base_happiness: number;
  capture_rate: number;
  color: BasicProperty;
  egg_groups: BasicProperty[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: BasicProperty | null;
  flavor_text_entries: SpeciesFlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: SpeciesGenus[];
  generation: BasicProperty;
  growth_rate: BasicProperty;
  habitat: BasicProperty;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: SpeciesName[];
  order: number;
  pal_park_encounters: SpeciesPalParkEncounter[];
  pokedex_numbers: SpeciesPokedexNumber[];
  shape: BasicProperty;
  varieties: SpeciesVariety[];
}
