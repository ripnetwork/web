import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Folder, Code, Monitor, Cloud, Smartphone, Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      name: 'ripnet',
      description: 'The main network diagnostics toolkit - this project. A comprehensive CLI tool for network analysis, packet capture, and load testing.',
      tags: ['C', 'Networking', 'CLI'],
      icon: Code,
      status: 'active',
      link: 'https://github.com/ripnetwork/ripnet'
    },
    {
      name: 'ripnet-web',
      description: 'This website - the official web presence for the ripnet toolkit, providing documentation, downloads, and project information.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: Monitor,
      status: 'active',
      link: 'https://github.com/ripnetwork/web'
    },
    {
      name: 'ripnet-gui',
      description: 'Coming Soon - A graphical user interface for ripnet, making network diagnostics more accessible to users who prefer visual tools.',
      tags: ['GUI', 'Cross-platform'],
      icon: Monitor,
      status: 'coming-soon',
      link: '#'
    },
    {
      name: 'ripnet-lib',
      description: 'Coming Soon - A library version of ripnet\'s core functionality, allowing integration into other applications and projects.',
      tags: ['Library', 'API'],
      icon: Code,
      status: 'coming-soon',
      link: '#'
    },
    {
      name: 'ripnet-cloud',
      description: 'Coming Soon - Cloud-based network monitoring and testing services, bringing ripnet\'s capabilities to a web-based platform.',
      tags: ['Cloud', 'SaaS'],
      icon: Cloud,
      status: 'coming-soon',
      link: '#'
    },
    {
      name: 'ripnet-mobile',
      description: 'Coming Soon - Mobile applications for iOS and Android, providing network diagnostics capabilities on the go.',
      tags: ['iOS', 'Android', 'Mobile'],
      icon: Smartphone,
      status: 'coming-soon',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-retro-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">
          [ PROJECTS ]
        </h1>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div key={index} className={`retro-card ${project.status === 'coming-soon' ? 'opacity-70' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-12 h-12" />
                    {project.status === 'coming-soon' && (
                      <span className="retro-tag text-xs">COMING SOON</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="retro-tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.status === 'active' && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-sm hover:underline"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <section className="retro-card mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-widest">
            {'>'} CONTRIBUTE
          </h2>
          <p className="text-gray-300 mb-6">
            Interested in contributing to the ripnetwork ecosystem? Check out our repositories and get involved!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/ripnetwork"
              className="retro-btn inline-flex items-center"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Organization
            </a>
            <a
              href="https://github.com/ripnetwork/ripnet/issues"
              className="retro-btn"
            >
              Report Issues
            </a>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="text-2xl font-bold mb-6 tracking-widest">
            {'>'} ABOUT THE ECOSYSTEM
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The ripnetwork ecosystem is designed to provide comprehensive network diagnostics and testing tools across multiple platforms and use cases. From the core CLI tool to future mobile applications, our goal is to make network analysis accessible and powerful for everyone.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you're a network administrator, security researcher, developer, or enthusiast, there's a tool in the ripnetwork ecosystem for you. Stay tuned for more exciting projects and updates!
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
