import Nav from '@/components/navigation/navigation';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-row p-4">
        <Nav />
      </header>

      <main>{children}</main>
    </>
  );
}
