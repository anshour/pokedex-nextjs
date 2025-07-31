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
