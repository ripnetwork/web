'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Download, Menu, Terminal, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Terminal },
  { name: 'Downloads', href: '/downloads', icon: Download },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="nav-sections">
      <div className="nav-group">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              aria-current={isActive ? 'page' : undefined}
              className={isActive ? 'active' : ''}
              href={item.href}
              key={item.name}
              onClick={onNavigate}
            >
              <Icon aria-hidden="true" size={16} />
              <span>{item.name}</span>
              <small>{item.name === 'Home' ? 'start' : item.name.charAt(0)}</small>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <aside className="sidebar">
        <Link className="brand" href="/">
          <img
            alt="ripnet"
            className="brand-mark"
            src="/assets/icon/ripnet-banner-(500x100).png"
          />
          <small>network diagnostics toolkit</small>
        </Link>
        <NavLinks />
      </aside>

      <header className="mobile-bar">
        <Link className="brand compact" href="/">
          <img
            alt="ripnet"
            className="brand-mark compact"
            src="/assets/icon/ripnet-(512x512).png"
          />
          <small>{pathname === '/' ? 'home' : pathname.replace('/', '')}</small>
        </Link>
        <button
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          className="icon-button"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </header>

      {isOpen ? <div className="mobile-drawer"><NavLinks onNavigate={() => setIsOpen(false)} /></div> : null}
    </>
  );
}
