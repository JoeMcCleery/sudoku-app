import Board from "@/components/sudoku/board";

export const metadata = {
  title: "Sudoku App",
  description: "Sudoku web app and api built using next.js",
};

export default function Page() {
  return (
    <main>
      <h1 className="font-bold text-3xl">Sudoku</h1>
      <Board />
    </main>
  );
}
