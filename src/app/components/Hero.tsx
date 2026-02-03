import { Github, Linkedin } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onCopyEmail: () => void;
}

export function Hero({ onViewProjects, onCopyEmail }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-20 px-6 lg:px-12 flex items-center">

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Name - Smaller, Less Emphasis */}
          <h1
            className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(42px, 8vw, 72px)', fontWeight: 700 }}
          >
            Abdullah Bin Omer
          </h1>

          {/* Statement */}
          <p
            className="text-[#4B4B4B] font-['Inter'] max-w-2xl mb-10"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
          >
            CS student + Business minor building scalable products that turn clean engineering into real-world impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={onViewProjects}
              className="px-8 h-12 rounded-xl bg-[#0B0B0C] text-white hover:bg-[#2A2A2C] transition-colors font-['Inter']"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              View Projects
            </button>
            <button
              onClick={onCopyEmail}
              className="px-8 h-12 rounded-xl border border-[#E6E6E6] text-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors font-['Inter']"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              Copy Email
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://github.com/abosfu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-[#E6E6E6] bg-white flex items-center justify-center hover:border-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="text-[#0B0B0C]" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-bin-omer-619124230/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-[#E6E6E6] bg-white flex items-center justify-center hover:border-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-[#0B0B0C]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
