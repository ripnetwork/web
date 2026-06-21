import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t-2 border-white mt-16 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 mb-2">
          © 2026 ripnetwork. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Open source under GPLv3 • Following FSF principles
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
          <Link href="/downloads" className="text-gray-400 hover:text-white">Downloads</Link>
          <Link href="/documentation" className="text-gray-400 hover:text-white">Documentation</Link>
          <Link href="/projects" className="text-gray-400 hover:text-white">Projects</Link>
        </div>
      </div>
    </footer>
  )
}
