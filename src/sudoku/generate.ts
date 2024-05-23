import { cyrb53 } from "@/util/hash";
import { randomRangeInt, splitmix32 } from "@/util/random";

export function generateBoard(seed: string, size: number = 9): Board {
  // Seed random number generator
  const rng = splitmix32(cyrb53(seed));

  // Create empty cells
  const cells: Cells = [];
  for (let x = 0; x < size; x++) {
    cells[x] = [];
    for (let y = 0; y < size; y++) {
      cells[x][y] = {
        value: randomRangeInt(rng, size) + 1,
        editable: false,
      };
    }
  }

  // Return generated board
  return {
    seed,
    cells,
  };
}
