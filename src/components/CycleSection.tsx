import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, Repeat, ShieldCheck, HeartHandshake, RotateCw, Check } from 'lucide-react';
import { CYCLE_STEPS } from '../data/manifestoData';

interface CycleSectionProps {
  darkMode: boolean;
}

export const CycleSection: React.FC<CycleSectionProps> = ({ darkMode }) => {
  const [selectedId, setSelectedId] = useState<string>("create");

  const activeStep = CYCLE_STEPS.find(s => s.id === selectedId) || CYCLE_STEPS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "Share2": return <Share2 className="w-5 h-5" />;
      case "Repeat": return <Repeat className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "HeartHandshake": return <HeartHandshake className="w-5 h-5" />;
      case "RotateCw": return <RotateCw className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="cycle" className={`py-32 lg:py-44 relative overflow-hidden transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-900 text-ivory-100' : 'bg-ivory-100 text-obsidian-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 block mb-4">
            SUSTAINABLE HUMAN VALUE FLOW
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-8">
            The Worth Living Cycle
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-obsidian-700'
          }`}>
            Creation without extraction. Value flows in an enduring loop where each cycle leaves more capability behind than the one before it.
          </p>
        </div>

        {/* Dynamic Cycle Flow Stepper */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-20">
          {CYCLE_STEPS.map((step, index) => {
            const isSelected = step.id === selectedId;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setSelectedId(step.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
                    isSelected
                      ? 'bg-gold-gradient text-obsidian-950 shadow-2xl shadow-gold-500/25 scale-105'
                      : darkMode
                        ? 'bg-obsidian-850 text-ivory-200 hover:bg-obsidian-800 hover:text-gold-300 border border-obsidian-800'
                        : 'bg-ivory-200 text-obsidian-800 hover:bg-ivory-300 hover:text-gold-700 border border-ivory-300'
                  }`}
                >
                  {getIcon(step.iconName)}
                  <span>{step.title}</span>
                </button>
                {index < CYCLE_STEPS.length - 1 && (
                  <span className="text-gold-500/40 font-bold hidden sm:inline text-sm">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Active Phase Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 p-10 sm:p-16 rounded-3xl border ${
              darkMode
                ? 'bg-obsidian-850 border-gold-500/30 shadow-2xl'
                : 'bg-ivory-50 border-gold-500/40 shadow-xl'
            }`}
          >
            {/* Left Content Area */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-8">
                  {getIcon(activeStep.iconName)}
                  <span>Phase: {activeStep.title}</span>
                </div>
                
                <h3 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
                  {activeStep.title}
                </h3>
                <p className="text-xl sm:text-2xl text-gold-400 font-serif italic mb-8">
                  "{activeStep.subtitle}"
                </p>
                <p className={`text-lg sm:text-xl leading-relaxed font-light mb-10 ${
                  darkMode ? 'text-ivory-200' : 'text-obsidian-700'
                }`}>
                  {activeStep.description}
                </p>
              </div>

              <div className="pt-8 border-t border-gold-500/20">
                <p className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-2">
                  Core Rule of this Phase:
                </p>
                <p className="text-sm sm:text-base font-serif italic opacity-95">
                  "Each cycle should leave more capability behind than the one before it."
                </p>
              </div>
            </div>

            {/* Right Examples Area */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-gold-500/5 border border-gold-500/20 flex flex-col justify-center">
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-8 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Real-World Expressions</span>
              </h4>

              <div className="space-y-4">
                {activeStep.examples.map((example, idx) => (
                  <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl border ${
                    darkMode ? 'bg-obsidian-900/90 border-obsidian-800' : 'bg-ivory-100 border-ivory-300'
                  }`}>
                    <div className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
