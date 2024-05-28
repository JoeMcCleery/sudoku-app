import NavLinks from "./navLinks";

export default function Header() {
  return (
    <header className="p-8 flex justify-center items-center flex-col">
      <h1 className="font-bold text-3xl">Sudoku App</h1>
      <div className="flex gap-2">
        <NavLinks />
      </div>
    </header>
  );
}
