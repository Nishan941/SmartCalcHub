import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Sparkles, MapPin } from 'lucide-react';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SmartCalcHub - 19 Free Online Calculator Tools',
  description: 'Access 19+ highly accurate and free online calculator tools for education, finance, health, statistics, coding, and home improvement. Mobile-friendly and fast, with instant results.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
     
       <body suppressHydrationWarning className="bg-[#020617] text-slate-200 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0T5XVKCMS1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0T5XVKCMS1');
</script>
        {/* Glowing visual background mesh in Cyan & Purple accents */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_10%,rgba(6,182,212,0.06)_0%,transparent_60%)]" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(168,85,247,0.06)_0%,transparent_60%)]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.02)_0%,transparent_70%)] blur-[80px]" />
        </div>

        {/* HEADER / NAVIGATION (slate-900 border-slate-800) */}
        <header className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-slate-950 font-syne shadow-md shadow-cyan-500/10">S</div>
              <span className="font-syne font-extrabold text-xl tracking-tight text-white">
                SmartCalc<span className="text-cyan-400">Hub</span>
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 px-3 py-1.5 rounded-lg transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 px-3 py-1.5 rounded-lg transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 px-3 py-1.5 rounded-lg transition-colors">
                Contact
              </Link>
              <Link href="/disclaimer" className="text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 px-3 py-1.5 rounded-lg transition-colors">
                Disclaimer
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link 
                href="/#all-calculators" 
                className="inline-flex items-center justify-center px-4 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20 transition cursor-pointer"
              >
                Explore 19 Tools
              </Link>
            </div>
          </nav>
        </header>

        {/* PRIMARY CONTAINER */}
        <main className="flex-grow z-10 block">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="z-10 mt-20 border-t border-slate-800 bg-[#020617] relative overflow-hidden">
          {/* Subtle background glow bottom */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 space-y-4">
                <Link href="/" className="font-syne font-extrabold text-lg text-white flex items-center gap-1.5">
                  <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center font-bold text-slate-950 text-xs font-syne">S</div>
                  SmartCalc<span className="text-cyan-400">Hub</span>
                </Link>
                <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                  Precision calculations paired with detailed explanations, comprehensive breakdowns, step-by-step guidelines, and practical examples across Education, Finance, Health, Math, and Home improvement.
                </p>
              </div>
              
              <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 font-mono">Resources</h4>
                  <ul className="space-y-2 text-xs">
                    <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">All Calculators</Link></li>
                    <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 font-mono">Legal Policies</h4>
                  <ul className="space-y-2 text-xs">
                    <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                    <li><Link href="/disclaimer" className="text-slate-400 hover:text-white transition-colors">Disclaimer</Link></li>
                  </ul>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 font-mono">Precision SLA</h4>
                  <div className="bg-[#0f172a] border border-slate-800 p-3 rounded-lg text-[11px] text-slate-400">
                    <span className="block text-cyan-400 font-bold">100% Free</span>
                    Instant, clean calculators with zero ads or popups.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <span>© {new Date().getFullYear()} SmartCalcHub. All rights reserved.</span>
              <div className="flex gap-4 items-center">
                <span>Tailored for high speeds & mobile optimization</span>
                <span className="hidden sm:inline text-slate-700">|</span>
                <div className="flex items-center gap-1.5 text-[10px] text-cyan-500 font-semibold tracking-tight uppercase">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                  System Online
                </div>
              </div>
            </div>
          </div>
        </footer>
         <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "baef79070a144c5da8b043c4684139db"}'></script><!-- End Cloudflare Web Analytics -->
      </body>
    </html>
  );
}
