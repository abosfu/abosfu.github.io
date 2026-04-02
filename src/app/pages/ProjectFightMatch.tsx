import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';
import { ProjectSideNav } from '@/app/components/ProjectSideNav';

const fightmatch = projectsData.find(p => p.id === 'fightmatch')!;

const FIGHT_MATCH_SECTIONS = [
  { id: 'fightmatch-intro', label: 'Introduction' },
  { id: 'the-problem', label: 'The Problem' },
  { id: 'the-solution', label: 'The Solution' },
  { id: 'how-it-works', label: 'How the System Works' },
  { id: 'engineering-challenges', label: 'Engineering Challenges' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'results', label: 'Results' },
  { id: 'future-improvements', label: 'Future Improvements' },
  { id: 'why-i-built-this', label: 'Why I Built This' },
];

const sectionHeading =
  "text-[#0B0B0C] font-heading tracking-tight uppercase mb-4";
const sectionHeadingStyle = {
  fontSize: 'clamp(22px, 2.5vw, 28px)',
  fontWeight: 500,
  lineHeight: '1.2' as const,
  letterSpacing: '0.05em',
};
const subHeadingStyle = { fontSize: '20px', fontWeight: 600, lineHeight: '1.3' as const };
const bodyStyle = { fontSize: '18px', fontWeight: 400, lineHeight: '1.7' as const };
const bodyClass = "text-[#4B4B4B] font-body";

export function ProjectFightMatch() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] font-body">
      <ProjectSideNav sections={FIGHT_MATCH_SECTIONS} />
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

            {fightmatch.category && (
              <p
                className="text-[#7A7A7A] font-body uppercase tracking-wide mb-3"
                style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em' }}
              >
                {fightmatch.category}
              </p>
            )}

            <h1
              className="text-[#0B0B0C] font-heading mb-4"
              style={{ fontSize: 'clamp(40px, 7vw, 64px)', fontWeight: 600, lineHeight: '1.15' }}
            >
              {fightmatch.title}
            </h1>

            <p
              className={`${bodyClass} mb-6 max-w-3xl`}
              style={{ fontSize: '20px', ...bodyStyle }}
            >
              {fightmatch.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10 text-sm font-body">
              <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                Skills
              </span>
              <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                {fightmatch.tech.join(' • ')}
              </span>
            </div>

            {/* Demo placeholder */}
            <div className="max-w-2xl rounded-xl border border-[#E6E6E6] bg-[#FAFAFA] shadow-sm flex items-center justify-center py-16 px-8">
              <p className="text-[#7A7A7A] font-body" style={{ fontSize: '16px', fontWeight: 400 }}>
                Demo / visuals coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Body */}
        <section className="pb-24 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-5xl mx-auto space-y-8 pt-16">
            <div id="fightmatch-intro" className="space-y-4">
              <h2 className={sectionHeading} style={{ fontSize: '28px', ...sectionHeadingStyle }}>
                Introduction
              </h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch bridges the gap between complex relational databases and non-technical decision-makers. It transforms raw historical performance data into an interactive, AI-driven Business Intelligence platform.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Instead of relying on static dashboards or black-box predictive models, FightMatch utilizes a dual-LLM architecture. Users can ask natural language questions (e.g., &quot;Who has the striking advantage between Fighter A and Fighter B?&quot;), which the system securely translates into executable SQL queries. It then processes the raw data return into human-readable strategic narratives and dynamic visual charts.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="the-problem" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>The Problem</h2>
              <p className={bodyClass} style={bodyStyle}>
                Combat sports promotions and sports analysts face a massive data bottleneck.
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>
                  Decision-makers (matchmakers, executives) rely on rigid, static dashboards to evaluate talent and book fights.
                </li>
                <li className={bodyClass} style={bodyStyle}>
                  Predictive machine learning models often output &quot;black-box&quot; probabilities (e.g., &quot;Fighter A has a 65% chance to win&quot;) without explaining <em>why</em>, breaking user trust.
                </li>
                <li className={bodyClass} style={bodyStyle}>
                  Querying complex historical performance trends traditionally requires a dedicated data engineer to write SQL.
                </li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                The goal was to build a system where stakeholders could explore competitive data dynamically, using natural language to uncover actionable insights instantly.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="the-solution" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>The Solution</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch is built on a modern, 5-layer AI architecture designed for secure execution and explainability:
              </p>
              <ol className="space-y-3 ml-6 list-decimal">
                <li className={bodyClass} style={bodyStyle}>
                  <strong className="text-[#0B0B0C] font-medium">Data Infrastructure (SQL):</strong> A normalized relational database storing fighters, events, bouts, and highly granular performance metrics.
                </li>
                <li className={bodyClass} style={bodyStyle}>
                  <strong className="text-[#0B0B0C] font-medium">The API Bridge (FastAPI):</strong> A high-performance asynchronous backend that handles request routing and database sessions.
                </li>
                <li className={bodyClass} style={bodyStyle}>
                  <strong className="text-[#0B0B0C] font-medium">NL2SQL Router:</strong> An LLM layer that ingests the user&apos;s natural language question, reads the database schema, and generates strict, valid SQL.
                </li>
                <li className={bodyClass} style={bodyStyle}>
                  <strong className="text-[#0B0B0C] font-medium">Secure Execution Engine:</strong> A sandboxed environment that runs the generated SQL via read-only roles to prevent database manipulation.
                </li>
                <li className={bodyClass} style={bodyStyle}>
                  <strong className="text-[#0B0B0C] font-medium">Semantic Explanation Layer:</strong> A secondary LLM pass that translates the raw JSON data payload into a plain-English strategic breakdown, presented on a React/Tailwind frontend alongside dynamic charts.
                </li>
              </ol>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="how-it-works" className="space-y-6">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How the System Works</h2>
              <p className={bodyClass} style={bodyStyle}>
                The platform moves from raw data to visual insight in milliseconds:
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Natural Language Input</p>
                  <p className={bodyClass} style={bodyStyle}>
                    User asks: &quot;Find active lightweight fighters with a finish rate above 70%.&quot;
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Schema Injection &amp; Query Generation</p>
                  <p className={bodyClass} style={bodyStyle}>
                    The API passes the request and the SQL DDL to the LLM to generate a <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">SELECT</code> statement.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Database Execution</p>
                  <p className={bodyClass} style={bodyStyle}>
                    SQLAlchemy executes the query securely against the database.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Narrative Synthesis</p>
                  <p className={bodyClass} style={bodyStyle}>
                    The system feeds the raw data return back to the LLM to generate a 2–3 sentence strategic summary.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Visualization</p>
                  <p className={bodyClass} style={bodyStyle}>
                    The React frontend renders the text narrative alongside dynamic Recharts (e.g., radar charts for stylistic comparisons).
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="engineering-challenges" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Engineering Challenges</h2>
              <ul className="space-y-4 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>
                  <strong className="text-[#0B0B0C] font-medium">Safe NL2SQL Execution:</strong> AI models are prone to hallucination. Allowing an LLM to generate and execute SQL required strict schema prompting, Pydantic validation, and implementing read-only database roles to prevent accidental data mutation or DROP commands.
                </li>
                <li className={bodyClass} style={bodyStyle}>
                  <strong className="text-[#0B0B0C] font-medium">Deterministic Explainability:</strong> Ensuring the AI didn&apos;t invent narratives. The explanation prompt is strictly constrained to only use the exact JSON data returned by the SQL query, guaranteeing that the business intelligence is grounded in mathematical fact.
                </li>
                <li className={bodyClass} style={bodyStyle}>
                  <strong className="text-[#0B0B0C] font-medium">State Management:</strong> Moving from a linear CLI script to a decoupled FastAPI/React architecture required redesigning how simulation states and what-if scenarios are managed across HTTP requests.
                </li>
              </ul>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="technologies" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technologies</h2>
              <p className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Backend:</strong> Python, FastAPI, SQLAlchemy, SQLite/PostgreSQL</p>
              <p className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Frontend:</strong> React, TailwindCSS, Recharts</p>
              <p className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">AI &amp; Validation:</strong> OpenAI API, Pydantic</p>
              <p className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Testing &amp; Quality:</strong> Pytest (119+ passing tests covering core algorithms and NL2SQL routing)</p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="results" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Results</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch successfully demonstrates how to build a production-ready NL2SQL analytics platform. It proves that complex data engineering pipelines can be abstracted behind a clean, conversational UI. The system successfully generates deterministic win probabilities, strategic risk assessments, and interactive &quot;What-If&quot; scenarios (e.g., adjusting for short-notice fights or long layoffs) in real-time.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="future-improvements" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Future Improvements</h2>
              <p className={bodyClass} style={bodyStyle}>
                <strong className="text-[#0B0B0C] font-medium">Generalization (MarketScout Integration):</strong> Refactoring the core NL2SQL and competitive simulation engine to analyze corporate competitors, product launches, and market opportunities.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                <strong className="text-[#0B0B0C] font-medium">Advanced Multi-Agent Routing:</strong> Implementing a specialized agent network where one LLM writes the SQL, a second reviews it for syntax errors, and a third formats the output.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="why-i-built-this" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Why I Built This</h2>
              <p className={bodyClass} style={bodyStyle}>
                I built FightMatch to prove I can architect systems that turn raw data into decisions. While sports analytics is the domain, the underlying architecture—bridging the gap between a SQL database and a non-technical user via LLMs—is the exact challenge facing modern enterprise software. I wanted to build a portfolio piece that demonstrates full-stack product execution, from pipeline engineering to user experience.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>
          </div>
        </section>
      </main>
    </div>
  );
}
