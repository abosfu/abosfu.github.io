import { BackgroundText } from './BackgroundText';

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 bg-white">
      <BackgroundText verticalPosition={30} horizontalOffset="right" opacity={0.03} />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header - Minimal */}
        <div className="mb-16">
          <h2
            className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, lineHeight: '1.1' }}
          >
            About
          </h2>
        </div>

        {/* Content - Seamless, No Boxes */}
        <div className="space-y-8">
          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            I build like an operator: I start from the real problem, pressure-test assumptions, and prioritize what drives real outcomes. Then I engineer systems that are clean, maintainable, and built to scale—because shipping is only step one; reliability, iteration, and growth are the work.
          </p>

          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            With a foundation in Computer Science and a minor in Business Administration, I focus on turning technical precision into products people rely on—and businesses can grow around. I'm drawn to environments where execution matters, feedback loops are tight, and the goal is to build something that earns trust through performance.
          </p>
        </div>
      </div>
    </section>
  );
}
