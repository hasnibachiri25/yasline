import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, Trophy } from 'lucide-react';
import { MEASUREMENT_COMPARISON } from '../data/manifestoData';

interface MetricsSectionProps {
  darkMode: boolean;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ darkMode }) => {
  const metricsList = [
    "Time created for unhurried living",
    "Meaningful shared experiences formed",
    "Relationships and deep trust forged",
    "Knowledge & mentorship freely shared",
    "New capabilities gained by community members",
    "Opportunities unlocked for others",
    "Did the builders actually have time to live?"
  ];

  return (
    <section id="success" className={`py-32 lg:py-44 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-ivory-200 text-obsidian-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 block mb-4">
            REDEFINING SUCCESS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-8">
            A Different Definition of Success
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-obsidian-700'
          }`}>
            Can you build something meaningful without losing the life you built it for?
          </p>
        </div>

        {/* Expressive Deep Image Banner: True Living */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden mb-24 shadow-2xl border border-gold-500/30 group"
        >
          <img
            src="/assets/experience.jpg"
            alt="Person quietly watching coastal dawn"
            className="w-full h-full object-cover object-center filter brightness-85 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12 max-w-2xl">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-2 font-bold">
              The ultimate question
            </span>
            <p className="text-xl sm:text-3xl font-serif font-bold text-ivory-50 leading-snug">
              "Can you look back and feel: I was actually here. I lived this."
            </p>
          </div>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
          
          {/* Traditional Trap */}
          <div className={`p-10 sm:p-14 rounded-3xl border ${
            darkMode ? 'bg-obsidian-900/80 border-obsidian-800' : 'bg-ivory-100 border-ivory-300'
          }`}>
            <div className="flex items-center gap-3 text-stone-400 mb-8">
              <X className="w-5 h-5 text-red-400" />
              <h3 className="text-xs font-bold uppercase tracking-[0.25em]">Standard Metric Trap</h3>
            </div>
            
            <div className="space-y-5">
              {MEASUREMENT_COMPARISON.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-start gap-4">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                  <span className="text-sm sm:text-base line-through opacity-70 leading-relaxed">{item.standard}</span>
                </div>
              ))}
            </div>
          </div>

          {/* YASLINE Definition */}
          <div className="p-10 sm:p-14 rounded-3xl border border-gold-500/40 bg-gradient-to-br from-obsidian-850 via-obsidian-850 to-gold-900/20 text-ivory-100 shadow-2xl">
            <div className="flex items-center gap-3 text-gold-400 mb-8">
              <Trophy className="w-5 h-5" />
              <h3 className="text-xs font-bold uppercase tracking-[0.25em]">YASLINE Definition</h3>
            </div>

            <div className="space-y-5">
              {MEASUREMENT_COMPARISON.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-start gap-4">
                  <Check className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                  <span className="text-sm sm:text-base font-semibold text-gold-200 leading-relaxed">{item.yasline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Measure List */}
        <div className={`p-12 sm:p-16 rounded-3xl border text-center ${
          darkMode ? 'bg-obsidian-900 border-obsidian-800' : 'bg-ivory-100 border-ivory-300'
        }`}>
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 block mb-4">
            BEYOND MONEY
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold mb-10">
            What We Measure Every Day
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            {metricsList.map((metric, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                <Sparkles className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span className="text-sm font-medium leading-relaxed">{metric}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
