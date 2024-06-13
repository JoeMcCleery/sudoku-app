import { cellsRemaining } from "@/sudoku/helper";
import Link from "next/link";

interface GamesListProps {
  data: BoardData[];
}

export function GamesList({ data }: GamesListProps) {
  return (
    <div className="grid gap-2">
      <h3 className="text-xl font-bold">Past Games:</h3>

      <table className="m-auto text-slate-900 rounded overflow-hidden">
        <colgroup>
          <col width="100%"></col>
        </colgroup>

        <thead>
          <tr className="bg-slate-600 text-slate-50">
            <th className="p-2">Seed</th>
            <th className="p-2">Num Clues</th>
            <th className="p-2">Cells Left</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map(([key, board]) => (
            <tr
              key={key}
              className="bg-slate-100 even:bg-slate-200 hover:bg-slate-300 transition-colors"
            >
              <td className="p-2 text-ellipsis overflow-hidden max-w-1">
                {board.seed}
              </td>
              <td className="p-2">{board.numClues}</td>
              <td className={`p-2 ${board.completedAt && "font-bold"}`}>
                {board.completedAt ? "✓" : cellsRemaining(board.cells)}
              </td>
              <td className="p-2">
                <Link
                  href={`/play?seed=${board.seed}&numClues=${board.numClues}`}
                  title={`continue game. seed: ${board.seed}, numClues: ${board.numClues}`}
                  className="block bg-sky-800 p-2 rounded text-sky-50"
                >
                  Play
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
