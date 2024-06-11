import PageContainer from "@/components/pageContainer";

export const metadata = {
  title: "Sudoku App - About",
  description: "Sudoku web app and api built using next.js",
};

export default function Page() {
  return (
    <PageContainer>
      <h2 className="text-xl font-bold mb-2">About</h2>
      <p className="mb-4">A simple soduku app and api built using next.js</p>

      <div className="text-left flex flex-col gap-2">
        <p>
          Access the api at:{" "}
          <a
            href="/api/generate"
            target="_blank"
            className="underline"
          >
            /api/generate
          </a>
        </p>

        <p>
          The api endpoint accepts optional query parameters "seed" and
          "numClues":
        </p>

        <ul className="list-disc list-inside">
          <li>
            <a
              href="/api/generate?seed=seedvalue"
              target="_blank"
              className="underline"
            >
              /api/generate?seed=seedvalue
            </a>
          </li>
          <li>
            <a
              href="/api/generate?numClues=32"
              target="_blank"
              className="underline"
            >
              /api/generate?numClues=32
            </a>
          </li>
          <li>
            <a
              href="/api/generate?seed=seedvalue&numClues=32"
              target="_blank"
              className="underline"
            >
              /api/generate?seed=seedvalue&numClues=32
            </a>
          </li>
        </ul>
      </div>
    </PageContainer>
  );
}
