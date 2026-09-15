import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, Home, Network, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { PROGRESSION_STEPS } from '../data/manifestoData';

interface ProgressionSectionProps {
  darkMode: boolean;
}

export const ProgressionSection: React.FC<ProgressionSectionProps> = ({ darkMode }) => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [
    <Heart className="w-5 h-5 text-gold-400" />,
    <Home className="w-5 h-5 text-gold-400" />,
    <Users className="w-5 h-5 text-gold-400" />,
    <Network className="w-5 h-5 text-gold-400" />,
    <Globe className="w-5 h-5 text-gold-400" />
  ];

  return (
    <section id="progression" className={`py-32 lg:py-44 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-ivory-200 text-obsidian-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 block mb-4">
            HUMAN SCALE EXPANSION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-8">
            From Two People To A Community
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-obsidian-700'
          }`}>
            Worth Living begins at the most human level: two people choosing to build a life together. From there, the circle organically grows outward.
          </p>
        </div>

        {/* Dynamic Progression Stepper Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {PROGRESSION_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-8 rounded-2xl text-left transition-all duration-500 border ${
                  isActive
                    ? 'border-gold-500 bg-gold-500/10 shadow-2xl shadow-gold-500/15 scale-105'
                    : darkMode
                      ? 'border-obsidian-800 bg-obsidian-900/80 hover:border-obsidian-700'
                      : 'border-ivory-300 bg-ivory-100/80 hover:border-ivory-400'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-gold-400 font-bold">{step.step}</span>
                  {icons[idx]}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-1">{step.title}</h3>
                <p className="text-[10px] text-gold-400 uppercase tracking-widest font-semibold">Stage 0{idx + 1}</p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`p-10 sm:p-16 rounded-3xl border ${
              darkMode 
                ? 'bg-obsidian-900 border-obsidian-800 shadow-2xl' 
                : 'bg-ivory-100 border-ivory-300 shadow-xl'
            } relative overflow-hidden`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Expansion Stage: {PROGRESSION_STEPS[activeStep].step}</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-serif font-bold mb-6">
                  {PROGRESSION_STEPS[activeStep].title}
                </h3>
                <p className={`text-lg sm:text-xl leading-relaxed font-light ${
                  darkMode ? 'text-ivory-200' : 'text-obsidian-800'
                }`}>
                  {PROGRESSION_STEPS[activeStep].desc}
                </p>
              </div>

              <div className="w-full lg:w-80 shrink-0 p-8 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">The Ambition</p>
                <blockquote className="text-sm font-serif italic text-gold-200 leading-relaxed">
                  "Not a lifestyle brand telling people how to live, but a living example making people ask: Could we live differently too?"
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
