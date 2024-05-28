import useSWR from "swr";

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function useGenerate(seed?: string, numClues?: number) {
  const searchParams = new URLSearchParams();
  if (seed) searchParams.append("seed", seed);
  if (numClues) searchParams.append("numClues", numClues.toString());
  const { data, error, isLoading } = useSWR<Board>(
    `/api/generate?${searchParams.toString()}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
