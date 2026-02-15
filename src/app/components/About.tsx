export function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight uppercase"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, lineHeight: '1.1', letterSpacing: '0.05em' }}
          >
            About
          </h2>
        </div>

        {/* Content - Seamless, No Boxes */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            I build from the problem outward.
          </p>

          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            Before writing code, I ask:
          </p>

          <ul className="space-y-2 ml-6">
            <li className="text-[#4B4B4B] font-['Inter']" style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}>
              Who feels this pain?
            </li>
            <li className="text-[#4B4B4B] font-['Inter']" style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}>
              Why does it matter?
            </li>
            <li className="text-[#4B4B4B] font-['Inter']" style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}>
              What would make this valuable enough to pay for?
            </li>
          </ul>

          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            My Computer Science foundation helps me build systems that are reliable and scalable. My Business minor pushes me to think about incentives, adoption, and traction.
          </p>

          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            I'm especially drawn to AI systems that reduce friction, increase clarity, and help people make better decisions.
          </p>

          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            I care about:
          </p>

          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '19px' }}>•</span>
              <span className="text-[#4B4B4B] font-['Inter']" style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}>
                Clean architecture
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '19px' }}>•</span>
              <span className="text-[#4B4B4B] font-['Inter']" style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}>
                Tight feedback loops
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '19px' }}>•</span>
              <span className="text-[#4B4B4B] font-['Inter']" style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}>
                Measurable outcomes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0B0B0C] mt-1" style={{ fontSize: '19px' }}>•</span>
              <span className="text-[#4B4B4B] font-['Inter']" style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}>
                Real-world applicability
              </span>
            </li>
          </ul>

          <p
            className="text-[#4B4B4B] font-['Inter']"
            style={{ fontSize: '19px', fontWeight: 400, lineHeight: '1.8' }}
          >
            I'm here to ship products that survive contact with the real world — and keep getting better through iteration.
          </p>
        </div>
      </div>
    </section>
  );
}
