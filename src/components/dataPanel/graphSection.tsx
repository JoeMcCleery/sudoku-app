import ResponsiveGraph from "@/components/dataPanel/responsiveGraph";
import { useState } from "react";

interface DangerZoneProps {
  data: BoardData[];
}

export default function GraphSection({ data }: DangerZoneProps) {
  // NOTE: dates are in UTC so input fields might not be what people expect
  const [fromDate, setFromDate] = useState(new Date(Date.now() - 604_800_000)); // default to 1 week ago
  const [toDate, setToDate] = useState(new Date());
  const fromDateString = fromDate.toISOString().slice(0, 10);
  const toDateString = toDate.toISOString().slice(0, 10);
  const fromTime = new Date(fromDateString).getTime();
  const toTime = new Date(toDateString).getTime();

  // Get results from within date range
  const graphData = data
    .map((d) => d[1])
    .filter((b) => {
      const time = b.completedAt ? b.completedAt : b.updatedAt;
      // Filter from beginning of day to end of day
      return time >= fromTime && time <= toTime + 86_400_000;
    });

  return (
    <div className="grid gap-2">
      <h3 className="text-xl font-bold">Graph:</h3>

      <div className="flex flex-wrap justify-center items-center gap-2">
        <div className="bg-slate-200 p-2 rounded">
          <label htmlFor="fromTime">From: </label>
          <input
            className="rounded shadow-inner p-1"
            id="fromTime"
            name="fromTime"
            value={fromDateString}
            type="date"
            max={toDateString}
            onChange={(e) => {
              if (!e.target.value) return;
              setFromDate(new Date(e.target.value));
            }}
          />
        </div>

        <div className="bg-slate-200 p-2 rounded">
          <label htmlFor="toTime">To: </label>
          <input
            className="rounded shadow-inner p-1"
            id="toTime"
            name="toTime"
            value={toDateString}
            type="date"
            min={fromDateString}
            onChange={(e) => {
              if (!e.target.value) return;
              setToDate(new Date(e.target.value));
            }}
          />
        </div>
      </div>

      <ResponsiveGraph
        graphData={graphData}
        fromTime={fromTime}
        toTime={toTime}
      />
    </div>
  );
}
