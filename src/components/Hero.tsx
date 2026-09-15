import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { MANIFESTO_HERO } from '../data/manifestoData';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-24">
      {/* Background Image with Ambient Parallax Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero.jpg" 
          alt="Architectural sanctuary in golden light" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105 transition-transform duration-1000"
        />
        <div className={`absolute inset-0 transition-colors duration-1000 ${
          darkMode 
            ? 'bg-gradient-to-b from-obsidian-950/80 via-obsidian-950/85 to-obsidian-950' 
            : 'bg-gradient-to-b from-ivory-100/60 via-[#FDFBF7]/90 to-[#FDFBF7]'
        }`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Radiant Glowing Ambient Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold-500/10 rounded-full filter blur-[160px] pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center">
        
        {/* Subtle Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border text-[11px] font-semibold uppercase tracking-[0.35em] mb-12 shadow-xl ${
            darkMode 
              ? 'border-gold-500/30 bg-glass text-gold-300' 
              : 'border-gold-500/40 bg-white/80 text-[#8C6610] shadow-sm'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>{MANIFESTO_HERO.brand} Manifesto</span>
        </motion.div>

        {/* LOGO ONLY - Direct floating transparent PNG with zero background box or container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center mb-12 px-4"
        >
          <img 
            src="/assets/logo-transparent.png" 
            alt="YASLINE Logo - A Life We Build Together"
            className="h-16 sm:h-24 md:h-32 max-w-[320px] sm:max-w-[460px] w-auto object-contain filter drop-shadow-[0_10px_35px_rgba(212,175,55,0.4)] transition-all duration-500 transform hover:scale-[1.02]"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight mb-8 leading-[1.15]"
        >
          <span className="block text-gold-gradient drop-shadow-sm">{MANIFESTO_HERO.title}</span>
          <span className={`block text-xl sm:text-3xl font-light italic mt-3 tracking-wide ${
            darkMode ? 'text-ivory-200' : 'text-[#3D3D4E]'
          }`}>
            "{MANIFESTO_HERO.subtitle}"
          </span>
        </motion.h1>

        {/* Vision Statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className={`max-w-2xl mx-auto text-base sm:text-xl font-light leading-relaxed mb-12 opacity-95 ${
            darkMode ? 'text-ivory-200' : 'text-[#2C2C36]'
          }`}>
          {MANIFESTO_HERO.vision}{' '}
          <strong className="font-semibold text-gold-500 underline decoration-gold-500/40 underline-offset-8">
            {MANIFESTO_HERO.taglineBold}
          </strong>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
        >
          <a
            href="#philosophy"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gold-gradient text-obsidian-950 font-bold uppercase text-xs tracking-[0.25em] shadow-2xl shadow-gold-500/25 hover:brightness-110 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span>Explore Philosophy</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#cycle"
            className={`w-full sm:w-auto px-9 py-4 rounded-full border font-semibold uppercase text-xs tracking-[0.25em] transition-all duration-300 ${
              darkMode 
                ? 'border-ivory-100/30 bg-glass text-ivory-100 hover:bg-ivory-100/10 hover:border-gold-400/50'
                : 'border-[#DCD5C5] bg-white/90 text-[#1C1C24] hover:bg-white hover:border-gold-500 shadow-sm'
            }`}
          >
            The Cycle of Value
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className={`flex flex-col items-center gap-3 ${darkMode ? 'text-ivory-300/60' : 'text-[#5C5C6E]'}`}
        >
          <span className="text-[10px] uppercase tracking-[0.35em] font-mono">Scroll to explore</span>
          <a href="#philosophy" className="animate-bounce p-1 hover:text-gold-500 transition-colors">
            <ChevronDown className="w-5 h-5 text-gold-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
