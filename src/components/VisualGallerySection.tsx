import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, ArrowRight, ArrowLeft, Eye } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  quote: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Sanctuary of Peace",
    category: "HOME",
    quote: "A home should be a place to rest, to belong, and to create without pressure.",
    image: "/assets/home.jpg"
  },
  {
    id: 2,
    title: "Shared Evening Meals",
    category: "COMMUNITY",
    quote: "People need people. True connection begins when we gather around a table.",
    image: "/assets/community.jpg"
  },
  {
    id: 3,
    title: "Dawn on the Horizon",
    category: "EXPERIENCES",
    quote: "Don't just consume life. Step outside and truly experience it.",
    image: "/assets/experience.jpg"
  },
  {
    id: 4,
    title: "Dedicated Craftsmanship",
    category: "BUILD",
    quote: "Give potential somewhere to begin. Build something that outlasts the noise.",
    image: "/assets/build.jpg"
  },
  {
    id: 5,
    title: "The Spirit of Giving",
    category: "THE CYCLE",
    quote: "Not everyone can give the same thing. Everyone can give something.",
    image: "/assets/cycle.jpg"
  },
  {
    id: 6,
    title: "Architecture in Nature",
    category: "SANCTUARY",
    quote: "Building life in harmony with nature and human purpose.",
    image: "/assets/hero.jpg"
  }
];

interface VisualGallerySectionProps {
  darkMode: boolean;
}

export const VisualGallerySection: React.FC<VisualGallerySectionProps> = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const current = GALLERY_ITEMS[activeIndex];

  return (
    <section className={`py-40 lg:py-56 relative overflow-hidden transition-colors duration-700 ${
      darkMode ? 'bg-obsidian-950 text-ivory-100' : 'bg-ivory-200 text-obsidian-900'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Header with Spacious Padding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              <Camera className="w-4 h-4" />
              <span>VISUAL EXPERIENCE GALLERY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
              Life In Pictures
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className={`p-4 rounded-full border transition-all duration-300 ${
                darkMode ? 'border-obsidian-800 bg-obsidian-900 hover:border-gold-500/50 hover:text-gold-400' : 'border-ivory-300 bg-ivory-100 hover:border-gold-500'
              }`}
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-gold-400 font-bold px-2">
              0{activeIndex + 1} / 0{GALLERY_ITEMS.length}
            </span>
            <button
              onClick={nextSlide}
              className={`p-4 rounded-full border transition-all duration-300 ${
                darkMode ? 'border-obsidian-800 bg-obsidian-900 hover:border-gold-500/50 hover:text-gold-400' : 'border-ivory-300 bg-ivory-100 hover:border-gold-500'
              }`}
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Showcase Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-obsidian-900"
          >
            {/* Image display */}
            <div className="lg:col-span-8 relative min-h-[400px] sm:min-h-[550px] overflow-hidden group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-obsidian-900" />
            </div>

            {/* Quote details */}
            <div className="lg:col-span-4 p-10 sm:p-14 flex flex-col justify-between text-ivory-100">
              <div>
                <span className="text-xs font-mono text-gold-400 font-bold uppercase tracking-[0.25em] block mb-4">
                  {current.category}
                </span>
                <h3 className="text-3xl font-serif font-bold mb-6">
                  {current.title}
                </h3>
                <p className="text-lg font-serif italic text-gold-200 leading-relaxed mb-8">
                  "{current.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-gold-500/20 flex items-center justify-between">
                <span className="text-xs font-light text-ivory-300">Worth Living Archive</span>
                <Eye className="w-5 h-5 text-gold-400" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 relative ${
                activeIndex === idx ? 'border-gold-500 scale-105 shadow-xl' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
