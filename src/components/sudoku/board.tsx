import { useState } from "react";
import { setBoardData } from "@/data/localStorage";
import Cell from "@/components/sudoku/cell";

interface BoardProps {
  board: Board;
}

export default function Board({ board }: BoardProps) {
  const [showHints, setShowHints] = useState(true);
  const [boardState, setBoardState] = useState(board);

  const cells = boardState.cells;

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

  function updateBoard() {
    const newBoard = { ...boardState };
    setBoardData(newBoard);
    setBoardState(newBoard);
  }

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
        {subgrids.map((gridCells, i) => (
          <div
            key={i}
            className="grid grid-cols-3 gap-1 bg-lime-700"
          >
            {gridCells.map((cell, j) => (
              <Cell
                key={j}
                cells={cells}
                pos={cell.pos}
                showHints={showHints}
                onChange={updateBoard}
              />
            ))}
          </div>
        ))}
      </div>
      <p>updatedAt: {new Date(boardState.updatedAt).toLocaleString()}</p>
    </>
  );
}
