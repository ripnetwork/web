import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Book, Terminal, Play, Settings, Network, Shield, Cpu } from 'lucide-react'

export default function Documentation() {
  return (
    <div className="min-h-screen bg-retro-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">
          [ DOCUMENTATION ]
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest flex items-center">
            <Play className="w-6 h-6 mr-2" />
            {'>'} QUICK START
          </h2>
          <div className="retro-card">
            <p className="text-gray-300 mb-4">
              ripnet is a network diagnostics, packet analysis, and load testing toolkit. After installation, access it from your command line:
            </p>
            <div className="retro-code mb-4">
              <code>ripnet --help</code>
            </div>
            <p className="text-gray-400 text-sm">
              Requires root/sudo privileges for packet capture and network operations.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest flex items-center">
            <Network className="w-6 h-6 mr-2" />
            {'>'} INTERFACE DISCOVERY
          </h2>
          <div className="space-y-4">
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-2">List Interfaces</h3>
              <div className="retro-code mb-2">
                <code>ripnet --list-interfaces</code>
                <br />
                <code>ripnet -l</code>
              </div>
              <p className="text-gray-400 text-sm">List all available network interfaces with their statistics.</p>
            </div>
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-2">Show Interface Stats</h3>
              <div className="retro-code mb-2">
                <code>ripnet --show-stats eth0</code>
                <br />
                <code>ripnet -s eth0</code>
              </div>
              <p className="text-gray-400 text-sm">Display detailed statistics for a specific interface including packet counts, byte counts, and error rates.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest flex items-center">
            <Terminal className="w-6 h-6 mr-2" />
            {'>'} PACKET CAPTURE
          </h2>
          <div className="retro-card">
            <h3 className="text-lg font-bold mb-3">Capture Packets</h3>
            <div className="retro-code mb-3">
              <code>ripnet --capture eth0</code>
              <br />
              <code>ripnet -c eth0 --filter "tcp port 80"</code>
              <br />
              <code>ripnet -c eth0 -f "tcp port 80" -n 100 -p</code>
            </div>
            <div className="space-y-2 text-gray-400 text-sm mb-3">
              <p><span className="font-mono text-white">-c, --capture IFACE</span> - Start packet capture on interface</p>
              <p><span className="font-mono text-white">-f, --filter FILTER</span> - BPF filter expression (e.g., "tcp port 80")</p>
              <p><span className="font-mono text-white">-n, --count N</span> - Capture N packets then exit</p>
              <p><span className="font-mono text-white">-p, --promisc</span> - Enable promiscuous mode</p>
            </div>
            <p className="text-gray-500 text-xs">BPF filters use standard Berkeley Packet Filter syntax for powerful packet matching.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest flex items-center">
            <Terminal className="w-6 h-6 mr-2" />
            {'>'} LOAD TESTING
          </h2>
          <div className="space-y-4">
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3">TCP Stress Test</h3>
              <div className="retro-code mb-3">
                <code>ripnet --tcp-stress example.com --port 80 --concurrency 10 --duration 30</code>
                <br />
                <code>ripnet -t example.com -P 80 -C 10 -D 30</code>
              </div>
              <div className="space-y-2 text-gray-400 text-sm">
                <p><span className="font-mono text-white">-t, --tcp-stress HOST</span> - Run TCP stress test against host</p>
                <p><span className="font-mono text-white">-P, --port PORT</span> - Target port (default: 80)</p>
                <p><span className="font-mono text-white">-C, --concurrency N</span> - Number of concurrent connections (default: 1)</p>
                <p><span className="font-mono text-white">-D, --duration SECONDS</span> - Test duration in seconds (default: 10)</p>
                <p><span className="font-mono text-white">-R, --rate-limit N</span> - Rate limit in connections/sec (default: 0/unlimited)</p>
              </div>
            </div>
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3">HTTP Stress Test</h3>
              <div className="retro-code mb-3">
                <code>ripnet --http-stress example.com --port 80 --http-path / --concurrency 50 --duration 60</code>
                <br />
                <code>ripnet -h example.com -P 80 -H / -C 50 -D 60</code>
              </div>
              <div className="space-y-2 text-gray-400 text-sm">
                <p><span className="font-mono text-white">-h, --http-stress HOST</span> - Run HTTP stress test against host</p>
                <p><span className="font-mono text-white">-H, --http-path PATH</span> - HTTP path for stress test (default: /)</p>
                <p><span className="font-mono text-white">-P, --port PORT</span> - Target port (default: 80)</p>
                <p><span className="font-mono text-white">-C, --concurrency N</span> - Number of concurrent connections</p>
                <p><span className="font-mono text-white">-D, --duration SECONDS</span> - Test duration in seconds</p>
                <p><span className="font-mono text-white">-R, --rate-limit N</span> - Rate limit in connections/sec</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest flex items-center">
            <Shield className="w-6 h-6 mr-2" />
            {'>'} SECURITY TESTING
          </h2>
          <div className="space-y-4">
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3">Packet Flood</h3>
              <div className="retro-code mb-3">
                <code>ripnet --packet-flood eth0</code>
                <br />
                <code>ripnet -F eth0</code>
              </div>
              <p className="text-gray-400 text-sm">Perform packet flood stress test on specified interface. Use only on networks you own or have explicit authorization to test.</p>
            </div>
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3">Port Scan</h3>
              <div className="retro-code mb-3">
                <code>ripnet --port-scan 192.168.1.1 --start-port 1 --end-port 1000</code>
                <br />
                <code>ripnet -S 192.168.1.1 -a 1 -e 1000 -T 500</code>
              </div>
              <div className="space-y-2 text-gray-400 text-sm">
                <p><span className="font-mono text-white">-S, --port-scan HOST</span> - Port scan target host</p>
                <p><span className="font-mono text-white">-a, --start-port PORT</span> - Start port for scan (default: 1)</p>
                <p><span className="font-mono text-white">-e, --end-port PORT</span> - End port for scan (default: 1024)</p>
                <p><span className="font-mono text-white">-T, --timeout MS</span> - Connection timeout in milliseconds (default: 1000)</p>
              </div>
            </div>
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3">Vulnerability Scan</h3>
              <div className="retro-code mb-3">
                <code>ripnet --vuln-scan example.com:80</code>
                <br />
                <code>ripnet -V example.com:80</code>
              </div>
              <p className="text-gray-400 text-sm">Perform basic vulnerability detection on target host and port. Format: HOST:PORT</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest flex items-center">
            <Cpu className="w-6 h-6 mr-2" />
            {'>'} PROCESS SCANNING
          </h2>
          <div className="retro-card">
            <h3 className="text-lg font-bold mb-3">Scan Network Processes</h3>
            <div className="retro-code mb-3">
              <code>ripnet --scan-processes</code>
              <br />
              <code>ripnet -N</code>
              <br />
              <code>ripnet -N --process steam</code>
              <br />
              <code>ripnet -N --pid 1234</code>
            </div>
            <div className="space-y-2 text-gray-400 text-sm">
              <p><span className="font-mono text-white">-N, --scan-processes</span> - Scan network processes</p>
              <p><span className="font-mono text-white">-X, --process NAME</span> - Filter by process name</p>
              <p><span className="font-mono text-white">-I, --pid PID</span> - Filter by process ID</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest flex items-center">
            <Settings className="w-6 h-6 mr-2" />
            {'>'} OUTPUT OPTIONS
          </h2>
          <div className="retro-card">
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="font-mono text-white mr-2">-j, --json</span>
                <span>Output in JSON format (supported by stress testing commands)</span>
              </p>
              <p className="flex items-start">
                <span className="font-mono text-white mr-2">-v, --verbose</span>
                <span>Enable verbose output for detailed information</span>
              </p>
              <p className="flex items-start">
                <span className="font-mono text-white mr-2">-?, --help</span>
                <span>Show help message with all available options</span>
              </p>
              <p className="flex items-start">
                <span className="font-mono text-white mr-2">--version</span>
                <span>Show version information (GPL-3.0-only licensed)</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest flex items-center">
            <Book className="w-6 h-6 mr-2" />
            {'>'} EXAMPLES
          </h2>
          <div className="space-y-4">
            <div className="retro-card">
              <div className="retro-code mb-2">
                <code>ripnet --list-interfaces</code>
              </div>
              <p className="text-gray-400 text-sm">List all network interfaces</p>
            </div>
            <div className="retro-card">
              <div className="retro-code mb-2">
                <code>ripnet --capture eth0 --filter "tcp port 80"</code>
              </div>
              <p className="text-gray-400 text-sm">Capture HTTP traffic on eth0</p>
            </div>
            <div className="retro-card">
              <div className="retro-code mb-2">
                <code>ripnet --tcp-stress example.com --port 80 --concurrency 10 --duration 30 --json</code>
              </div>
              <p className="text-gray-400 text-sm">Run TCP stress test with JSON output</p>
            </div>
            <div className="retro-card">
              <div className="retro-code mb-2">
                <code>ripnet --port-scan 192.168.1.1 --start-port 1 --end-port 1000</code>
              </div>
              <p className="text-gray-400 text-sm">Scan ports 1-1000 on target host</p>
            </div>
            <div className="retro-card">
              <div className="retro-code mb-2">
                <code>ripnet --scan-processes --process steam</code>
              </div>
              <p className="text-gray-400 text-sm">Find network processes named "steam"</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
