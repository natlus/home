import Nav from '../components/Nav/Nav';
import Sky from '../components/Sky/Sky';
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
