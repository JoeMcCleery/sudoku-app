"use client";

import { useReducer } from "react";
import { getAllBoardData } from "@/data/localStorage";
import { GamesList } from "@/components/dataPanel/gamesList";
import DangerZone from "@/components/dataPanel/dangerZone";
import GraphSection from "@/components/dataPanel/graphSection";

export function UserDataPanel() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const data = getAllBoardData();

  return (
    <div className="grid gap-8">
      <GraphSection data={data} />
      <GamesList data={data} />
      <DangerZone
        data={data}
        onReset={forceUpdate}
      />
    </div>
  );
}
