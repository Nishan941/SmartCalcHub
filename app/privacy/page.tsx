import React from 'react';
import { ShieldCheck, Database, EyeOff, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="font-dm-sans py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12 relative">
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#110e1a]/30 to-transparent pointer-events-none -z-10" />

      <header className="space-y-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-black font-syne text-white tracking-tight">Privacy Policy</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          At SmartCalcHub, we respect your privacy. This policy explains what information we collect and how we protect users.
        </p>
      </header>

      <div className="bg-[#13111a]/50 border border-[#2a273a] rounded-2xl p-6 sm:p-8 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
        
        {/* Visual overview badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-[#25223c]">
          <div className="flex items-center gap-2.5 bg-[#171424] px-4 py-3 rounded-xl border border-[#2b2742]">
            <Database className="w-5 h-5 text-[#6ee7b7]" />
            <div>
              <span className="block text-white font-bold text-xs">Zero Databases</span>
              <span className="text-[10px] text-slate-400">Inputs never saved</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 bg-[#171424] px-4 py-3 rounded-xl border border-[#2b2742]">
            <EyeOff className="w-5 h-5 text-[#a78bfa]" />
            <div>
              <span className="block text-white font-bold text-xs">Client-Side Run</span>
              <span className="text-[10px] text-slate-400">Local evaluation only</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-[#171424] px-4 py-3 rounded-xl border border-[#2b2742]">
            <ShieldCheck className="w-5 h-5 text-[#fbbf24]" />
            <div>
              <span className="block text-white font-bold text-xs">No Registration</span>
              <span className="text-[10px] text-slate-400">Browse completely free</span>
            </div>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-white font-syne flex items-center gap-2">
            <span className="text-[#a78bfa] font-mono">1.</span> Information We Do NOT Collect
          </h2>
          <p>
            When you use high school GPA calculator, capital gains tax calculator, ap gov scores, illinois child support, or army weight measurements, all variables and mathematical formulas are evaluated locally on your device within your browser framework. We do not transmit, log, store, or communicate your input fields or results to any background database server.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-white font-syne flex items-center gap-2">
            <span className="text-[#6ee7b7] font-mono">2.</span> Cookies and Web Analytics
          </h2>
          <p>
            SmartCalcHub may use standard, lightweight client variables or privacy-focused tracking tools (like cookie-less analytics metrics) to monitor pages visited and tool popularity. These analytics are 100% anonymous, do not contain personal details, and are used solely to improve our user experience and calculator utility pages. You can disable cookies inside your browser settings at any point without impacting your access to our calculators.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-white font-syne flex items-center gap-2">
            <span className="text-[#fbbf24] font-mono">3.</span> Financial and Health Calculations
          </h2>
          <p>
            Specialized tool widgets, such as the Capital Gains Tax Calculator or child support configurations, require mock or actual private variables (e.g., annual income, initial cost, tax rates). We reiterate that these form submissions never touch physical drives or logging software. Results are processed in temporary dynamic React memory context and cleared on page refresh or browser close.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-white font-syne flex items-center gap-2">
            <span className="text-[#a78bfa] font-mono">4.</span> External outbound links
          </h2>
          <p>
            Our calculators contain citations to external portals (such as the IRS, College Board, state legal tables, or military agencies) to reference formulas and historical standards. We have no responsibility or control over the privacy structures of external platforms. Check the target domains policy before sending personal info there.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-[#25223c]">
          <p className="text-slate-400 text-xs">
            Last Updated: June 10, 2026. For questions related to this privacy statement, contact support@smartcalchub.com.
          </p>
        </section>

      </div>
    </div>
  );
}
