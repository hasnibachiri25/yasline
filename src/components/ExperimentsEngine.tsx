import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Users, Clock, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, X, Activity } from 'lucide-react';
import { LIFE_EXPERIMENTS } from '../data/manifestoData';

interface ExperimentsEngineProps {
  darkMode: boolean;
}

export const ExperimentsEngine: React.FC<ExperimentsEngineProps> = ({ darkMode }) => {
  const [selectedExpId, setSelectedExpId] = useState<string>(LIFE_EXPERIMENTS[0].id);
  const [joinedCohortExpIds, setJoinedCohortExpIds] = useState<Record<string, boolean>>({});
  const [checkedRules, setCheckedRules] = useState<Record<string, boolean>>({});
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);

  const activeExp = LIFE_EXPERIMENTS.find(e => e.id === selectedExpId) || LIFE_EXPERIMENTS[0];

  const handleJoinCohort = () => {
    setJoinedCohortExpIds(prev => ({ ...prev, [activeExp.id]: true }));
    setIsJoinModalOpen(true);
  };

  const toggleRuleCheck = (ruleIdx: number) => {
    const key = `${activeExp.id}-${ruleIdx}`;
    setCheckedRules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="experiments" className={`py-32 lg:py-48 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-[#FAF8F5] text-[#1C1C24]'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <FlaskConical className="w-4 h-4 text-gold-400" />
            <span>06 — LIFE EXPERIMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            Don't Just Discuss An Idea. Try It.
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
          }`}>
            Anyone can turn an idea into a structured life experiment. One person's experience becomes another person's starting point.
          </p>
        </div>

        {/* Experiment Selector List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {LIFE_EXPERIMENTS.map((exp) => {
            const isActive = exp.id === selectedExpId;
            const isJoined = joinedCohortExpIds[exp.id];

            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`p-8 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? 'border-gold-500 bg-gold-500/10 shadow-2xl scale-105'
                    : darkMode
                      ? 'bg-obsidian-900 border-obsidian-800 hover:border-gold-500/30'
                      : 'bg-white border-[#E5DFD3] hover:border-gold-400 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {exp.duration}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      {isJoined && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-gold-500 text-obsidian-950 uppercase">
                          Active Cohort
                        </span>
                      )}
                      <span className="text-[11px] font-mono opacity-60 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {exp.participantsCount + (isJoined ? 1 : 0)}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-gold-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-serif italic text-gold-400/90">{exp.tagline}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-500/20 text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center justify-between">
                  <span>Inspect Rules & Results</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Experiment Inspector */}
        <motion.div
          key={activeExp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-10 sm:p-16 rounded-3xl border shadow-2xl ${
            darkMode 
              ? 'bg-obsidian-900 border-gold-500/30 text-ivory-100' 
              : 'bg-white border-[#E0DACE] text-[#1C1C24]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Rules & Hypothesis */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-gold-400 font-bold uppercase tracking-widest">
                    Active Trial ({activeExp.duration})
                  </span>
                  <span className="text-xs font-mono text-ivory-400 opacity-60">
                    • {activeExp.participantsCount} Community Members Testing
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-gold-400">
                  {activeExp.title}
                </h3>
                <p className="text-base font-light opacity-90 mb-6 leading-relaxed">
                  <strong>Hypothesis under test:</strong> {activeExp.testing}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Trial Operating Rules:</span>
                </h4>
                {activeExp.rules.map((rule, idx) => {
                  const ruleKey = `${activeExp.id}-${idx}`;
                  const isChecked = checkedRules[ruleKey];

                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleRuleCheck(idx)}
                      className={`cursor-pointer flex items-start gap-3 p-4 rounded-xl border transition-all ${
                        isChecked 
                          ? 'bg-gold-500/20 border-gold-500/50 text-gold-300' 
                          : darkMode 
                            ? 'bg-obsidian-950/60 border-obsidian-800 hover:border-gold-500/30' 
                            : 'bg-[#FAF8F5] border-[#E5DFD3] hover:border-gold-400'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'text-gold-400 fill-gold-500/20' : 'text-gold-500/40'
                      }`} />
                      <span className="text-sm font-medium leading-relaxed">{rule}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Outcomes & Measurements */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-gold-500/5 border border-gold-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <Activity className="w-4 h-4" />
                  <span>Measured Community Outcomes</span>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gold-500/15">
                  <span className="text-xs opacity-70 block mb-1 font-mono uppercase tracking-wider">Measured Result:</span>
                  <p className="text-lg font-serif font-bold text-gold-300 mb-2">{activeExp.result}</p>
                  <span className="text-xs opacity-60 font-mono">Criteria: {activeExp.measuring}</span>
                </div>

                <div>
                  <span className="text-xs opacity-70 block mb-1 font-mono uppercase tracking-wider">Key Lesson Learned:</span>
                  <p className="text-sm font-light italic leading-relaxed text-ivory-200">
                    "{activeExp.learned}"
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gold-500/20">
                <button
                  onClick={handleJoinCohort}
                  className="w-full py-4 rounded-full bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2 shadow-xl"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {joinedCohortExpIds[activeExp.id] ? 'Cohort Active — View Tracker' : 'Join This 30-Day Cohort'}
                  </span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Join Experiment Modal Tracker */}
        <AnimatePresence>
          {isJoinModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`w-full max-w-lg p-8 rounded-3xl border shadow-2xl relative ${
                  darkMode ? 'bg-obsidian-900 border-gold-500/40 text-ivory-100' : 'bg-white border-[#E5DFD3] text-[#1C1C24]'
                }`}
              >
                <button
                  onClick={() => setIsJoinModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full opacity-60 hover:opacity-100"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Cohort Registration Confirmed</span>
                </div>

                <h4 className="text-2xl font-serif font-bold mb-3">
                  {activeExp.title}
                </h4>
                <p className="text-xs opacity-75 mb-6">
                  You are now registered for this {activeExp.duration} experiment cohort! Follow these steps to log your progress:
                </p>

                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Day 1–7: Establish baseline and observe default habits</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Day 8–21: Full compliance with trial operating rules</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Day 30: Reflect on measured outcomes and post your key lesson</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsJoinModalOpen(false)}
                  className="w-full py-3.5 rounded-full bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest"
                >
                  Got It — Return to Platform
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
