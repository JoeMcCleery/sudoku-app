import { clearAllBoardData } from "@/data/localStorage";

interface DangerZoneProps {
  data: BoardData[];
  onReset: Function;
}

export default function DangerZone({ data, onReset }: DangerZoneProps) {
  function reset() {
    clearAllBoardData();
    onReset();
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Danger Zone:</h3>

      <button
        onClick={reset}
        className="bg-red-500 text-red-50 p-2 rounded"
        disabled={data.length == 0}
      >
        Reset
      </button>
    </div>
  );
}
