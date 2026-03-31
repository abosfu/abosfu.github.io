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
  { id: 'outputs', label: 'Outputs & Dashboards' },
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

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      <div className="w-full rounded-xl border border-dashed border-[#C8C8C8] bg-[#FAFAFA] flex items-center justify-center py-20 px-8">
        <p className="text-[#9A9A9A] font-body text-center" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6', fontStyle: 'italic' }}>
          {caption}
        </p>
      </div>
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
                MarketScout is an end-to-end AI Market Intelligence System. It functions as a fully automated ETL pipeline and decision-support backend — ingesting unstructured market signals from live APIs, transforming them into analytically queryable Star Schema data models, exposing a Natural Language SQL interface for non-technical stakeholders, and surfacing findings through live BI dashboards connected directly to the production database.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The architecture follows the <strong className="text-[#0B0B0C] font-medium">Medallion Architecture</strong> pattern — a three-layer data refinement model common in enterprise analytics:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Bronze Layer</strong> — raw, unprocessed signals ingested directly from news APIs and hiring feeds</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Silver Layer</strong> — cleaned, deduplicated, and normalized records with validated schemas</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Gold Layer</strong> — business-ready Star Schema fact and dimension tables, optimized for analytical queries and dashboard consumption</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is built for strategy teams, product organizations, and executive stakeholders who need reliable, repeatable intelligence on where operational pain is concentrated in a given market — without requiring an analyst to manually synthesize fragmented signals.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 2 — Why This Project Exists */}
            <div id="why-this-exists" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Why This Project Exists</h2>
              <p className={bodyClass} style={bodyStyle}>
                Business intelligence teams in most organizations spend the majority of their time wrangling data — not deriving insights from it. Market signals are scattered across news feeds, job boards, financial disclosures, and industry commentary. Each source is partial. None of them speak the same schema. The result is that the gap between raw data and an executive-ready recommendation is filled by manual effort that cannot scale.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout was built to close that gap structurally. Rather than producing a one-off research report, it operates as a persistent data product — a backend that continuously ingests, transforms, and serves market intelligence in a form that can be queried, visualized, and acted on without requiring a data analyst in the loop for every question.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The central design principle is that intelligence should be queryable on demand. A product manager should be able to ask "What industries in Burnaby are hiring the most?" and receive a structured, data-backed answer in seconds — not submit a ticket and wait two days for an analyst to pull the numbers.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The NL2SQL engine is the expression of that principle. The Star Schema and dbt transformation layer is what makes it possible at scale.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 3 — How the System Works */}
            <div id="how-it-works" className="space-y-8">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>How the System Works</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout runs through a five-stage pipeline. Each stage is a discrete service with a defined input contract and output schema, allowing individual components to be upgraded or replaced without cascading changes to the rest of the system.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>1. Data Ingestion</p>
                <p className={bodyClass} style={bodyStyle}>
                  Python-based ingestion workers pull live signals from news APIs (Google News RSS, sector-specific feeds) and hiring market APIs (Adzuna, LinkedIn), scoped to the configured city and industry set. Each ingestion run writes raw JSON payloads to the Bronze Layer in PostgreSQL with a full audit trail — source URL, ingestion timestamp, and raw payload stored verbatim. Incremental ingestion is handled via watermark-based deduplication, ensuring re-runs are idempotent.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>2. Data Modeling & Storage</p>
                <p className={bodyClass} style={bodyStyle}>
                  Raw Bronze records are transformed into Silver and Gold layers using <strong className="text-[#0B0B0C] font-medium">dbt (Data Build Tool)</strong>. dbt models define the transformation logic as version-controlled SQL — cleaning, normalizing, and joining records into a Star Schema optimized for analytical queries. The Gold Layer exposes fact tables (<code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">fact_market_signals</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">fact_job_demand</code>) and dimension tables (<code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dim_city</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dim_industry</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dim_date</code>) that feed both the NL2SQL engine and the BI dashboards. All models include dbt tests for schema conformance and referential integrity.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>3. The NL2SQL AI Engine</p>
                <p className={bodyClass} style={bodyStyle}>
                  A <strong className="text-[#0B0B0C] font-medium">FastAPI</strong> service exposes a <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">POST /query</code> endpoint that accepts a natural language question as its payload. Internally, a <strong className="text-[#0B0B0C] font-medium">LangChain</strong> chain translates the question into a validated SQL query using the Gold Layer schema as context. The chain operates in two phases: schema-aware SQL generation, followed by a safety validation pass that rejects any query that is not strictly read-only. Validated queries are executed against a dedicated read-only PostgreSQL role and the raw row results are returned as structured JSON.
                </p>
                <p className={bodyClass} style={bodyStyle}>
                  Example: a request body of <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">{`{ "question": "What industries in Burnaby are hiring the most?" }`}</code> triggers generation of a parameterized <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">SELECT</code> against <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">fact_job_demand</code> joined to <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dim_city</code> and <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dim_industry</code>, filtered to Burnaby, and ordered by total job postings descending. The system writes and executes this SQL automatically — no analyst required.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>4. Insight Generation</p>
                <p className={bodyClass} style={bodyStyle}>
                  Raw SQL result sets are passed back through the LangChain layer for synthesis. An LLM processes the structured rows and produces a concise, executive-grade summary — translating database output into plain language findings with business context. This layer is strictly downstream of the data query: the model synthesizes confirmed data, it does not generate or hallucinate it. Summaries include the plain-language finding, the underlying data it is derived from, and a recommended next action.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>5. BI Visualization</p>
                <p className={bodyClass} style={bodyStyle}>
                  Tableau and Power BI dashboards connect directly to the PostgreSQL Gold Layer via live database connections — no CSV exports, no intermediate files. Dashboard views are built on top of the dbt-managed fact and dimension tables, meaning every chart automatically reflects the latest ingestion run. Key views include an Opportunity Matrix (industries vs. cities ranked by signal volume and pain score), a Hiring Demand Trend dashboard, and a Market Signal Timeline showing how opportunity rankings shift over time.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 4 — Outputs & Dashboards */}
            <div id="outputs" className="space-y-4">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Outputs & Dashboards</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout produces structured, persistent outputs at every layer — designed to serve different downstream consumers without requiring data transformation after the fact.
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Live Tableau / Power BI Dashboards</strong> — Opportunity Matrix, Hiring Demand Trends, and Market Signal Timelines, all served directly from the Gold Layer</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">NL2SQL Query Results</strong> — structured JSON responses from <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">POST /query</code>, including the generated SQL, the raw rows, and the LLM-synthesized executive summary</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">dbt-Managed Data Models</strong> — versioned, tested Bronze / Silver / Gold tables in PostgreSQL with full lineage documentation via <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dbt docs</code></li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">FastAPI Swagger UI</strong> — interactive API documentation at <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">/docs</code> exposing all endpoints including ingestion triggers, NL2SQL queries, and opportunity ranking reads</li>
                <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Ingestion Audit Logs</strong> — per-run records stored in PostgreSQL capturing source, volume, latency, and schema validation results</li>
              </ul>
              <p className={bodyClass} style={bodyStyle}>
                Because all outputs derive from the same set of dbt-managed Gold Layer tables, dashboards and API responses are always consistent with each other — there is no divergence between what a dashboard shows and what the API returns for the same question.
              </p>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 5 — Example Runs */}
            <div id="example-runs" className="space-y-12">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Example Runs</h2>

              {/* Example 1 — Tableau Dashboard */}
              <div className="space-y-6">
                <ImagePlaceholder caption="[Insert Image: Tableau Dashboard showing Opportunity Matrix for Vancouver Construction — industries ranked by signal volume and pain score across city/division dimensions]" />
                <p className={bodyClass} style={bodyStyle}>
                  The Opportunity Matrix dashboard shows Vancouver's Construction sector ranked by signal volume and pain score. Labor shortages, permitting delays, and material cost volatility consistently surface as the highest-severity clusters. Because the dashboard connects directly to the Gold Layer, re-running the ingestion pipeline updates every metric and chart automatically — no manual refresh, no export required.
                </p>
              </div>

              <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

              {/* Example 2 — NL2SQL query */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>NL2SQL: "What industries in Burnaby are hiring the most?"</p>
                  <p className={bodyClass} style={bodyStyle}>
                    A product manager sends this plain-English question to the <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">POST /query</code> endpoint:
                  </p>
                  <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`POST /query
{
  "question": "What industries in Burnaby are hiring the most?"
}`}
                  </pre>
                  <p className={bodyClass} style={bodyStyle}>
                    The NL2SQL engine generates and executes the following SQL against the read-only Gold Layer role:
                  </p>
                  <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`SELECT
  di.industry_name,
  SUM(fjd.job_posting_count) AS total_postings
FROM fact_job_demand fjd
JOIN dim_city dc ON fjd.city_id = dc.city_id
JOIN dim_industry di ON fjd.industry_id = di.industry_id
WHERE dc.city_name = 'Burnaby'
GROUP BY di.industry_name
ORDER BY total_postings DESC
LIMIT 10;`}
                  </pre>
                  <p className={bodyClass} style={bodyStyle}>
                    The system returns the structured row results alongside an LLM-synthesized executive summary — for example: <em>"Technology and Healthcare lead hiring demand in Burnaby, accounting for 61% of active postings as of the latest ingestion. Construction demand has increased 18% month-over-month, driven by infrastructure project announcements."</em> The SQL, the raw rows, and the summary are all returned in a single response object.
                  </p>
                </div>
                <ImagePlaceholder caption="[Insert Image: FastAPI Swagger UI showing NL2SQL query execution — POST /query request body, generated SQL, and structured JSON response with executive summary]" />
              </div>

              <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

              {/* Example 3 — dbt lineage */}
              <div className="space-y-6">
                <ImagePlaceholder caption="[Insert Image: dbt docs lineage graph showing Bronze → Silver → Gold transformation flow for fact_job_demand and fact_market_signals models]" />
                <p className={bodyClass} style={bodyStyle}>
                  The dbt lineage graph documents the full transformation ancestry of every Gold Layer table. Each node is a tested, version-controlled model. Running <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dbt test</code> validates schema conformance and referential integrity across all layers before any downstream dashboard or API consumer is affected.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 6 — Technical Design */}
            <div id="technical-design" className="space-y-6">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Technical Design</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout is architected as a set of loosely coupled, independently deployable services. Each service owns a defined domain of the data pipeline, communicates through well-typed interfaces, and can be scaled, upgraded, or replaced without requiring changes to adjacent components.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Microservices Architecture</p>
                <p className={bodyClass} style={bodyStyle}>
                  The system is organized into three primary service boundaries:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Ingestion Service</strong> — Python workers responsible for fetching, validating, and persisting raw signals to the Bronze Layer. Stateless and idempotent; safe to re-run at any frequency.</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Transformation Service</strong> — dbt project managing all Bronze → Silver → Gold model definitions, tests, and documentation. Triggered on a schedule or on demand post-ingestion.</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Query API Service</strong> — FastAPI application exposing the NL2SQL endpoint, ingestion trigger endpoints, and Gold Layer read endpoints. All routes are documented via OpenAPI / Swagger at <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">/docs</code>.</li>
                </ul>
                <p className={bodyClass} style={bodyStyle}>
                  The BI layer (Tableau / Power BI) sits outside the service boundary — connecting directly to PostgreSQL via a dedicated read-only analytics role — and is treated as a consumer of the Gold Layer rather than a managed component of the system.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>AI Safety & Read-Only Execution</p>
                <p className={bodyClass} style={bodyStyle}>
                  The NL2SQL layer is designed with a strict safety posture. LLMs are capable of generating syntactically valid but semantically dangerous SQL — including <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">DROP TABLE</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">DELETE</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">UPDATE</code>, or <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">TRUNCATE</code> statements that could corrupt the production database if executed.
                </p>
                <p className={bodyClass} style={bodyStyle}>
                  MarketScout addresses this through two independent enforcement layers:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Static Analysis Gate</strong> — every generated SQL string is parsed before execution. Any statement that contains write operations (<code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">INSERT</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">UPDATE</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">DELETE</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">DROP</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">TRUNCATE</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">ALTER</code>) is rejected before it reaches the database. The request returns a <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">400</code> error with an explanation of what was blocked.</li>
                  <li className={bodyClass} style={bodyStyle}><strong className="text-[#0B0B0C] font-medium">Database-Level Enforcement</strong> — all NL2SQL queries execute under a PostgreSQL role with <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">SELECT</code>-only privileges on the Gold Layer schema. Even if a malformed query bypassed the static analysis gate, the database would reject execution at the permission level. Write operations are physically impossible from this role.</li>
                </ul>
                <p className={bodyClass} style={bodyStyle}>
                  This dual-layer design means the safety guarantee does not depend on the LLM behaving correctly. It is enforced structurally, independent of model behavior.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Star Schema Design</p>
                <p className={bodyClass} style={bodyStyle}>
                  The Gold Layer is modeled as a Star Schema to optimize for the analytical query patterns that power both the NL2SQL engine and the BI dashboards. Denormalized dimension tables (<code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dim_city</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dim_industry</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">dim_date</code>) minimize join complexity for aggregation queries. Fact tables (<code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">fact_market_signals</code>, <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">fact_job_demand</code>) store grain-level event records with foreign keys to all relevant dimensions. This structure is both interpretable by the LLM's schema context and performant under concurrent dashboard queries.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Evidence Integrity</p>
                <p className={bodyClass} style={bodyStyle}>
                  The insight generation layer synthesizes from confirmed query results only. The LangChain chain passes the raw SQL rows as grounding context and instructs the model to summarize — not extrapolate. Every executive summary returned by the API includes a reference to the specific query and row set it was derived from, making claims auditable and traceable back to the source data.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Section 7 — Getting Started */}
            <div id="how-to-run" className="space-y-6">
              <h2 className={sectionHeading} style={sectionHeadingStyle}>Getting Started</h2>
              <p className={bodyClass} style={bodyStyle}>
                MarketScout uses Docker Compose to bring up the full stack — PostgreSQL, the FastAPI service, and the dbt transformation environment — in a single command.
              </p>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Start the Stack</p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`docker compose up --build`}
                </pre>
                <p className={bodyClass} style={bodyStyle}>
                  The FastAPI service starts on <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">localhost:8000</code>. Interactive API documentation is available at <code className="text-[#0B0B0C] bg-[#F0F0F0] px-1.5 py-0.5 rounded text-sm">localhost:8000/docs</code>.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Run the Ingestion Pipeline</p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`POST /ingest
{
  "city": "Vancouver",
  "industry": "Construction"
}`}
                </pre>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Run dbt Transformations</p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`dbt run && dbt test`}
                </pre>
                <p className={bodyClass} style={bodyStyle}>
                  This builds all Bronze → Silver → Gold models and runs schema and referential integrity tests across every layer. Failures block Gold Layer updates and are logged with full lineage context.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#0B0B0C] font-heading" style={subHeadingStyle}>Query the NL2SQL Engine</p>
                <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`POST /query
{
  "question": "Which cities have the highest construction hiring demand this month?"
}`}
                </pre>
                <p className={bodyClass} style={bodyStyle}>
                  Returns the generated SQL, the raw result rows, and an LLM-synthesized executive summary — all in a single structured JSON response.
                </p>
              </div>
            </div>

            <p className="text-[#B3B3B3] font-body" style={bodyStyle}>⸻</p>

            {/* Closing */}
            <div className="space-y-4 pb-8">
              <p className={bodyClass} style={bodyStyle}>
                MarketScout represents a shift from analytics as a manual research exercise to analytics as a data product. By combining a dbt-managed Star Schema, a safety-first NL2SQL engine, and live BI dashboard connectivity, it demonstrates how the gap between raw market data and executive-ready intelligence can be closed architecturally — not by adding more analysts, but by designing a system that serves structured insight on demand.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                The architecture is designed to extend: new data sources can be added as Bronze ingestion workers, new analytical views as dbt models, and new question domains as schema context expansions for the NL2SQL layer — without modifying the core API or dashboard infrastructure.
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
