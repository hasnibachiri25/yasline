import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, BookOpen, Wrench, Heart, Shield, Sparkles, Link as LinkIcon, Key, 
  Coins, ShieldCheck 
} from 'lucide-react';
import { VALUES_LIST } from '../data/manifestoData';

interface EconomySectionProps {
  darkMode: boolean;
}

export const EconomySection: React.FC<EconomySectionProps> = ({ darkMode }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Clock": return <Clock className="w-5 h-5 text-gold-400" />;
      case "BookOpen": return <BookOpen className="w-5 h-5 text-gold-400" />;
      case "Wrench": return <Wrench className="w-5 h-5 text-gold-400" />;
      case "Heart": return <Heart className="w-5 h-5 text-gold-400" />;
      case "Shield": return <Shield className="w-5 h-5 text-gold-400" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-gold-400" />;
      case "Link": return <LinkIcon className="w-5 h-5 text-gold-400" />;
      case "Key": return <Key className="w-5 h-5 text-gold-400" />;
      default: return <Coins className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section id="economy" className={`py-32 lg:py-44 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-900 text-ivory-100' : 'bg-ivory-100 text-obsidian-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 block mb-4">
            NEW ECONOMIC PARADIGM
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-8">
            A Life-Positive Economy
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed mb-8 ${
            darkMode ? 'text-ivory-300' : 'text-obsidian-700'
          }`}>
            We believe an economy should support life, not consume it. Value exists long before money. Money is one measurement of value — not the definition of value.
          </p>
          <div className="p-6 rounded-2xl bg-gold-500/10 border border-gold-500/30 font-serif italic text-gold-300 text-base sm:text-lg leading-relaxed">
            "A meal can create connection. A conversation can change someone's direction. An empty room can become a place where someone starts building."
          </div>
        </div>

        {/* Deep Image Feature split: Value Beyond Money */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 rounded-3xl overflow-hidden mb-24 border border-gold-500/30 shadow-2xl bg-obsidian-850"
        >
          <div className="lg:col-span-6 relative min-h-[350px]">
            <img
              src="/assets/build.jpg"
              alt="Artisan hands crafting architecture with care"
              className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-obsidian-850" />
          </div>
          <div className="lg:col-span-6 p-10 sm:p-14 flex flex-col justify-center text-ivory-100">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-3 font-bold">
              Craftsmanship & Value
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
              "Not everything valuable needs to be sold. But everything valuable should move."
            </h3>
            <p className="text-base text-ivory-200 font-light leading-relaxed mb-6">
              Value can be time, knowledge, skill, care, trust, beauty, experience, connection, work, or opportunity. Money allows value to move and coordinate, but it is not the definition of value itself.
            </p>
          </div>
        </motion.div>

        {/* 8 Pillars of Human Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {VALUES_LIST.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-obsidian-850 border-obsidian-800 hover:border-gold-500/40 hover:shadow-2xl'
                  : 'bg-ivory-200 border-ivory-300 hover:border-gold-500/40 hover:shadow-xl'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                {getIcon(val.icon)}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{val.title}</h3>
              <p className={`text-sm font-light leading-relaxed ${
                darkMode ? 'text-ivory-300' : 'text-obsidian-700'
              }`}>
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* "LESS, BUT BETTER" Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 sm:p-20 rounded-3xl bg-gradient-to-r from-obsidian-850 via-obsidian-800 to-obsidian-850 border border-gold-500/40 shadow-2xl relative overflow-hidden text-ivory-100"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-400 block mb-4">
              CONSUMPTION WITH PURPOSE
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-ivory-50 mb-8">
              Less, But Better.
            </h3>
            <p className="text-lg sm:text-xl text-ivory-200 font-light leading-relaxed mb-10">
              We live in a world encouraging us to buy more things, more upgrades, more subscriptions, more noise. Worth Living asks: <span className="text-gold-300 font-medium">"Does this actually make life better?"</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "Buy for living, not for filling.",
                "Choose fewer, higher quality things.",
                "Use longer and repair when possible.",
                "Share when useful, make when you can.",
                "Leave room for what money cannot buy."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-obsidian-900/80 border border-gold-500/20">
                  <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-sm font-medium text-ivory-100">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
