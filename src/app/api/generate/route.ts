import { NextRequest, NextResponse } from "next/server";
import { generateBoard } from "@/sudoku/generate";
import { randomString } from "@/util/random";

export async function GET(request: NextRequest) {
  // Get or generate seed
  const searchParams = request.nextUrl.searchParams;
  const seed = searchParams.get("seed") || randomString(6);

  // Generate board
  const board = generateBoard(seed);

  // Return generated board
  return NextResponse.json(board);
}
