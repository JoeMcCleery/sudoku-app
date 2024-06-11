import ResponsiveGraph from "@/components/dataPanel/responsiveGraph";

interface DangerZoneProps {
  data: BoardData[];
}

export default function GraphSection({ data }: DangerZoneProps) {
  const graphData: any[] = [];
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Graph:</h3>

      <ResponsiveGraph graphData={graphData} />
    </div>
  );
}
