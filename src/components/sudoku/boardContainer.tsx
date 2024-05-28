"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { randomRangeInt, randomString } from "@/util/random";
import { getBoardData, setBoardData } from "@/data/localStorage";
import Board from "./board";

export default function BoardContainer() {
  const searchParams = useSearchParams();
  const seedParam = searchParams.get("seed")?.toUpperCase() || randomString(6);
  const numCluesParam = parseInt(
    searchParams.get("numClues") ||
      randomRangeInt(Math.random, 79, 17).toString()
  );
  const [board, setBoard] = useState<Board | null>();
  const [error, setError] = useState("");
  const [seed] = useState(seedParam);
  const [numClues] = useState(numCluesParam);

  useEffect(() => {
    setError("");
    setBoard(null);

    // Get from local storage
    const data = getBoardData(seed, numClues);
    if (data) {
      setBoard(data);
      return;
    }

    // Generate new board
    let fetchError = false;
    fetch(`/api/generate?seed=${seed}&numClues=${numClues}`)
      .then((res) => {
        if (!res.ok) fetchError = true;
        return res.json();
      })
      .then((json) => {
        if (fetchError) {
          setError(json.error);
          return;
        }
        setBoardData(json);
        setBoard(json);
      });
  }, [seed, numClues]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  if (!board) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Board board={board} />
      <p>seed: {seed}</p>
      <p>numClues: {numClues}</p>
      <a
        href={`/play?seed=${seed}&numClues=${numClues}`}
        title="share this puzzle"
        target="_blank"
        className="underline"
      >
        share link
      </a>
    </>
  );
}
