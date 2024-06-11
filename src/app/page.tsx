import PageContainer from "@/components/pageContainer";
import { UserDataPanel } from "@/components/dataPanel/userDataPanel";

export const metadata = {
  title: "Sudoku App - Home",
  description: "Sudoku web app and api built using next.js",
};

export default function Page() {
  return (
    <PageContainer>
      <UserDataPanel />
    </PageContainer>
  );
}
