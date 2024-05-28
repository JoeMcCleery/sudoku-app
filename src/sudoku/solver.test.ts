import { createEmptyCells, generateBoard } from "./generate";
import { getLegalValues, isSolved, trySolveRecursive } from "./solver";

it("Sudoku: trySolveRecursive() updates cells and returns true when solution found otherwise doesn't change cells and returns false.", () => {
  const cells = createEmptyCells();
  expect(cells[0][0].value).toBeUndefined();
  let solved = trySolveRecursive(cells, Math.random);
  expect(solved).toBeTruthy();
  expect(isSolved(cells)).toBeTruthy();
  expect(cells[0][0].value).toBeDefined();

  // Set invalid properties so board cannot be solved
  cells[0][0].value = undefined;
  cells[1][0].value = undefined;
  cells[2][0].value = 1;
  cells[3][0].value = 1;

  solved = trySolveRecursive(cells, Math.random);
  expect(solved).toBeFalsy();
  expect(isSolved(cells)).toBeFalsy();
  expect(cells[0][0].value).toBeUndefined();
  expect(cells[1][0].value).toBeUndefined();
});

it("Sudoku: isSolved() is only true on a solved board.", () => {});

it("Sudoku: getLegalValues() returns a list of legal values.", () => {
  let prevValue;
  let legalValues;

  const cells = createEmptyCells();

  // Empty board should all all values
  legalValues = getLegalValues(cells, { x: 0, y: 0 });
  expect(legalValues).toHaveLength(9);
  expect(legalValues).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // Solve the empty board
  trySolveRecursive(cells, Math.random);

  // Test cell at 0,0
  prevValue = cells[0][0].value;
  cells[0][0].value = undefined;
  legalValues = getLegalValues(cells, { x: 0, y: 0 });
  expect(legalValues).toContain(prevValue);

  // Test cell at 1,0
  prevValue = cells[1][0].value;
  cells[1][0].value = undefined;
  legalValues = getLegalValues(cells, { x: 1, y: 0 });
  expect(legalValues).toContain(prevValue);

  // Test cell at 2,0
  prevValue = cells[2][0].value;
  cells[2][0].value = undefined;
  legalValues = getLegalValues(cells, { x: 2, y: 0 });
  expect(legalValues).toContain(prevValue);
});
