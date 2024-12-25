import Sky from '@/components/sky/sky';
import { GeistSans } from 'geist/font/sans';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} z-10`}>
        <Sky />
        {children}
      </body>
    </html>
  );
}
