import { PokemonSprites, PokemonStat } from "@/types/pokemon";

export const STAT_LEVEL = {
  low: 0,
  medium: 60,
  high: 100,
};

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

export const TOTAL_STAT_LEVEL = {
  weak: 0,
  average: 400,
  strong: 500,
  legendary: 600,
};

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
    // TODO: Add a fallback image URL
    ""
  );
}

export function getPokemonArtworkImage(sprites: PokemonSprites): string {
  return (
    sprites.other?.["official-artwork"]?.front_default ||
    sprites.front_default ||
    // TODO: Add a fallback image URL
    ""
  );
}

export function getPokemonCardColor(type: string): string {
  const typeColorMap: Record<string, string> = {
    normal: "#9B9B7A",
    fire: "#FF6B35",
    water: "#4A90E2",
    electric: "#FFD23F",
    grass: "#66BB6A",
    ice: "#81D4FA",
    fighting: "#E53935",
    poison: "#AB47BC",
    ground: "#D4A574",
    flying: "#8E7CC3",
    psychic: "#EC407A",
    bug: "#8BC34A",
    rock: "#A1887F",
    ghost: "#7986CB",
    dragon: "#5C6BC0",
    dark: "#6D4C41",
    steel: "#90A4AE",
    fairy: "#F48FB1",
  };

  return typeColorMap[type.toLowerCase()] || "#424242";
}
