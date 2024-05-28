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
  readonly seed: string;
  readonly numClues: number;
  readonly cells: Cells;
  updatedAt: number;
  completedAt?: number;
};
