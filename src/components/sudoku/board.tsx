import { getLegalValues } from "@/sudoku/solver";
import Cell from "./cell";
import { useState } from "react";

interface BoardProps {
  board: Board;
}

export default function Board({ board }: BoardProps) {
  const [showHints, setShowHints] = useState(true);

  const cells = board.cells;
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

      <div className="grid grid-cols-9 grid-rows-9 gap-1">
        {cells.map((cellX, x) =>
          cellX.map((cell, y) => (
            <div
              key={`${x},${y}`}
              className={`relative aspect-square flex justify-center items-center  ${
                cell.editable ? "bg-sky-100" : "bg-lime-600"
              }`}
            >
              <Cell
                cell={cell}
                legalValues={getLegalValues(cells, cell.pos)}
                showHints={showHints}
              />
            </div>
          ))
        )}
      </div>
      <p>updatedAt: {new Date(board.updatedAt).toLocaleString()}</p>
    </>
  );
}
