'use client';

import Link from 'next/link';
import { Logo } from '../logo';
import { Github } from 'lucide-react';

function Nav() {
  return (
    <>
      <nav className="flex h-8 w-max flex-row items-center gap-6 rounded-full bg-black/20 pr-4 backdrop-blur-sm">
        <Logo />
      </nav>

      <nav className="ml-auto">
        <Link href="https://github.com/natlus">
          <Github />
        </Link>
      </nav>
    </>
  );
}

export default Nav;
