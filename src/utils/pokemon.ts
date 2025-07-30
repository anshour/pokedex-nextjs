import {
  DEFAULT_POKEMON_COLOR,
  POKEMON_TYPE_COLORS,
  STAT_LEVEL,
  TOTAL_STAT_LEVEL,
} from "@/constants/pokemon";
import {
  EvolutionChain,
  EvolutionStep,
  PokemonSprites,
  PokemonStat,
} from "@/types/pokemon";

export enum StatLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export function getStatLevel(value: number): StatLevel {
  if (value >= STAT_LEVEL.high) return StatLevel.high;
  if (value >= STAT_LEVEL.medium) return StatLevel.medium;
  return StatLevel.low;
}

export enum TotalStatLevel {
  weak = "weak",
  average = "average",
  strong = "strong",
  legendary = "legendary",
}

export function getTotalStatLevel(total: number): TotalStatLevel {
  if (total >= TOTAL_STAT_LEVEL.legendary) return TotalStatLevel.legendary;
  if (total >= TOTAL_STAT_LEVEL.strong) return TotalStatLevel.strong;
  if (total >= TOTAL_STAT_LEVEL.average) return TotalStatLevel.average;
  return TotalStatLevel.weak;
}

export function getBaseStats(stats: PokemonStat[]) {
  const hpBaseStat =
    stats.find((stat) => stat.stat.name === "hp")?.base_stat || 0;
  const attackBaseStat =
    stats.find((stat) => stat.stat.name === "attack")?.base_stat || 0;
  const defenseBaseStat =
    stats.find((stat) => stat.stat.name === "defense")?.base_stat || 0;
  const specialAttackBaseStat =
    stats.find((stat) => stat.stat.name === "special-attack")?.base_stat || 0;
  const specialDefenseBaseStat =
    stats.find((stat) => stat.stat.name === "special-defense")?.base_stat || 0;
  const speedBaseStat =
    stats.find((stat) => stat.stat.name === "speed")?.base_stat || 0;
  const totalBaseStat = stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  return {
    hp: {
      base_stat: hpBaseStat,
      level: getStatLevel(hpBaseStat),
    },
    attack: {
      base_stat: attackBaseStat,
      level: getStatLevel(attackBaseStat),
    },
    defense: {
      base_stat: defenseBaseStat,
      level: getStatLevel(defenseBaseStat),
    },
    specialAttack: {
      base_stat: specialAttackBaseStat,
      level: getStatLevel(specialAttackBaseStat),
    },
    specialDefense: {
      base_stat: specialDefenseBaseStat,
      level: getStatLevel(specialDefenseBaseStat),
    },
    speed: {
      base_stat: speedBaseStat,
      level: getStatLevel(speedBaseStat),
    },
    total: {
      base_stat: totalBaseStat,
      level: getTotalStatLevel(totalBaseStat),
    },
  };
}

export function getPokemonIdFromUrl(url?: string): number | null {
  const match = url?.match(/\/pokemon\/(\d+)\//);
  return match ? parseInt(match[1], 10) : null;
}

export function getSpeciesIdFromUrl(url?: string): number | null {
  const match = url?.match(/\/pokemon-species\/(\d+)\//);
  return match ? parseInt(match[1], 10) : null;
}

export function getEvolutionChainIdFromUrl(url?: string): number | null {
  const match = url?.match(/\/evolution-chain\/(\d+)\//);
  return match ? parseInt(match[1], 10) : null;
}

export function getMoveIdFromUrl(url?: string): number | null {
  const match = url?.match(/\/move\/(\d+)\//);
  return match ? parseInt(match[1], 10) : null;
}

export function getPokemonGenderPercentage(
  genderRate: number | null
): [{ male: string; female: string; genderless: string }] {
  if (genderRate === null || genderRate < 0)
    return [{ male: "0%", female: "0%", genderless: "100%" }];
  if (genderRate === 0)
    return [{ male: "100%", female: "0%", genderless: "0%" }];
  if (genderRate === 8)
    return [{ male: "0%", female: "100%", genderless: "0%" }];

  const femalePercentage = (genderRate / 8) * 100;
  const malePercentage = 100 - femalePercentage;
  return [
    {
      male: `${malePercentage.toFixed(1)}%`,
      female: `${femalePercentage.toFixed(1)}%`,
      genderless: "0%",
    },
  ];
}

export function getPokemonThumbnailImage(sprites: PokemonSprites): string {
  return (
    sprites.front_default ||
    sprites.other?.["official-artwork"]?.front_default ||
    sprites.other?.["dream_world"]?.front_default ||
    sprites.other?.["home"]?.front_default ||
    "/default-pokemon.png"
  );
}

export function getPokemonArtworkImage(sprites: PokemonSprites): string {
  return (
    sprites.other?.["official-artwork"]?.front_default ||
    sprites.front_default ||
    sprites.other?.["dream_world"]?.front_default ||
    sprites.other?.["home"]?.front_default ||
    "/default-pokemon.png"
  );
}

export function getPokemonCardColor(type: string): string {
  const normalizedType = type.toLowerCase() as keyof typeof POKEMON_TYPE_COLORS;
  return POKEMON_TYPE_COLORS[normalizedType] || DEFAULT_POKEMON_COLOR;
}

export function getEvolutionStep(chain: EvolutionChain): EvolutionStep[] {
  const result: EvolutionStep[] = [];

  let current = chain;
  while (current) {
    const details = current.evolution_details?.[0];

    result.push({
      species: current.species,
      evolutionTrigger: details?.trigger?.name || null,
      minLevel: details?.min_level || null,
      pokemon: null, // Will be filled later
    });

    if (current.evolves_to.length > 0) {
      current = current.evolves_to[0];
    } else {
      break;
    }
  }

  return result;
}
