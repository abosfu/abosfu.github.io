import { SectionHeader } from '@/app/components/SectionHeader';
import { ExternalLink } from 'lucide-react';

export function Community() {
  const communityWork = [
    {
      title: 'SFU MSA Charity Bake Sale',
      role: 'Team Lead & Sales Manager',
      description: 'Led team coordination and managed sales operations for charity fundraising initiative. Successfully organized event logistics and community outreach.',
    },
    {
      title: 'DSFC Community Iftars',
      role: 'Organizer',
      description: 'Organized community iftar events with focus on meal distribution and community building during Ramadan.',
    },
  ];

  return (
    <section id="community" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="05" title="Community" />

        <div className="space-y-6">
          {communityWork.map((work, index) => (
            <div
              key={index}
              className="bg-white border border-[#E6E6E6] rounded-2xl p-8 lg:p-10 hover:border-[#0B0B0C] transition-all"
            >
              <div className="space-y-4">
                {/* Title & Role */}
                <div>
                  <h3
                    className="text-[#0B0B0C] font-['Space_Grotesk'] mb-1"
                    style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.3' }}
                  >
                    {work.title}
                  </h3>
                  <p
                    className="text-[#7A7A7A] font-['Inter']"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    {work.role}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-[#4B4B4B] font-['Inter'] max-w-3xl"
                  style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  {work.description}
                </p>

                {/* View Photos Button */}
                <button className="flex items-center gap-2 px-4 h-10 rounded-lg border border-[#E6E6E6] text-[#0B0B0C] hover:bg-[#FAFAFA] transition-colors font-['Inter'] mt-4">
                  <ExternalLink size={16} />
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>View Photos</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
