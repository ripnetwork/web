'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Terminal, Network, Download, FileText, Folder, Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/', icon: Terminal },
    { name: 'Downloads', href: '/downloads', icon: Download },
    { name: 'Documentation', href: '/documentation', icon: FileText },
    { name: 'Projects', href: '/projects', icon: Folder },
  ]

  return (
    <header className="border-b-2 border-white bg-retro-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Network className="w-8 h-8 group-hover:animate-pulse" />
            <div>
              <h1 className="text-2xl font-bold tracking-widest">ripnet</h1>
              <p className="text-xs text-gray-400 tracking-wider">NETWORK DIAGNOSTICS TOOLKIT</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`retro-btn flex items-center space-x-2 ${
                    isActive ? 'active' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          <button
            className="md:hidden retro-btn p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`retro-btn flex items-center space-x-2 w-full ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
