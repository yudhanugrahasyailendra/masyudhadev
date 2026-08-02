import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-layout">
      <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-dim)' }}>© 2026 Yudha. All Rights Reserved</p>
      <div style={{ display: 'flex', gap: '32px' }}>
        <Link href="/about" style={{ fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>About</Link>
        <Link href="/projects" style={{ fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Projects</Link>
      </div>
    </footer>
  );
}
