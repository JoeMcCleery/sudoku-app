"use client";

import { useEffect, useState } from "react";
import { getAllBoardData } from "@/data/localStorage";
import { GamesList } from "@/components/dataPanel/gamesList";
import DangerZone from "@/components/dataPanel/dangerZone";
import GraphSection from "@/components/dataPanel/graphSection";

export function UserDataPanel() {
  const [data, setData] = useState<BoardData[]>([]);

  useEffect(() => {
    setData(getAllBoardData());
  }, []);

  function onReset() {
    setData([]);
  }

  return (
    <div className="grid gap-8">
      <GraphSection data={data} />
      <GamesList data={data} />
      <DangerZone
        data={data}
        onReset={onReset}
      />
    </div>
  );
}
