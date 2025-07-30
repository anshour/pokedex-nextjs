import { PokemonDetail, PokemonSpeciesDetail } from "@/types/pokemon";
import {
  capitalizeWords,
  dmToCm,
  dmToFeetInches,
  hgToKg,
  hgToLbs,
  kgToLbs,
} from "@/utils/helper";
import { getPokemonGenderPercentage } from "@/utils/pokemon";
import { Mars, Venus, VenusAndMars } from "lucide-react";

interface Props {
  pokemon: PokemonDetail;
  species: PokemonSpeciesDetail;
}

const PokemonAboutSection = ({ pokemon, species }: Props) => {
  const genderPercentages = getPokemonGenderPercentage(
    species?.gender_rate || 0
  );

  return (
    <div className="py-3 overflow-x-auto">
      <table className="table-auto">
        <tbody>
          <tr>
            <th className="cell-head">Species</th>
            <td className="cell-body">
              {capitalizeWords(pokemon.species.name)}
            </td>
          </tr>
          <tr>
            <th className="cell-head">Height</th>
            <td className="cell-body">
              {dmToFeetInches(pokemon.height)} ({dmToCm(pokemon.height)} cm)
            </td>
          </tr>
          <tr>
            <th className="cell-head">Weight</th>
            <td className="cell-body">
              {hgToLbs(pokemon.weight)} lbs ({hgToKg(pokemon.weight)} kg)
            </td>
          </tr>
          <tr>
            <th className="cell-head">Abilities</th>
            <td className="cell-body">
              {pokemon.abilities
                .filter((ability) => ability.ability !== null)
                .map((ability) => capitalizeWords(ability.ability!.name))
                .join(", ")}
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="font-bold ml-2 mt-3 mb-2">Breeding</h3>
      <table className="table">
        <tbody>
          <tr>
            <th className="cell-head">Gender</th>
            <td className="cell-body">
              {genderPercentages.map((percentage, index) => (
                <div className="flex gap-2" key={index}>
                  {percentage.male !== "0%" && (
                    <div className="flex items-center gap-1">
                      <Mars size={14} color="purple" />
                      <span>{percentage.male}</span>
                    </div>
                  )}

                  {percentage.female !== "0%" && (
                    <div className="flex items-center gap-1">
                      <Venus size={14} color="fuchsia" />
                      <span>{percentage.female}</span>
                    </div>
                  )}

                  {percentage.genderless !== "0%" && (
                    <div className="flex items-center gap-1">
                      <VenusAndMars size={14} color="gray" />
                      <span>{percentage.genderless}</span>
                    </div>
                  )}
                </div>
              ))}
            </td>
          </tr>
          <tr>
            <th className="cell-head">Egg Groups</th>
            <td className="cell-body">
              {species.egg_groups
                .map((group) => capitalizeWords(group.name))
                .join(", ")}
            </td>
          </tr>
          <tr>
            <th className="cell-head">Egg Cycle</th>
            <td className="cell-body">{species.hatch_counter} steps</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonAboutSection;
