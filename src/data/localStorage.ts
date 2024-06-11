import { isSolved } from "@/sudoku/solver";
import { cyrb53 } from "@/util/hash";

function getBoardDataKey(seed: string, numClues: number) {
  return `board-${cyrb53(seed + numClues)}`;
}

export function getBoardData(seed: string, numClues: number): BoardData | null {
  if (typeof localStorage == "undefined") return null;

  const key = getBoardDataKey(seed, numClues);
  const board = localStorage.getItem(key);
  return [key, board ? JSON.parse(board) : undefined];
}

export function setBoardData(board: Board) {
  const key = getBoardDataKey(board.seed, board.numClues);
  board.updatedAt = Date.now();
  board.completedAt = isSolved(board.cells) ? Date.now() : undefined;
  localStorage.setItem(key, JSON.stringify(board));
}

export function getAllBoardData(): BoardData[] {
  if (typeof localStorage == "undefined") return [];

  return Object.entries(localStorage)
    .filter(([key]) => key.startsWith("board"))
    .map<[string, Board]>(([key, data]) => [key, JSON.parse(data)])
    .sort(
      ([key0, board0], [key1, board1]) => board1.updatedAt - board0.updatedAt
    );
}

export function resetBoard(seed: string, numClues: number) {
  const data = getBoardData(seed, numClues);

  if (!data) return;

  data[1].cells.flat().forEach((cell) => {
    if (cell.editable) return;

    cell.value = undefined;
  });
}

export function clearBoardData(seed: string, numClues: number) {
  const key = getBoardDataKey(seed, numClues);
  localStorage.removeItem(key);
}

export function clearAllBoardData() {
  localStorage.clear();
}
