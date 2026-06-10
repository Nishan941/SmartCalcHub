import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Award, Lightbulb, BookOpen, HelpCircle, ChevronRight } from 'lucide-react';
import { toolsData } from '@/lib/tools-data';
import InteractiveCalculator from '@/components/InteractiveCalculator';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(toolsData).map((id) => ({ id }));
}

export default async function ToolPage({ params }: PageProps) {
  const resolvedParams = await params;
  const tool = toolsData[resolvedParams.id];

  if (!tool) {
    notFound();
  }

  return (
    <div className="font-dm-sans min-h-screen pb-16 relative">
      {/* Dynamic Header visual overlay in warm/cyan gradient */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition group py-1 px-3 bg-[#0f172a] border border-slate-800 rounded-lg shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition" />
            Back to Catalog
          </Link>
          <span className="text-xs text-slate-700">/</span>
          <span className="text-xs text-cyan-400 font-mono tracking-wider uppercase font-semibold">{tool.categoryLabel}</span>
        </div>

        {/* SECTION 1: H1 Title & SECTION 2: SEO optimized Short Introduction */}
        <header className="mb-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-syne text-white tracking-tight leading-tight">
            {tool.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {tool.shortIntro}
          </p>
        </header>

        {/* SECTION 3 & 4: CALCULATOR TOOL & RESULTS AREA */}
        <section className="mb-12">
          <InteractiveCalculator id={tool.id} />
        </section>

        {/* TWO-COLUMN CONTENT GRID DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-8 space-y-8">
            {/* SECTION 5: How to Use */}
            <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                How to Use This Tool
              </h2>
              <ol className="space-y-3 pl-1.5 text-slate-300 text-sm">
                {tool.howToUse.map((step, idx) => (
                  <li key={idx} className="flex gap-2.5 leading-relaxed">
                    <span className="font-mono text-cyan-400 font-bold">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* SECTION 6: Formula & Details */}
            <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2.5">
                <Award className="w-5 h-5 text-purple-400" />
                Mathematical Formula
              </h2>
              <div className="p-4 bg-[#020617] border border-slate-800 rounded-xl text-cyan-400 font-mono text-xs whitespace-pre-line leading-relaxed shadow-inner">
                {tool.formula}
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {tool.formulaDesc}
              </p>
            </section>

            {/* SECTION 7: Example Cases */}
            <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                Practical Example
              </h2>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/40 border border-slate-700/60 rounded-xl">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1 font-mono">Sample Inputs</span>
                    <span className="text-slate-300 text-xs leading-relaxed block">{tool.example.input}</span>
                  </div>
                  <div className="p-3 bg-slate-800/40 border border-slate-700/60 rounded-xl">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1 font-mono">Calculated Output</span>
                    <span className="text-xs font-bold text-cyan-400 block">{tool.example.output}</span>
                  </div>
                </div>
                <div className="p-4 bg-[#020617] border border-slate-800 rounded-xl text-xs text-slate-400 leading-relaxed shadow-inner">
                  <span className="block font-bold text-slate-200 mb-1">Step-by-step Explanation:</span>
                  {tool.example.explanation}
                </div>
              </div>
            </section>

            {/* SECTION 8: Benefits of the Tool */}
            <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2.5">
                <Award className="w-5 h-5 text-cyan-400" />
                Primary Benefits & Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                {tool.benefits.map((b, idx) => (
                  <li key={idx} className="flex gap-2 items-start leading-relaxed bg-slate-800/40 border border-slate-700/60 p-3 rounded-xl hover:bg-slate-800/60 transition-colors">
                    <span className="text-cyan-400 mt-0.5">✔</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* SECTION 9: Detailed Guide */}
            <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-purple-400" />
                Detailed Guide & Explanations
              </h2>
              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-4 whitespace-pre-line prose-invert">
                {tool.detailedGuide}
              </div>
            </section>

            {/* SECTION 10: Frequently Asked Questions */}
            <section className="space-y-4 bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2.5 mb-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 divide-y divide-slate-800">
                {tool.faqs.map((faq, idx) => (
                  <div key={idx} className={`pt-4 ${idx === 0 ? 'pt-0' : ''}`}>
                    <h4 className="text-sm font-bold text-white mb-1.5 flex items-start gap-1">
                      <span className="text-purple-400 font-mono">Q.</span>
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 pl-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 12: Conclusion */}
            <section className="bg-gradient-to-tr from-cyan-950/20 to-slate-900/40 border border-slate-800 rounded-2xl p-6 text-center">
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono mb-2">Summary Conclusion</h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
                {tool.conclusion}
              </p>
            </section>

          </div>

          {/* SIDEBAR */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Category summary card */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-center shadow-sm">
              <div className="text-3xl mb-2">{tool.icon}</div>
              <h3 className="font-syne font-bold text-sm text-white mb-1">{tool.name}</h3>
              <p className="text-[11px] text-slate-500 mb-2">General tool utility details</p>
              <span className="inline-block px-3 py-1 bg-[#020617] text-purple-400 border border-slate-800 text-[10px] font-mono rounded-lg">
                Category: {tool.categoryLabel}
              </span>
            </div>

            {/* SECTION 11: Related Tools */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 space-y-4 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Related Calculators</h4>
              <div className="space-y-2">
                {tool.relatedTools.map((rt) => (
                  <Link 
                    key={rt.id} 
                    href={`/tools/${rt.id}`}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#020617] border border-slate-800/60 text-xs text-slate-300 hover:text-white hover:border-cyan-500/55 transition group shadow-inner"
                  >
                    <span className="font-semibold block max-w-[180px] truncate">{rt.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 group-hover:text-cyan-400 transition" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Support SLA helper */}
            <div className="bg-gradient-to-tr from-cyan-950/20 to-slate-900/40 border border-cyan-500/10 p-4 rounded-xl text-xs text-slate-300 shadow-sm">
              <span className="block font-bold text-white mb-1">Precision Guarantee</span>
              All calculation logic in this tool undergoes regular alignment verification with standard industry criteria. Feedback or support? Contact our study helpdesk.
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
