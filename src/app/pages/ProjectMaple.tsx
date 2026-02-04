import React from 'react';
import { mapleCaseStudy } from '@/content/mapleCaseStudy';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';

// Helper function to render formatted text content
function renderFormattedContent(text: string, isFirstSection = false) {
  if (!text.trim()) return null;

  const lines = text.split('\n');
  const elements: React.ReactElement[] = [];
  let currentParagraph: string[] = [];
  let keyCounter = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const paraText = currentParagraph.join('\n').trim();
      if (paraText) {
        elements.push(
          <p
            key={`para-${keyCounter++}`}
            className="text-[#4B4B4B] font-['Inter'] mb-6"
            style={{ fontSize: '17px', lineHeight: '1.75', fontWeight: 400 }}
          >
            {paraText}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Handle separator line (⸻)
    if (trimmed === '⸻') {
      flushParagraph();
      elements.push(
        <hr
          key={`divider-${keyCounter++}`}
          className="my-12 border-0 border-t border-[#E6E6E6]"
        />
      );
      continue;
    }

    // Skip title, subtitle, and tags in first section (shown in hero)
    if (isFirstSection) {
      // Skip title (first non-empty line)
      if (i === 0 && trimmed && !trimmed.includes(':')) {
        continue;
      }
      // Skip subtitle (third non-empty line, usually line index 2)
      if (i === 2 && trimmed && !trimmed.includes(':')) {
        continue;
      }
      // Skip tags line
      if (trimmed.startsWith('Tags:')) {
        continue;
      }
      // Skip empty line after tags
      if (i === 7 && trimmed === '') {
        continue;
      }
    }

    // Detect headings - improved logic
    const prevLine = i > 0 ? lines[i - 1].trim() : '';
    const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';
    const isAfterDivider = prevLine === '⸻' || prevLine === '';
    const isBeforeContent = nextLine !== '' && !nextLine.startsWith('•') && !nextLine.match(/^\d+\)/);

    const isLikelyHeading =
      trimmed.length > 0 &&
      trimmed.length < 100 &&
      !trimmed.endsWith('.') &&
      !trimmed.match(/^Tags?:/) &&
      !trimmed.match(/^\d+\)/) &&
      !trimmed.startsWith('•') &&
      !trimmed.startsWith('\t') &&
      isAfterDivider &&
      (nextLine === '' || isBeforeContent);

    // Check for subsection patterns (e.g., "Short-term goal 1", "Key risks")
    const isSubsection = trimmed.match(/^(Short-term|Long-term|Key|Mitigation|For customers|For Air Canada)/i);

    if (isLikelyHeading && trimmed.length > 0) {
      flushParagraph();
      const HeadingTag = isSubsection ? 'h3' : 'h2';
      const isMainSection = !isSubsection;
      elements.push(
        <HeadingTag
          key={`heading-${keyCounter++}`}
          className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4 mt-8 first:mt-0"
          style={{
            fontSize: isMainSection
              ? 'clamp(28px, 4vw, 36px)'
              : 'clamp(20px, 2.5vw, 24px)',
            fontWeight: 600,
            lineHeight: '1.2',
          }}
        >
          {trimmed}
        </HeadingTag>
      );
      continue;
    }

    // Handle numbered list items (e.g., "1) Trust and reputation...")
    if (trimmed.match(/^\d+\)/)) {
      flushParagraph();
      const content = trimmed.replace(/^\d+\)\s*/, '');
      elements.push(
        <div key={`numbered-${keyCounter++}`} className="mb-4">
          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '17px', lineHeight: '1.75', fontWeight: 400 }}
          >
            <span className="text-[#0B0B0C] font-semibold">{trimmed.match(/^\d+\)/)?.[0]}</span>{' '}
            {content}
          </p>
        </div>
      );
      continue;
    }

    // Handle bullet points (lines starting with • or tab-indented)
    if (trimmed.startsWith('•') || trimmed.startsWith('\t•')) {
      flushParagraph();
      const content = trimmed.replace(/^[\t•\s]+/, '');
      elements.push(
        <div key={`bullet-${keyCounter++}`} className="mb-3 flex items-start gap-3">
          <span className="text-[#0B0B0C] mt-1.5" style={{ fontSize: '18px' }}>
            •
          </span>
          <p
            className="text-[#4B4B4B] font-['Inter'] flex-1"
            style={{ fontSize: '17px', lineHeight: '1.75', fontWeight: 400 }}
          >
            {content}
          </p>
        </div>
      );
      continue;
    }

    // Regular paragraph content
    if (trimmed === '') {
      flushParagraph();
    } else {
      currentParagraph.push(line);
    }
  }

  flushParagraph();
  return <div className="space-y-2">{elements}</div>;
}

export function ProjectMaple() {
  const maple = projectsData.find(p => p.id === 'maple')!;
  const PROTOTYPE_MARKER = '[IMAGE — Prototype for the application goes here]';
  const PERSONA_MARKER = '[IMAGE — Consolidated user persona goes here]';
  const STREETVIEW_MARKER =
    '[IMAGE — Mobile app picture showing street view / airport map feature goes here]';
  const EXTRA_SCREENS_MARKER = '[IMAGE — Additional mobile screens / navigation flow go here]';

  // Split content by markers
  const [beforePrototype, afterPrototype = ''] = mapleCaseStudy.split(PROTOTYPE_MARKER);
  const [betweenPrototypeAndPersona = '', afterPersona = ''] = afterPrototype.split(
    PERSONA_MARKER
  );
  const [betweenPersonaAndStreet = '', afterStreet = ''] = afterPersona.split(STREETVIEW_MARKER);
  const [betweenStreetAndExtra = '', afterExtra = ''] = afterStreet.split(EXTRA_SCREENS_MARKER);
  const afterAllImages = `${betweenStreetAndExtra}${afterExtra}`;

  // Extract title and subtitle from the first section
  const firstLines = beforePrototype.split('\n').filter(line => line.trim());
  const title = firstLines[0] || 'Maple';
  const subtitle = firstLines[1] || maple.description;

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#4B4B4B] hover:text-[#0B0B0C] transition-colors font-['Inter'] mb-12 group"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>

            {/* Title */}
            <h1
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-6"
              style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 700, lineHeight: '1.1' }}
            >
              {title}
            </h1>

            {/* One-liner */}
            <p
              className="text-[#4B4B4B] font-['Inter'] mb-8 max-w-3xl"
              style={{ fontSize: '20px', fontWeight: 400, lineHeight: '1.7' }}
            >
              {subtitle}
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-['Inter']">
              {maple.role && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Role
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {maple.role}
                  </span>
                </div>
              )}
              {maple.timeline && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Timeline
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {maple.timeline}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                  Skills
                </span>
                <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                  {maple.tech.join(' • ')}
                </span>
              </div>
              {maple.status && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Status
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {maple.status}
                  </span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/innovation_proposal.pdf"
                download="Maple_Innovation_Proposal.pdf"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-lg bg-[#0B0B0C] text-white hover:bg-[#2A2A2C] transition-colors font-['Inter'] group"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                <Download size={18} />
                <span>Download PDF Report</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-8">

          {/* Content before prototype image */}
          <div className="prose prose-lg max-w-none">
            {renderFormattedContent(beforePrototype, true)}
          </div>

          {/* Prototype image */}
          <div className="mt-10 mb-12">
            <img
              src="/images/maple/prototype.jpg"
              alt="Prototype: Air Canada Chat Bot, Maple"
              className="w-full h-auto object-contain rounded-2xl border border-black/10 shadow-md"
            />
          </div>

          {/* Content between prototype and persona */}
          <div className="prose prose-lg max-w-none">
            {renderFormattedContent(betweenPrototypeAndPersona)}
          </div>

          {/* Persona image */}
          <div className="mt-10 mb-12 flex justify-center">
            <img
              src="/images/maple/persona.png"
              alt="Consolidated solo traveller persona: Student Explorer Kai"
              className="w-full max-w-4xl h-auto object-contain rounded-2xl border border-black/10 shadow-md"
            />
          </div>

          {/* Content between persona and streetview */}
          <div className="prose prose-lg max-w-none">
            {renderFormattedContent(betweenPersonaAndStreet)}
          </div>

          {/* Street view image */}
          <div className="mt-10 mb-12">
            <img
              src="/images/maple/streetview.jpg"
              alt="Street View airport map feature"
              className="w-full h-auto object-contain rounded-2xl border border-black/10 shadow-md"
            />
          </div>

          {/* Content after all images */}
          <div className="prose prose-lg max-w-none">
            {renderFormattedContent(afterAllImages)}
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
