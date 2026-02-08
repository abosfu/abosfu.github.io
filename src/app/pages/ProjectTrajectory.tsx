import { ProjectSlideshow } from '@/app/components/ProjectSlideshow';
import { trajectoryCaseStudy, projectsData } from '@/data/projects';
import { Github, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const trajectory = projectsData.find(p => p.id === 'trajectory')!;

export function ProjectTrajectory() {
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
              {trajectory.title}
            </h1>

            {/* One-liner */}
            <p
              className="text-[#4B4B4B] font-['Inter'] mb-8 max-w-3xl"
              style={{ fontSize: '20px', fontWeight: 400, lineHeight: '1.7' }}
            >
              {trajectoryCaseStudy.heroSubtitle}
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-['Inter']">
              {trajectory.role && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Role
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {trajectory.role}
                  </span>
                </div>
              )}
              {trajectory.timeline && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Timeline
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {trajectory.timeline}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                  Stack
                </span>
                <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                  {trajectory.tech.join(' • ')}
                </span>
              </div>
              {trajectory.status && (
                <div className="flex items-center gap-2">
                  <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                    Status
                  </span>
                  <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {trajectory.status}
                  </span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {trajectory.githubUrl && trajectory.githubUrl !== '#' && (
                <a
                  href={trajectory.githubUrl}
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
                onClick={() => scrollToSection('trajectory-how-it-works')}
                className="inline-flex items-center gap-2 px-4 h-11 rounded-lg border border-[#E6E6E6] text-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors font-['Inter'] group"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                <span>Jump to How it Works</span>
              </button>
            </div>
          </div>
        </section>

        {/* Problem Section (text left, visual right) */}
        <section id="trajectory-problem" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 max-w-3xl">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
              >
                Problem
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter'] mb-6"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                {trajectoryCaseStudy.problemIntro}
              </p>
              <ul className="space-y-3">
                {trajectoryCaseStudy.problemPoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>
                      •
                    </span>
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
            <div className="flex-1 w-full">
              {trajectory.slides?.[0] && (
                <div className="w-full overflow-hidden bg-[#F4F4F4]">
                  <img
                    src={trajectory.slides[0]}
                    alt="Trajectory landing view"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Solution Section (visual left, text right) */}
        <section id="trajectory-solution" className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="flex-1 max-w-3xl">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
              >
                Solution
              </h2>
              <ul className="space-y-3">
                {trajectoryCaseStudy.solutionPoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>
                      •
                    </span>
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
            <div className="flex-1 w-full">
              {trajectory.slides?.[2] && (
                <div className="w-full overflow-hidden bg-[#F4F4F4]">
                  <img
                    src={trajectory.slides[2]}
                    alt="Trajectory results view"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How it Works Section (text left, slideshow right) */}
        <section
          id="trajectory-how-it-works"
          className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-10 text-center"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              How it Works
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1 max-w-xl">
                <ol className="space-y-4">
                  {trajectoryCaseStudy.steps.map((step) => (
                    <li key={step.number} className="flex items-start gap-4">
                      <div
                        className="w-7 h-7 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center font-['Space_Grotesk']"
                        style={{ fontSize: '13px', fontWeight: 600 }}
                      >
                        {step.number}
                      </div>
                      <div>
                        <h3
                          className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-1"
                          style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.2' }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-[#4B4B4B] font-['Inter']"
                          style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.7' }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex-1 w-full">
                {trajectory.slides && trajectory.slides.length > 0 && (
                  <ProjectSlideshow images={trajectory.slides} projectTitle={trajectory.title} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section
          id="trajectory-features"
          className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-12 text-center"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {trajectoryCaseStudy.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '18px' }}>•</span>
                  <p
                    className="text-[#4B4B4B] font-['Inter'] flex-1"
                    style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section
          id="trajectory-architecture"
          className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-12 text-center"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
            >
              Technical Architecture (At a Glance)
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Frontend */}
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Frontend
                </h3>
                <ul className="space-y-2">
                  {trajectoryCaseStudy.technicalArchitecture.frontend.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                      <p
                        className="text-[#4B4B4B] font-['Inter'] flex-1"
                        style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.7' }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend & APIs */}
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Backend & APIs
                </h3>
                <ul className="space-y-2">
                  {trajectoryCaseStudy.technicalArchitecture.backend.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                      <p
                        className="text-[#4B4B4B] font-['Inter'] flex-1"
                        style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.7' }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Integration */}
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  AI Integration
                </h3>
                <ul className="space-y-2">
                  {trajectoryCaseStudy.technicalArchitecture.ai.map((item, index) => {
                    const isNested = item.trim().startsWith('•');
                    const isParent = item.includes(':') && !isNested;
                    return (
                      <li key={index} className={isNested ? 'flex items-start gap-3 ml-6' : 'flex items-start gap-3'}>
                        {!isParent && !isNested && <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>}
                        {isParent && <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>}
                        <p
                          className="text-[#4B4B4B] font-['Inter'] flex-1"
                          style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.7' }}
                        >
                          {isNested ? item.trim().substring(1).trim() : item}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Data Sources & Ingestion */}
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Data Sources & Ingestion
                </h3>
                <ul className="space-y-2">
                  {trajectoryCaseStudy.technicalArchitecture.dataSources.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                      <p
                        className="text-[#4B4B4B] font-['Inter'] flex-1"
                        style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.7' }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Database */}
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Database
                </h3>
                <ul className="space-y-2">
                  {trajectoryCaseStudy.technicalArchitecture.database.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                      <p
                        className="text-[#4B4B4B] font-['Inter'] flex-1"
                        style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.7' }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deployment */}
              <div>
                <h3
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2' }}
                >
                  Deployment
                </h3>
                <ul className="space-y-2">
                  {trajectoryCaseStudy.technicalArchitecture.deployment.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '16px' }}>•</span>
                      <p
                        className="text-[#4B4B4B] font-['Inter'] flex-1"
                        style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.7' }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings & Next Improvements Section */}
        <section className="py-20 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What I Learned */}
              <div id="trajectory-learnings">
                <h2
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-6"
                  style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
                >
                  What I Learned
                </h2>
                <ul className="space-y-3">
                  {trajectoryCaseStudy.learnings.map((item, index) => (
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

              {/* Next Improvements */}
              <div id="trajectory-next">
                <h2
                  className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase mb-6"
                  style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
                >
                  Next Improvements
                </h2>
                <ul className="space-y-3">
                  {trajectoryCaseStudy.nextImprovements.map((item, index) => (
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
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, lineHeight: '1.2' }}
            >
              Want to talk about Trajectory?
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

