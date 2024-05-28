import { getLegalValues } from "@/sudoku/solver";
import Cell from "./cell";

interface BoardProps {
  board: Board;
}

export default function Board({ board }: BoardProps) {
  const cells = board.cells;
  return (
    <div className="grid grid-cols-9 grid-rows-9 gap-1">
      {cells.map((cellX, x) =>
        cellX.map((cell, y) => (
          <div
            key={`${x},${y}`}
            className={`relative aspect-square flex justify-center items-center  ${
              cell.editable ? "bg-slate-100" : "bg-lime-600"
            }`}
          >
            <Cell
              cell={cell}
              legalValues={getLegalValues(cells, cell.pos)}
            />
          </div>
        ))
      )}
    </div>
  );
}
