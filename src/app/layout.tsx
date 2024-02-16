import Nav from '../components/navigation/navigation';
import Sky from '../components/sky/sky';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sky>{children}</Sky>
        <Nav />
      </body>
    </html>
  );
}
