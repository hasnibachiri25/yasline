import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Hammer, HelpCircle, DollarSign, Lightbulb, Share2, CheckCircle2 } from 'lucide-react';
import { DiscoverItem } from '../data/manifestoData';

interface BuildInspectorProps {
  item: DiscoverItem | null;
  onClose: () => void;
  darkMode: boolean;
}

export const BuildInspector: React.FC<BuildInspectorProps> = ({ item, onClose, darkMode }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4 }}
          className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-8 sm:p-12 relative ${
            darkMode 
              ? 'bg-obsidian-900 border-gold-500/40 text-ivory-100' 
              : 'bg-white border-[#E5DFD3] text-[#1C1C24]'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-gold-500/10 text-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-500 block mb-2">
              02 — BUILD PROCESS INSPECTOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">{item.title}</h2>
            
            <div className="flex items-center gap-3 text-xs opacity-70">
              <span className="font-semibold">{item.author.name}</span>
              <span>•</span>
              <span>{item.author.role}</span>
              <span>•</span>
              <span>{item.author.location}</span>
            </div>
          </div>

          {/* Image if present */}
          {item.image && (
            <div className="h-64 rounded-2xl overflow-hidden mb-8">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Details Breakdown */}
          <div className="space-y-6 text-sm leading-relaxed mb-8">
            {item.details?.why && (
              <div className="p-5 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gold-500 mb-1 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Why I'm Building It
                </h4>
                <p>{item.details.why}</p>
              </div>
            )}

            {item.details?.how && (
              <div className="p-5 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gold-500 mb-1 flex items-center gap-2">
                  <Hammer className="w-4 h-4" /> How I Built It
                </h4>
                <p>{item.details.how}</p>
              </div>
            )}

            {item.details?.cost && (
              <div className="p-5 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gold-500 mb-1 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Total Cost & Resources
                </h4>
                <p>{item.details.cost}</p>
              </div>
            )}

            {item.details?.learned && (
              <div className="p-5 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gold-500 mb-1 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> Failures & Lessons Learned
                </h4>
                <p>{item.details.learned}</p>
              </div>
            )}

            {item.details?.rebuildNotice && (
              <div className="p-6 rounded-2xl bg-gold-gradient text-obsidian-950 font-medium">
                <h4 className="font-bold text-xs uppercase tracking-widest mb-1 flex items-center gap-2 text-obsidian-900">
                  <Share2 className="w-4 h-4" /> What could someone else build from this?
                </h4>
                <p className="text-base font-serif italic">{item.details.rebuildNotice}</p>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:brightness-110"
            >
              Close Inspector
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
