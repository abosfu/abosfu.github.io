export function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-[#0B0B0C] font-[var(--font-heading)] uppercase"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, lineHeight: '1.15', letterSpacing: '0.04em' }}
          >
            About
          </h2>
        </div>

        {/* Content - Seamless, No Boxes */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p
            className="text-[#4B4B4B] font-[var(--font-body)]"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            I build from the problem outward.
          </p>

          <p
            className="text-[#4B4B4B] font-[var(--font-body)]"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            Who feels this pain? Why does it matter? What would make it valuable enough to pay for?
          </p>

          <p
            className="text-[#4B4B4B] font-[var(--font-body)]"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            Technical instinct: clean systems.
            <br />
            Business instinct: incentives, adoption, traction.
          </p>

          <p
            className="text-[#4B4B4B] font-[var(--font-body)]"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            I build decision tools that turn signals into action—scores, roadmaps, and next steps.
          </p>
        </div>
      </div>
    </section>
  );
}
