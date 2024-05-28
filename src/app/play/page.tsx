import Board from "@/components/sudoku/board";

export const metadata = {
  title: "Sudoku App",
  description: "Sudoku web app and api built using next.js",
};

export default function Page() {
  return (
    <main className="p-4 m-auto max-w-xl">
      <Board />
    </main>
  );
}
