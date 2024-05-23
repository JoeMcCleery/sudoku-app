declare type Cell = {
  value?: number;
  editable: boolean;
};

declare type Cells = Cell[][];

declare type Board = {
  seed: string;
  cells: Cells;
};
