import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactProps {
  onCopyEmail: () => void;
}

export function Contact({ onCopyEmail }: ContactProps) {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
          >
            Contact
          </h2>
        </div>

        {/* Simple Contact Links */}
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail size={20} className="text-[#4B4B4B]" />
            <button
              onClick={onCopyEmail}
              className="text-[#0B0B0C] hover:text-[#4B4B4B] transition-colors font-['Inter'] text-left"
              style={{ fontSize: '18px', fontWeight: 400 }}
            >
              abo4@sfu.ca
            </button>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <Github size={20} className="text-[#4B4B4B]" />
            <a
              href="https://github.com/abosfu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B0B0C] hover:text-[#4B4B4B] transition-colors font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400 }}
            >
              GitHub
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <Linkedin size={20} className="text-[#4B4B4B]" />
            <a
              href="https://www.linkedin.com/in/abdullah-bin-omer-619124230/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B0B0C] hover:text-[#4B4B4B] transition-colors font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400 }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-[#E6E6E6]">
          <p
            className="text-[#7A7A7A] font-['Inter'] text-center"
            style={{ fontSize: '14px', fontWeight: 400 }}
          >
            © 2026 Abdullah Bin Omer. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
