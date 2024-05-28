import { NextRequest, NextResponse } from "next/server";
import { generateBoard } from "@/sudoku/generate";
import { randomRangeInt, randomString } from "@/util/random";

export async function GET(request: NextRequest) {
  // Get query params
  const searchParams = request.nextUrl.searchParams;
  const seed = searchParams.get("seed")?.toUpperCase() || randomString(6);
  const numClues = parseInt(
    searchParams.get("numClues") ||
      randomRangeInt(Math.random, 79, 17).toString()
  );

  // Check numClues is valid
  if (isNaN(numClues)) {
    return NextResponse.json(
      { error: "Query parameter 'numClues' is not a valid number!" },
      { status: 400 }
    );
  }
  if (numClues < 17 || numClues > 78) {
    return NextResponse.json(
      { error: "Query parameter 'numClues' is not within the range 17-78!" },
      { status: 400 }
    );
  }

  // Generate board
  const board = generateBoard(seed, numClues);

  // Return generated board
  return NextResponse.json(board, { status: 200 });
}
