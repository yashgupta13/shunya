import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { RisksSection } from './components/RisksSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TargetSection } from './components/TargetSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnalyticsTracker } from './components/AnalyticsTracker';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <AnalyticsTracker />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <RisksSection />
        <PhilosophySection />
        <TargetSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;