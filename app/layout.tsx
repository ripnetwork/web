import './globals.css'

export const metadata = {
  title: 'ripnet',
  description: 'Network diagnostics, packet analysis, observability, and authorized load-testing toolkit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
