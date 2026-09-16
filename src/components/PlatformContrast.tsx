import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Sparkles, Trophy } from 'lucide-react';
import { PLATFORM_DIFFERENCE } from '../data/manifestoData';

interface PlatformContrastProps {
  darkMode: boolean;
}

export const PlatformContrast: React.FC<PlatformContrastProps> = ({ darkMode }) => {
  return (
    <section className={`py-32 lg:py-48 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-[#FAF8F5] text-[#1C1C24]'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 block mb-4">
            14 — WHAT MAKES IT DIFFERENT
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            Social Media vs. Worth Living
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
          }`}>
            Social media rewards attention and viral popularity. WORTH LIVING values contribution, curiosity, creation, and learning.
          </p>
        </div>

        {/* Matrix Comparison Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {PLATFORM_DIFFERENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-gold-500/30 shadow-lg"
            >
              {/* Aspect Label */}
              <div className="lg:col-span-3 p-6 bg-gold-500/10 flex items-center font-bold text-xs uppercase tracking-widest text-gold-500 border-b lg:border-b-0 lg:border-r border-gold-500/20">
                {item.aspect}
              </div>

              {/* Social Media Column */}
              <div className={`lg:col-span-4 p-6 flex items-center gap-3 ${
                darkMode ? 'bg-obsidian-900/80 text-ivory-300' : 'bg-white text-[#2C2C36]'
              }`}>
                <X className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-sm font-light leading-relaxed">{item.socialMedia}</span>
              </div>

              {/* Worth Living Column */}
              <div className="lg:col-span-5 p-6 bg-gradient-to-r from-obsidian-850 to-obsidian-900 text-ivory-100 flex items-center gap-3 border-t lg:border-t-0 lg:border-l border-gold-500/30">
                <Check className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-sm font-bold text-gold-200 leading-relaxed">{item.worthLiving}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
