declare type Cell = {
  value?: number;
  readonly pos: {
    readonly x: number;
    readonly y: number;
  };
  editable: boolean;
};

declare type Cells = Cell[][];

declare type Board = {
  seed: string;
  numClues: number;
  cells: Cells;
};
