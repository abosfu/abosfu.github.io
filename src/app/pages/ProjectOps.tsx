import { ProjectSlideshow } from '@/app/components/ProjectSlideshow';
import { projectOpsCaseStudy, projectsData } from '@/data/projects';
import { Github, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const projectops = projectsData.find(p => p.id === 'projectops')!;

export function ProjectOps() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abo4@sfu.ca');
    toast.success('Email copied to clipboard!');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
              {projectops.title}
            </h1>

            {/* One-liner */}
            <p
              className="text-[#4B4B4B] font-['Inter'] mb-8 max-w-3xl"
              style={{ fontSize: '20px', fontWeight: 400, lineHeight: '1.7' }}
            >
              Internal Construction Operations Intelligence — a portfolio-level risk dashboard for schedule, budget, and critical path exposure.
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-['Inter']">
              {projectops.role && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Role
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {projectops.role}
                  </span>
                </div>
              )}
              {projectops.timeline && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Timeline
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {projectops.timeline}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                  Stack
                </span>
                <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                  {projectops.tech.join(' • ')}
                </span>
              </div>
              {projectops.status && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Status
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {projectops.status}
                  </span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {projectops.githubUrl && projectops.githubUrl !== '#' && (
                <a
                  href={projectops.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 h-12 rounded-lg bg-[#0B0B0C] text-white hover:bg-[#2A2A2C] transition-colors font-['Inter'] group"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => scrollToSection('projectops-overview')}
                className="inline-flex items-center gap-2 px-4 h-11 rounded-lg border border-[#E6E6E6] text-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors font-['Inter'] group"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                <span>Jump to Overview</span>
              </button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="projectops-overview" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              Overview
            </h2>
            <div className="max-w-3xl">
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                {projectOpsCaseStudy.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="projectops-problem" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              Problem
            </h2>
            <div className="max-w-3xl">
              <p
                className="text-[#4B4B4B] font-['Inter'] mb-6"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                {projectOpsCaseStudy.problemIntro}
              </p>
              <ul className="space-y-3">
                {projectOpsCaseStudy.problemPoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                    <p
                      className="text-[#4B4B4B] font-['Inter'] flex-1"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What it Does Section */}
        <section id="projectops-what-it-does" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              What it Does
            </h2>
            <div className="max-w-3xl">
              <ul className="space-y-3">
                {projectOpsCaseStudy.whatItDoes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                    <p
                      className="text-[#4B4B4B] font-['Inter'] flex-1"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section id="projectops-metrics" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-10"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              Metrics
            </h2>
            <div className="max-w-3xl space-y-8">
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-3"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Behind Schedule
                </h3>
                <p
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  {projectOpsCaseStudy.metrics.behindSchedule}
                </p>
              </div>
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-3"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Critical Path Risk
                </h3>
                <p
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  {projectOpsCaseStudy.metrics.criticalPathRisk}
                </p>
              </div>
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-3"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Budget Overburn
                </h3>
                <p
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  {projectOpsCaseStudy.metrics.budgetOverburn}
                </p>
              </div>
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-3"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Projected Overrun
                </h3>
                <p
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  {projectOpsCaseStudy.metrics.projectedOverrun}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Assumptions Section */}
        <section id="projectops-data-assumptions" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              Data Assumptions
            </h2>
            <div className="max-w-3xl">
              <ul className="space-y-3">
                {projectOpsCaseStudy.dataAssumptions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                    <p
                      className="text-[#4B4B4B] font-['Inter'] flex-1"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="projectops-tech-stack" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              Tech Stack
            </h2>
            <div className="max-w-3xl">
              <ul className="space-y-3">
                {projectOpsCaseStudy.techStack.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                    <p
                      className="text-[#4B4B4B] font-['Inter'] flex-1"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section */}
        <section className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            {projectops.slides && projectops.slides.length > 0 && (
              <ProjectSlideshow images={projectops.slides} projectTitle={projectops.title} />
            )}
          </div>
        </section>

        {/* Next Steps Section */}
        <section id="projectops-next-steps" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              Next Steps
            </h2>
            <div className="max-w-3xl">
              <ul className="space-y-3">
                {projectOpsCaseStudy.nextSteps.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                    <p
                      className="text-[#4B4B4B] font-['Inter'] flex-1"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, lineHeight: '1.2' }}
            >
              Want to talk about ProjectOps?
            </h2>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 h-12 rounded-lg border border-[#E6E6E6] text-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors font-['Inter'] mt-6"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              <Mail size={18} />
              <span>Copy Email</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

