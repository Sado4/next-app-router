export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="text-red-300">
      {children}
      <p className="text-black">dadada</p>
    </section>
  );
}
