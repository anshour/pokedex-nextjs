import PokemonAboutSection from "@/components/feature/pokemon-about-section";
import PokemonBaseStatsSection from "@/components/feature/pokemon-base-stats-section";
import PokemonEvolutionSection from "@/components/feature/pokemon-evolution-section";
import PokemonMovesSection from "@/components/feature/pokemon-moves-section";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Tabs, { TabData } from "@/components/ui/tabs";
import { usePokemonDetail, usePokemonSpecies } from "@/hooks/use-pokemon";
import { capitalizeWords } from "@/utils/helper";
import {
  getPokemonArtworkImage,
  getPokemonCardColor,
  getSpeciesIdFromUrl,
} from "@/utils/pokemon";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const pokemonId = router.query.id as string;

  const tabsData: TabData[] = [
    { label: "About" },
    { label: "Base Stats" },
    { label: "Evolution" },
    { label: "Moves" },
  ];

  const [activeTab, setActiveTab] = useState(tabsData[0]);

  const { pokemon } = usePokemonDetail(pokemonId);
  const { species } = usePokemonSpecies(
    getSpeciesIdFromUrl(pokemon?.species.url)
  );

  const isLoadingComplete = pokemon !== null && species !== null;

  const handleTabChange = (index: number, tab: TabData): void => {
    setActiveTab(tab);
  };

  const mainType = pokemon?.types[0]?.type.name;
  const bgColor = getPokemonCardColor(mainType || "");

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: bgColor }}
    >
      {isLoadingComplete ? (
        <div className="flex flex-col sm:flex-row items-start justify-between p-0 sm:p-4 sm:gap-8 flex-grow">
          <div className="p-3 sm:p-0 z-10 w-full">
            <Link href="/">
              <Button className="bg-transparent text-white p-0 mb-3 focus:ring-0 hover:bg-transparent focus:ring-offset-0 focus:outline-none">
                <MoveLeft />
              </Button>
            </Link>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  {capitalizeWords(pokemon.name)}
                </h1>
                <div>
                  {pokemon.types.map((type) => (
                    <Badge key={type.type.name}>
                      {capitalizeWords(type.type.name)}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white">#001</span>
              </div>
            </div>
            <img
              className="mx-auto h-42 sm:h-64 -mb-20"
              src={getPokemonArtworkImage(pokemon.sprites)}
              alt={pokemon.name}
            />
          </div>

          <div className="bg-white rounded-t-3xl sm:rounded-3xl px-3 pt-7 sm:pt-3 pb-3 w-full mt-10">
            <Tabs tabs={tabsData} onTabChange={handleTabChange} />
            {activeTab.label === "About" && (
              <PokemonAboutSection pokemon={pokemon} species={species} />
            )}
            {activeTab.label === "Base Stats" && (
              <PokemonBaseStatsSection pokemon={pokemon} />
            )}
            {activeTab.label === "Evolution" && <PokemonEvolutionSection />}
            {activeTab.label === "Moves" && <PokemonMovesSection />}
          </div>
        </div>
      ) : (
        <div className="mt-24 text-white">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
