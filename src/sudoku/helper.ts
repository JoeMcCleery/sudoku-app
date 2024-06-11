export function boardProgress(board: Board) {
  return (
    ((81 - board.numClues - cellsRemaining(board.cells)) / board.numClues) *
    100
  ).toFixed(0);
}

export function cellsRemaining(cells: Cells) {
  return cells.flat().reduce((acc, cell) => acc + (cell.value ? 0 : 1), 0);
}
