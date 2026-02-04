import { mapleCaseStudy } from '@/content/mapleCaseStudy';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProjectMaple() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <main className="pt-24 pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#4B4B4B] hover:text-[#0B0B0C] transition-colors font-['Inter'] mb-10 group"
            style={{ fontSize: '15px', fontWeight: 500 }}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>

          {/* Prototype image directly under title/overview */}
          <div className="mb-10">
            <img
              src="/images/maple/prototype.jpg"
              alt="Prototype: Air Canada Chat Bot, Maple"
              className="w-full h-auto object-contain rounded-2xl border border-[#E6E6E6] shadow-sm"
            />
          </div>

          {/* Case study text, word for word */}
          <article
            className="text-[#0B0B0C] font-['Inter']"
            style={{ fontSize: '16px', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}
          >
            {mapleCaseStudy}
          </article>

          {/* Persona image */}
          <div className="mt-10 mb-10">
            <img
              src="/images/maple/persona.png"
              alt="Consolidated solo traveller persona: Student explorer Kai"
              className="w-full h-auto object-contain rounded-2xl border border-[#E6E6E6] shadow-sm"
            />
          </div>

          {/* Street view / navigation image */}
          <div className="mt-10">
            <img
              src="/images/maple/streetview.jpg"
              alt="Street View airport map feature"
              className="w-full h-auto object-contain rounded-2xl border border-[#E6E6E6] shadow-sm"
            />
          </div>
        </div>
      </main>
    </div>
  );
}


