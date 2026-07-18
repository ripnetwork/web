import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 ripnetwork</span>
      <Link href="/">Home</Link>
      <Link href="/downloads">Downloads</Link>
      <a href="https://docs.ripnet.cc" rel="noreferrer" target="_blank">
        Documentation
      </a>
    </footer>
  );
}
