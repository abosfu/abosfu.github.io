import { SectionHeader } from '@/app/components/SectionHeader';

export function Education() {
  const focusAreas = [
    'Artificial Intelligence / Machine Learning',
    'Computer Vision',
    'Software Engineering Foundations',
  ];

  return (
    <section id="education" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="03" title="Education" />

        <div className="bg-white border border-[#E6E6E6] rounded-2xl p-10 lg:p-12">
          <div className="space-y-8">
            {/* Degree */}
            <div>
              <h3
                className="text-[#0B0B0C] font-['Space_Grotesk'] mb-2"
                style={{ fontSize: '28px', fontWeight: 600, lineHeight: '1.3' }}
              >
                Bachelor of Computing Science
              </h3>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                Simon Fraser University
              </p>
              <p
                className="text-[#7A7A7A] font-['Inter'] mt-1"
                style={{ fontSize: '15px', fontWeight: 400 }}
              >
                Expected 2027
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#E6E6E6]" />

            {/* Major/Minor */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p
                  className="text-[#7A7A7A] font-['Inter'] mb-2 tracking-wide"
                  style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em' }}
                >
                  MAJOR
                </p>
                <p
                  className="text-[#0B0B0C] font-['Inter']"
                  style={{ fontSize: '17px', fontWeight: 600 }}
                >
                  Computing Science
                </p>
              </div>
              <div>
                <p
                  className="text-[#7A7A7A] font-['Inter'] mb-2 tracking-wide"
                  style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em' }}
                >
                  MINOR
                </p>
                <p
                  className="text-[#0B0B0C] font-['Inter']"
                  style={{ fontSize: '17px', fontWeight: 600 }}
                >
                  Business Administration
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#E6E6E6]" />

            {/* Focus Areas */}
            <div>
              <p
                className="text-[#7A7A7A] font-['Inter'] mb-4 tracking-wide"
                style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em' }}
              >
                FOCUS AREAS
              </p>
              <div className="space-y-3">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0B0B0C] mt-2.5 flex-shrink-0" />
                    <p
                      className="text-[#0B0B0C] font-['Inter']"
                      style={{ fontSize: '16px', fontWeight: 500, lineHeight: '1.6' }}
                    >
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
