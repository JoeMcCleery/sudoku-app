import PageContainer from "@/components/pageContainer";
import BoardContainer from "@/components/sudoku/boardContainer";
import { Suspense } from "react";

export const metadata = {
  title: "Sudoku App - Play",
  description: "Sudoku web app and api built using next.js",
};

export default function Page() {
  return (
    <PageContainer>
      <Suspense>
        <BoardContainer />
      </Suspense>
    </PageContainer>
  );
}
