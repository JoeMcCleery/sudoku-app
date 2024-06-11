import ScalableText from "@/components/sudoku/scalableText";

interface CellHintsProps {
  legalValues: number[];
}

export default function CellHints({ legalValues }: CellHintsProps) {
  const allValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  legalValues = legalValues.reduce((acc, v) => {
    acc[v - 1] = v;
    return acc;
  }, Array(9).fill(null));

  return (
    <div className="absolute inset-0 size-full grid grid-cols-3 pointer-events-none">
      {allValues.map((value, i) => (
        <div
          key={i}
          className={`aspect-square flex justify-center items-center transition-opacity ${
            legalValues.includes(value) ? "opacity-100" : "opacity-0"
          }`}
        >
          <ScalableText text={value.toString()} />
        </div>
      ))}
    </div>
  );
}
