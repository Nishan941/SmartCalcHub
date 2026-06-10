import React from 'react';
import { AlertTriangle, TrendingUp, Compass, GraduationCap, Scale, Wrench } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="font-dm-sans py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12 relative">
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#110e1a]/30 to-transparent pointer-events-none -z-10" />

      <header className="space-y-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-black font-syne text-white tracking-tight">Disclaimer</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Important disclosures, liability limits, and professional advisory warnings regarding SmartCalcHub’s tools.
        </p>
      </header>

      <div className="bg-[#13111a]/55 border border-[#2a273a] rounded-2xl p-6 sm:p-8 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
        
        <div className="p-4 bg-[#231a10] border border-[#44311c] rounded-xl text-slate-200 flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-[#fbbf24] flex-shrink-0" />
          <span className="font-bold text-xs uppercase tracking-wider text-[#fbbf24] font-mono">Not Professional Advice</span>
        </div>

        <section className="space-y-4">
          <p>
            The material and calculator widgets provided within **SmartCalcHub** are created for educational, illustrative, and preliminary evaluation purposes only. They do not constitute official financial, legal, educational, statistical, athletic, architectural, or home renovation advice.
          </p>
        </section>

        {/* Detailed Category Warnings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-[#171424] border border-[#2a273e] rounded-xl space-y-2">
            <h3 className="font-syne font-bold text-white text-xs flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#fbbf24]" />
              Finance (Capital Gains Tax)
            </h3>
            <p className="text-[11px] text-slate-400 leading-normal">
              Capital gains tax taxations vary infinitely based on specific filing statuses, exemptions, cost adjustments, state levies, and current annual changes. Our mathematical estimates must not be used to calculate final tax liabilities. Always consult a Certified Public Accountant (CPA) or the IRS.
            </p>
          </div>

          <div className="p-4 bg-[#171424] border border-[#2a273e] rounded-xl space-y-2">
            <h3 className="font-syne font-bold text-white text-xs flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#6ee7b7]" />
              Legal (State Child Support)
            </h3>
            <p className="text-[11px] text-slate-400 leading-normal">
              Our Illinois and Indiana child support calculator estimations use standard state guidelines. However, courts maintain final judicial authority. Actual orders will vary based on complex child-custody, medical, and net income deductions. Consult a qualified family law attorney.
            </p>
          </div>

          <div className="p-4 bg-[#171424] border border-[#2a273e] rounded-xl space-y-2">
            <h3 className="font-syne font-bold text-white text-xs flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#a78bfa]" />
              Academics (GPA & AP Curves)
            </h3>
            <p className="text-[11px] text-slate-400 leading-normal">
              College board AP grades curves modify annually based on collective test outcomes. Our AP, GPA, and graduation percentage converters reflect historical benchmark tables and may not perfectly sync with your custom district grading metrics.
            </p>
          </div>

          <div className="p-4 bg-[#171424] border border-[#2a273e] rounded-xl space-y-2">
            <h3 className="font-syne font-bold text-white text-xs flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-[#fbbf24]" />
              Renovation (Board & Batten, Trees, Sphere)
            </h3>
            <p className="text-[11px] text-slate-400 leading-normal">
              Physical materials, wood thicknesses, wall overlaps, tree stump locations, and local wood charges vary widely. Always measure twice, verify structural loads, and secure physical carpenter or removal quotes before purchasing supplies.
            </p>
          </div>
        </div>

        <section className="space-y-3 pt-4 border-t border-[#25223c]">
          <h2 className="text-sm font-bold text-white font-syne">Limit of Liability</h2>
          <p>
            By utilizing these calculations, you release SmartCalcHub, its founders, and affiliates from any and all damages, claims, or losses arising from calculation inaccuracies, layout mistakes, variable changes, or data misinterpretations.
          </p>
        </section>

        <footer className="text-slate-500 font-mono text-[10px]">
          Last Reviewed: June 10, 2026. SmartCalcHub Disclosures.
        </footer>

      </div>
    </div>
  );
}
