import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';
import { ProjectSlideshow } from '@/app/components/ProjectSlideshow';

const marketscout = projectsData.find(p => p.id === 'marketscout')!;

const sectionHeading =
  "text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-4";
const sectionHeadingStyle = {
  fontSize: 'clamp(22px, 2.5vw, 28px)',
  fontWeight: 500,
  lineHeight: '1.2' as const,
  letterSpacing: '0.05em',
};
const subHeadingStyle = { fontSize: '18px', fontWeight: 600, lineHeight: '1.3' as const };
const bodyStyle = { fontSize: '18px', fontWeight: 400, lineHeight: '1.7' as const };
const bodyClass = "text-[#4B4B4B] font-['Inter']";

const IMG1 = '/images/marketscout/1.png';
const IMG2 = '/images/marketscout/2.png';
const IMG3 = '/images/marketscout/3.png.png';

export function ProjectMarketScout() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#4B4B4B] hover:text-[#0B0B0C] transition-colors font-['Inter'] mb-12 group"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>

            {marketscout.category && (
              <p
                className="text-[#7A7A7A] font-['Inter'] uppercase tracking-wide mb-3"
                style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em' }}
              >
                {marketscout.category}
              </p>
            )}

            <h1
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
              style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 700, lineHeight: '1.1' }}
            >
              {marketscout.title}
            </h1>

            <p
              className={`${bodyClass} mb-6 max-w-3xl`}
              style={{ fontSize: '20px', ...bodyStyle }}
            >
              {marketscout.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10 text-sm font-['Inter']">
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

        {/* Case Study Body — Expandable Section Content */}
        <section className="pb-24 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-5xl mx-auto space-y-12 pt-16">
            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            {/* What MarketScout Does */}
            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>What MarketScout Does</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is a CLI strategy engine that analyzes real-world market signals and converts them into structured business opportunities.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The system takes two inputs:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>City</li>
                <li className={bodyClass} style={bodyStyle}>Industry</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                From those inputs, it collects live signals from:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>business news headlines</li>
                <li className={bodyClass} style={bodyStyle}>job market demand</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                These signals are transformed into a ranked Opportunity Map of operational pain points and solution opportunities.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Each opportunity includes:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>a problem description</li>
                <li className={bodyClass} style={bodyStyle}>supporting evidence</li>
                <li className={bodyClass} style={bodyStyle}>ROI signal</li>
                <li className={bodyClass} style={bodyStyle}>pain score</li>
                <li className={bodyClass} style={bodyStyle}>confidence</li>
                <li className={bodyClass} style={bodyStyle}>solution category</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                The result is a repeatable workflow that replaces manual market scanning with an automated, explainable process.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            {/* How the System Works */}
            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How the System Works</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout runs through a structured pipeline designed for transparency and reproducibility.
              </p>

              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>1. Signal Collection</p>
              <p className={bodyClass} style={bodyStyle}>
                The system fetches live signals from two sources:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Google News RSS</li>
                <li className={bodyClass} style={bodyStyle}>Adzuna Job Market API</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                These sources provide insight into:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>operational pressure</li>
                <li className={bodyClass} style={bodyStyle}>hiring demand</li>
                <li className={bodyClass} style={bodyStyle}>supply chain issues</li>
                <li className={bodyClass} style={bodyStyle}>regulatory friction</li>
                <li className={bodyClass} style={bodyStyle}>market expansion signals</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                The CLI shows the fetch status so users can verify the sources were successfully retrieved.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>2. Opportunity Detection</p>
              <p className={bodyClass} style={bodyStyle}>
                The signals are analyzed using industry templates that map keywords to operational bottlenecks.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Examples of detected issues include:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>labor shortages</li>
                <li className={bodyClass} style={bodyStyle}>supply chain constraints</li>
                <li className={bodyClass} style={bodyStyle}>financing uncertainty</li>
                <li className={bodyClass} style={bodyStyle}>regulatory delays</li>
                <li className={bodyClass} style={bodyStyle}>margin pressure</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                These signals are grouped and converted into opportunity candidates.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>3. Opportunity Scoring</p>
              <p className={bodyClass} style={bodyStyle}>
                Each opportunity receives several metrics:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Pain Score — severity of the problem</li>
                <li className={bodyClass} style={bodyStyle}>ROI Signal — expected value of solving it</li>
                <li className={bodyClass} style={bodyStyle}>Confidence — reliability of supporting evidence</li>
                <li className={bodyClass} style={bodyStyle}>Score Breakdown — how signals contributed to the result</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                Scores are transparent and traceable to the underlying signals.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>4. Artifact Generation</p>
              <p className={bodyClass} style={bodyStyle}>
                Each run produces structured outputs:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>strategy.json — full machine-readable strategy output</li>
                <li className={bodyClass} style={bodyStyle}>signal_analysis.json — breakdown of input signals</li>
                <li className={bodyClass} style={bodyStyle}>report.html — readable executive report</li>
                <li className={bodyClass} style={bodyStyle}>report.md — markdown version of the report</li>
                <li className={bodyClass} style={bodyStyle}>summary.txt — quick terminal summary</li>
                <li className={bodyClass} style={bodyStyle}>leads.csv — potential companies related to the detected signals</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                These outputs allow the results to be used in both technical and business workflows.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            {/* Example Runs */}
            <div className="space-y-6">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Example Runs</h2>

            {/* Example 1 — Construction: full-width screenshot */}
            <div className="space-y-4">
              <h3 className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>Construction — Vancouver</h3>
              <div className="w-full max-w-4xl mx-auto">
                <img
                  src={IMG1}
                  alt="Construction opportunity map generated from Vancouver market signals."
                  className="w-full h-auto"
                />
                <p className="text-[#7A7A7A] font-['Inter'] mt-4 text-center" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5' }}>
                  Construction opportunity map generated from Vancouver market signals.
                </p>
              </div>
              <p className={bodyClass} style={bodyStyle}>
                This run analyzes construction-related signals in Vancouver.
              </p>
              <p className={bodyClass} style={bodyStyle}>Command used:</p>
              <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
                PYTHONPATH=src python3 -m marketscout run --city Vancouver --industry Construction --deterministic
              </pre>
              <p className={bodyClass} style={bodyStyle}>
                The engine identifies key pressures affecting the market:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>interest rate uncertainty</li>
                <li className={bodyClass} style={bodyStyle}>labor shortages</li>
                <li className={bodyClass} style={bodyStyle}>material cost volatility</li>
                <li className={bodyClass} style={bodyStyle}>permitting delays</li>
                <li className={bodyClass} style={bodyStyle}>supply chain disruptions</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                Output is a ranked set of opportunities that can inform automation, operational tools, or product strategy.
              </p>
            </div>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            {/* Example 2 — Real Estate: two-column left image, right text */}
            <div className="space-y-4 pt-4">
              <h3 className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>Real Estate — Vancouver</h3>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col items-center lg:items-start">
                  <img
                    src={IMG2}
                    alt="Real estate opportunity map generated from Vancouver market signals."
                    className="w-full h-auto"
                  />
                  <p className="text-[#7A7A7A] font-['Inter'] mt-4 lg:text-left text-center" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5' }}>
                    Real estate opportunity map generated from Vancouver market signals.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <p className={bodyClass} style={bodyStyle}>Command used:</p>
                  <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
                    PYTHONPATH=src python3 -m marketscout run --city Vancouver --industry "Real Estate" --deterministic
                  </pre>
                  <p className={bodyClass} style={bodyStyle}>
                    This scenario highlights different signals from the same city.
                  </p>
                  <p className={bodyClass} style={bodyStyle}>
                    The opportunity map now focuses on issues such as:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li className={bodyClass} style={bodyStyle}>housing affordability</li>
                    <li className={bodyClass} style={bodyStyle}>inventory absorption</li>
                    <li className={bodyClass} style={bodyStyle}>financing conditions</li>
                    <li className={bodyClass} style={bodyStyle}>construction costs</li>
                    <li className={bodyClass} style={bodyStyle}>zoning and regulatory changes</li>
                  </ul>
                  <p className={bodyClass} style={bodyStyle}>
                    The change in output demonstrates that the engine adapts to industry-specific signals rather than producing generic results.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            {/* Example 3 — Retail: two-column left text, right image */}
            <div className="space-y-4 pt-4">
              <h3 className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>Retail — Toronto</h3>
              <div className="flex flex-col lg:flex-row lg:flex-row-reverse gap-8 items-start">
                <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col items-center lg:items-end">
                  <img
                    src={IMG3}
                    alt="Retail opportunity map generated from Toronto market signals."
                    className="w-full h-auto"
                  />
                  <p className="text-[#7A7A7A] font-['Inter'] mt-4 lg:text-right text-center" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5' }}>
                    Retail opportunity map generated from Toronto market signals.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <p className={bodyClass} style={bodyStyle}>Command used:</p>
                  <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
                    PYTHONPATH=src python3 -m marketscout run --city Toronto --industry Retail --deterministic
                  </pre>
                  <p className={bodyClass} style={bodyStyle}>
                    This example demonstrates the system working across a different city and industry.
                  </p>
                  <p className={bodyClass} style={bodyStyle}>Key signals include:</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li className={bodyClass} style={bodyStyle}>margin pressure</li>
                    <li className={bodyClass} style={bodyStyle}>consumer demand fluctuations</li>
                    <li className={bodyClass} style={bodyStyle}>rent and occupancy costs</li>
                    <li className={bodyClass} style={bodyStyle}>supply chain disruptions</li>
                    <li className={bodyClass} style={bodyStyle}>labor shortages</li>
                  </ul>
                  <p className={bodyClass} style={bodyStyle}>
                    The results show how the same engine can surface opportunities across multiple economic environments.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            {/* Technical Design */}
            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technical Design</h2>
              <p className={bodyClass} style={bodyStyle}>
                The project is intentionally built as a CLI-first system rather than a web dashboard.
              </p>
              <p className={bodyClass} style={bodyStyle}>Key design principles include:</p>

              <p className="text-[#0B0B0C] font-['Space_Grotesk'] mt-4" style={subHeadingStyle}>Deterministic Mode</p>
              <p className={bodyClass} style={bodyStyle}>
                Runs can be reproduced using:
              </p>
              <p className={bodyClass} style={bodyStyle}>--deterministic</p>
              <p className={bodyClass} style={bodyStyle}>
                This ensures identical outputs when testing or demonstrating the tool.
              </p>

              <p className="text-[#0B0B0C] font-['Space_Grotesk'] mt-4" style={subHeadingStyle}>Evidence-Based Strategy Generation</p>
              <p className={bodyClass} style={bodyStyle}>
                The system tracks which signals produced each opportunity.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                An evaluation step verifies that evidence links come from the input signals so insights stay grounded in the data.
              </p>

              <p className="text-[#0B0B0C] font-['Space_Grotesk'] mt-4" style={subHeadingStyle}>Transparent Data Quality Metrics</p>
              <p className={bodyClass} style={bodyStyle}>
                Each run reports:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>freshness window</li>
                <li className={bodyClass} style={bodyStyle}>coverage score</li>
                <li className={bodyClass} style={bodyStyle}>source diversity</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                These metrics help users understand the reliability of the generated opportunity map.
              </p>

              <p className="text-[#0B0B0C] font-['Space_Grotesk'] mt-4" style={subHeadingStyle}>Modular Architecture</p>
              <p className={bodyClass} style={bodyStyle}>
                The project is structured around several core modules:
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Scout</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Fetches signals from news and job markets.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Brain</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Transforms signals into opportunities using scoring logic.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Reports</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Generates human-readable artifacts.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>CLI</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Coordinates the full pipeline.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                This architecture keeps the system modular and testable.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter'] mt-8" style={bodyStyle}>⸻</p>

            {/* Why This Project Exists */}
            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Why This Project Exists</h2>
              <p className={bodyClass} style={bodyStyle}>
                Market research is often fragmented across news sources, hiring data, and industry reports.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout aims to make that process faster and more structured by turning raw signals into actionable opportunity maps.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Instead of manually scanning dozens of sources, users can run a single command and immediately see which problems appear most frequently in a given market.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            {/* How to Run the Project */}
            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How to Run the Project</h2>
              <p className={bodyClass} style={bodyStyle}>Example command:</p>
              <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
                PYTHONPATH=src python3 -m marketscout run --city Vancouver --industry Construction --deterministic
              </pre>
              <p className={bodyClass} style={bodyStyle}>
                The tool then produces a complete strategy output inside the out/ directory.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Output is written to the out/ directory; evaluation and bundling are optional.
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
