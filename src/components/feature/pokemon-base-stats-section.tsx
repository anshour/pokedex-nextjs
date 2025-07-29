import { PokemonDetail } from "@/types/pokemon";
import Progress from "../ui/progress";
import {
  getBaseStats,
  StatLevel,
  TOTAL_STAT_LEVEL,
  TotalStatLevel,
} from "@/utils/pokemon";

interface Props {
  pokemon: PokemonDetail;
}

const PokemonBaseStatsSection = ({ pokemon }: Props) => {
  const { hp, attack, defense, specialAttack, specialDefense, speed, total } =
    getBaseStats(pokemon.stats);

  const getStatColor = (level: StatLevel) => {
    switch (level) {
      case StatLevel.low:
        return "red";
      case StatLevel.medium:
        return "green";
      case StatLevel.high:
        return "green";
    }
  };

  const getTotalStatColor = (level: TotalStatLevel) => {
    switch (level) {
      case TotalStatLevel.weak:
        return "red";
      case TotalStatLevel.average:
        return "red";
      case TotalStatLevel.strong:
        return "green";
      case TotalStatLevel.legendary:
        return "green";
    }
  };

  return (
    <div className="py-3">
      <table className="table-stats w-full">
        <tbody>
          <tr>
            <th>HP</th>
            <td>{hp.base_stat}</td>
            <td className="w-full">
              <Progress color={getStatColor(hp.level)} value={hp.base_stat} />
            </td>
          </tr>
          <tr>
            <th>Attack</th>
            <td>{attack.base_stat}</td>
            <td className="w-full">
              <Progress
                color={getStatColor(attack.level)}
                value={attack.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th>Defense</th>
            <td>{defense.base_stat}</td>
            <td className="w-full">
              <Progress
                color={getStatColor(defense.level)}
                value={defense.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th>Sp. Atk</th>
            <td>{specialAttack.base_stat}</td>
            <td className="w-full">
              <Progress
                color={getStatColor(specialAttack.level)}
                value={specialAttack.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th>Sp. Def</th>
            <td>{specialDefense.base_stat}</td>
            <td className="w-full">
              <Progress
                color={getStatColor(specialDefense.level)}
                value={specialDefense.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th>Speed</th>
            <td>{speed.base_stat}</td>
            <td className="w-full">
              <Progress
                color={getStatColor(speed.level)}
                value={speed.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{total.base_stat}</td>
            <td className="w-full">
              <Progress
                color={getTotalStatColor(total.level)}
                value={total.base_stat}
                max={TOTAL_STAT_LEVEL.legendary}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonBaseStatsSection;
