import { usePokemonDetail } from "@/hooks/use-pokemon";
import { capitalizeWords } from "@/utils/capitalize";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const pokemonId = router.query.id as string;

  const { pokemon } = usePokemonDetail(pokemonId);
  return (
    <div className="min-h-screen bg-gray-100 px-3 py-3">
      {pokemon ? (
        <>
          <h1 className="text-2xl font-bold">
            {capitalizeWords(pokemon.name)}
          </h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
