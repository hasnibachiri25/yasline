import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Copy, Check, HeartHandshake } from 'lucide-react';
import { REFLECTION_OPTIONS } from '../data/manifestoData';

interface InteractiveReflectionProps {
  darkMode: boolean;
}

export const InteractiveReflection: React.FC<InteractiveReflectionProps> = ({ darkMode }) => {
  const [selectedId, setSelectedId] = useState<string>(REFLECTION_OPTIONS[0].id);
  const [customName, setCustomName] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const activeOption = REFLECTION_OPTIONS.find(o => o.id === selectedId) || REFLECTION_OPTIONS[0];

  const handleCopyPledge = () => {
    const text = `YASLINE PLEDGE — Build A Life Worth Living:
"I commit to my first step: ${activeOption.title} (${activeOption.description}) — ${customName ? customName : 'A Life Builder'}"
https://yasline.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="start-small" className={`py-32 lg:py-44 relative overflow-hidden transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-900 text-ivory-100' : 'bg-[#EFECE4] text-[#1C1C24]'
    }`}>
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gold-500/10 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
            <HeartHandshake className="w-4 h-4" />
            <span>WORTH LIVING EXPERIMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-8">
            Start Small. Live Deeply.
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
          }`}>
            You do not need to change the world tomorrow. Start with one relationship, one meal, one meaningful conversation, one useful thing you create, one person you help.
          </p>
        </div>

        {/* Interactive Step Picker & Pledge Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Options Selector List */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6 block">
              Choose Your First Step:
            </h3>

            {REFLECTION_OPTIONS.map((option) => {
              const isSelected = option.id === selectedId;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedId(option.id)}
                  className={`w-full text-left p-6 sm:p-8 rounded-2xl border transition-all duration-500 ${
                    isSelected
                      ? 'border-gold-500 bg-gold-500/10 shadow-2xl shadow-gold-500/15 scale-[1.02]'
                      : darkMode
                        ? 'border-obsidian-800 bg-obsidian-850 hover:border-obsidian-700'
                        : 'border-[#E0DACE] bg-white hover:border-gold-400 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-gold-500 font-bold">
                      {option.category}
                    </span>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-gold-400" />}
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-2">{option.title}</h4>
                  <p className={`text-sm font-light leading-relaxed ${
                    darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
                  }`}>
                    {option.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Personalized Pledge Reflection Card */}
          <div className="lg:col-span-6 sticky top-32">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6 block">
              Your Personal Commitment Card:
            </h3>

            <div className="p-10 sm:p-12 rounded-3xl border border-gold-500/50 bg-gradient-to-b from-obsidian-850 via-obsidian-900 to-obsidian-950 text-ivory-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full filter blur-3xl" />

              <div className="flex items-center justify-between mb-10 pb-8 border-b border-gold-500/20">
                {/* DIRECT FLOATING TRANSPARENT LOGO */}
                <img 
                  src="/assets/logo-transparent.png" 
                  alt="YASLINE Logo" 
                  className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]" 
                />
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-[0.25em] font-bold">
                  YASLINE PLEDGE
                </span>
              </div>

              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-gold-500 font-bold block mb-3">
                  My Chosen First Step:
                </span>
                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-gold-200 mb-4">
                  "{activeOption.title}"
                </h4>
                <p className="text-base font-light text-ivory-200 italic leading-relaxed">
                  {activeOption.description}
                </p>
              </div>

              <div className="mb-10">
                <label className="block text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                  Your Name / Signature (Optional):
                </label>
                <input
                  type="text"
                  placeholder="Enter your name or initiative..."
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-obsidian-900 border border-gold-500/30 text-ivory-100 text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-gold-500/20 mb-10 text-center">
                <p className="text-xs sm:text-sm font-serif italic text-gold-300 leading-relaxed">
                  "One life can change another. Then another. That is how cultures change. That is how something becomes contagious."
                </p>
              </div>

              <button
                onClick={handleCopyPledge}
                className="w-full py-5 rounded-full bg-gold-gradient text-obsidian-950 font-bold uppercase text-xs tracking-[0.25em] shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-3"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Commitment Copied!" : "Copy Your Pledge"}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
