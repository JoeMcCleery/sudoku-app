export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="p-4 m-auto max-w-2xl text-center">{children}</main>;
}
