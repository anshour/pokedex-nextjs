import { capitalizeWords, getPokemonArtworkImage } from "@/utils";
import { EvolutionStep } from "@/types/pokemon";
import { ChevronsDown } from "lucide-react";

interface Props {
  evolutionStep: EvolutionStep[];
}

const PokemonEvolutionSection = ({ evolutionStep }: Props) => {
  return (
    <div className="flex flex-col items-center py-4">
      {evolutionStep.map((step, index) => (
        <div key={step.species.name}>
          <img
            src={getPokemonArtworkImage(step!.pokemon!.sprites)}
            alt={step.species.name}
            className="object-contain h-22"
          />
          <h4 className="text-center font-medium text-sm">
            {capitalizeWords(step.species.name)}
          </h4>

          {index < evolutionStep.length - 1 && (
            <ChevronsDown className="text-gray-800 mx-auto my-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PokemonEvolutionSection;
