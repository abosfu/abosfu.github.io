import { Github, Linkedin } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onCopyEmail: () => void;
}

export function Hero({ onViewProjects, onCopyEmail }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] pt-28 pb-20 lg:pt-32 lg:pb-24 px-6 lg:px-12 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-[640px]">
          <p
            className="text-[#0B0B0C] mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Hi. I'm Abdullah.
          </p>

          <div
            className="mb-10 max-w-[60ch] space-y-5"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(17px, 2vw, 19px)',
              fontWeight: 400,
              lineHeight: 1.8,
              color: '#5C5C5C',
            }}
          >
            <p>
              I build from the problem outward. <span className="font-semibold" style={{ color: 'var(--accent-site)' }}>Who feels this pain? Why does it matter? What would make it valuable enough to pay for?</span>
            </p>
            <p>
              <span className="font-semibold" style={{ color: 'var(--accent-site)' }}>Technical instinct:</span> clean systems. <span className="font-semibold" style={{ color: 'var(--accent-site)' }}>Business instinct:</span> incentives, adoption, traction.
            </p>
            <p>
              I build decision tools that turn signals into action—scores, roadmaps, and next steps.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abosfu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full text-[#5C5C5C] hover:text-[var(--accent-site)] hover:bg-[var(--accent-site)]/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={22} strokeWidth={1.75} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-bin-omer-619124230/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full text-[#5C5C5C] hover:text-[var(--accent-site)] hover:bg-[var(--accent-site)]/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
