import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first
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
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F4]/80 backdrop-blur-md border-b border-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <Link
            to="/"
            className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontSize: '18px', fontWeight: 600 }}
          >
            Abdullah
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (isHomePage) {
                    scrollToSection(link.id);
                  } else {
                    window.location.href = `/#${link.id}`;
                  }
                }}
                className="text-[#4B4B4B] hover:text-[#0B0B0C] transition-colors font-['Inter']"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B0B0C]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E6E6E6] py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (isHomePage) {
                    scrollToSection(link.id);
                  } else {
                    window.location.href = `/#${link.id}`;
                  }
                }}
                className="block w-full text-left px-4 py-2 text-[#4B4B4B] hover:text-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors font-['Inter']"
                style={{ fontSize: '16px', fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
