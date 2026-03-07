import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { ProjectTrajectory } from '@/app/pages/ProjectTrajectory';
import { ProjectMaple } from '@/app/pages/ProjectMaple';
import { ProjectLeadScorer } from './pages/ProjectLeadScorer';
import { ProjectMarketScout } from './pages/ProjectMarketScout';
import { ProjectFightMatch } from './pages/ProjectFightMatch';
import { toast } from 'sonner';
import { Toaster } from '@/app/components/ui/sonner';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const handleCopyEmail = () => {
  navigator.clipboard.writeText('abo4@sfu.ca');
  toast.success('Email copied to clipboard!');
};

function Home({ onCopyEmail }: { onCopyEmail: () => void }) {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Hero onViewProjects={scrollToProjects} onCopyEmail={onCopyEmail} />
      <Projects />
      <Contact onCopyEmail={onCopyEmail} />
    </>
  );
}

function AppShell({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Toaster for notifications */}
      <Toaster position="bottom-right" />

      {/* Navigation */}
      <Navbar onCopyEmail={onCopyEmail} />

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home onCopyEmail={handleCopyEmail} />} />
          <Route path="/projects/lead-scorer" element={<ProjectLeadScorer />} />
          <Route path="/projects/marketscout" element={<ProjectMarketScout />} />
          <Route path="/projects/fightmatch" element={<ProjectFightMatch />} />
          <Route path="/projects/trajectory" element={<ProjectTrajectory />} />
          <Route path="/projects/maple" element={<ProjectMaple />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell onCopyEmail={handleCopyEmail} />
    </BrowserRouter>
  );
}
