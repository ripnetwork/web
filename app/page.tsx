import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Terminal, Box, Zap, Search, Shield, Cpu, ArrowRight, Github } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Terminal,
      title: 'Interface Statistics',
      description: 'List network interfaces and view detailed statistics including packet counts, byte counts, and error rates.'
    },
    {
      icon: Box,
      title: 'Packet Capture',
      description: 'Capture packets with BPF filters, promiscuous mode support, and real-time protocol analysis.'
    },
    {
      icon: Zap,
      title: 'Stress Testing',
      description: 'TCP and HTTP load testing with configurable concurrency, duration, rate limits, and detailed metrics.'
    },
    {
      icon: Search,
      title: 'Port Scanning',
      description: 'Scan port ranges with timeout control and identify open services on target hosts.'
    },
    {
      icon: Shield,
      title: 'Vulnerability Detection',
      description: 'Basic vulnerability scanning to identify potential security issues on target systems.'
    },
    {
      icon: Cpu,
      title: 'Process Monitoring',
      description: 'Scan and identify processes using network connections on your system.'
    }
  ]

  return (
    <div className="min-h-screen bg-retro-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <section className="text-center py-16 border-b-2 border-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-widest">
            RIPNET
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Network diagnostics, packet analysis, observability, and authorized load-testing toolkit
          </p>
          <p className="text-lg text-gray-500 mb-12">
            A comprehensive C-based CLI tool for network professionals
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/downloads"
              className="retro-btn flex items-center space-x-2"
            >
              <span>Download Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/documentation"
              className="retro-btn"
            >
              Get Started
            </a>
            <a
              href="https://github.com/ripnetwork/ripnet"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center tracking-widest">
            [ FEATURES ]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="retro-card">
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="retro-card mb-16">
          <h2 className="text-3xl font-bold mb-6 tracking-widest">
            [ ABOUT RIPNET ]
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            ripnet is a powerful network diagnostics and testing toolkit written in C17. It combines the functionality of multiple network tools into a single, efficient CLI application. Whether you're a network administrator, security researcher, or developer, ripnet provides the tools you need to analyze, test, and secure your network infrastructure.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Built with performance and portability in mind, ripnet runs on Linux & macOS, with minimal dependencies (libpcap and pthread).
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
