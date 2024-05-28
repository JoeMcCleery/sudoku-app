declare type Position = {
  readonly x: number;
  readonly y: number;
};

declare type Cell = {
  value?: number;
  readonly pos: Position;
  editable: boolean;
};

declare type Cells = Cell[][];

declare type Board = {
  seed: string;
  numClues: number;
  cells: Cells;
  updatedAt: number;
  completedAt?: number;
};
