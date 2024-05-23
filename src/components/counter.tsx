"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2 className="text-xl">{count}</h2>
      <button
        type="button"
        className="bg-slate-400 px-4 py-1 rounded"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </>
  );
}
