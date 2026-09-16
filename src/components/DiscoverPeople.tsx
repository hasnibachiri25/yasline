import React from 'react';
import { motion } from 'framer-motion';
import { Users, Hammer, Compass, BookOpen, Lightbulb, MapPin } from 'lucide-react';
import { PROFILES } from '../data/manifestoData';

interface DiscoverPeopleProps {
  darkMode: boolean;
}

export const DiscoverPeople: React.FC<DiscoverPeopleProps> = ({ darkMode }) => {
  return (
    <section className={`py-32 lg:py-48 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-900 text-ivory-100' : 'bg-[#EFECE4] text-[#1C1C24]'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <Users className="w-4 h-4" />
            <span>11 — DISCOVER PEOPLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            Find People Through What They Are Building
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
          }`}>
            Not through follower counts or superficial popularity metrics. People connect through ideas, builds, and shared interests.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILES.map((profile, idx) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border shadow-xl flex flex-col justify-between ${
                darkMode 
                  ? 'bg-obsidian-850 border-obsidian-800 text-ivory-100' 
                  : 'bg-white border-[#E0DACE] text-[#1C1C24]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold-500/20">
                  <div>
                    <h3 className="text-2xl font-serif font-bold">{profile.name}</h3>
                    <p className="text-xs font-mono text-gold-500">{profile.role}</p>
                  </div>
                  <span className="text-xs font-mono opacity-70 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {profile.location}
                  </span>
                </div>

                <div className="space-y-4 text-xs leading-relaxed mb-6">
                  <div>
                    <span className="font-bold uppercase tracking-widest text-gold-500 block mb-1 flex items-center gap-1.5">
                      <Hammer className="w-3.5 h-3.5" /> What I'm Building:
                    </span>
                    <p className="opacity-90">{profile.building}</p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-widest text-gold-500 block mb-1 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" /> What I Believe:
                    </span>
                    <p className="opacity-90">{profile.believes}</p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-widest text-gold-500 block mb-1 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" /> What I'm Exploring:
                    </span>
                    <p className="opacity-90">{profile.exploring}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gold-500/10 text-right">
                <button className="px-5 py-2 rounded-full bg-gold-500/10 text-gold-400 font-bold text-[11px] uppercase tracking-widest hover:bg-gold-500 hover:text-obsidian-950 transition-colors">
                  Connect & Build Together
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
