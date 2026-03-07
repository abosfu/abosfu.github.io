import { useEffect, useState } from 'react';

export interface ProjectSection {
  id: string;
  label: string;
}

interface ProjectSideNavProps {
  sections: ProjectSection[];
}

export function ProjectSideNav({ sections }: ProjectSideNavProps) {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (sections.length === 0) return null;

  return (
    <aside
      className="hidden xl:block fixed left-0 top-14 bottom-0 w-52 pt-8 pl-6 bg-[#F4F4F4]/80"
      style={{ fontFamily: 'var(--font-body)' }}
      aria-label="On this page"
    >
      <nav className="relative">
        <p
          className="text-[#7A7A7A] uppercase tracking-wider text-xs font-medium mb-3"
          style={{ letterSpacing: '0.08em' }}
        >
          On this page
        </p>
        <ul className="space-y-1.5">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                className={`text-left w-full py-1 px-2 -mx-2 rounded text-sm transition-colors truncate block ${
                  activeId === id
                    ? 'text-[var(--accent-site)] font-medium'
                    : 'text-[#4B4B4B] hover:text-[#0B0B0C]'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
