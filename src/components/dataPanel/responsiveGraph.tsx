interface ResponsiveGraphProps {
  graphData: any[];
}

export default function ResponsiveGraph({ graphData }: ResponsiveGraphProps) {
  console.log(graphData);
  return <div className="h-64"></div>;
}
