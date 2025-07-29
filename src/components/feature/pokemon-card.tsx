import { PokemonDetail } from "@/types/pokemon";
import { capitalizeWords } from "@/utils/helper";
import { getPokemonArtworkImage, getPokemonCardColor } from "@/utils/pokemon";
import Badge from "../ui/badge";

interface PokemonCardProps {
  pokemon: PokemonDetail;
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const mainType = pokemon.types[0]?.type.name;
  const bgColor = getPokemonCardColor(mainType);

  return (
    <div
      className="p-2 rounded-lg cursor-pointer h-full flex flex-col"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="font-bold text-white">
        {capitalizeWords(pokemon.name)}
      </h2>

      <div className="flex justify-between flex-grow">
        <div>
          {pokemon.types.map((type) => (
            <Badge key={type.type.name}>
              {capitalizeWords(type.type.name)}
            </Badge>
          ))}
        </div>
        <div className="flex-grow flex justify-end items-end h-20 sm:h24">
          <img
            src={getPokemonArtworkImage(pokemon.sprites)}
            alt={pokemon.name}
            className="object-contain max-w-20 max-h-20 sm:max-w-24 sm:max-h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
