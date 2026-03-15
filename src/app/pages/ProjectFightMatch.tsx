import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';
import { ProjectSideNav } from '@/app/components/ProjectSideNav';

const fightmatch = projectsData.find(p => p.id === 'fightmatch')!;

const FIGHT_MATCH_SECTIONS = [
  { id: 'fightmatch-intro', label: 'FightMatch' },
  { id: 'the-problem', label: 'The Problem' },
  { id: 'the-solution', label: 'The Solution' },
  { id: 'how-it-works', label: 'How the System Works' },
  { id: 'technical-architecture', label: 'Technical Architecture' },
  { id: 'command-line', label: 'Command Line Workflow' },
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
                FightMatch
              </h2>
              <p className={bodyClass} style={bodyStyle}>
                Sports analytics platform for fighter evaluation, matchup simulation, and promoter-style fight recommendations.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch is a sports analytics decision platform built on real UFC fight data. It collects and structures historical fight statistics, computes fighter ratings and analytics profiles, simulates head-to-head matchups, and applies a promoter-style decision scoring model to surface explainable fight recommendations.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The platform is designed around the idea that matchmaking decisions — which fighters to book, which contenders deserve the next opportunity, which pairings make competitive and commercial sense — benefit from a structured analytical layer rather than purely subjective judgment.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch produces structured reports at every stage: fighter analytics profiles, division ratings, matchup simulation outputs, and scored promoter recommendations. Each output is explainable and traceable back to the underlying performance data.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="the-problem" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>The Problem</h2>
              <p className={bodyClass} style={bodyStyle}>
                Combat sports promotions regularly face complex matchmaking decisions:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Which fighters deserve the next title opportunity?</li>
                <li className={bodyClass} style={bodyStyle}>Which matchups would be competitive and exciting for fans?</li>
                <li className={bodyClass} style={bodyStyle}>How do recent performance trends affect contender rankings?</li>
                <li className={bodyClass} style={bodyStyle}>Which stylistic matchups produce the most compelling fights?</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                Matchmaking decisions often require reviewing large amounts of fight data and interpreting performance trends manually.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch explores whether a structured analytical approach can assist with this process.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The goal of the project is not to replace human matchmaking, but to demonstrate how data pipelines and scoring models can support decision-making in sports analytics.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="the-solution" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>The Solution</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch is organized around five purpose-built layers, each responsible for a distinct analytical stage.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Fighter Data Engine</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Scrapes and parses real UFC fight data from UFCStats, caching pages locally and building structured JSON datasets covering fighters, events, bouts, and per-round statistics.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Performance Analytics Engine</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Computes per-fighter analytics profiles and ratings from historical fight data. Outputs include striking differentials, grappling metrics, finish rates, activity signals, and opponent-strength-adjusted scores.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Matchup Simulation Engine</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Runs head-to-head simulations between fighters using their analytics profiles. Produces a structured simulation report covering projected competitive balance and stylistic contrast signals.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Promoter Decision Engine</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Applies a multi-factor promoter-style scoring model to rank and recommend matchups. Weighs competitive balance, fighter activity, ranking proximity, rematch penalties, and business-relevance signals to surface the highest-value fight bookings.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Reporting / Output Layer</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Generates explainable, structured reports at every stage — fighter profiles, division ratings, simulation summaries, and ranked recommendations — all traceable back to the underlying data.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="how-it-works" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How the System Works</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch follows a layered pipeline architecture. Each layer has a single responsibility and passes clean, validated output to the next.
              </p>

              <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>1. Fighter Data Engine</p>
              <p className={bodyClass} style={bodyStyle}>
                The pipeline begins by scraping UFCStats event and fight pages. The scraper retrieves fighter metadata, bout results, and per-round statistics, caching HTML locally for reproducible runs. Raw pages are parsed and normalized into four structured datasets: <strong>fighters.json</strong>, <strong>events.json</strong>, <strong>bouts.json</strong>, and <strong>stats.jsonl</strong>.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>2. Performance Analytics Engine</p>
              <p className={bodyClass} style={bodyStyle}>
                Fighter features are computed from the structured datasets. Each fighter receives an analytics profile covering striking output, grappling efficiency, finish rate, activity level, win streak momentum, and opponent-strength-adjusted performance. A rating model aggregates these signals into a single comparable score per fighter per division.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>3. Matchup Simulation Engine</p>
              <p className={bodyClass} style={bodyStyle}>
                Given two fighters, the simulation engine compares their analytics profiles head-to-head. It computes projected competitive balance, identifies stylistic contrast signals (e.g., striker vs grappler, wrestler vs counter-puncher), and produces a structured simulation report capturing the expected dynamic of the matchup.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>4. Promoter Decision Engine</p>
              <p className={bodyClass} style={bodyStyle}>
                The promoter engine scores potential matchups using a multi-factor model that weighs competitive closeness, ranking proximity, fighter activity, rematch penalties, and business-relevance signals. It returns a ranked list of recommended fights with a written explanation for each recommendation.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>5. Reporting / Output Layer</p>
              <p className={bodyClass} style={bodyStyle}>
                Every stage of the pipeline produces a structured JSON report. Outputs include per-fighter analytics profiles, division rating rankings, matchup simulation summaries, individual promoter-scored recommendations, and all-division summary reports. All outputs are explainable and traceable back to the source data.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="technical-architecture" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technical Architecture</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch is built as a modular Python project with clearly separated components. Each module maps directly to a layer in the analytics pipeline.
              </p>
              <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C] whitespace-pre">
{`fightmatch
│
├── scrape
├── data
├── analytics
│   ├── rating.py
│   └── profile.py
├── engine
│   ├── simulate.py
│   └── promoter.py
├── match
├── cli.py
└── config.py`}
              </pre>
              <p className={bodyClass} style={bodyStyle}><strong>scrape</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Retrieves and caches UFC event and fight pages from UFCStats.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>data</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Parses raw HTML and builds structured JSON datasets (fighters, events, bouts, stats).
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>analytics</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Computes fighter ratings (<code>rating.py</code>) and generates per-fighter analytics profiles (<code>profile.py</code>) from the structured datasets.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>engine</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Runs head-to-head matchup simulations (<code>simulate.py</code>) and applies the promoter-style decision scoring model to produce ranked recommendations (<code>promoter.py</code>).
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>match</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Coordinates the full matchmaking workflow across all divisions.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>cli.py / config.py</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Exposes the entire pipeline through a clean command-line interface and centralizes configuration.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="command-line" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Command Line Workflow</h2>
              <p className={bodyClass} style={bodyStyle}>
                The full pipeline can be run end-to-end through the CLI:
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch scrape</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Fetch and cache UFC event and fight data from UFCStats.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch build-dataset</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Parse cached HTML into structured JSON datasets.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch features</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Compute fighter performance features from the datasets.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch fighter-profile</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Generate a detailed analytics profile for a specific fighter.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch simulate</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Run a head-to-head matchup simulation between two fighters.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch recommend</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Generate promoter-scored fight recommendations for a division.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch recommend-all</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Run recommendations across all divisions and produce a summary report.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch demo</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Run a full end-to-end demonstration of the pipeline.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="engineering-challenges" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Engineering Challenges</h2>
              <p className={bodyClass} style={bodyStyle}>
                Several technical challenges were addressed during development.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Data Normalization</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Fight statistics often appear in inconsistent formats.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The parser normalizes:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>weight class labels</li>
                <li className={bodyClass} style={bodyStyle}>fighter identifiers</li>
                <li className={bodyClass} style={bodyStyle}>missing statistics</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                This ensures downstream calculations remain stable.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Robust HTML Parsing</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Event pages and fight pages contain complex tables and nested structures.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The parser was designed to tolerate missing fields and partial data without crashing the pipeline.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Division Filtering</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Different pages represent weight classes in slightly different ways.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The system implements normalization logic to ensure that labels such as:
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Welterweight<br />
                Welterweight Bout
              </p>
              <p className={bodyClass} style={bodyStyle}>
                are treated consistently.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Promoter Scoring Design</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Designing the promoter decision model required balancing multiple competing signals — competitive balance, activity, ranking proximity, and business-relevance — without over-fitting to any single factor.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The model uses decay-weighted performance metrics so that recent fights carry more influence than older ones.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="technologies" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technologies</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch was built using a lightweight Python sports analytics stack.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Languages</strong></p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Python</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}><strong>Libraries</strong></p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>BeautifulSoup — HTML parsing</li>
                <li className={bodyClass} style={bodyStyle}>Requests — HTTP requests</li>
                <li className={bodyClass} style={bodyStyle}>Pydantic — data validation and schema enforcement</li>
                <li className={bodyClass} style={bodyStyle}>Pytest — automated testing</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}><strong>Development Tools</strong></p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Python virtual environments</li>
                <li className={bodyClass} style={bodyStyle}>Git version control</li>
                <li className={bodyClass} style={bodyStyle}>GitHub CI for automated tests</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                The project includes a focused automated test suite to ensure core pipeline components remain stable across changes.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="results" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Results</h2>
              <p className={bodyClass} style={bodyStyle}>
                The platform successfully produces:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>fighter analytics profiles with per-fighter performance breakdowns</li>
                <li className={bodyClass} style={bodyStyle}>fighter ratings and division rankings</li>
                <li className={bodyClass} style={bodyStyle}>matchup simulation reports with projected competitive balance</li>
                <li className={bodyClass} style={bodyStyle}>promoter-scored fight recommendations with written explanations</li>
                <li className={bodyClass} style={bodyStyle}>all-division summary reports via a single command</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                Together these outputs demonstrate how a structured analytics pipeline can support real sports decision-making workflows — from data collection through explainable recommendations.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="future-improvements" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Future Improvements</h2>
              <p className={bodyClass} style={bodyStyle}><strong>Richer Fighter Style Clustering</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Group fighters into style archetypes using clustering on their analytics profiles to produce more nuanced stylistic matchup signals.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Stronger Probability Modeling</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Replace deterministic scoring with calibrated probability estimates for fight outcomes, giving the simulation engine more predictive credibility.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Dashboard / Visualization Layer</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Build an interactive interface for exploring fighter profiles, division rankings, and matchup recommendations without using the CLI.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Expanded Promoter Scoring Inputs</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Incorporate additional business and audience signals — such as social media reach, pay-per-view draw history, and regional market relevance — to make the promoter model more complete.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            <div id="why-i-built-this" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Why I Built This</h2>
              <p className={bodyClass} style={bodyStyle}>
                I'm interested in how data and analytics can support decision-making in complex domains.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Combat sports matchmaking presents an interesting challenge because it requires balancing competitive fairness, fan interest, and fighter momentum.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch explores how structured data pipelines and scoring models can assist in identifying competitive matchups.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The project demonstrates how software engineering, data processing, and analytical modeling can be combined to explore real-world decision problems.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>
          </div>
        </section>
      </main>
    </div>
  );
}
