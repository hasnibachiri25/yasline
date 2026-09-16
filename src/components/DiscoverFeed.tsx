import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Hammer, Lightbulb, MessageSquare, HelpCircle, FlaskConical, Compass, Layers, ArrowUpRight, Search, Bookmark, Heart } from 'lucide-react';
import { DiscoverItem } from '../data/manifestoData';

interface DiscoverFeedProps {
  items: DiscoverItem[];
  darkMode: boolean;
  onInspectBuild: (item: DiscoverItem) => void;
}

export const DiscoverFeed: React.FC<DiscoverFeedProps> = ({ items, darkMode, onInspectBuild }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikeCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const filterTabs = [
    { id: 'all', label: 'All Contributions', icon: <Layers className="w-4 h-4" /> },
    { id: 'build', label: 'Builds', icon: <Hammer className="w-4 h-4" /> },
    { id: 'idea', label: 'Ideas', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'perspective', label: 'Perspectives', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'question', label: 'Questions', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'experiment', label: 'Experiments', icon: <FlaskConical className="w-4 h-4" /> },
    { id: 'project', label: 'Projects', icon: <Compass className="w-4 h-4" /> },
  ];

  const filteredItems = items.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'build': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'experiment': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'perspective': return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'question': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'project': return 'bg-gold-500/20 text-gold-400 border-gold-500/30';
      default: return 'bg-gold-500/10 text-gold-400 border-gold-500/20';
    }
  };

  return (
    <section id="discover" className={`py-32 lg:py-48 relative transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-[#FAF8F5] text-[#1C1C24]'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <Sparkles className="w-4 h-4" />
            <span>01 — DISCOVER POSSIBILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            Explore How People Are Building Their Lives
          </h2>
          <p className={`text-base sm:text-xl font-light leading-relaxed ${
            darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
          }`}>
            The main space of WORTH LIVING. Instead of an endless algorithmic social feed, discover things created with real meaning and human intent.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12">
          {/* Dynamic Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              const count = tab.id === 'all' 
                ? items.length 
                : items.filter(i => i.type === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-gradient text-obsidian-950 shadow-xl shadow-gold-500/20 scale-105'
                      : darkMode
                        ? 'bg-obsidian-900 text-ivory-300 hover:bg-obsidian-850 hover:text-gold-300 border border-obsidian-800'
                        : 'bg-white text-[#2C2C36] hover:bg-ivory-200 border border-[#E5DFD3] shadow-sm'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-obsidian-950/20 text-obsidian-950 font-bold' 
                      : darkMode ? 'bg-obsidian-800 text-gold-400' : 'bg-ivory-200 text-[#1C1C24]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative shrink-0 min-w-[280px]">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-50 text-gold-400" />
            <input
              type="text"
              placeholder="Search builds, ideas, rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-full text-xs font-medium border transition-all outline-none ${
                darkMode
                  ? 'bg-obsidian-900 border-obsidian-800 focus:border-gold-500 text-ivory-100 placeholder-ivory-500'
                  : 'bg-white border-[#E5DFD3] focus:border-gold-500 text-[#1C1C24] placeholder-gray-400 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Filtered Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isSaved = savedItems[item.id];
              const likes = (likeCounts[item.id] || 0);

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onInspectBuild(item)}
                  className={`cursor-pointer flex flex-col justify-between p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-1.5 group ${
                    darkMode
                      ? 'bg-obsidian-900 border-obsidian-800 hover:border-gold-500/40 shadow-xl'
                      : 'bg-white border-[#E5DFD3] hover:border-gold-500/50 shadow-md hover:shadow-xl'
                  }`}
                >
                  <div>
                    {/* Item Image if available */}
                    {item.image && (
                      <div className="h-52 rounded-2xl overflow-hidden mb-6 relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                        
                        <button
                          onClick={(e) => toggleBookmark(item.id, e)}
                          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md border transition-all ${
                            isSaved 
                              ? 'bg-gold-500 text-obsidian-950 border-gold-400 scale-110' 
                              : 'bg-obsidian-950/60 text-ivory-200 border-white/20 hover:text-gold-400'
                          }`}
                          title="Bookmark Contribution"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${getBadgeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <span className="text-xs font-mono opacity-60">{item.author.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 group-hover:text-gold-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className={`text-sm font-light leading-relaxed mb-6 ${
                      darkMode ? 'text-ivory-300' : 'text-[#3D3D4E]'
                    }`}>
                      {item.summary}
                    </p>
                  </div>

                  {/* Footer Author & Actions */}
                  <div className="pt-6 border-t border-gold-500/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 font-mono font-bold text-xs flex items-center justify-center">
                        {item.author.avatar}
                      </div>
                      <div>
                        <p className="text-xs font-bold">{item.author.name}</p>
                        <p className="text-[10px] opacity-60">{item.author.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
                          likes > 0 
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                            : 'bg-gold-500/10 text-gold-400 hover:bg-gold-500/20'
                        }`}
                        title="Appreciate contribution"
                      >
                        <Heart className={`w-3.5 h-3.5 ${likes > 0 ? 'fill-current text-rose-400' : ''}`} />
                        <span>{likes}</span>
                      </button>

                      <div className="p-2.5 rounded-full bg-gold-500/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 opacity-60">
            <p className="text-lg font-serif">No contributions found matching your search.</p>
          </div>
        )}

      </div>
    </section>
  );
};
