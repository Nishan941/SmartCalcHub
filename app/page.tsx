'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Search, Sparkles, MoveRight, GraduationCap, DollarSign, Activity, Home, LayoutGrid } from 'lucide-react';
import { toolsData } from '@/lib/tools-data';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'edu' | 'finance' | 'health' | 'home' | 'math'>('all');

  // Load tools list from dataset
  const toolsList = useMemo(() => {
    return Object.values(toolsData);
  }, []);

  const filteredTools = useMemo(() => {
    return toolsList.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tool.shortIntro.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.id.replaceAll('-', ' ').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [toolsList, searchQuery, selectedCategory]);

  return (
    <div className="relative font-dm-sans min-h-screen">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-950/40 to-slate-900/40 text-cyan-400 border border-cyan-500/30 mb-6 shadow-cyan-500/5 shadow-lg select-none"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          ✦ 19 Free Online Calculator Tools
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-black tracking-tight font-syne text-white leading-[1.05] mb-6"
        >
          The Smartest <br/>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300 bg-clip-text text-transparent">
            Calculator Hub
          </span> <br/>
          on the Web
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10"
        >
          Fast, beautiful, and free online calculators for students, finance, health, and home improvement. Enjoy clean outputs, step-by-step formulas, and comprehensive guides.
        </motion.p>

        {/* HERO STATS */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-14 bg-[#0f172a]/50 border border-slate-800 rounded-2xl max-w-2xl mx-auto p-4 backdrop-blur-md"
        >
          <div className="text-center px-4">
            <div className="font-syne text-2xl font-bold text-cyan-400">20+</div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-1">Smart Tools</div>
          </div>
          <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />
          <div className="text-center px-4">
            <div className="font-syne text-2xl font-bold text-purple-400">100%</div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-1">Free & Fast</div>
          </div>
          <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />
          <div className="text-center px-4">
            <div className="font-syne text-2xl font-bold text-amber-400">Instant</div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-1">Accurate Math</div>
          </div>
        </motion.div>
      </section>

      {/* SEARCH BAR PANEL */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-xl mx-auto relative z-10 mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-2 bg-[#0f172a] border border-slate-800 rounded-2xl px-4 py-3 shadow-2xl focus-within:border-cyan-500/60 focus-within:ring-1 focus-within:ring-cyan-500/30 transition"
        >
          <Search className="w-5 h-5 text-slate-500 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Search a calculator (e.g. gpa, child support, ap)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm focus:outline-none text-white placeholder-slate-500 font-sans"
          />
        </motion.div>
      </section>

      {/* FILTER & TOOLS SECTION */}
      <section id="all-calculators" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-800 pb-4 mb-8">
          <div className="flex items-center gap-2.5 mb-4 md:mb-0">
            <LayoutGrid className="w-4 h-4 text-cyan-400" />
            <h2 className="font-syne text-lg font-bold text-white tracking-tight">Explore Categories</h2>
          </div>

          {/* Core Category Tabs */}
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer select-none ${selectedCategory === 'all' ? 'bg-cyan-500 text-slate-950 border-cyan-500' : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:text-white'}`}
            >
              All Tools
            </button>
            <button 
              onClick={() => setSelectedCategory('edu')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer select-none flex items-center gap-1 ${selectedCategory === 'edu' ? 'bg-purple-500 text-white border-purple-500' : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:text-white'}`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </button>
            <button 
              onClick={() => setSelectedCategory('finance')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer select-none flex items-center gap-1 ${selectedCategory === 'finance' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:text-white'}`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              Finance
            </button>
            <button 
              onClick={() => setSelectedCategory('health')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer select-none flex items-center gap-1 ${selectedCategory === 'health' ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:text-white'}`}
            >
              <Activity className="w-3.5 h-3.5" />
              Health
            </button>
            <button 
              onClick={() => setSelectedCategory('home')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer select-none flex items-center gap-1 ${selectedCategory === 'home' ? 'bg-blue-500 text-white border-blue-500' : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:text-white'}`}
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </button>
            <button 
              onClick={() => setSelectedCategory('math')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer select-none flex items-center gap-1 ${selectedCategory === 'math' ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:text-white'}`}
            >
              Math
            </button>
          </div>
        </div>

        {/* RESULTS GRID GRID */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool, index) => {
              // Custom category badges formatting
              let badgeColor = 'bg-cyan-950/40 text-cyan-400 border-cyan-500/20';
              if (tool.category === 'finance') badgeColor = 'bg-amber-950/40 text-amber-400 border-amber-500/20';
              if (tool.category === 'health' || tool.category === 'edu') badgeColor = 'bg-purple-950/40 text-purple-400 border-purple-500/20';
              if (tool.category === 'home') badgeColor = 'bg-blue-950/40 text-blue-400 border-blue-500/20';
              if (tool.category === 'math') badgeColor = 'bg-indigo-950/40 text-indigo-400 border-indigo-500/20';
              
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(0.2, index * 0.02) }}
                  whileHover={{ y: -4 }}
                  className="bg-[#0f172a] border border-slate-800 hover:border-cyan-500/30 px-5 py-6 rounded-2xl flex flex-col justify-between select-none relative group overflow-hidden transition shadow-lg"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#020617] border border-slate-800 flex items-center justify-center text-lg shadow-inner group-hover:bg-cyan-500/5 group-hover:border-cyan-500/30 transition">
                        {tool.icon}
                      </div>
                      <span className={`px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full border ${badgeColor}`}>
                        {tool.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-syne font-bold text-base text-white mb-2 leading-snug group-hover:text-cyan-400 transition">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </div>

                  <Link 
                    href={`/tools/${tool.id}`}
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-white font-semibold transition mt-2 self-start"
                  >
                    Use Calculator
                    <MoveRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0f172a]/50 border border-slate-800 rounded-2xl">
            <span className="text-3xl block mb-2 font-sans">🔍</span>
            <h4 className="text-sm font-bold text-white mb-1">No calculators match your search</h4>
            <p className="text-xs text-slate-500">Try checking your spelling or selecting &quot;All Tools&quot;</p>
          </div>
        )}
      </section>
    </div>
  );
}
