interface CellProps {
  cell: Cell;
  legalValues: number[];
}

export default function Cell({ cell, legalValues }: CellProps) {
  return (
    <>
      {cell.editable && (
        <p className="absolute top-0 left-0 text-xs max-w-full p-1">
          {legalValues.join(", ")}
        </p>
      )}
      <p className="font-bold">{cell.value}</p>
    </>
  );
}
