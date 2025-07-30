import { PokemonMoveDetail } from "@/types/pokemon";
import { capitalizeWords, formatName } from "@/utils/helper";

interface Props {
  moves: PokemonMoveDetail[];
}

const PokemonMovesSection = ({ moves }: Props) => {
  return (
    <div className="py-3 overflow-x-auto w-full">
      <table className="table-stats w-full">
        <thead>
          <tr>
            <th className="cell-head">Move Name</th>
            <th className="cell-head">Type</th>
            <th className="cell-head">Power</th>
            <th className="cell-head">Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {moves.map((move) => (
            <tr key={move.id}>
              <td className="cell-body">{formatName(move.name)}</td>
              <td className="cell-body">{capitalizeWords(move.type.name)}</td>
              <td className="cell-body">{move.power || "—"}</td>
              <td className="cell-body">{move.accuracy || "—"}</td>
            </tr>
          ))}
          {moves.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="font-medium text-sm text-center text-gray-500 py-6"
              >
                No moves available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonMovesSection;
