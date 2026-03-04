import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';

const marketscout = projectsData.find(p => p.id === 'marketscout')!;

const sectionHeading = "text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4";
const sectionHeadingStyle = { fontSize: '24px', fontWeight: 600, lineHeight: '1.2' as const };
const subHeadingStyle = { fontSize: '20px', fontWeight: 600, lineHeight: '1.3' as const };
const bodyStyle = { fontSize: '18px', fontWeight: 400, lineHeight: '1.7' as const };
const bodyClass = "text-[#4B4B4B] font-['Inter']";

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

            {/* Demo placeholder */}
            <div className="max-w-2xl rounded-xl border border-[#E6E6E6] bg-[#FAFAFA] shadow-sm flex items-center justify-center py-16 px-8">
              <p className="text-[#7A7A7A] font-['Inter']" style={{ fontSize: '16px', fontWeight: 400 }}>
                Demo / visuals coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Body */}
        <section className="pb-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={{ fontSize: '28px', ...sectionHeadingStyle }}>
                MarketScout
              </h2>
              <p className={bodyClass} style={bodyStyle}>
                CLI AI Strategy Engine that turns live market signals into actionable AI adoption roadmaps.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Tech: Python, Requests, Pydantic, Rich, JSON/Markdown/HTML, Disk Caching, (Optional) LLM via OpenAI/Claude
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>What is MarketScout?</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is a zero-friction strategy engine that helps you answer a hard question fast:
              </p>
              <p className={bodyClass} style={bodyStyle}>
                “Where is the pain in this industry, and what AI adoption path would actually make sense right now?”
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Instead of starting from a blank page (or a vague chatbot prompt), MarketScout pulls real market signals (local business news + hiring demand), scores urgency through an explainable Pain Score, and outputs a structured, executive-ready strategy with a 30/60/90-day plan and concrete AI categories to pursue.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                It’s built as a CLI tool because the goal is speed, reliability, and repeatability—something you can run like an internal ops tool, not a flashy demo.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Why I built it (the story)</h2>
              <p className={bodyClass} style={bodyStyle}>
                I noticed a pattern: “AI strategy” is usually either:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>hand-wavy consulting slides, or</li>
                <li className={bodyClass} style={bodyStyle}>a chat session that sounds smart but isn’t grounded in evidence.</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                Real businesses don’t need “AI hype.” They need practical decisions:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>What operational bottlenecks are showing up right now?</li>
                <li className={bodyClass} style={bodyStyle}>What signals prove the problem is real?</li>
                <li className={bodyClass} style={bodyStyle}>What’s the lowest-risk AI adoption path?</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout was my attempt to build a tool that feels like something a real team would use:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>evidence-driven</li>
                <li className={bodyClass} style={bodyStyle}>explainable</li>
                <li className={bodyClass} style={bodyStyle}>repeatable</li>
                <li className={bodyClass} style={bodyStyle}>exportable into reports</li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>What it does (in one command)</h2>
              <p className={bodyClass} style={bodyStyle}>
                You run it with a target industry and location, and MarketScout generates strategy artifacts:
              </p>
              <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C] whitespace-pre">
{`python -m marketscout run \\
  --industry Construction \\
  --objective "Market entry" \\
  --city Vancouver \\
  --location "Vancouver, BC" \\
  --out out/`}
              </pre>
              <p className={bodyClass} style={bodyStyle}>Outputs</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>strategy.json → schema-validated structured strategy</li>
                <li className={bodyClass} style={bodyStyle}>report.md → clean executive markdown report</li>
                <li className={bodyClass} style={bodyStyle}>report.html → styled report for sharing</li>
                <li className={bodyClass} style={bodyStyle}>Terminal summary → aesthetic “Opportunity Map” and scoring tables</li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>The user experience (zero-friction)</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is designed to be fast and guided.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                No UI is required. No long prompt engineering. No manual research.
                It’s intentionally built as a tool you can run repeatedly while iterating ideas:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>pick industry</li>
                <li className={bodyClass} style={bodyStyle}>pick objective</li>
                <li className={bodyClass} style={bodyStyle}>pick city/location</li>
                <li className={bodyClass} style={bodyStyle}>run → get a strategy</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                This reflects product thinking: reduce friction, reduce ambiguity, maximize time-to-value.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How it works (end-to-end architecture)</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is structured like a real internal decision system:
              </p>

              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>1) Scout (Data Ingestion)</p>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout pulls live market signals:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Local business news via RSS feeds</li>
                <li className={bodyClass} style={bodyStyle}>Hiring demand / job signals via RSS-style feeds (or provider adapters)</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>It includes:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>request retry + backoff</li>
                <li className={bodyClass} style={bodyStyle}>clean error handling (ScoutError)</li>
                <li className={bodyClass} style={bodyStyle}>TTL-based disk caching to reduce repeated calls and avoid downtime</li>
              </ul>

              <p className="text-[#0B0B0C] font-['Space_Grotesk'] mt-6" style={subHeadingStyle}>2) Brain (Reasoning + Scoring)</p>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout converts raw signals into structured insights:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Uses industry templates to avoid randomness:</li>
              </ul>
              <ul className="space-y-2 ml-8 list-disc">
                <li className={bodyClass} style={bodyStyle}>default objectives</li>
                <li className={bodyClass} style={bodyStyle}>common bottlenecks</li>
                <li className={bodyClass} style={bodyStyle}>keyword maps → problem tags</li>
                <li className={bodyClass} style={bodyStyle}>allowed AI categories</li>
              </ul>
              <ul className="space-y-2 ml-6 list-disc mt-2">
                <li className={bodyClass} style={bodyStyle}>Produces explainable scoring:</li>
              </ul>
              <ul className="space-y-2 ml-8 list-disc">
                <li className={bodyClass} style={bodyStyle}>news_signal_score</li>
                <li className={bodyClass} style={bodyStyle}>jobs_signal_score</li>
                <li className={bodyClass} style={bodyStyle}>combined_pain_score (weighted)</li>
                <li className={bodyClass} style={bodyStyle}>counts + freshness + weights</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                This creates transparency: you can see why the pain score is what it is.
              </p>

              <p className="text-[#0B0B0C] font-['Space_Grotesk'] mt-6" style={subHeadingStyle}>3) Strategist (Outputs + Reports)</p>
              <p className={bodyClass} style={bodyStyle}>
                The Brain generates a validated JSON strategy object that includes:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Opportunity Map (4–6 problems minimum)</li>
                <li className={bodyClass} style={bodyStyle}>evidence links from news/jobs per problem</li>
                <li className={bodyClass} style={bodyStyle}>recommended AI categories per problem</li>
                <li className={bodyClass} style={bodyStyle}>a 30/60/90 plan</li>
                <li className={bodyClass} style={bodyStyle}>ROI notes + assumptions</li>
                <li className={bodyClass} style={bodyStyle}>signals used + score breakdown</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>Then MarketScout renders it into:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Markdown report</li>
                <li className={bodyClass} style={bodyStyle}>HTML report</li>
                <li className={bodyClass} style={bodyStyle}>terminal output for fast review</li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>What makes it technically impressive</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout isn’t “a chatbot wrapper.” It’s an engineered system.
              </p>
              <p className={bodyClass} style={bodyStyle}>✅ Evidence-first generation</p>
              <p className={bodyClass} style={bodyStyle}>
                Every recommendation must have evidence attached from the ingested signals.
              </p>
              <p className={bodyClass} style={bodyStyle}>✅ Deterministic structure</p>
              <p className={bodyClass} style={bodyStyle}>
                Outputs are schema-validated with Pydantic and versioned (strategy_version), which enables:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>safe rendering</li>
                <li className={bodyClass} style={bodyStyle}>long-term evolution</li>
                <li className={bodyClass} style={bodyStyle}>consistent exports</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>✅ Production-style reliability</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>retry + backoff networking</li>
                <li className={bodyClass} style={bodyStyle}>disk cache with TTL</li>
                <li className={bodyClass} style={bodyStyle}>cache-on-failure behavior (uses last valid real fetch)</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>✅ Built like a real tool</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>CLI-first design</li>
                <li className={bodyClass} style={bodyStyle}>artifacts written to disk</li>
                <li className={bodyClass} style={bodyStyle}>test coverage for caching, CLI outputs, and fetch mocking</li>
                <li className={bodyClass} style={bodyStyle}>professional terminal presentation with Rich</li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Project workflow (how I built it)</h2>
              <p className={bodyClass} style={bodyStyle}>
                I built MarketScout in iterative milestones the way a product team would:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>v1: pipeline + schema + exports</li>
                <li className={bodyClass} style={bodyStyle}>v1.5: multi-signal scoring + templates</li>
                <li className={bodyClass} style={bodyStyle}>v1.0 release: polished docs, reporting formats</li>
                <li className={bodyClass} style={bodyStyle}>v1.1: refactor into a real market tool with live signals, caching, CLI run command, and UI removal</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                That progression is deliberate: start with a working end-to-end system, then harden reliability and realism.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Use cases</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is useful for:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Product strategy: explore what industries are “hurting” and why</li>
                <li className={bodyClass} style={bodyStyle}>Consulting / innovation: generate structured opportunity maps and roadmaps</li>
                <li className={bodyClass} style={bodyStyle}>Sales / GTM: identify “AI-ready” companies via hiring patterns</li>
                <li className={bodyClass} style={bodyStyle}>Operations research: track recurring bottlenecks in a region over time</li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Future roadmap (if I keep building)</h2>
              <p className={bodyClass} style={bodyStyle}>
                I designed the architecture so this can scale naturally:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Add economics signals (FRED / StatsCan equivalents)</li>
                <li className={bodyClass} style={bodyStyle}>Add more job providers with stable APIs</li>
                <li className={bodyClass} style={bodyStyle}>Add lead export + readiness scoring</li>
                <li className={bodyClass} style={bodyStyle}>Add SQLite history (“industry pain over time”)</li>
                <li className={bodyClass} style={bodyStyle}>Add evaluation harness to test output quality and prevent drift</li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Links</h2>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>GitHub: (link here)</li>
                <li className={bodyClass} style={bodyStyle}>Demo Outputs: sample report screenshots / example output folder</li>
                <li className={bodyClass} style={bodyStyle}>Concept Image: (link later)</li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Resume bullets (copy-ready)</h2>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Built a CLI-first strategy engine that converts live market signals (news + hiring demand) into schema-validated AI adoption roadmaps and executive-ready reports.</li>
                <li className={bodyClass} style={bodyStyle}>Engineered a modular Scout → Brain → Strategist pipeline with retry/backoff, TTL disk caching, strict Pydantic validation, and versioned output schemas.</li>
                <li className={bodyClass} style={bodyStyle}>Designed explainable multi-signal scoring (news vs jobs) to produce a weighted Pain Score and evidence-backed Opportunity Map for real-world decision support.</li>
                <li className={bodyClass} style={bodyStyle}>Generated exportable artifacts (JSON, Markdown, HTML) and professional terminal summaries using Rich; implemented tests for caching, CLI execution, and mocked fetch reliability.</li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <p className={bodyClass} style={bodyStyle}>
              If you want, paste your portfolio site’s “project template” structure (how your other projects are formatted), and I’ll rewrite this to match it exactly (same headings, same length, same tone).
            </p>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>
          </div>
        </section>
      </main>
    </div>
  );
}
