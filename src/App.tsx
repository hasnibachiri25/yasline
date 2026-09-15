import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { ProgressionSection } from './components/ProgressionSection';
import { CycleSection } from './components/CycleSection';
import { PillarsSection } from './components/PillarsSection';
import { EconomySection } from './components/EconomySection';
import { VisualGallerySection } from './components/VisualGallerySection';
import { MetricsSection } from './components/MetricsSection';
import { InteractiveReflection } from './components/InteractiveReflection';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-ivory-100 text-obsidian-900'
    }`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <PhilosophySection darkMode={darkMode} />
        <ProgressionSection darkMode={darkMode} />
        <CycleSection darkMode={darkMode} />
        <PillarsSection darkMode={darkMode} />
        <EconomySection darkMode={darkMode} />
        <div id="gallery">
          <VisualGallerySection darkMode={darkMode} />
        </div>
        <MetricsSection darkMode={darkMode} />
        <InteractiveReflection darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
