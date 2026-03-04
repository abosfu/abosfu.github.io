import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';

const fightmatch = projectsData.find(p => p.id === 'fightmatch')!;

const sectionHeading = "text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4";
const sectionHeadingStyle = { fontSize: '24px', fontWeight: 600, lineHeight: '1.2' as const };
const subHeadingStyle = { fontSize: '20px', fontWeight: 600, lineHeight: '1.3' as const };
const bodyStyle = { fontSize: '18px', fontWeight: 400, lineHeight: '1.7' as const };
const bodyClass = "text-[#4B4B4B] font-['Inter']";

export function ProjectFightMatch() {
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

            {fightmatch.category && (
              <p
                className="text-[#7A7A7A] font-['Inter'] uppercase tracking-wide mb-3"
                style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em' }}
              >
                {fightmatch.category}
              </p>
            )}

            <h1
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
              style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 700, lineHeight: '1.1' }}
            >
              {fightmatch.title}
            </h1>

            <p
              className={`${bodyClass} mb-6 max-w-3xl`}
              style={{ fontSize: '20px', ...bodyStyle }}
            >
              {fightmatch.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10 text-sm font-['Inter']">
              <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                Skills
              </span>
              <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                {fightmatch.tech.join(' • ')}
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
            <div className="space-y-4">
              <h2 className={sectionHeading} style={{ fontSize: '28px', ...sectionHeadingStyle }}>
                FightMatch
              </h2>
              <p className={bodyClass} style={bodyStyle}>
                Data-Driven Fight Matchmaking &amp; Ranking Analysis Engine
              </p>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch is a data-driven analysis system designed to evaluate fighter performance and recommend competitive matchups within a division.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                In professional combat sports, matchmaking decisions are often influenced by rankings, momentum, stylistic matchups, and fighter activity. However, these decisions are typically made through subjective analysis rather than systematic data evaluation.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch explores how a structured data pipeline and scoring model can assist in identifying competitive matchups and ranking contenders using performance metrics derived from historical fight data.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The system collects fight statistics, processes them into structured datasets, generates performance features for each fighter, and evaluates potential matchups using a ranking and compatibility scoring model.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The result is a lightweight analytical engine that can surface potential fight recommendations and contender rankings based on measurable performance indicators.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
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

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>The Solution</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch implements a full data pipeline that transforms raw fight statistics into structured datasets and matchup recommendations.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The system performs several stages of analysis:
              </p>
              <ol className="space-y-2 ml-6 list-decimal">
                <li className={bodyClass} style={bodyStyle}>Collect fight data</li>
                <li className={bodyClass} style={bodyStyle}>Build structured datasets</li>
                <li className={bodyClass} style={bodyStyle}>Generate fighter performance features</li>
                <li className={bodyClass} style={bodyStyle}>Score fighters within a division</li>
                <li className={bodyClass} style={bodyStyle}>Evaluate potential matchups</li>
                <li className={bodyClass} style={bodyStyle}>Produce contender rankings and fight recommendations</li>
              </ol>
              <p className={bodyClass} style={bodyStyle}>
                The output is a set of ranked fighters and suggested matchups within a specific weight class.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The current implementation focuses on Welterweight, but the architecture supports expansion to additional divisions.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How the System Works</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch follows a modular pipeline architecture.
              </p>

              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>1. Data Collection</p>
              <p className={bodyClass} style={bodyStyle}>
                The pipeline begins by collecting fight information from UFCStats event pages.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The scraper retrieves:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>event information</li>
                <li className={bodyClass} style={bodyStyle}>bout matchups</li>
                <li className={bodyClass} style={bodyStyle}>fighter statistics</li>
                <li className={bodyClass} style={bodyStyle}>fight results</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                These pages are cached locally to avoid repeated requests and to support reproducible analysis.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>2. Dataset Construction</p>
              <p className={bodyClass} style={bodyStyle}>
                Raw HTML data is parsed and converted into structured datasets.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The system produces multiple datasets including:
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fighters.json</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Contains fighter identifiers and metadata.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>events.json</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Stores event-level information such as event dates and locations.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>bouts.json</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Represents each fight matchup with participating fighters and weight class.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>stats.jsonl</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Contains detailed fight statistics extracted from fight pages.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                These datasets form the foundation for feature generation.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>3. Feature Engineering</p>
              <p className={bodyClass} style={bodyStyle}>
                The system converts raw fight statistics into performance metrics that describe a fighter’s recent form.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Examples of features include:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>recent activity (days since last fight)</li>
                <li className={bodyClass} style={bodyStyle}>win streak length</li>
                <li className={bodyClass} style={bodyStyle}>recent win percentage</li>
                <li className={bodyClass} style={bodyStyle}>striking differential per minute</li>
                <li className={bodyClass} style={bodyStyle}>takedown success rate</li>
                <li className={bodyClass} style={bodyStyle}>control time per 15 minutes</li>
                <li className={bodyClass} style={bodyStyle}>finish rate</li>
                <li className={bodyClass} style={bodyStyle}>opponent strength indicators</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                These features allow fighters to be evaluated using a consistent set of performance signals.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>4. Fighter Ranking</p>
              <p className={bodyClass} style={bodyStyle}>
                A scoring model evaluates fighters based on these performance metrics.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The ranking model incorporates factors such as:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>recent activity</li>
                <li className={bodyClass} style={bodyStyle}>win streak momentum</li>
                <li className={bodyClass} style={bodyStyle}>performance efficiency</li>
                <li className={bodyClass} style={bodyStyle}>strength of recent opponents</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                The result is a ranked list of fighters within a division.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                This ranking helps identify the most competitive contenders.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>5. Matchup Evaluation</p>
              <p className={bodyClass} style={bodyStyle}>
                Once fighters are ranked, the system evaluates possible matchups.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Each potential pairing is scored based on:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>competitiveness between fighters</li>
                <li className={bodyClass} style={bodyStyle}>stylistic compatibility</li>
                <li className={bodyClass} style={bodyStyle}>ranking proximity</li>
                <li className={bodyClass} style={bodyStyle}>activity level</li>
                <li className={bodyClass} style={bodyStyle}>rematch penalties</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                The goal is to surface matchups that are competitive and meaningful within the division.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className="text-[#0B0B0C] font-['Space_Grotesk']" style={subHeadingStyle}>6. Recommendation Output</p>
              <p className={bodyClass} style={bodyStyle}>
                The system produces two outputs:
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Contender Rankings</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                A ranked list of fighters within the division.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Matchup Recommendations</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                A set of suggested fights with explanation signals such as:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>similar performance scores</li>
                <li className={bodyClass} style={bodyStyle}>stylistic contrast (e.g., striker vs grappler)</li>
                <li className={bodyClass} style={bodyStyle}>recent activity levels</li>
                <li className={bodyClass} style={bodyStyle}>competitive ranking proximity</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                The results are exported as structured JSON reports that can be used for analysis or visualization.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technical Architecture</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch is built as a modular Python project with clearly separated components.
              </p>
              <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C] whitespace-pre">
{`fightmatch
│
├── scrape
│   ├── ufcstats_client.py
│   └── parse.py
│
├── data
│   ├── store.py
│   └── dataset builders
│
├── match
│   ├── rank.py
│   ├── score.py
│   └── explain.py
│
├── cli.py
└── config.py`}
              </pre>
              <p className={bodyClass} style={bodyStyle}><strong>Scraping Layer</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Responsible for retrieving event and fight data and storing cached HTML.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Data Processing Layer</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Transforms raw pages into structured datasets.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Feature Generation</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Creates fighter performance features from historical fights.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Matchmaking Engine</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Evaluates fighter rankings and potential matchups.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>CLI Interface</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Allows the entire pipeline to be executed through command-line commands.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Command Line Workflow</h2>
              <p className={bodyClass} style={bodyStyle}>
                The system can be executed through a simple CLI workflow:
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch scrape --since 2019-01-01 --division Welterweight</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Collect fight data.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch build-dataset</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Build structured datasets.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch features</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Generate fighter performance features.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>fightmatch recommend --division Welterweight</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Generate contender rankings and matchup recommendations.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
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

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Robust HTML Parsing</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Event pages and fight pages contain complex tables and nested structures.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The parser was designed to tolerate missing fields and partial data without crashing the pipeline.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

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

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Matchup Scoring Design</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Creating a scoring model required balancing multiple competing signals.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The ranking model combines performance metrics with decay weighting so that recent fights influence rankings more heavily than older fights.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technologies</h2>
              <p className={bodyClass} style={bodyStyle}>
                FightMatch was built using a lightweight Python data pipeline stack.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Languages</strong></p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Python</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}><strong>Libraries</strong></p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>BeautifulSoup — HTML parsing</li>
                <li className={bodyClass} style={bodyStyle}>Requests — HTTP requests</li>
                <li className={bodyClass} style={bodyStyle}>Pydantic — data validation</li>
                <li className={bodyClass} style={bodyStyle}>Pytest — automated testing</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}><strong>Development Tools</strong></p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>Python virtual environments</li>
                <li className={bodyClass} style={bodyStyle}>Git version control</li>
                <li className={bodyClass} style={bodyStyle}>GitHub CI for automated tests</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                The project includes a small but focused automated test suite to ensure that core pipeline components remain stable.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Results</h2>
              <p className={bodyClass} style={bodyStyle}>
                The system successfully produces:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}>structured fighter datasets</li>
                <li className={bodyClass} style={bodyStyle}>performance features</li>
                <li className={bodyClass} style={bodyStyle}>division rankings</li>
                <li className={bodyClass} style={bodyStyle}>matchup recommendations</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                These outputs demonstrate how sports analytics techniques can be applied to combat sports matchmaking problems.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Future Improvements</h2>
              <p className={bodyClass} style={bodyStyle}>
                Several potential extensions could significantly expand the project.
              </p>
              <p className={bodyClass} style={bodyStyle}><strong>Machine Learning Ranking Models</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                More advanced ranking models could learn from historical matchmaking patterns.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Expanded Division Coverage</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Currently the project focuses on Welterweight.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Future versions could support all UFC divisions.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Fight Style Clustering</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                Fighters could be grouped into style archetypes using clustering techniques.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}><strong>Interactive Dashboard</strong></p>
              <p className={bodyClass} style={bodyStyle}>
                A visualization interface could display rankings and matchup suggestions in a user-friendly dashboard.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>

            <div className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Why I Built This</h2>
              <p className={bodyClass} style={bodyStyle}>
                I’m interested in how data and analytics can support decision-making in complex domains.
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

            <p className="text-[#B3B3B3] font-['Inter']" style={bodyStyle}>⸻</p>
          </div>
        </section>
      </main>
    </div>
  );
}
