export function capitalizeWords(str?: string): string {
  if (!str) return "";
  const words = str.toLowerCase().split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

export function formatName(str?: string | null): string {
  if (!str || typeof str !== "string") return "";

  return capitalizeWords(str.replace(/-/g, " "));
}

export function kgToLbs(kg: number): number {
  const lbs = kg * 2.20462;
  return Math.round(lbs * 100) / 100;
}

export function hgToLbs(hg: number): number {
  const lbs = hgToKg(hg) * 2.20462;
  return Math.round(lbs * 100) / 100;
}

export function hgToKg(hg: number): number {
  const kg = hg / 100;
  return Math.round(kg * 100) / 100;
}

export function dmToCm(dm: number): number {
  const cm = dm * 10;
  return Math.round(cm * 100) / 100;
}

export function dmToFeetInches(dm: number): string {
  const meters = dm / 10;
  const totalInches = meters * 39.3701;
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return `${feet}'${inches.toFixed(1)}"`;
}
