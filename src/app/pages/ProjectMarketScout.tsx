import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';
import { ProjectSlideshow } from '@/app/components/ProjectSlideshow';
import { ProjectSideNav } from '@/app/components/ProjectSideNav';

const marketscout = projectsData.find(p => p.id === 'marketscout')!;

const MARKET_SCOUT_SECTIONS = [
  { id: 'what-marketscout-is', label: 'What MarketScout Is' },
  { id: 'why-this-exists', label: 'Why This Project Exists' },
  { id: 'how-it-works', label: 'How the System Works' },
  { id: 'outputs', label: 'What the Outputs Include' },
  { id: 'example-runs', label: 'Example Runs' },
  { id: 'technical-design', label: 'Technical Design' },
  { id: 'how-to-run', label: 'How to Run It' },
];

const sectionHeading =
  "text-[#0B0B0C] font-heading tracking-tight uppercase mb-4";
const sectionHeadingStyle = {
  fontSize: 'clamp(22px, 2.5vw, 28px)',
  fontWeight: 500,
  lineHeight: '1.2' as const,
  letterSpacing: '0.05em',
};
const subHeadingStyle = { fontSize: '18px', fontWeight: 600, lineHeight: '1.3' as const };
const bodyStyle = { fontSize: '18px', fontWeight: 400, lineHeight: '1.7' as const };
const bodyClass = "text-[#4B4B4B] font-body";

const IMG1 = '/images/marketscout/1.png';
const IMG2 = '/images/marketscout/2.png';
const IMG3 = '/images/marketscout/3.png.png';

export function ProjectMarketScout() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] font-body">
      <ProjectSideNav sections={MARKET_SCOUT_SECTIONS} />
      <main className="pt-24 xl:ml-52">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#4B4B4B] hover:text-[#0B0B0C] transition-colors font-body mb-12 group"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>

            {marketscout.category && (
              <p
                className="text-[#7A7A7A] font-body uppercase tracking-wide mb-3"
                style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em' }}
              >
                {marketscout.category}
              </p>
            )}

            <h1
              className="text-[#0B0B0C] font-heading mb-4"
              style={{ fontSize: 'clamp(40px, 7vw, 64px)', fontWeight: 600, lineHeight: '1.15' }}
            >
              {marketscout.title}
            </h1>

            <p
              className={`${bodyClass} mb-6 max-w-3xl`}
              style={{ fontSize: '20px', ...bodyStyle }}
            >
              {marketscout.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10 text-sm font-body">
              <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                Skills
              </span>
              <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                {marketscout.tech.join(' • ')}
              </span>
            </div>

            {/* Slideshow */}
            {marketscout.slides && marketscout.slides.length > 0 && (
              <div className="max-w-4xl">
                <ProjectSlideshow images={marketscout.slides} projectTitle={marketscout.title} />
              </div>
            )}
          </div>
        </section>

        {/* Case Study Body */}
        <section className="pb-24 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-5xl mx-auto space-y-12 pt-16">
            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 1 — What MarketScout Is */}
            <div id="what-marketscout-is" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>What MarketScout Is</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is a CLI-first decision-support tool built to identify operational pain points and opportunity areas within a specific city and industry.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                It pulls real signals from business news and hiring demand, processes them through a scoring and ranking pipeline, and produces a structured opportunity map with supporting evidence, business metrics, and workflow states.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The system takes two inputs — a city and an industry — and produces:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>a ranked opportunity map</li>
                <li className={bodyClass} style={bodyStyle}>supporting evidence for each opportunity</li>
                <li className={bodyClass} style={bodyStyle}>business metrics and confidence scores</li>
                <li className={bodyClass} style={bodyStyle}>actionable briefs and commercial angles</li>
                <li className={bodyClass} style={bodyStyle}>structured reports, leads, and historical comparisons</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                It is designed to be useful for strategy teams, consultants, operators, venture teams, founders, and business development professionals who need a repeatable, evidence-backed research workflow.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 2 — Why This Project Exists */}
            <div id="why-this-exists" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Why This Project Exists</h2>
              <p className={bodyClass} style={bodyStyle}>
                Market research is fragmented by default. Business signals live across news feeds, hiring boards, industry reports, and scattered commentary — each partial, each requiring manual synthesis.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The cost of that fragmentation is not just time. It is the absence of a repeatable process. Most research cycles cannot be replicated, compared, or tracked. Insights disappear into notes and slide decks.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout was built to change that. By normalizing signals through a consistent pipeline, it turns market scanning into a structured workflow — one that can identify where operational pain may be high, where a solution might have commercial value, and how that picture changes over time.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The goal is not comprehensiveness. It is repeatability, traceability, and actionability.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 3 — How the System Works */}
            <div id="how-it-works" className="space-y-8">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How the System Works</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout runs through a five-stage pipeline designed for transparency and reproducibility.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>1. Signal Collection</p>
                <p className={bodyClass} style={bodyStyle}>
                  The system fetches live signals from Google News RSS and the Adzuna job market API, scoped to the specified city and industry. Signals reflect what is happening in that market right now — hiring demand, operational friction, regulatory shifts, and sector-specific pressures. Cached signals can be used to keep runs reproducible.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>2. Signal Processing</p>
                <p className={bodyClass} style={bodyStyle}>
                  Raw signals are normalized and filtered through industry-specific templates. Keywords are mapped to operational bottleneck categories — labor, supply chain, regulation, financing, demand volatility — producing a structured set of signal clusters ready for scoring.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>3. Opportunity Scoring</p>
                <p className={bodyClass} style={bodyStyle}>
                  Each identified opportunity is scored across three dimensions: pain score (severity of the problem), ROI signal (expected value of addressing it), and confidence (reliability of supporting evidence). Scores are explainable — each one traces back to the signals that produced it.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>4. Actionability Layer</p>
                <p className={bodyClass} style={bodyStyle}>
                  Scored opportunities are converted into decision-ready briefs. Each brief includes a pain theme, likely buyer profile, commercial angle, suggested next step, and a "why now" rationale tied to current signal evidence. The output is structured for use, not just for reading.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>5. Persistence and Workflow</p>
                <p className={bodyClass} style={bodyStyle}>
                  Every run is stored in a local SQLite database. Opportunities carry workflow states — <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">discovered</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">under_review</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">prioritized</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">rejected</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">pursued</code> — allowing teams to manage opportunities across multiple sessions. Runs can be compared over time to track how a market's signal landscape shifts.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 4 — What the Outputs Include */}
            <div id="outputs" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>What the Outputs Include</h2>
              <p className={bodyClass} style={bodyStyle}>
                Each run produces a complete set of artifacts designed to support different downstream uses.
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">strategy.json</strong> — full machine-readable opportunity map with scores, evidence, and briefs</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">signal_analysis.json</strong> — structured breakdown of the raw signals that fed the analysis</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">report.md / report.html</strong> — human-readable executive report for sharing or archiving</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">summary.txt</strong> — quick terminal summary for fast review</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">leads.csv</strong> — potential companies surfaced from signal sources, exportable for outreach or CRM import</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                Beyond individual run artifacts, the system supports a run history view for auditing past analyses and a compare view for surfacing how opportunity rankings shift between runs. Opportunity workflow tracking lets users move items through research stages without losing prior context.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 5 — Example Runs */}
            <div id="example-runs" className="space-y-12">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Example Runs</h2>

              {/* Example 1 — Vancouver / Construction */}
              <div className="space-y-6">
                <div className="w-full max-w-4xl mx-auto">
                  <img
                    src={IMG1}
                    alt="Vancouver Construction run — ranked opportunity map from live market signals."
                    className="w-full h-auto"
                  />
                  <p className="text-[#7A7A7A] font-body mt-3 text-center" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5' }}>
                    Vancouver Construction run — live signals ranked into recurring operational pressure points.
                  </p>
                </div>
                <p className={bodyClass} style={bodyStyle}>
                  This run surfaces the dominant friction points in Vancouver's construction sector: labor shortages, material cost volatility, permitting delays, interest rate uncertainty, and supply chain disruptions. Each opportunity is scored and ranked, making it straightforward to identify where operational pain is concentrated and where a targeted solution might have the most commercial leverage.
                </p>
              </div>

              <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

              {/* Example 2 — Vancouver / Real Estate */}
              <div className="space-y-6">
                <div className="w-full max-w-4xl mx-auto">
                  <img
                    src={IMG2}
                    alt="Vancouver Real Estate run — opportunity map reflecting a different signal profile from the same city."
                    className="w-full h-auto"
                  />
                  <p className="text-[#7A7A7A] font-body mt-3 text-center" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5' }}>
                    Vancouver Real Estate run — same city, different signal profile, different opportunity set.
                  </p>
                </div>
                <p className={bodyClass} style={bodyStyle}>
                  Switching to Real Estate in the same city produces a meaningfully different output: housing affordability pressures, inventory absorption challenges, financing conditions, and zoning uncertainty take precedence. This demonstrates that the engine responds to industry-specific signals rather than producing generic city-level noise.
                </p>
              </div>

              <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

              {/* Example 3 — Toronto / Retail */}
              <div className="space-y-6">
                <div className="w-full max-w-4xl mx-auto">
                  <img
                    src={IMG3}
                    alt="Toronto Retail run — opportunity map across a different city and sector."
                    className="w-full h-auto"
                  />
                  <p className="text-[#7A7A7A] font-body mt-3 text-center" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5' }}>
                    Toronto Retail run — margin pressure, occupancy costs, and demand volatility surface as the leading signals.
                  </p>
                </div>
                <p className={bodyClass} style={bodyStyle}>
                  The Toronto Retail run shows the system working across a distinct economic environment. Margin pressure, consumer demand fluctuations, rent and occupancy costs, and labor shortages emerge as the dominant themes. The shift in geography and sector produces a fresh opportunity ranking that reflects the conditions specific to that market.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 6 — Technical Design */}
            <div id="technical-design" className="space-y-6">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technical Design</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is designed as a CLI-first system — no web server, no UI overhead. The interface is the terminal, and the outputs are structured files. This keeps the tool fast, scriptable, and easy to integrate into other workflows.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Deterministic Mode</p>
                <p className={bodyClass} style={bodyStyle}>
                  The <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">--deterministic</code> flag produces identical outputs across re-runs using the same signals and configuration. This matters for testing, demonstration, and any workflow that requires reproducible analysis.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Evidence Integrity</p>
                <p className={bodyClass} style={bodyStyle}>
                  An evaluation gate verifies that each opportunity's supporting evidence links back to the actual input signals. This prevents inference drift and ensures that insights are grounded in what the data says, not what a model infers.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>SQLite Persistence</p>
                <p className={bodyClass} style={bodyStyle}>
                  All runs are stored locally in SQLite. The history and compare commands use this store to surface how opportunity rankings shift across analyses — without requiring any external database or backend service.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Modular Architecture</p>
                <p className={bodyClass} style={bodyStyle}>
                  The system is organized into discrete modules — Scout (signal collection), Brain (scoring and opportunity detection), Reports (artifact generation), and CLI (pipeline coordination). Each module has a defined responsibility, making the system straightforward to test, extend, or adapt to new signal sources.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 7 — How to Run It */}
            <div id="how-to-run" className="space-y-6">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How to Run It</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout supports two modes: a direct command for scripted or repeatable runs, and an interactive terminal mode for exploratory use.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Direct Mode</p>
                <p className={bodyClass} style={bodyStyle}>
                  Pass city, industry, and optional flags directly from the command line:
                </p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
                  PYTHONPATH=src python3 -m marketscout run --city Vancouver --industry Construction --deterministic
                </pre>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Interactive Mode</p>
                <p className={bodyClass} style={bodyStyle}>
                  Launch the interactive terminal to explore the system without remembering command syntax:
                </p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
                  PYTHONPATH=src python3 -m marketscout
                </pre>
                <p className={bodyClass} style={bodyStyle}>
                  The interactive mode lets users run analyses, browse run history, compare past outputs, and manage opportunity workflow states — all from a single navigable interface.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 8 — Final Positioning */}
            <div className="space-y-4 pb-8">
              <p className={bodyClass} style={bodyStyle}>
                MarketScout started as a one-off analytics script. It has since grown into an early decision-support system — one that identifies, ranks, tracks, and supports action on real market opportunities. The architecture is designed to extend: new signal sources, new scoring dimensions, new export formats.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The underlying bet is that structured market intelligence, built around a repeatable workflow, has more long-term value than any individual insight it surfaces.
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
