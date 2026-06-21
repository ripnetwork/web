import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Download, CheckCircle, Cpu, HardDrive, Shield } from 'lucide-react'

export default function Downloads() {
  return (
    <div className="min-h-screen bg-retro-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">
          [ DOWNLOADS ]
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest">
            {'>'} INSTALLATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="retro-card">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Download className="w-6 h-6 mr-2" />
                From Source
              </h3>
              <div className="retro-code mb-4">
                <code>git clone https://github.com/ripnetwork/ripnet.git</code>
                <br />
                <code>cd ripnet</code>
                <br />
                <code>make</code>
                <br />
                <code>sudo make install</code>
              </div>
            </div>
            
            <div className="retro-card">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Requirements
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Linux & macOS.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>gcc compiler</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>libpcap development library</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>make build tool</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest">
            {'>'} SYSTEM REQUIREMENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                Operating Systems
              </h3>
              <p className="text-gray-400">
                Linux (kernel 2.6+), macOS (10.12+).
              </p>
            </div>
            
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <HardDrive className="w-5 h-5 mr-2" />
                Dependencies
              </h3>
              <p className="text-gray-400">
                libpcap 1.0+, pthread (usually included with libc)
              </p>
            </div>
            
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                Build Tools
              </h3>
              <p className="text-gray-400">
                gcc 4.8+, make 3.81+
              </p>
            </div>
            
            <div className="retro-card">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Permissions
              </h3>
              <p className="text-gray-400">
                Root/sudo access required for packet capture and network operations
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest">
            {'>'} VERSION INFORMATION
          </h2>
          <div className="retro-card">
            <div className="space-y-3">
              <p>
                <span className="font-bold">Current Version:</span> 1.0.0
              </p>
              <p>
                <span className="font-bold">Release Date:</span> 2026
              </p>
              <p>
                <span className="font-bold">License:</span> See LICENSE file in repository
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-widest">
            {'>'} QUICK START
          </h2>
          <div className="retro-card">
            <p className="text-gray-300 mb-4">
              After installation, you can access ripnet from your command line:
            </p>
            <div className="retro-code">
              <code>ripnet --help</code>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
