import { SectionHeader } from '@/app/components/SectionHeader';
import { Code2, Users, FlaskConical } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      icon: Code2,
      title: 'Engineering Work / Builds',
      description: 'Developing practical software solutions and tools with focus on clean code and scalable architecture.',
    },
    {
      icon: Users,
      title: 'Collaboration & Leadership',
      description: 'Leading teams and coordinating efforts to deliver projects efficiently and effectively.',
    },
    {
      icon: FlaskConical,
      title: 'Research / Exploration',
      description: 'Exploring emerging technologies in AI/ML and Computer Vision to stay at the forefront of innovation.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="04" title="Experience / Value Delivered" />

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#E6E6E6] rounded-2xl p-8 hover:border-[#0B0B0C] transition-all group"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-[#E6E6E6] flex items-center justify-center group-hover:bg-[#0B0B0C] group-hover:border-[#0B0B0C] transition-colors">
                    <Icon size={24} className="text-[#0B0B0C] group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#0B0B0C] font-['Space_Grotesk']"
                    style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
                  >
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.6' }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
