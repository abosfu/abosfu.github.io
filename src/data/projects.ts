export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  category?: string;
  slides?: string[];
  macbookImage?: string;
  role?: string;
  timeline?: string;
  status?: string;
  caseStudyRoute?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'trajectory',
    title: 'TRAJECTORY',
    description:
      'An AI-assisted career exploration web app that helps students, new grads, and career switchers compare paths and get structured next steps.',
    tech: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abosfu/tragectory',
    category: 'FULL STACK',
    role: 'Solo designer & developer',
    timeline: '2025–present',
    status: 'Complete',
    caseStudyRoute: '/projects/trajectory',
    slides: [
      '/images/tragectory/1.png',
      '/images/tragectory/2.png',
      '/images/tragectory/3.png',
      '/images/tragectory/4.png',
      '/images/tragectory/5.png',
    ],
  },
  {
    id: 'maple',
    title: 'Maple',
    description:
      'A product strategy and experience design concept for airline customer support, focused on making trips feel calmer, clearer, and more predictable end-to-end.',
    tech: ['Product Strategy', 'UX Research', 'Service Blueprinting', 'Customer Experience'],
    githubUrl: '#',
    category: 'Product Strategy & Experience Design',
    role: 'Product & Experience Designer',
    timeline: '2025',
    status: 'Concept',
    caseStudyRoute: '/projects/maple',
    macbookImage: '/images/maple/maplefront.png',
  },
];

export const trajectoryCaseStudy = {
  heroSubtitle:
    'An AI-assisted career exploration web app for students, new grads, and career switchers who want clearer next steps.',

  problemIntro:
    'Many students and early‑career professionals know they should “do something” for their career, but don’t know which direction to commit to.',

  problemPoints: [
    'Hard to choose between options like internships, personal projects, or unconventional paths.',
    'Most career tools give generic advice that could apply to anyone.',
    'Other tools overwhelm people with long lists and no structure.',
    'People want a small set of realistic paths that respect their constraints and show real examples.',
  ],

  solutionPoints: [
    'Ask a short intake about background, stage, interests, and constraints.',
    'Generate three archetypal paths: Conventional, Project & Portfolio Heavy, and Unconventional / Cross‑discipline.',
    'For each path, return a plain‑language overview, a 3–5 step game plan, and real examples pulled from the web.',
    'Let users compare paths side‑by‑side so they can decide what feels most aligned.',
  ],

  steps: [
    {
      number: 1,
      title: 'Entry / Landing',
      description:
        'Users arrive on a calm landing page that explains the idea: three tailored paths based on where you are now.',
      image: '/images/tragectory/1.png',
    },
    {
      number: 2,
      title: 'Intake form',
      description:
        'A short, structured form captures stage, roles of interest, location, timeline, and any unique constraints.',
      image: '/images/tragectory/2.png',
    },
    {
      number: 3,
      title: 'Generate three paths',
      description:
        'The backend combines AI and curated logic to generate three distinct paths with summaries and game plans.',
      image: '/images/tragectory/3.png',
    },
    {
      number: 4,
      title: 'Compare side‑by‑side',
      description:
        'A results view presents the three paths next to each other so users can quickly see trade‑offs.',
      image: '/images/tragectory/4.png',
    },
    {
      number: 5,
      title: 'Deep dive & stories',
      description:
        'Each path has a detailed view with next moves and real stories that match the user’s profile.',
      image: '/images/tragectory/5.png',
    },
  ],

  features: [
    'Three tailored paths instead of a single “perfect” answer.',
    'Structured summaries and next‑move game plans for each path.',
    'Real stories and links that are explicitly tied back to the user’s profile.',
    'Calm, minimal UI that keeps AI output readable and skimmable.',
    'Typed tRPC + Prisma backend with explicit fallback behaviour.',
    'Shareable URLs for specific profiles and paths in the Next.js version.',
  ],

  learnings: [
    'How to shape AI prompts into structured, product‑ready output.',
    'That people prefer a few high‑quality options over long lists of possibilities.',
    'Why explaining “why this link was chosen for you” makes search results feel curated.',
    'How strict typing and linting impact deployment pipelines in a real project.',
  ],

  nextImprovements: [
    'Add lightweight analytics to see which paths people click into most.',
    'Let users save and revisit their results over time.',
    'Introduce simple progress tracking for completed next moves.',
    'Re‑enable strict linting and fully type all AI response handling.',
  ],

  technicalArchitecture: {
    frontend: [
      'Next.js (App Router) + TypeScript',
      'Tailwind CSS for a minimal, comparison-first UI',
      'Client components for interactive path comparison and navigation',
    ],
    backend: [
      'tRPC for fully type-safe API communication between frontend and backend',
      'Server-side logic runs inside Next.js API routes',
      'Clear separation between deterministic logic (path structure) and AI-generated explanations',
    ],
    ai: [
      'Google Gemini API used as a controlled reasoning layer',
      'Strict prompt constraints ensure the model:',
      '• explains career paths rather than inventing them',
      '• stays grounded in user input',
      '• produces structured, readable summaries',
      'AI is used for articulation and synthesis, not decision-making',
    ],
    dataSources: [
      'External web search / scraping layer used to surface real-world examples (job posts, programs, case references)',
      'Results are filtered and ranked before being passed into the reasoning layer',
      'Designed so data sources can be swapped or extended without changing core logic',
    ],
    database: [
      'PostgreSQL as the primary datastore',
      'Prisma ORM for schema management and type-safe queries',
      'Stores user profiles, generated paths, and associated metadata for persistence and iteration',
    ],
    deployment: [
      'Deployed on Vercel',
      'Environment-based configuration for API keys and services',
      'CI/CD via GitHub → automatic redeploys on push',
    ],
  },
};

