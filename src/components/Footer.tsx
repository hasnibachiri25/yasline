import React from 'react';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-16 border-t transition-colors duration-700 ${
      darkMode 
        ? 'bg-obsidian-950 border-obsidian-800 text-ivory-300' 
        : 'bg-[#E8E4D8] border-[#DCD5C5] text-[#1C1C24]'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            {/* DIRECT FLOATING TRANSPARENT LOGO */}
            <img 
              src="/assets/logo-transparent.png" 
              alt="YASLINE Logo" 
              className="h-10 sm:h-12 w-auto mb-6 object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
            />
            <p className="text-sm font-serif italic text-gold-500 mb-4">
              "Build a life worth living. Together."
            </p>
            <p className={`text-xs font-light leading-relaxed max-w-sm ${
              darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
            }`}>
              We are creating a living model for a better way to work, live, connect, create, share, and grow — without allowing work, consumption, or constant pressure to become the purpose of life itself.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest">
              <li><a href="#philosophy" className="hover:text-gold-400 transition-colors">Philosophy</a></li>
              <li><a href="#progression" className="hover:text-gold-400 transition-colors">Progression</a></li>
              <li><a href="#cycle" className="hover:text-gold-400 transition-colors">The Cycle</a></li>
              <li><a href="#pillars" className="hover:text-gold-400 transition-colors">Pillars of Living</a></li>
              <li><a href="#economy" className="hover:text-gold-400 transition-colors">Economy & Value</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a></li>
              <li><a href="#success" className="hover:text-gold-400 transition-colors">Success Redefined</a></li>
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6">
              The Ecosystem
            </h4>
            <p className={`text-xs font-light mb-4 ${
              darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
            }`}>
              YASLINE spaces, tools, funds, and communities exist across cities — Muscat, Algiers, Lisbon, Dubai, and beyond.
            </p>
            <div className={`p-5 rounded-2xl border ${
              darkMode ? 'bg-gold-500/10 border-gold-500/30 text-gold-200' : 'bg-white/80 border-gold-500/40 text-obsidian-950 shadow-sm'
            }`}>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500 block mb-1">
                The Network Principle
              </span>
              <p className="text-xs font-serif italic">
                "One way of living. Many expressions."
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p>© {new Date().getFullYear()} YASLINE. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with purpose & deep care</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          </div>
        </div>

      </div>
    </footer>
  );
};
