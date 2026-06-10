import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="font-dm-sans py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12 relative">
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#110e1a]/30 to-transparent pointer-events-none -z-10" />

      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black font-syne text-white tracking-tight">About SmartCalcHub</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Discover our development philosophy, mathematical accuracy standard, and our commitment to providing seamless, 100% free calculations.
        </p>
      </header>

      <section className="bg-[#13111a]/50 border border-[#2a273a]/60 rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold font-syne text-white">Our Mission</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          At SmartCalcHub, we believe that advanced calculations should be easy, clean, and accessible to everyone. Whether you are a high school student tracking your cumulative AP exam scores, an investor estimating your capital gains tax liabilities, a fitness enthusiast converting walking steps into distance, or a homeowner plotting board and batten wall layouts, our suite of 19 specialized tools is designed to deliver fast, instant, and reliable outcomes.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          We combine interactive, responsive calculation forms with fully documented formulas, practical examples, and extensive SEO-optimized guides. This ensures you can verify the logic behind every math statement and apply them with absolute confidence.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#13111a]/50 border border-[#2a273a]/60 rounded-xl p-5 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#271e3b] border border-[#3f315e] flex items-center justify-center text-[#a78bfa]">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-syne font-bold text-sm text-white">Mathematical Rigor</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All our calculators are built on verified mathematical and legal guidelines—such as standard US military tape algorithms, State of Illinois and Indiana Child Support tables, and College Board curves.
          </p>
        </div>

        <div className="bg-[#13111a]/50 border border-[#2a273a]/60 rounded-xl p-5 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#142d23] border border-[#22553f] flex items-center justify-center text-[#6ee7b7]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-syne font-bold text-sm text-white">Privacy First</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Calculations are executed entirely on your local client browser. We never save, log, or track your physical statistics, children variables, or private financial statements. Your data remains yours.
          </p>
        </div>

        <div className="bg-[#13111a]/50 border border-[#2a273a]/60 rounded-xl p-5 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#3d2f19] border border-[#5d4a2b] flex items-center justify-center text-[#fbbf24]">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-syne font-bold text-sm text-white">Zero Advertisements</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ditch the crowded side-ads, annoying popups, and paid registration wall blockers found on other tools websites. SmartCalcHub is, and will remain, 100% free and completely uninterrupted.
          </p>
        </div>

        <div className="bg-[#13111a]/50 border border-[#2a273a]/60 rounded-xl p-5 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#291c3d] border border-[#3f2b5c] flex items-center justify-center text-[#a78bfa]">
            <Eye className="w-5 h-5" />
          </div>
          <h3 className="font-syne font-bold text-sm text-white">Universal Accessibility</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Built using standard fully responsive and retina-ready layout structures. Interact with our full calculator lineup seamlessly from your laptop, mobile phone, or high-definition tablet.
          </p>
        </div>
      </div>
    </div>
  );
}
