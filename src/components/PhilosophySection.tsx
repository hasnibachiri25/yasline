import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldAlert, ChevronDown } from 'lucide-react';
import { PHILOSOPHY_SECTION } from '../data/manifestoData';

interface PhilosophySectionProps {
  darkMode: boolean;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ darkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="philosophy" className={`py-32 lg:py-44 relative overflow-hidden transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-900 text-ivory-100' : 'bg-[#FAF8F5] text-[#1C1C24]'
    }`}>
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-5">
            <Sparkles className="w-4 h-4" />
            <span>The Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-8 leading-[1.15]">
            {PHILOSOPHY_SECTION.headline}
          </h2>
          <p className={`text-lg sm:text-2xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
          }`}>
            {PHILOSOPHY_SECTION.intro}
          </p>
        </div>

        {/* Deep Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[320px] sm:h-[450px] rounded-3xl overflow-hidden mb-24 shadow-2xl border border-gold-500/30 group"
        >
          <img
            src="/assets/home.jpg"
            alt="Warm architectural living sanctuary"
            className="w-full h-full object-cover object-center filter brightness-85 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12 max-w-2xl text-ivory-100">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-2 font-bold">
              Architectural Reflection
            </span>
            <p className="text-xl sm:text-3xl font-serif font-bold text-ivory-50 leading-snug">
              "A home is more than a place to sleep. It is a sanctuary where life happens."
            </p>
          </div>
        </motion.div>

        {/* Dynamic Interactive Cards: Problem vs Redesign */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-28">
          
          {/* Left Column: Modern Friction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`lg:col-span-5 p-8 sm:p-12 rounded-3xl border transition-all duration-500 ${
              darkMode 
                ? 'bg-obsidian-850/90 border-obsidian-800' 
                : 'bg-white border-[#E5DFD3] shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 text-red-500 mb-8">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-xs font-bold uppercase tracking-[0.25em]">The Modern Dilemma</h3>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-serif font-semibold mb-8 leading-snug">
              Yet many people feel increasingly:
            </h4>

            <div className="space-y-4 mb-10">
              {PHILOSOPHY_SECTION.problemStatements.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl border ${
                  darkMode ? 'bg-red-500/5 border-red-500/10' : 'bg-red-50 border-red-200'
                }`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                  <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-ivory-200' : 'text-[#1C1C24]'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className={`p-6 rounded-2xl border italic text-sm leading-relaxed ${
              darkMode ? 'bg-red-500/10 border-red-500/20 text-red-300' : 'bg-red-50 border-red-200 text-red-800 font-medium'
            }`}>
              "We don't believe the answer is to escape modern life. We believe the answer is to redesign the way we live inside it."
            </div>
          </motion.div>

          {/* Right Column: Dynamic Expandable Redefinitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-4"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6 block">
              Click to Explore the Redesigned Pillars:
            </h3>

            {PHILOSOPHY_SECTION.redefinitions.map((item, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setExpandedIndex(isOpen ? null : idx)}
                  className={`cursor-pointer p-6 sm:p-8 rounded-2xl border transition-all duration-500 ${
                    isOpen
                      ? darkMode
                        ? 'border-gold-500/70 bg-gradient-to-r from-obsidian-850 via-obsidian-850 to-gold-950/30 shadow-2xl scale-[1.01]'
                        : 'border-gold-500 bg-white shadow-xl scale-[1.01]'
                      : darkMode
                        ? 'border-obsidian-800 bg-obsidian-850/60 hover:border-obsidian-700'
                        : 'border-[#E5DFD3] bg-white hover:border-gold-400 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                        isOpen ? 'bg-gold-gradient text-obsidian-950' : 'bg-gold-500/10 text-gold-500'
                      }`}>
                        0{idx + 1}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold">{item.label}</h4>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gold-500/20"
                      >
                        <p className={`text-base sm:text-lg font-light leading-relaxed ${
                          darkMode ? 'text-ivory-200' : 'text-[#2C2C36]'
                        }`}>
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* Central Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 sm:p-20 rounded-3xl bg-gold-gradient text-obsidian-950 shadow-2xl text-center relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.35em] block mb-4 text-obsidian-900/80">
              LIFE IS THE STARTING POINT
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold leading-tight mb-8">
              "What makes a life worth living?"
            </h3>
            <p className="text-base sm:text-xl font-medium leading-relaxed opacity-95">
              The answer will not be the same for everyone. For one person, it may be family. For another, meaningful work, friendship, creativity, freedom, nature, or contribution. We don't define the perfect life — we build the spaces, experiences, and tools that make it easier for people to build <span className="underline decoration-obsidian-950 decoration-2 font-bold">their own</span>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
