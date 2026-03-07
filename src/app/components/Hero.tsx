import { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin } from 'lucide-react';

type SegmentStyle = 'heading' | 'body' | 'accent';
const HERO_SEGMENTS: { text: string; style: SegmentStyle }[] = [
  { text: "Hi. I'm Abdullah.", style: 'heading' },
  { text: 'I build from the problem outward. ', style: 'body' },
  { text: 'Who feels this pain? Why does it matter? What would make it valuable enough to pay for?', style: 'accent' },
  { text: 'Technical instinct:', style: 'accent' },
  { text: ' clean systems. ', style: 'body' },
  { text: 'Business instinct:', style: 'accent' },
  { text: ' incentives, adoption, traction.', style: 'body' },
  { text: 'I build decision tools that turn signals into action—scores, roadmaps, and next steps.', style: 'body' },
];
const HERO_FULL_LENGTH = HERO_SEGMENTS.reduce((sum, s) => sum + s.text.length, 0);
const BLOCKS: number[][] = [[0], [1, 2], [3, 4, 5, 6], [7]];
const CUMULATIVE: number[] = [0];
HERO_SEGMENTS.forEach((s) => CUMULATIVE.push(CUMULATIVE[CUMULATIVE.length - 1] + s.text.length));

function getCursorBlock(typedLength: number): number {
  if (typedLength >= HERO_FULL_LENGTH) return -1;
  for (let seg = 0; seg < HERO_SEGMENTS.length; seg++) {
    if (typedLength >= CUMULATIVE[seg] && typedLength < CUMULATIVE[seg + 1])
      return BLOCKS.findIndex((b) => b.includes(seg));
  }
  return -1;
}
const CHAR_DELAY_MS = 28;
const CURSOR_BLINK_MS = 530;

function getVisiblePerSegment(typedLength: number): string[] {
  let rem = typedLength;
  return HERO_SEGMENTS.map((seg) => {
    const take = Math.min(seg.text.length, rem);
    rem -= take;
    return seg.text.slice(0, take);
  });
}

interface HeroProps {
  onViewProjects: () => void;
  onCopyEmail: () => void;
}

const bodyStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 'clamp(17px, 2vw, 19px)',
  fontWeight: 400,
  lineHeight: 1.8,
  color: '#5C5C5C',
};
const headingStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(28px, 4vw, 38px)',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  lineHeight: 1.2,
};

export function Hero({ onViewProjects, onCopyEmail }: HeroProps) {
  const [typedLength, setTypedLength] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const done = typedLength >= HERO_FULL_LENGTH;

  useEffect(() => {
    if (done) return;
    const id = setInterval(() => {
      setTypedLength((n) => Math.min(n + 1, HERO_FULL_LENGTH));
    }, CHAR_DELAY_MS);
    return () => clearInterval(id);
  }, [done]);

  useEffect(() => {
    if (done) return;
    const id = setInterval(() => setCursorVisible((v) => !v), CURSOR_BLINK_MS);
    return () => clearInterval(id);
  }, [done]);

  const visible = useMemo(() => getVisiblePerSegment(typedLength), [typedLength]);
  const cursorBlock = useMemo(() => getCursorBlock(typedLength), [typedLength]);

  const Cursor = () =>
    !done ? (
      <span
        className={`inline-block w-0.5 h-[1em] align-middle bg-[var(--accent-site)] ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.1s', verticalAlign: 'middle' }}
        aria-hidden
      />
    ) : null;

  const renderSegment = (segIndex: number, text: string) => {
    if (!text) return null;
    const seg = HERO_SEGMENTS[segIndex];
    if (seg.style === 'heading') {
      return (
        <span key={segIndex} className="text-[#0B0B0C]" style={headingStyle}>
          {text}
        </span>
      );
    }
    if (seg.style === 'accent') {
      return (
        <span key={segIndex} className="font-semibold" style={{ ...bodyStyle, color: 'var(--accent-site)' }}>
          {text}
        </span>
      );
    }
    return (
      <span key={segIndex} style={bodyStyle}>
        {text}
      </span>
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] pt-28 pb-20 lg:pt-32 lg:pb-24 px-6 lg:px-12 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-[640px]">
          <p className="text-[#0B0B0C] mb-8" style={headingStyle}>
            {visible[0]}
            {cursorBlock === 0 && <Cursor />}
          </p>

          <div
            className="mb-10 max-w-[60ch] space-y-5"
            style={{ fontFamily: 'var(--font-body)', fontSize: bodyStyle.fontSize, lineHeight: bodyStyle.lineHeight }}
          >
            <p style={{ color: bodyStyle.color, fontWeight: bodyStyle.fontWeight }}>
              {BLOCKS[1].map((i) => renderSegment(i, visible[i]))}
              {cursorBlock === 1 && <Cursor />}
            </p>
            <p style={{ color: bodyStyle.color, fontWeight: bodyStyle.fontWeight }}>
              {BLOCKS[2].map((i) => renderSegment(i, visible[i]))}
              {cursorBlock === 2 && <Cursor />}
            </p>
            <p style={{ color: bodyStyle.color, fontWeight: bodyStyle.fontWeight }}>
              {BLOCKS[3].map((i) => renderSegment(i, visible[i]))}
              {cursorBlock === 3 && <Cursor />}
            </p>
          </div>

          <div
            className={`flex items-center gap-4 transition-opacity duration-700 ${done ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 overflow-hidden'}`}
          >
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
