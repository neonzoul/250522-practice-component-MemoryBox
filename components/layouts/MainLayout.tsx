// MainLayout — provides consistent layout wrapper for pages
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-bold mb-6">Memory Box</h1>
      {children}
    </main>
  );
}
