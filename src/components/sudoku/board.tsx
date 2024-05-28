import { getLegalValues } from "@/sudoku/solver";
import Cell from "./cell";
import { useState } from "react";

interface BoardProps {
  board: Board;
}

export default function Board({ board }: BoardProps) {
  const [showHints, setShowHints] = useState(true);

  const cells = board.cells;

  const subgrids = cells.flat().reduce(
    (acc: Cells, cell) => {
      const subgridIndex =
        Math.floor(cell.pos.x / 3) + Math.floor(cell.pos.y / 3) * 3;
      const i = (cell.pos.x % 3) + (cell.pos.y % 3) * 3;
      acc[subgridIndex][i] = cell;
      return acc;
    },
    Array(9)
      .fill(null)
      .map(() => Array(9))
  );

  return (
    <>
      <label htmlFor="showHints">Show hints </label>
      <input
        type="checkbox"
        id="showHints"
        name="showHints"
        onChange={() => setShowHints((h) => !h)}
        checked={showHints}
      />

      <div className="grid grid-cols-3 board bg-lime-800 gap-2 p-2">
        {subgrids.map((gidCells, i) => (
          <div
            key={i}
            className="grid grid-cols-3 gap-1 bg-lime-700"
          >
            {gidCells.map((cell, j) => (
              <div
                key={j}
                className={`relative aspect-square flex justify-center items-center text-lime-950 ${
                  cell.editable
                    ? cell.value
                      ? "bg-lime-200/80"
                      : "bg-lime-50"
                    : "bg-lime-400/30"
                }`}
              >
                <Cell
                  cell={cell}
                  legalValues={getLegalValues(cells, cell.pos)}
                  showHints={showHints}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <p>updatedAt: {new Date(board.updatedAt).toLocaleString()}</p>
    </>
  );
}
