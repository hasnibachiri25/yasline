import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Progression", href: "#progression" },
    { name: "The Cycle", href: "#cycle" },
    { name: "Pillars", href: "#pillars" },
    { name: "Economy", href: "#economy" },
    { name: "Gallery", href: "#gallery" },
    { name: "Success", href: "#success" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled 
        ? darkMode 
          ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-obsidian-800/80 shadow-2xl py-4' 
          : 'bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#E5DFD3] shadow-md py-4'
        : 'bg-transparent py-7'
    }`}>
      {/* Top Animated Scroll Progress Indicator Bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gold-gradient origin-left z-50" 
        style={{ scaleX: scrollYProgress }} 
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between">
        
        {/* LOGO ONLY - Direct floating transparent PNG without any background box */}
        <a href="#" className="flex items-center group relative">
          <img 
            src="/assets/logo-transparent.png" 
            alt="YASLINE Logo" 
            className="h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 relative py-1 group ${
                darkMode
                  ? 'text-ivory-300/80 hover:text-gold-300'
                  : 'text-[#2C2C36] hover:text-[#A37B1B]'
              }`}
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions & Theme Switcher */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full transition-all duration-300 border ${
              darkMode 
                ? 'bg-obsidian-900 border-obsidian-800 text-gold-400 hover:border-gold-500/40 hover:text-gold-300 shadow-inner' 
                : 'bg-[#EFEAE1] border-[#DCD5C5] text-[#1C1C24] hover:bg-[#E5DFD3] hover:text-gold-700 shadow-sm'
            }`}
            title="Toggle theme"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#start-small"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full bg-gold-gradient text-obsidian-950 hover:brightness-110 shadow-lg shadow-gold-500/15 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Begin</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              darkMode ? 'text-ivory-300 hover:text-gold-400' : 'text-[#1C1C24] hover:text-gold-600'
            }`}
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b transition-all duration-300 ${
              darkMode ? 'bg-obsidian-950 border-obsidian-800 text-ivory-100' : 'bg-[#FAF8F5] border-[#E5DFD3] text-[#1C1C24]'
            }`}
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-[0.2em] py-2 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#start-small"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center text-xs font-bold uppercase tracking-[0.2em] py-3.5 rounded-full bg-gold-gradient text-obsidian-950 shadow-md"
              >
                Begin Movement
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
