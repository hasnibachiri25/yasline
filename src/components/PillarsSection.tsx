import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Compass, Hammer, Gift, CheckCircle2, ArrowRight } from 'lucide-react';
import { PILLARS } from '../data/manifestoData';

interface PillarsSectionProps {
  darkMode: boolean;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState(PILLARS[0].id);

  const activePillar = PILLARS.find(p => p.id === activeTab) || PILLARS[0];

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case "Home": return <Home className="w-5 h-5" />;
      case "Users": return <Users className="w-5 h-5" />;
      case "Compass": return <Compass className="w-5 h-5" />;
      case "Hammer": return <Hammer className="w-5 h-5" />;
      case "Gift": return <Gift className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  return (
    <section id="pillars" className={`py-32 lg:py-44 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-ivory-200 text-obsidian-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 block mb-4">
            THE ARCHITECTURE OF LIFE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-8">
            The Pillars of Worth Living
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-obsidian-700'
          }`}>
            Five foundational spaces and expressions designed to reconnect human potential, relationships, work, and community.
          </p>
        </div>

        {/* Dynamic Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3.5 mb-20">
          {PILLARS.map((p) => {
            const isActive = p.id === activeTab;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                  isActive
                    ? 'bg-gold-gradient text-obsidian-950 shadow-2xl shadow-gold-500/25 scale-105'
                    : darkMode
                      ? 'bg-obsidian-900 text-ivory-300 hover:bg-obsidian-850 hover:text-gold-300 border border-obsidian-800'
                      : 'bg-ivory-100 text-obsidian-700 hover:bg-ivory-300 hover:text-gold-800 border border-ivory-300'
                }`}
              >
                {getPillarIcon(p.icon)}
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Presentation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border ${
              darkMode
                ? 'bg-obsidian-900 border-obsidian-800 shadow-2xl'
                : 'bg-ivory-100 border-ivory-300 shadow-xl'
            }`}
          >
            {/* High Impact Image Column */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[600px] overflow-hidden">
              <img
                src={activePillar.image}
                alt={activePillar.title}
                className="w-full h-full object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-obsidian-900/90" />
            </div>

            {/* Content Details Column */}
            <div className="lg:col-span-6 p-10 sm:p-16 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-6">
                  {getPillarIcon(activePillar.icon)}
                  <span>Pillar of Living</span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-serif font-bold mb-3">
                  {activePillar.title}
                </h3>

                <p className="text-xl font-serif italic text-gold-400 mb-8">
                  "{activePillar.tagline}"
                </p>

                <blockquote className={`p-5 rounded-2xl border-l-4 border-gold-500 text-sm sm:text-base italic mb-10 leading-relaxed ${
                  darkMode ? 'bg-obsidian-850 text-ivory-200' : 'bg-ivory-200 text-obsidian-800'
                }`}>
                  {activePillar.quote}
                </blockquote>

                <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-6">
                  Key Principles & Expressions:
                </h4>

                <div className="space-y-4 mb-10">
                  {activePillar.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <span className={`text-base font-light ${
                        darkMode ? 'text-ivory-200' : 'text-obsidian-800'
                      }`}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gold-500/20 flex items-center justify-between">
                <span className="text-xs text-gold-400 font-mono">YASLINE Pillar</span>
                <a 
                  href="#start-small" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <span>Build This Pillar</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
