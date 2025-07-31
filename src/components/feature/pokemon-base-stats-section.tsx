import { PokemonDetail } from "@/types/pokemon";
import Progress from "../ui/progress";
import { getBaseStats, StatLevel, TotalStatLevel } from "@/utils";
import { TOTAL_STAT_LEVEL } from "@/constants/pokemon";

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
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <th className="cell-head">HP</th>
            <td className="cell-body">{hp.base_stat}</td>
            <td className="cell-body w-full">
              <Progress color={getStatColor(hp.level)} value={hp.base_stat} />
            </td>
          </tr>
          <tr>
            <th className="cell-head">Attack</th>
            <td className="cell-body">{attack.base_stat}</td>
            <td className="cell-body w-full">
              <Progress
                color={getStatColor(attack.level)}
                value={attack.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th className="cell-head">Defense</th>
            <td className="cell-body">{defense.base_stat}</td>
            <td className="cell-body w-full">
              <Progress
                color={getStatColor(defense.level)}
                value={defense.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th className="cell-head">Sp. Atk</th>
            <td className="cell-body">{specialAttack.base_stat}</td>
            <td className="cell-body w-full">
              <Progress
                color={getStatColor(specialAttack.level)}
                value={specialAttack.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th className="cell-head">Sp. Def</th>
            <td className="cell-body">{specialDefense.base_stat}</td>
            <td className="cell-body w-full">
              <Progress
                color={getStatColor(specialDefense.level)}
                value={specialDefense.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th className="cell-head">Speed</th>
            <td className="cell-body">{speed.base_stat}</td>
            <td className="cell-body w-full">
              <Progress
                color={getStatColor(speed.level)}
                value={speed.base_stat}
              />
            </td>
          </tr>
          <tr>
            <th className="cell-head">Total</th>
            <td className="cell-body">{total.base_stat}</td>
            <td className="cell-body w-full">
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
