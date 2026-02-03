import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { toast } from 'sonner';
import { Toaster } from '@/app/components/ui/sonner';

export default function App() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abo4@sfu.ca');
    toast.success('Email copied to clipboard!');
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Toaster for notifications */}
      <Toaster position="bottom-right" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero onViewProjects={scrollToProjects} onCopyEmail={handleCopyEmail} />
        <About />
        <Projects />
        <Contact onCopyEmail={handleCopyEmail} />
      </main>
    </div>
  );
}
