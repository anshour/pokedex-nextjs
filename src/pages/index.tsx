import Pagination from "@/components/ui/pagination";
import { usePokemonList } from "@/hooks/use-pokemon";
import { useRouter } from "next/router";
import PokemonCard from "@/components/feature/pokemon-card";
import Link from "next/link";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("1");
  const { pokemons, pagination, isLoading } = usePokemonList({
    page: currentPage,
  });

  useEffect(() => {
    setCurrentPage((page) => (router.query.page as string) || page || "1");
  }, [router.query.page]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="px-3 py-3 ">
        <h1 className="text-3xl font-extrabold my-3">Pokedex</h1>
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
    </div>
  );
}
