import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, MessageSquare, Plus, X, Send, Sparkles, Heart } from 'lucide-react';
import { QUESTION_THREADS, QuestionThread } from '../data/manifestoData';

interface PerspectivesQuestionsProps {
  darkMode: boolean;
}

export const PerspectivesQuestions: React.FC<PerspectivesQuestionsProps> = ({ darkMode }) => {
  const [threads, setThreads] = useState<QuestionThread[]>(QUESTION_THREADS);
  const [activeQuestionId, setActiveQuestionId] = useState<string>(QUESTION_THREADS[0].id);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [newAuthor, setNewAuthor] = useState<string>('');
  const [newRole, setNewRole] = useState<string>('');
  const [newTagline, setNewTagline] = useState<string>('');
  const [newQuote, setNewQuote] = useState<string>('');
  const [reflectionAppreciations, setReflectionAppreciations] = useState<Record<string, number>>({});

  const activeThread = threads.find(q => q.id === activeQuestionId) || threads[0];

  const handleAddPerspective = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuote || !newAuthor) return;

    const newPerspective = {
      author: newAuthor,
      role: newRole || 'Community Member',
      quote: newQuote,
      tagline: newTagline || 'Personal Perspective'
    };

    setThreads(prev => prev.map(t => {
      if (t.id === activeQuestionId) {
        return {
          ...t,
          perspectives: [...t.perspectives, newPerspective]
        };
      }
      return t;
    }));

    setNewQuote('');
    setNewAuthor('');
    setNewRole('');
    setNewTagline('');
    setIsShareModalOpen(false);
  };

  const handleAppreciate = (idx: number) => {
    const key = `${activeThread.id}-${idx}`;
    setReflectionAppreciations(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }));
  };

  return (
    <section id="questions" className={`py-32 lg:py-48 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-900 text-ivory-100' : 'bg-[#EFECE4] text-[#1C1C24]'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>04 & 05 — PERSPECTIVES & QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            Questions Worth Living With
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
          }`}>
            Instead of giving people packaged answers, WORTH LIVING provides better questions. Everyone sees life differently — <strong className="text-gold-500 underline decoration-gold-500/40">no single answer has to win</strong>.
          </p>
        </div>

        {/* Question Selector Pills */}
        <div className="flex flex-wrap gap-4 mb-16">
          {threads.map((thread) => {
            const isActive = thread.id === activeQuestionId;
            return (
              <button
                key={thread.id}
                onClick={() => setActiveQuestionId(thread.id)}
                className={`px-7 py-4 rounded-2xl text-sm font-serif font-bold transition-all duration-300 border flex items-center gap-3 ${
                  isActive
                    ? 'bg-gold-gradient text-obsidian-950 shadow-2xl scale-105 border-gold-500'
                    : darkMode
                      ? 'bg-obsidian-850 text-ivory-200 border-obsidian-800 hover:border-gold-500/30'
                      : 'bg-white text-[#1C1C24] border-[#E0DACE] hover:border-gold-400 shadow-sm'
                }`}
              >
                <span>"{thread.question}"</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-obsidian-950/20 text-obsidian-950' : 'bg-gold-500/10 text-gold-400'
                }`}>
                  {thread.perspectives.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Thread Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeThread.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`p-8 sm:p-14 rounded-3xl border shadow-2xl ${
              darkMode 
                ? 'bg-obsidian-850 border-gold-500/30 text-ivory-100' 
                : 'bg-white border-[#E0DACE] text-[#1C1C24]'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3 text-gold-500 text-xs font-bold uppercase tracking-widest">
                <MessageSquare className="w-4 h-4" />
                <span>Category: {activeThread.category}</span>
              </div>

              <span className="text-xs font-mono text-gold-400 opacity-80">
                {activeThread.perspectives.length} Lived Perspectives Shared
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-serif font-bold mb-12">
              "{activeThread.question}"
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeThread.perspectives.map((persp, idx) => {
                const key = `${activeThread.id}-${idx}`;
                const count = reflectionAppreciations[key] || 0;

                return (
                  <div 
                    key={idx} 
                    className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                      darkMode 
                        ? 'bg-obsidian-900 border-obsidian-800 hover:border-gold-500/40' 
                        : 'bg-[#FAF8F5] border-[#E5DFD3] hover:border-gold-500/40'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest block mb-3">
                        Perspective {idx + 1} • {persp.tagline}
                      </span>
                      <blockquote className="text-base font-serif italic mb-6 leading-relaxed">
                        "{persp.quote}"
                      </blockquote>
                    </div>

                    <div className="pt-4 border-t border-gold-500/10 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold block">{persp.author}</span>
                        <span className="text-gold-500 text-[10px]">{persp.role}</span>
                      </div>

                      <button
                        onClick={() => handleAppreciate(idx)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono transition-colors ${
                          count > 0 
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                            : 'bg-gold-500/10 text-gold-400 hover:bg-gold-500/20'
                        }`}
                        title="Appreciate this perspective"
                      >
                        <Heart className={`w-3 h-3 ${count > 0 ? 'fill-current text-rose-400' : ''}`} />
                        <span>{count}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-serif italic text-gold-300">
                "Not opinions designed to win arguments — perspectives designed to make people think."
              </p>
              <button 
                onClick={() => setIsShareModalOpen(true)}
                className="px-6 py-3 rounded-full bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest shrink-0 flex items-center gap-2 hover:brightness-110 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Share Your Perspective</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Share Perspective Drawer Modal */}
        <AnimatePresence>
          {isShareModalOpen && (
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
                  onClick={() => setIsShareModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full opacity-60 hover:opacity-100"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Contribute Perspective</span>
                </div>

                <h4 className="text-2xl font-serif font-bold mb-2">
                  "{activeThread.question}"
                </h4>
                <p className="text-xs opacity-70 mb-6">
                  Add your non-competing human perspective to this open question thread.
                </p>

                <form onSubmit={handleAddPerspective} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider mb-2">
                      Your Perspective Quote *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share how you see or live this question..."
                      value={newQuote}
                      onChange={(e) => setNewQuote(e.target.value)}
                      className={`w-full p-4 rounded-xl text-sm border outline-none ${
                        darkMode ? 'bg-obsidian-950 border-obsidian-800 text-ivory-100 focus:border-gold-500' : 'bg-[#FAF8F5] border-[#E5DFD3] text-[#1C1C24] focus:border-gold-500'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Layla Vance"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        className={`w-full p-3 rounded-xl text-xs border outline-none ${
                          darkMode ? 'bg-obsidian-950 border-obsidian-800 text-ivory-100 focus:border-gold-500' : 'bg-[#FAF8F5] border-[#E5DFD3] text-[#1C1C24] focus:border-gold-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider mb-1">
                        Role / Craft
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Craftsman, Parent"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className={`w-full p-3 rounded-xl text-xs border outline-none ${
                          darkMode ? 'bg-obsidian-950 border-obsidian-800 text-ivory-100 focus:border-gold-500' : 'bg-[#FAF8F5] border-[#E5DFD3] text-[#1C1C24] focus:border-gold-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider mb-1">
                      Perspective Tagline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Time as the true metric"
                      value={newTagline}
                      onChange={(e) => setNewTagline(e.target.value)}
                      className={`w-full p-3 rounded-xl text-xs border outline-none ${
                        darkMode ? 'bg-obsidian-950 border-obsidian-800 text-ivory-100 focus:border-gold-500' : 'bg-[#FAF8F5] border-[#E5DFD3] text-[#1C1C24] focus:border-gold-500'
                      }`}
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsShareModalOpen(false)}
                      className="px-5 py-2.5 rounded-full text-xs font-bold uppercase opacity-70 hover:opacity-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Perspective</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
