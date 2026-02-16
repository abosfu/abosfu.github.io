import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { ProjectTrajectory } from '@/app/pages/ProjectTrajectory';
import { ProjectMaple } from '@/app/pages/ProjectMaple';
import { ProjectOps } from '@/app/pages/ProjectOps';
import { toast } from 'sonner';
import { Toaster } from '@/app/components/ui/sonner';

function Home() {
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
    <>
      <Hero onViewProjects={scrollToProjects} onCopyEmail={handleCopyEmail} />
      <About />
      <Projects />
      <Contact onCopyEmail={handleCopyEmail} />
    </>
  );
}

function AppShell() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Toaster for notifications */}
      <Toaster position="bottom-right" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/projectops" element={<ProjectOps />} />
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
      <AppShell />
    </BrowserRouter>
  );
}
