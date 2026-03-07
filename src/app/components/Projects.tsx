import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ProjectSlideshow } from '@/app/components/ProjectSlideshow';

const ROW_GAP = '120px'; /* 96–140px range */

function MediaBlock({ project }: { project: (typeof projectsData)[0] }) {
  const hasSlides = project.slides && project.slides.length > 0;
  const hasMacbook = !!project.macbookImage;

  if (hasSlides && project.slides!.length >= 1) {
    return (
      <div className="w-full max-w-[720px]">
        <ProjectSlideshow images={project.slides!} projectTitle={project.title} />
      </div>
    );
  }

  if (hasMacbook) {
    return (
      <div className="w-full max-w-[640px] flex justify-center">
        <img
          src={project.macbookImage}
          alt={project.title}
          className="w-full max-w-full object-contain object-bottom"
          style={{ minHeight: '280px', maxHeight: '520px' }}
        />
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-[480px] flex items-center justify-center min-h-[280px] bg-[#F6F6F6]"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <p className="text-[#7A7A7A]" style={{ fontSize: '15px', fontWeight: 400 }}>
        Demo / visuals coming soon
      </p>
    </div>
  );
}

export function Projects() {
  const projects = projectsData;

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12 bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col" style={{ gap: ROW_GAP }}>
          {projects.map((project, index) => {
            const descriptionLeft = index % 2 === 0; /* 1st, 3rd, 5th: description left, picture right */
            return (
            <div
              key={project.id}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
            >
              {/* Text column */}
              <div className={`max-w-[580px] space-y-6 flex-1 ${descriptionLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                {project.category && (
                  <p
                    className="text-[#7A7A7A] uppercase tracking-[0.12em]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500 }}
                  >
                    {project.category}
                  </p>
                )}

                <h3
                  className="text-[#0B0B0C]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(32px, 4.5vw, 56px)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-[#3A3A3A] max-w-[55ch]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '17px', fontWeight: 400, lineHeight: 1.7 }}
                >
                  {project.description.includes('. ') ? (
                    <>
                      <span style={{ fontWeight: 600 }}>{project.description.split('. ')[0]}.</span>
                      {' '}
                      {project.description.split('. ').slice(1).join('. ')}
                    </>
                  ) : (
                    project.description
                  )}
                </p>

                <div className="flex flex-wrap items-center gap-1 pt-1">
                  {project.tech.map((item, techIndex) => (
                    <span key={techIndex} className="text-[#7A7A7A]" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 400 }}>
                      {item}
                      {techIndex < project.tech.length - 1 && <span className="mx-1.5 text-[#7A7A7A]/70">•</span>}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {project.caseStudyRoute ? (
                    <>
                      <Link
                        to={project.caseStudyRoute}
                        className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border-2 border-[var(--accent-site)] text-[var(--accent-site)] hover:bg-[var(--accent-site)] hover:text-white transition-all hover:-translate-y-0.5"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600 }}
                      >
                        <span>Learn more</span>
                        <ArrowRight size={18} strokeWidth={2} />
                      </Link>
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-[#4B4B4B] hover:text-[var(--accent-site)] transition-colors"
                          aria-label={`${project.title} on GitHub`}
                        >
                          <Github size={22} strokeWidth={1.75} />
                        </a>
                      )}
                    </>
                  ) : project.githubUrl && project.githubUrl !== '#' ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border-2 border-[var(--accent-site)] text-[var(--accent-site)] hover:bg-[var(--accent-site)] hover:text-white transition-all hover:-translate-y-0.5"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600 }}
                    >
                      <span>View on GitHub</span>
                      <ArrowRight size={18} strokeWidth={2} />
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Media column */}
              <div className={`w-full flex flex-col justify-center flex-1 overflow-hidden ${descriptionLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="transition-transform duration-300 ease-out hover:scale-105 origin-center">
                  <MediaBlock project={project} />
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
