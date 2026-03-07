interface SectionHeaderProps {
  number: string;
  title: string;
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-[#7A7A7A] font-[var(--font-body)] tabular-nums"
          style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em' }}
        >
          {number}
        </span>
        <div className="h-px flex-1 bg-[#E6E6E6]" />
      </div>
      <h2
        className="text-[#0B0B0C] font-['Merriweather']"
        style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 600, lineHeight: '1.15' }}
      >
        {title}
      </h2>
    </div>
  );
}
