interface SectionHeaderProps {
  number: string;
  title: string;
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-[#7A7A7A] font-['Inter'] tabular-nums"
          style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em' }}
        >
          {number}
        </span>
        <div className="h-px flex-1 bg-[#E6E6E6]" />
      </div>
      <h2
        className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
        style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, lineHeight: '1.1' }}
      >
        {title}
      </h2>
    </div>
  );
}
