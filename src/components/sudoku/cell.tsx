interface CellProps {
  cell: Cell;
  legalValues: number[];
  showHints: boolean;
}

export default function Cell({ cell, legalValues, showHints }: CellProps) {
  const paddedLegalValues = Array(9).fill(null);
  legalValues.forEach((v, i) => (paddedLegalValues[v - 1] = v));
  return (
    <>
      {showHints && cell.editable && !cell.value && (
        <div className="absolute inset-0 size-full grid grid-cols-3">
          {paddedLegalValues.map((v, i) => (
            <p
              key={i}
              className="aspect-square leading-[1] flex justify-center items-center text-sm"
            >
              {v}
            </p>
          ))}
        </div>
      )}
      <p className="font-bold text-3xl">{cell.value}</p>
    </>
  );
}
