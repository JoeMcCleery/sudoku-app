import { ChangeEvent, useState } from "react";
import { getLegalValues } from "@/sudoku/solver";
import CellHints from "@/components/sudoku/cellHints";

interface CellProps {
  cells: Cells;
  pos: Position;
  showHints: boolean;
  editable: boolean;
  onChange: Function;
}

export default function Cell({
  cells,
  pos,
  showHints,
  editable,
  onChange,
}: CellProps) {
  const cell = cells[pos.x][pos.y];
  const legalValues = getLegalValues(cells, pos);

  const [invalid, setInvalid] = useState(
    cell.value && !legalValues.includes(cell.value)
  );

  function updateValue(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    // Set empty input
    if (inputValue == "") {
      cell.value = undefined;
      setInvalid(false);
      onChange();
      return;
    }

    // Check valid input
    const newValue = parseInt(inputValue);
    if (isNaN(newValue) || !legalValues.includes(newValue)) {
      setInvalid(true);
      return;
    }

    // Set new valid input
    cell.value = newValue;
    setInvalid(false);
    onChange();
  }

  return (
    <div
      className={`relative aspect-square flex justify-center items-center text-lime-950 transition-colors ${
        cell.editable
          ? invalid && showHints
            ? "bg-red-300"
            : "bg-lime-50"
          : "bg-lime-500/40"
      }`}
    >
      <input
        className="size-full font-bold text-3xl text-center bg-transparent"
        disabled={!cell.editable || !editable}
        defaultValue={cell.value}
        maxLength={1}
        onChange={updateValue}
        title={`Cell: ${cell.pos.x}, ${cell.pos.y}`}
      />
      <CellHints
        legalValues={
          (showHints && !cell.value && !invalid && legalValues) || []
        }
      />
    </div>
  );
}
