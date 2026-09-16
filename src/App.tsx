import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscoverFeed } from './components/DiscoverFeed';
import { BuildInspector } from './components/BuildInspector';
import { PerspectivesQuestions } from './components/PerspectivesQuestions';
import { ExperimentsEngine } from './components/ExperimentsEngine';
import { DiscoverPeople } from './components/DiscoverPeople';
import { ThoughtToRealityFlow } from './components/ThoughtToRealityFlow';
import { PlatformContrast } from './components/PlatformContrast';
import { CreateModal } from './components/CreateModal';
import { PhilosophySection } from './components/PhilosophySection';
import { ProgressionSection } from './components/ProgressionSection';
import { CycleSection } from './components/CycleSection';
import { PillarsSection } from './components/PillarsSection';
import { EconomySection } from './components/EconomySection';
import { VisualGallerySection } from './components/VisualGallerySection';
import { MetricsSection } from './components/MetricsSection';
import { InteractiveReflection } from './components/InteractiveReflection';
import { Footer } from './components/Footer';
import { DISCOVER_ITEMS, DiscoverItem } from './data/manifestoData';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [items, setItems] = useState<DiscoverItem[]>(DISCOVER_ITEMS);
  const [inspectedBuild, setInspectedBuild] = useState<DiscoverItem | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddContribution = (newItem: DiscoverItem) => {
    setItems((prev) => [newItem, ...prev]);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-[#FAF8F5] text-[#1C1C24]'
    }`}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenCreate={() => setCreateModalOpen(true)}
      />
      
      <main>
        {/* Hero Banner */}
        <Hero darkMode={darkMode} />

        {/* 01 — DISCOVER Posibilities Feed */}
        <DiscoverFeed 
          items={items}
          darkMode={darkMode} 
          onInspectBuild={(item) => setInspectedBuild(item)} 
        />

        {/* 04 & 05 — QUESTIONS & PERSPECTIVES */}
        <PerspectivesQuestions darkMode={darkMode} />

        {/* 06 — LIFE EXPERIMENTS ENGINE */}
        <ExperimentsEngine darkMode={darkMode} />

        {/* 11 — DISCOVER PEOPLE */}
        <DiscoverPeople darkMode={darkMode} />

        {/* 12 — MECHANISM: FROM THOUGHT TO REALITY */}
        <div id="mechanism">
          <ThoughtToRealityFlow darkMode={darkMode} />
        </div>

        {/* 14 — WHAT MAKES IT DIFFERENT (Social Media vs Worth Living) */}
        <PlatformContrast darkMode={darkMode} />

        {/* Visual Gallery */}
        <div id="gallery">
          <VisualGallerySection darkMode={darkMode} />
        </div>

        {/* Foundation Pillars & Architecture */}
        <PhilosophySection darkMode={darkMode} />
        <ProgressionSection darkMode={darkMode} />
        <CycleSection darkMode={darkMode} />
        <PillarsSection darkMode={darkMode} />
        <EconomySection darkMode={darkMode} />
        <MetricsSection darkMode={darkMode} />
        <InteractiveReflection darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />

      {/* 02 & 03 — BUILD INSPECTOR MODAL */}
      <BuildInspector 
        item={inspectedBuild} 
        onClose={() => setInspectedBuild(null)} 
        darkMode={darkMode} 
      />

      {/* 10 — + CREATE CONTRIBUTION MODAL */}
      <CreateModal 
        isOpen={createModalOpen} 
        onClose={() => setCreateModalOpen(false)} 
        darkMode={darkMode} 
        onAddContribution={handleAddContribution}
      />
    </div>
  );
}

export default App;
