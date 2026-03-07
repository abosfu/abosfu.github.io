import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onCopyEmail?: () => void;
}

export function Navbar({ onCopyEmail }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    ['projects', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F4]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Left: Name */}
          <Link
            to="/"
            className="text-[#0B0B0C] hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', fontWeight: 700 }}
          >
            Abdullah Bin Omer
          </Link>

          {/* Right: Projects & Contact side by side (desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors border-b border-transparent pb-0.5 uppercase tracking-wider ${
                activeSection === 'projects'
                  ? 'text-[#0B0B0C] border-[#0B0B0C]/50'
                  : 'text-[#0B0B0C]/50 hover:text-[#0B0B0C] hover:border-[#0B0B0C]/30'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em' }}
            >
              {navLinks[0].label}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors border-b border-transparent pb-0.5 uppercase tracking-wider ${
                activeSection === 'contact'
                  ? 'text-[#0B0B0C] border-[#0B0B0C]/50'
                  : 'text-[#0B0B0C]/50 hover:text-[#0B0B0C] hover:border-[#0B0B0C]/30'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em' }}
            >
              {navLinks[1].label}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B0B0C]/60 hover:text-[#0B0B0C]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black/[0.06] py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection(link.id);
                }}
                className={`block w-full text-left py-2.5 px-1 uppercase tracking-wider transition-colors ${
                  activeSection === link.id ? 'text-[#0B0B0C]' : 'text-[#0B0B0C]/50 hover:text-[#0B0B0C]'
                }`}
                style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em' }}
              >
                {link.label}
              </button>
            ))}
            {onCopyEmail && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCopyEmail();
                }}
                className="block w-full text-left py-2.5 px-1 text-[#0B0B0C]/50 hover:text-[#0B0B0C] transition-colors uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em' }}
              >
                Copy Email
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
