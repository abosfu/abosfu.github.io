import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  demoImage?: string;
  demoVideo?: string;
  macbookImage?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'TRAJECTORY',
      description: 'A career exploration tool that helps students, new grads, and career switchers discover structured career paths through real case studies. Built with Next.js, TypeScript, tRPC, and Prisma.',
      tech: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/abosfu/tragectory',
      macbookImage: '/images/Silver.png',
    },
    {
      title: 'Coming Soon',
      description: 'A new project is currently in development. Check back soon for updates and details about this exciting new work.',
      tech: ['In Development'],
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <h2
            className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
          >
            Projects
          </h2>
        </div>

        {/* Projects - Zigzag Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className={`flex-1 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="space-y-6">
                    {/* Title */}
                    <h3
                      className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                      style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, lineHeight: '1.2' }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[#4B4B4B] font-['Inter']"
                      style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Tags - Minimal */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.tech.map((item, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[#7A7A7A] font-['Inter']"
                          style={{ fontSize: '14px', fontWeight: 400 }}
                        >
                          {item}
                          {techIndex < project.tech.length - 1 && <span className="mx-2">•</span>}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      {project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#0B0B0C] hover:text-[#4B4B4B] transition-colors font-['Inter']"
                          style={{ fontSize: '15px', fontWeight: 500 }}
                        >
                          <Github size={18} />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#0B0B0C] hover:text-[#4B4B4B] transition-colors font-['Inter']"
                          style={{ fontSize: '15px', fontWeight: 500 }}
                        >
                          <ExternalLink size={18} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Demo Side - MacBook Image */}
                <div className="flex-1 w-full lg:w-auto">
                  {project.macbookImage ? (
                    <div
                      className="w-full overflow-hidden group cursor-pointer bg-[#F4F4F4]"
                      style={{ minHeight: '400px' }}
                    >
                      <img
                        src={project.macbookImage}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                        style={{ 
                          transformOrigin: 'center center',
                          willChange: 'transform'
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full aspect-video bg-[#FAFAFA] rounded-lg flex items-center justify-center"
                      style={{ minHeight: '400px' }}
                    >
                      <p className="text-[#7A7A7A] font-['Inter']" style={{ fontSize: '14px', fontWeight: 400 }}>
                        Demo coming soon
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
