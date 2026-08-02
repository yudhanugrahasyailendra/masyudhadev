"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav style={{ position: 'relative', justifyContent: 'space-between' }}>
        {pathname !== '/home' && pathname !== '/' ? (
          <Link href="/home" style={{ display: 'block', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <Image src="/images/profile/Yudha.jpg" alt="Yudha Profile" width={80} height={80} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </Link>
        ) : (
          <div style={{ width: '40px' }}></div>
        )}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>

          <li>
            <Link href="/about" style={{ color: pathname === '/about' ? 'var(--text-main)' : '', background: pathname === '/about' ? 'rgba(128, 128, 128, 0.15)' : '', fontWeight: pathname === '/about' ? 600 : 'normal' }}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" style={{ color: pathname === '/projects' ? 'var(--text-main)' : '', background: pathname === '/projects' ? 'rgba(128, 128, 128, 0.15)' : '', fontWeight: pathname === '/projects' ? 600 : 'normal' }}>
              Projects
            </Link>
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ThemeToggle />
          <button className="burger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
}
