"use client";

import useGenerate from "@/hooks/useGenerate";
import Cell from "./cell";

interface BoardProps {
  seed?: string;
  numClues?: number;
}

export default function Board({ seed, numClues }: BoardProps) {
  const { data, error, isLoading } = useGenerate(seed, numClues);

  if (error) return <div>Failed to load</div>;
  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <article>
      <div className="grid grid-cols-9 grid-rows-9 gap-1">
        {data.cells.map((cellX, x) =>
          cellX.map((cell, y) => (
            <div
              key={`${x},${y}`}
              className="aspect-square flex justify-center items-center bg-slate-100"
            >
              <Cell cell={cell} />
            </div>
          ))
        )}
      </div>
      <aside>seed: {data.seed}</aside>
    </article>
  );
}
