import { PokemonSprites } from "@/types/pokemon";

export function getPokemonIdFromUrl(url: string): number | null {
  const match = url.match(/\/pokemon\/(\d+)\//);
  return match ? parseInt(match[1], 10) : null;
}

export function getPokemonThumbnailImage(sprites: PokemonSprites): string {
  return (
    sprites.front_default ||
    sprites.other?.["official-artwork"]?.front_default ||
    ""
  );
}

export function getPokemonArtworkImage(sprites: PokemonSprites): string {
  return (
    sprites.other?.["official-artwork"]?.front_default ||
    sprites.front_default ||
    ""
  );
}
