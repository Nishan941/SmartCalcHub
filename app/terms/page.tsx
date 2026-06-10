import React from 'react';
import { Gavel, MessageCircleCode, RefreshCw } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="font-dm-sans py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12 relative">
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#110e1a]/30 to-transparent pointer-events-none -z-10" />

      <header className="space-y-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-black font-syne text-white tracking-tight">Terms & Conditions</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          The terms under which you can access and utilize SmartCalcHub’s calculators and reference guides.
        </p>
      </header>

      <div className="bg-[#13111a]/50 border border-[#2a273a] rounded-2xl p-6 sm:p-8 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
        
        <div className="p-4 bg-[#1f191b] border border-[#3e2c31] rounded-xl text-slate-300 flex items-center gap-3">
          <Gavel className="w-5 h-5 text-[#fbbf24] flex-shrink-0" />
          <span className="font-bold text-xs">Agreement: By accessing SmartCalcHub, you agree to comply with and be bound by the terms outlined below.</span>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-white font-syne">1. Intellectual Property & Permissible Use</h2>
          <p>
            The software calculators, custom formula algorithms, interactive CSS visual themes, layouts, branding, and long-form guide content are owned by SmartCalcHub. You are given a personal, non-transferable, and non-exclusive license to use these calculators for educational, personal, and preliminary planning tasks. You are strictly prohibited from scraped rendering or copying the code, styling, or documentation texts to launch competitor websites.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-white font-syne">2. Use at Your Own Risk</h2>
          <p>
            All information and tools provided by SmartCalcHub are provided &quot;as is&quot; and &quot;as available&quot; without any warranty of any kind, whether express or implied. Users assume entire liability for using our calculators. Under no event will SmartCalcHub, its developers, or its sponsors be hold liable for any physical state consequences, taxable income penalties, state legal support errors, construction planning mis-measurements, or grades outcomes stemming from the use of our calculations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-white font-syne">3. Accuracy Disclaimer</h2>
          <p>
            While our developers and algebraists work tirelessly to align calculating functions with state guidelines (e.g. child support), exam thresholds (e.g. AP score configurations), and engineering variables (e.g. board & batten spacings or volumes), variations, rounding discrepancies, or external updates can cause outputs to deviate. Always double check outputs with official systems or credentialed professionals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-white font-syne">4. Modifications to Services</h2>
          <p>
            We reserve the right to edit, improve, restrict, or suspend any of our 19 calculator tools or educational outlines at any general point without prior notification.
          </p>
        </section>

        <footer className="pt-4 border-t border-[#25223c] text-slate-500 text-xs">
          Effective Date: June 10, 2026. SmartCalcHub.
        </footer>

      </div>
    </div>
  );
}
