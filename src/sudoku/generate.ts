import { cyrb53 } from "@/util/hash";
import { shuffle, splitmix32 } from "@/util/random";
import { trySolveRecursive } from "@/sudoku/solver";

export function generateBoard(seed: string, numClues: number): Board {
  // Create empty cells
  const cells = createEmptyCells();

  // Seed random number generator
  const rng = splitmix32(cyrb53(seed));

  // Generate solution (should always be possible when starting with an empty board)
  trySolveRecursive(cells, rng);

  // Randomly remove cell values until desired number of clues remain
  const shuffledCells = shuffle(cells.flat(), rng);
  for (let i = 0; i < shuffledCells.length - numClues; i++) {
    const cell = shuffledCells[i];
    cell.value = undefined;
    cell.editable = true;
  }

  // Return generated board
  return {
    seed,
    numClues,
    cells,
    updatedAt: Date.now(),
  };
}

export function createEmptyCells(size: number = 9) {
  const cells: Cells = [];
  for (let x = 0; x < size; x++) {
    cells[x] = [];
    for (let y = 0; y < size; y++) {
      cells[x][y] = {
        pos: { x, y },
        editable: false,
      };
    }
  }
  return cells;
}
