import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';
import { ProjectSlideshow } from '@/app/components/ProjectSlideshow';
import { ProjectSideNav } from '@/app/components/ProjectSideNav';

const marketscout = projectsData.find(p => p.id === 'marketscout')!;

const MARKET_SCOUT_SECTIONS = [
  { id: 'what-marketscout-is', label: 'What MarketScout Is' },
  { id: 'why-this-exists', label: 'Why It Exists' },
  { id: 'how-it-works', label: 'How the System Works' },
  { id: 'example-runs', label: 'Example Runs' },
  { id: 'technical-design', label: 'Technical Design' },
  { id: 'how-to-run', label: 'Getting Started' },
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

const codeChip =
  "text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm";

function ExampleScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

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
                MarketScout is a live market intelligence system that turns a single city + industry prompt into a ranked list of real B2B targets — the companies actually hiring right now, the operational pain those job postings reveal, and a one-line pitch tailored to each company.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                It is not a pre-built report or a static lead list. Every run pulls fresh signals from <strong className="text-[#0B0B0C] font-medium">Google Jobs (via SerpAPI)</strong> and <strong className="text-[#0B0B0C] font-medium">NewsAPI</strong>, then asks <strong className="text-[#0B0B0C] font-medium">Groq</strong> to read the actual job titles and headlines and synthesize the picture. There are no hardcoded keyword maps and no fixed pain categories — the analysis is generated dynamically from whatever signals come back, so the same system works for construction in Vancouver or banking in Calgary without code changes.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Internally, MarketScout follows a <strong className="text-[#0B0B0C] font-medium">Medallion Architecture</strong>:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Bronze</strong> — raw API responses from SerpAPI and NewsAPI, stamped with the run ID</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Silver</strong> — deduplicated, validated, and scored signals with consistent company-name normalization</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Gold</strong> — a SQLite star schema (<code className={codeChip}>dim_runs</code>, <code className={codeChip}>dim_signals</code>, <code className={codeChip}>dim_opportunities</code>, <code className={codeChip}>fact_leads</code>) that powers the dashboard and the natural-language query interface</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                It's built for BD teams, strategy teams, and anyone who needs to walk into a Monday morning knowing exactly who to call and exactly what to say.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 2 — Why It Exists */}
            <div id="why-this-exists" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Why It Exists</h2>
              <p className={bodyClass} style={bodyStyle}>
                Manual market research doesn't scale. Picking a city, picking an industry, and figuring out which companies in that segment are actually worth a conversation takes hours of skimming job boards, LinkedIn, and press coverage — and the answer is stale by the time it's written down.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Job postings are the single best real-time signal of company pain. A company hiring three project managers and a director of operations isn't doing it for fun — they're absorbing growth, replacing churn, or scrambling to deliver. That intent is sitting in plain text on Google Jobs every day; nobody is reading it at the speed it's published.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout was built on the bet that an LLM, given the actual job titles and the actual headlines, can read that intent faster and more honestly than a keyword-match system can. Groq doesn't get a keyword list to score against — it gets the raw signals and is asked to call the pattern. That's why the same pipeline produces useful answers for construction, banking, and project management without any per-industry tuning.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 3 — How the System Works */}
            <div id="how-it-works" className="space-y-8">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How the System Works</h2>
              <p className={bodyClass} style={bodyStyle}>
                A run is a single end-to-end pass triggered by a city + industry submission. It moves through five stages, each with its own responsibilities and outputs.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>1. Data Ingestion</p>
                <p className={bodyClass} style={bodyStyle}>
                  SerpAPI is hit with two parallel Google Jobs queries — <code className={codeChip}>"{`{industry} jobs {city}`}"</code> and <code className={codeChip}>"{`{industry} hiring {city}`}"</code> — to maximize coverage of postings that surface under different phrasings. Up to 100 raw job postings come back. NewsAPI fetches 50 industry-specific headlines for the same market context. Both streams are deduplicated against the combined corpus and stamped with the current <code className={codeChip}>run_id</code> before they touch the database.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>2. AI Analysis (Groq)</p>
                <p className={bodyClass} style={bodyStyle}>
                  Groq receives the actual job titles and headlines — not a keyword map, not a pre-defined category list. It returns three things: the top 10 companies ranked by hiring urgency, a pain category synthesized from each company's specific posting pattern, and a one-line pitch recommendation per company. Because the prompt is structured around "read this and tell me what you see," the analysis adapts to any industry without code changes.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>3. Gold DB Write</p>
                <p className={bodyClass} style={bodyStyle}>
                  Every signal and every Groq output is persisted to a SQLite star schema via SQLAlchemy:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className={bodyClass} style={bodyStyle}><code className={codeChip}>dim_runs</code> — run metadata (city, industry, timestamp, signal counts)</li>
                  <li className={bodyClass} style={bodyStyle}><code className={codeChip}>dim_signals</code> — every job posting and headline with <code className={codeChip}>company_name</code>, <code className={codeChip}>signal_type</code>, and <code className={codeChip}>run_id</code></li>
                  <li className={bodyClass} style={bodyStyle}><code className={codeChip}>dim_opportunities</code> — the Groq-generated pain categories and pitch lines</li>
                  <li className={bodyClass} style={bodyStyle}><code className={codeChip}>fact_leads</code> — company-to-opportunity links that power the dashboard's company intelligence cards</li>
                </ul>
                <p className={bodyClass} style={bodyStyle}>
                  Because everything is partitioned by <code className={codeChip}>run_id</code>, a single SQLite file can hold many runs side-by-side without cross-contamination.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>4. Dashboard (Streamlit)</p>
                <p className={bodyClass} style={bodyStyle}>
                  A clean, monospace Streamlit dashboard reads directly from the Gold DB and renders the run as a single page: signal count, company count, the top opportunity, a market-context strip of the latest industry headlines, the target companies table sorted by hiring volume, and a stack of company intelligence cards showing exactly what each company is hiring for and what to pitch them. No charts to interpret — just the answer.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>5. NL2SQL Chat (Groq)</p>
                <p className={bodyClass} style={bodyStyle}>
                  Below the dashboard is a plain-English query box. A user types something like <em>"Tell me more about the TELUS work"</em> and Groq generates a SQL statement scoped to the current <code className={codeChip}>run_id</code>. The SQL is executed against a read-only SQLite connection, the rows come back, and Groq writes a short executive summary that names the company, explains the signal, and proposes what to pitch. The user never sees the SQL — they just get the answer in business language.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 4 — Example Runs */}
            <div id="example-runs" className="space-y-12">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Example Runs</h2>
              <p className={bodyClass} style={bodyStyle}>
                Three real runs, each pulled live from Google Jobs and NewsAPI. Same code, same prompts, three completely different cities and industries — no per-industry tuning between them.
              </p>

              {/* Example 1 — Vancouver + Construction */}
              <div className="space-y-4">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Vancouver · Construction</p>
                <p className={bodyClass} style={bodyStyle}>
                  Top companies surfaced: <strong className="text-[#0B0B0C] font-medium">AtkinsRéalis</strong>, <strong className="text-[#0B0B0C] font-medium">Turner Construction</strong>, <strong className="text-[#0B0B0C] font-medium">Axiom Builders</strong>, <strong className="text-[#0B0B0C] font-medium">AVOS Construction</strong>. The pattern Groq identified was labor shortages and wage pressure — a mix of senior PM, superintendent, and field supervisor postings concentrated across a handful of large GCs, which is the structural shape of a market scrambling for delivery capacity rather than chasing new contracts.
                </p>
              </div>

              {/* Example 2 — Vancouver + Project Management (carousel run) */}
              <div className="space-y-4">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Vancouver · Project Management</p>
                <p className={bodyClass} style={bodyStyle}>
                  This is the run captured in the screenshots above. 96 signals, 10 companies identified, top opportunity surfaced as <em>Expansion, Talent Acquisition</em>. Top companies: <strong className="text-[#0B0B0C] font-medium">AtkinsRéalis</strong>, <strong className="text-[#0B0B0C] font-medium">Robert Half</strong>, <strong className="text-[#0B0B0C] font-medium">Stantec</strong>, <strong className="text-[#0B0B0C] font-medium">GHD Group</strong>, <strong className="text-[#0B0B0C] font-medium">Demonware</strong>, <strong className="text-[#0B0B0C] font-medium">TELUS</strong>. Each card surfaces the specific role and the recommended pitch — TELUS hiring a Senior Project Manager – Products & Services (Internet Projects), for example, is flagged as a Talent Acquisition pitch with a clear product-management workflow angle.
                </p>
              </div>

              {/* Example 3 — Calgary + Banking */}
              <div className="space-y-4">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Calgary · Banking</p>
                <p className={bodyClass} style={bodyStyle}>
                  Top companies: <strong className="text-[#0B0B0C] font-medium">CIBC</strong>, <strong className="text-[#0B0B0C] font-medium">RBC</strong>, <strong className="text-[#0B0B0C] font-medium">Scotiabank</strong>, <strong className="text-[#0B0B0C] font-medium">BMO</strong>, <strong className="text-[#0B0B0C] font-medium">TD</strong>, <strong className="text-[#0B0B0C] font-medium">National Bank</strong>, <strong className="text-[#0B0B0C] font-medium">Neo Financial</strong>, <strong className="text-[#0B0B0C] font-medium">ATB Financial</strong>. The dominant signal was Talent Acquisition across both incumbents and challengers — including a distinct Neo / ATB cluster around digital-first hiring that sits next to the Big Five's branch and risk-side postings.
                </p>
              </div>

              <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

              {/* NL2SQL Example */}
              <div className="space-y-4">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>NL2SQL Example</p>
                <p className={bodyClass} style={bodyStyle}>
                  From the Vancouver · Project Management run, a user typed the following into the chat box:
                </p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`Tell me more about the TELUS work.`}
                </pre>
                <p className={bodyClass} style={bodyStyle}>
                  Groq generated a <code className={codeChip}>SELECT</code> against <code className={codeChip}>dim_signals</code> and <code className={codeChip}>dim_opportunities</code> scoped to the current <code className={codeChip}>run_id</code> and filtered to TELUS, executed it through the read-only SQLite connection, then synthesized the rows:
                </p>
                <div className="border-l-2 border-[#0B0B0C] pl-5 py-1">
                  <p className={bodyClass} style={{ ...bodyStyle, fontStyle: 'italic' }}>
                    "TELUS is actively hiring for a Senior Project Manager – Products & Services (Internet Projects) role, signaling prioritization of internet product development. This is an opportunity to pitch project management tooling or workflow automation solutions."
                  </p>
                </div>
                <ExampleScreenshot src="/images/marketscout/6.png" alt="MarketScout NL2SQL chat showing the TELUS query and synthesized answer" />
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 5 — Technical Design */}
            <div id="technical-design" className="space-y-6">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technical Design</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is a small, focused stack. Every piece is doing one job, and the seams between them are explicit.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Stack</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Backend</strong> — FastAPI exposes <code className={codeChip}>/search</code> (runs the full ingestion + analysis pipeline) and <code className={codeChip}>/ask</code> (NL2SQL queries against a given run).</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Persistence</strong> — SQLite with SQLAlchemy. One file, star schema, partitioned by <code className={codeChip}>run_id</code>. No PostgreSQL, no dbt, no warehouse.</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Frontend</strong> — Streamlit with run-scoped session state. The current <code className={codeChip}>run_id</code> is the one identifier every read flows through.</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">LLM</strong> — Groq is used twice: once to generate the company / pain / pitch analysis from raw signals, and again to translate plain-English questions into SQL and synthesize the rows back into an answer.</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Data sources</strong> — SerpAPI (Google Jobs, dual queries for coverage) and NewsAPI (industry headlines).</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>NL2SQL Safety</p>
                <p className={bodyClass} style={bodyStyle}>
                  An LLM with a SQL connection is a sharp tool. MarketScout uses three independent layers to keep it pointed at the right thing:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">SQL keyword blocklist</strong> — generated queries are screened for <code className={codeChip}>DROP</code>, <code className={codeChip}>DELETE</code>, <code className={codeChip}>UPDATE</code>, <code className={codeChip}>INSERT</code>, <code className={codeChip}>ALTER</code>, and <code className={codeChip}>TRUNCATE</code>. Any match is rejected before it reaches the database.</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Read-only SQLite URI</strong> — the connection used by the NL2SQL path opens the database in read-only mode (<code className={codeChip}>file:marketscout.db?mode=ro</code>). Even if a write somehow slipped past the blocklist, the connection itself can't execute it.</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Run-scoped queries</strong> — the active <code className={codeChip}>run_id</code> is injected into every generated query as a hard filter. A user can't accidentally (or intentionally) reach across into another run's signals.</li>
                </ul>
                <p className={bodyClass} style={bodyStyle}>
                  The safety guarantee doesn't depend on the model behaving correctly. It's enforced by the connection and the query envelope, independent of what Groq produces.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Why No Hardcoded Templates</p>
                <p className={bodyClass} style={bodyStyle}>
                  An earlier version of the pipeline used a keyword-to-pain-category map. It worked for two industries and broke on every new one. The current design hands the raw titles and headlines to Groq and asks it to call the pattern. That's why the same code runs cleanly across construction, banking, and project management — and why adding a new industry requires no new code at all.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 6 — Getting Started */}
            <div id="how-to-run" className="space-y-6">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Getting Started</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is a local Python project. The backend is a FastAPI service and the frontend is a Streamlit app — both run from your terminal.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Clone and Install</p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`git clone https://github.com/abosfu/marketscout
cd marketscout
pip install -e .`}
                </pre>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Configure Environment Variables</p>
                <p className={bodyClass} style={bodyStyle}>
                  Create a <code className={codeChip}>.env</code> file in the project root with the three required keys:
                </p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`SERPAPI_KEY=your_key
NEWSAPI_KEY=your_key
GROQ_API_KEY=your_key`}
                </pre>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Start the Backend</p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`uvicorn marketscout.backend.main:app --reload --port 8000`}
                </pre>
                <p className={bodyClass} style={bodyStyle}>
                  FastAPI is now running on <code className={codeChip}>localhost:8000</code> with interactive docs at <code className={codeChip}>/docs</code>.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Start the Dashboard</p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`streamlit run src/marketscout/frontend/app.py`}
                </pre>
                <p className={bodyClass} style={bodyStyle}>
                  Open <code className={codeChip}>http://localhost:8501</code>, type a city and an industry, hit <em>Run Search</em>, and the full pipeline executes end-to-end in a single click.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Closing */}
            <div className="space-y-4 pb-8">
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is the version of market research that doesn't need a research team. A city, an industry, one click, and you walk away with the companies to call and the words to say when you call them — sourced from real job postings and real news, read by an LLM that doesn't need a keyword list to know what hiring intent looks like.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The design is intentionally compact: SQLite over PostgreSQL, Streamlit over a custom React app, Groq over a fine-tuned pipeline. Every piece earns its place by being the smallest thing that does the job — and the system is easier to extend because of it. New data sources slot in as new ingestion functions, new industries require no code, and the NL2SQL layer keeps the analysis open-ended without ever putting the database at risk.
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
