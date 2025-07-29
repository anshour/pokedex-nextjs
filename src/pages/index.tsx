import Pagination from "@/components/ui/pagination";
import { usePokemonList } from "@/hooks/use-pokemon";
import { useRouter } from "next/router";
import PokemonCard from "@/components/feature/pokemon-card";
import Link from "next/link";
import LoadingSpinner from "@/components/ui/loading-spinner";

export default function Home() {
  const router = useRouter();
  const page = (router.query.page || "1") as string;
  const { pokemons, pagination, isLoading } = usePokemonList({
    page,
  });


  return (
    <div className="px-3 py-3">
      <h1 className="text-2xl font-bold">Pokedex</h1>
      <br />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <div className="col-span-2 sm:col-span-3 md:col-span-4">
          <LoadingSpinner show={isLoading} />
        </div>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={pagination.currentPage}
        totalCount={pagination.count}
        pageSize={20}
      />
    </div>
  );
}
