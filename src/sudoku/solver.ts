import { shuffle } from "@/util/random";

export function trySolveRecursive(cells: Cells, rng: () => number) {
  // Get empty cells
  const emptyCells = cells.flat().filter((cell) => !cell.value);

  // If no empty cells there must be a valid solution
  if (emptyCells.length == 0) {
    return true;
  }

  // Get random empty cell with least number of legal values remaining
  const [cell, legalValues] = emptyCells
    .map((c) => {
      const legalValues = getLegalValues(cells, c.pos);
      return [
        c,
        shuffle(legalValues, rng),
        legalValues.length + rng(),
      ] as const;
    })
    .sort((a, b) => a[2] - b[2])[0];

  // Try all legal values or until solution found
  while (legalValues.length > 0) {
    // Set cell legal value
    cell.value = legalValues.pop();

    // Check if solution can be found
    if (trySolveRecursive(cells, rng)) return true;

    // Unset cell value
    cell.value = undefined;
  }

  // Ran out of legal values with no solution found
  return false;
}

export function isSolved(cells: Cells) {
  // Create sets for each row, col and subgrid
  const rows = new Array(9).fill(null).map(() => new Set<number>());
  const cols = new Array(9).fill(null).map(() => new Set<number>());
  const subgrids = new Array(9).fill(null).map(() => new Set<number>());

  // Loop all cells
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      // Get cell value
      const value = cells[x][y].value;

      // Check cell value is valid
      if (!value || value < 1 || value > 9) return false;

      // Get subgrid index
      const subgridIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3);

      // Check if the value is duplicated in row, col or subgrid
      if (
        rows[x].has(value) ||
        cols[y].has(value) ||
        subgrids[subgridIndex].has(value)
      ) {
        return false;
      }

      // Add value to sets
      rows[x].add(value);
      cols[y].add(value);
      subgrids[subgridIndex].add(value);
    }
  }

  return true;
}

export function getLegalValues(cells: Cells, pos: { x: number; y: number }) {
  // Keep track of used values
  const usedValues: number[] = [];

  // Get subgrid start index
  const gridStartX = Math.floor(pos.x / 3) * 3;
  const gridStartY = Math.floor(pos.y / 3) * 3;

  // Store previous cell value
  const cell = cells[pos.x][pos.y];
  const prevValue = cell.value;
  cell.value = undefined;

  // Loop cells in row, col and subgrid
  for (let i = 0; i < 9; i++) {
    // Add row value
    usedValues.push(cells[i][pos.y].value || 0);
    // Add col value
    usedValues.push(cells[pos.x][i].value || 0);
    // Add subgrid value
    const gridX = gridStartX + (i % 3);
    const gridY = gridStartY + Math.floor(i / 3);
    usedValues.push(cells[gridX][gridY].value || 0);
  }

  // Reset cell previous value
  cell.value = prevValue;

  // Calculate difference between allValues and usedValues
  const allValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const legalValues = allValues.filter((v) => !usedValues.includes(v));

  // Return array of legal values
  return legalValues;
}
