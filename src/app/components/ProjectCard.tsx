import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  variant?: 'hero' | 'standard';
}

export function ProjectCard({ title, description, tech, githubUrl, liveUrl, variant = 'standard' }: ProjectCardProps) {
  const isHero = variant === 'hero';

  return (
    <div
      className={`bg-white border border-[#E6E6E6] rounded-2xl p-8 hover:border-[#0B0B0C] transition-all group ${
        isHero ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="space-y-6">
        {/* Title */}
        <h3
          className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight group-hover:text-[#4B4B4B] transition-colors"
          style={{ fontSize: isHero ? '32px' : '24px', fontWeight: 600, lineHeight: '1.2' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-[#4B4B4B] font-['Inter']"
          style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}
        >
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] text-[#4B4B4B] font-['Inter'] border border-[#E6E6E6]"
              style={{ fontSize: '13px', fontWeight: 500 }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 h-10 rounded-lg border border-[#E6E6E6] text-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors font-['Inter']"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 h-10 rounded-lg border border-[#E6E6E6] text-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors font-['Inter']"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
