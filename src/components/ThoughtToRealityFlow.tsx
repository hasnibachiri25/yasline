import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, RotateCw } from 'lucide-react';
import { THOUGHT_TO_REALITY_STEPS } from '../data/manifestoData';

interface ThoughtToRealityFlowProps {
  darkMode: boolean;
}

export const ThoughtToRealityFlow: React.FC<ThoughtToRealityFlowProps> = ({ darkMode }) => {
  return (
    <section className={`py-32 lg:py-48 relative overflow-hidden transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-900 text-ivory-100' : 'bg-[#EFECE4] text-[#1C1C24]'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <RotateCw className="w-4 h-4 text-gold-400" />
            <span>12 — THE CENTRAL MECHANISM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            From Thought To Reality
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
          }`}>
            How an abstract idea evolves into a living human reality and inspires the next creation.
          </p>
        </div>

        {/* 9 Step Pipeline Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-4 mb-16">
          {THOUGHT_TO_REALITY_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`p-5 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                idx === 4 || idx === 8
                  ? 'border-gold-500 bg-gold-500/10 shadow-xl'
                  : darkMode
                    ? 'bg-obsidian-850 border-obsidian-800'
                    : 'bg-white border-[#E0DACE] shadow-sm'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono text-gold-400 font-bold block mb-2">{step.step}</span>
                <h3 className="text-base font-serif font-bold mb-2">{step.title}</h3>
                <p className="text-xs font-light leading-relaxed opacity-80">{step.desc}</p>
              </div>

              {idx < THOUGHT_TO_REALITY_STEPS.length - 1 && (
                <div className="mt-4 pt-2 text-center text-gold-500 opacity-40 font-bold hidden lg:block">↓</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Central Quote Callout */}
        <div className="p-10 rounded-3xl bg-gold-gradient text-obsidian-950 font-serif font-bold text-center max-w-4xl mx-auto shadow-2xl">
          <p className="text-xl sm:text-2xl italic leading-relaxed">
            "A better life isn't something we simply find. It is something we build — together."
          </p>
        </div>

      </div>
    </section>
  );
};
