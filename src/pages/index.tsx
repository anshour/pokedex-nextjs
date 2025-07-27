import { usePokemonList } from "@/hooks/use-pokemon";
import { capitalizeWords } from "@/utils/capitalize";
import { getPokemonArtworkImage } from "@/utils/pokemon";
import Link from "next/link";

export default function Home() {
  const { pokemons, isLoading, isFetching } = usePokemonList();

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-3">
      <h1 className="text-2xl font-bold">Pokedex</h1>
      <br />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            href={`/pokemon/${pokemon.id}`}
            className="bg-gray-900 p-2 rounded-lg cursor-pointer"
          >
            <h2 className="font-semibold text-white">
              {capitalizeWords(pokemon.name)}
            </h2>

            <div className="flex justify-between">
              <div>
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="inline-block bg-white/20 text-white px-2 py-1  rounded-xl text-xs m-1"
                  >
                    {capitalizeWords(type.type.name)}
                  </span>
                ))}
              </div>
              <img
                src={getPokemonArtworkImage(pokemon.sprites)}
                alt={pokemon.name}
                className="w-20"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
