import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Hammer, Lightbulb, MessageSquare, HelpCircle, FlaskConical, Compass, Check, Image as ImageIcon, Upload } from 'lucide-react';
import { DiscoverItem } from '../data/manifestoData';

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onAddContribution: (newItem: DiscoverItem) => void;
}

export const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose, darkMode, onAddContribution }) => {
  const [selectedType, setSelectedType] = useState<DiscoverItem['type']>('build');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [authorName, setAuthorName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const presetImages = [
    { label: 'Craft & Wood', path: '/assets/build.jpg' },
    { label: 'Home Sanctuary', path: '/assets/home.jpg' },
    { label: 'Community Dining', path: '/assets/community.jpg' },
    { label: 'Nature & Forest', path: '/assets/cycle.jpg' },
    { label: 'Life Experience', path: '/assets/experience.jpg' },
  ];

  const contributionTypes: { id: DiscoverItem['type']; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'build', label: 'Build Something', icon: <Hammer className="w-4 h-4" />, desc: 'A house, garden, routine, business, product, or tradition.' },
    { id: 'idea', label: 'Share an Idea', icon: <Lightbulb className="w-4 h-4" />, desc: 'A thought that could become a living reality.' },
    { id: 'perspective', label: 'Share a Perspective', icon: <MessageSquare className="w-4 h-4" />, desc: 'A way of seeing life designed to make people think.' },
    { id: 'question', label: 'Ask a Question', icon: <HelpCircle className="w-4 h-4" />, desc: 'A deep question worth living with.' },
    { id: 'experiment', label: 'Start an Experiment', icon: <FlaskConical className="w-4 h-4" />, desc: 'Turn an idea into a structured 30-day trial.' },
    { id: 'project', label: 'Start a Project', icon: <Compass className="w-4 h-4" />, desc: 'Something better built together with others.' }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalImage = imageUrl || '/assets/build.jpg';

    const newItem: DiscoverItem = {
      id: `${selectedType}-${Date.now()}`,
      type: selectedType,
      title: title,
      image: finalImage,
      author: {
        name: authorName || 'Community Life Builder',
        role: 'Explorer & Creator',
        avatar: (authorName ? authorName.substring(0, 2) : 'CL').toUpperCase(),
        location: location || 'Global'
      },
      summary: description,
      details: {
        why: 'To explore a better way of living.',
        how: 'Built step by step with care.',
        rebuildNotice: 'Anyone can build upon this blueprint.'
      },
      perspectivesCount: 1,
      experimentsCount: 1
    };

    onAddContribution(newItem);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setTitle('');
      setDescription('');
      setAuthorName('');
      setLocation('');
      setImageUrl('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-8 sm:p-12 relative ${
            darkMode ? 'bg-obsidian-900 border-gold-500/40 text-ivory-100' : 'bg-white border-[#E0DACE] text-[#1C1C24]'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-gold-500/10 text-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-500 block mb-2">
                  10 — CONTRIBUTE TO WORTH LIVING
                </span>
                <h2 className="text-3xl font-serif font-bold mb-2">What do you want to contribute?</h2>
                <p className="text-xs font-light opacity-70">
                  The platform doesn't ask "What do you want to post?" It asks how you want to enrich human living.
                </p>
              </div>

              {/* Contribution Types Selector Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {contributionTypes.map((type) => {
                  const isSelected = type.id === selectedType;
                  return (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'border-gold-500 bg-gold-500/15 text-gold-300 font-bold'
                          : darkMode
                            ? 'border-obsidian-800 bg-obsidian-850 opacity-70 hover:opacity-100'
                            : 'border-[#E0DACE] bg-[#FAF8F5] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {type.icon}
                        <span className="text-sm font-serif font-bold">{type.label}</span>
                      </div>
                      <p className="text-[11px] font-light opacity-80">{type.desc}</p>
                    </button>
                  );
                })}
              </div>

              {/* Form Inputs */}
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-gold-500 mb-2">
                      Your Name / Handle
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tariq Mansoor"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-obsidian-950 border border-gold-500/30 text-ivory-100 text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-gold-500 mb-2">
                      Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Muscat, Lisbon, Algiers"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-obsidian-950 border border-gold-500/30 text-ivory-100 text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gold-500 mb-2">
                    Title / Contribution Headline
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Built an energy-independent timber studio..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl bg-obsidian-950 border border-gold-500/30 text-ivory-100 text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gold-500 mb-2">
                    Description & Process Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="What are you building, testing, or asking? Include cost, lessons learned, and why..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl bg-obsidian-950 border border-gold-500/30 text-ivory-100 text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                {/* Cover Image Upload / Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gold-500 mb-2 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-gold-400" />
                    <span>Attach Cover Photo / Blueprint Image</span>
                  </label>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <label className="px-5 py-3 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        <span>Upload Photo File</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <span className="text-xs opacity-50 font-mono">OR paste Image URL:</span>
                    </div>

                    <input
                      type="text"
                      placeholder="e.g. https://images.unsplash.com/... or /assets/build.jpg"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="w-full px-5 py-3 rounded-xl bg-obsidian-950 border border-gold-500/30 text-ivory-100 text-xs focus:outline-none focus:border-gold-400"
                    />

                    {/* Quick Preset Selector */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-[10px] font-mono opacity-60 self-center">Or pick preset:</span>
                      {presetImages.map((img) => (
                        <button
                          type="button"
                          key={img.path}
                          onClick={() => setImageUrl(img.path)}
                          className={`text-[10px] font-mono px-3 py-1.5 rounded-full border transition-all ${
                            imageUrl === img.path
                              ? 'bg-gold-500 text-obsidian-950 font-bold border-gold-400'
                              : 'bg-obsidian-950 border-gold-500/20 text-gold-400 hover:border-gold-400'
                          }`}
                        >
                          {img.label}
                        </button>
                      ))}
                    </div>

                    {/* Image Preview */}
                    {imageUrl && (
                      <div className="h-36 rounded-xl overflow-hidden relative border border-gold-500/30 mt-3">
                        <img
                          src={imageUrl}
                          alt="Cover Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setImageUrl('')}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-obsidian-950/80 text-ivory-100 hover:text-gold-400"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-full border border-gold-500/30 text-xs uppercase tracking-widest hover:bg-gold-500/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg"
                >
                  Publish Contribution
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-3">Contribution Published!</h3>
              <p className="text-sm font-light opacity-80 max-w-md mx-auto">
                Thank you for enriching WORTH LIVING. Your build has been added to the collective human archive.
              </p>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
