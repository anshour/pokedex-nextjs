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

interface IntlName {
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
  names: IntlName[];
  order: number;
  pal_park_encounters: SpeciesPalParkEncounter[];
  pokedex_numbers: SpeciesPokedexNumber[];
  shape: BasicProperty;
  varieties: SpeciesVariety[];
}

interface ContestCombos {
  normal: ContestComboDetail;
  super: ContestComboDetail;
}

interface ContestComboDetail {
  use_after: BasicProperty[] | null;
  use_before: BasicProperty[] | null;
}

interface EffectEntry {
  effect: string;
  language: BasicProperty;
  short_effect: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: BasicProperty;
  version_group: BasicProperty;
}
interface Machine {
  machine: {
    url: string;
  };
  version_group: BasicProperty;
}

export interface PokemonMoveDetail {
  accuracy: number;
  contest_combos: ContestCombos;
  contest_effect: {
    url: string;
  };
  contest_type: BasicProperty;
  damage_class: BasicProperty;
  effect_chance: null;
  effect_changes: any[];
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: BasicProperty;
  id: number;
  learned_by_pokemon: BasicProperty[];
  machines: Machine[];
  meta: MoveMeta;
  name: string;
  names: IntlName[];
  past_values: any[];
  power: number;
  pp: number;
  priority: number;
  stat_changes: any[];
  super_contest_effect: {
    url: string;
  };
  target: BasicProperty;
  type: BasicProperty;
}

interface MoveMeta {
  ailment: BasicProperty;
  ailment_chance: number;
  category: BasicProperty;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: null | number;
  max_turns: null | number;
  min_hits: null | number;
  min_turns: null | number;
  stat_chance: number;
}

export interface PokemonEvolutionResponse {
  baby_trigger_item: null;
  chain: EvolutionChain;
  id: number;
}

export interface EvolutionStep {
  pokemon: PokemonDetail | null;
  species: BasicProperty;
  evolutionTrigger: string | null;
  minLevel: number | null;
}

export interface EvolutionChain {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionChain[];
  is_baby: boolean;
  species: BasicProperty;
}

interface EvolutionDetail {
  gender: null | any;
  held_item: null | BasicProperty;
  item: BasicProperty | null;
  known_move: null | any;
  known_move_type: null | any;
  location: null | any;
  min_affection: null | number;
  min_beauty: null | number;
  min_happiness: number | null;
  min_level: null | number;
  needs_overworld_rain: boolean;
  party_species: null | any;
  party_type: null | any;
  relative_physical_stats: null | any;
  time_of_day: string;
  trade_species: null | any;
  trigger: BasicProperty;
  turn_upside_down: boolean;
}
