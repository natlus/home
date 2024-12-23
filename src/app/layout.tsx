import Nav from '@/components/navigation/navigation';
import Sky from '@/components/sky/sky';
import { GeistSans } from 'geist/font/sans';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className={`${GeistSans.className} z-10`}>
          <header className="flex flex-row p-4">
            <Nav />
          </header>

          {children}
        </main>
        <Sky />
      </body>
    </html>
  );
}
