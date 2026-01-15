import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import { BackgroundText } from './BackgroundText';

interface ContactProps {
  onCopyEmail: () => void;
}

export function Contact({ onCopyEmail }: ContactProps) {
  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/abosfu',
      href: 'https://github.com/abosfu',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abdullah-bin-omer-619124230',
      href: 'https://www.linkedin.com/in/abdullah-bin-omer-619124230/',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download Resume',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12 bg-white">
      <BackgroundText verticalPosition={50} horizontalOffset="left" opacity={0.03} />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header - Minimal */}
        <div className="mb-16">
          <h2
            className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, lineHeight: '1.1' }}
          >
            Contact
          </h2>
        </div>

        <div className="space-y-12">
          {/* Email - Seamless */}
          <div className="space-y-4">
            <p
              className="text-[#7A7A7A] font-['Inter'] tracking-wide"
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em' }}
            >
              EMAIL
            </p>
            <div className="flex items-center gap-4">
              <p
                className="text-[#0B0B0C] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                abdullah_omer@sfu.ca
              </p>
              <button
                onClick={onCopyEmail}
                className="px-5 h-9 rounded-lg bg-[#0B0B0C] text-white hover:bg-[#2A2A2C] transition-colors font-['Inter']"
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                Copy
              </button>
            </div>
          </div>

          {/* Links - Seamless */}
          <div className="space-y-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <Icon size={20} className="text-[#4B4B4B] group-hover:text-[#0B0B0C] transition-colors" />
                  <div>
                    <p
                      className="text-[#7A7A7A] font-['Inter'] mb-0.5"
                      style={{ fontSize: '12px', fontWeight: 500 }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="text-[#0B0B0C] font-['Inter'] group-hover:text-[#4B4B4B] transition-colors"
                      style={{ fontSize: '16px', fontWeight: 500 }}
                    >
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
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
