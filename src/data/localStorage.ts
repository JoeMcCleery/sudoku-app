import { cyrb53 } from "@/util/hash";

function getBoardKey(seed: string, numClues: number) {
  return `board-${cyrb53(seed + numClues)}`;
}

export function getBoardData(seed: string, numClues: number): Board | null {
  const key = getBoardKey(seed, numClues);
  const board = localStorage.getItem(key);
  return board ? JSON.parse(board) : null;
}

export function setBoardData(board: Board) {
  const key = getBoardKey(board.seed, board.numClues);
  board.updatedAt = Date.now();
  localStorage.setItem(key, JSON.stringify(board));
}
