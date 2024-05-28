interface CellProps {
  cell: Cell;
}

export default function Cell({ cell }: CellProps) {
  return <p>{cell.value}</p>;
}
