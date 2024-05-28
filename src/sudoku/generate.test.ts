import { createEmptyCells, generateBoard } from "./generate";

it("Sudoku: generateBoard() returns a board.", () => {
  // Generate board
  const puzzle = generateBoard("TestBoard", 40);

  const cellsFlat = puzzle.cells.flat();
  const clues = cellsFlat.filter((cell) => cell.value);

  // Test board properties
  expect(puzzle).toHaveProperty("seed", "TestBoard");
  expect(puzzle).toHaveProperty("numClues", 40);
  expect(clues).toHaveLength(40);
  expect(puzzle).toHaveProperty("cells");
  expect(cellsFlat).toHaveLength(81);
});

it("Sudoku: createEmptyCells(x) returns x*x grid of empty cells.", () => {
  // 9 * 9 grid
  const cellsDefault = createEmptyCells();
  expect(cellsDefault).toHaveLength(9);
  expect(cellsDefault.flat()).toHaveLength(9 * 9);

  // 6 * 6 grid
  const cells6 = createEmptyCells(6);
  expect(cells6).toHaveLength(6);
  expect(cells6.flat()).toHaveLength(6 * 6);

  // Empty cell properties
  const cell = cells6[2][3];
  expect(cell).toHaveProperty("pos", { x: 2, y: 3 });
  expect(cell).toHaveProperty("editable", false);
  expect(cell.value).toBeUndefined();
});
