import PageContainer from "@/components/pageContainer";
import BoardContainer from "@/components/sudoku/boardContainer";

export const metadata = {
  title: "Sudoku App - Play",
  description: "Sudoku web app and api built using next.js",
};

export default function Page() {
  return (
    <PageContainer>
      <BoardContainer />
    </PageContainer>
  );
}
