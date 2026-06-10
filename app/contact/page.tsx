'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="font-dm-sans py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12 relative">
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#110e1a]/30 to-transparent pointer-events-none -z-10" />

      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black font-syne text-white tracking-tight">Contact Us</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Have feedback on our calculation formulas, suggestions for a new smart tool, or found an edge-case error? Reach out directly!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact info panel */}
        <div className="md:col-span-5 bg-[#13111a]/50 border border-[#2a273a] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h3 className="font-syne font-bold text-lg text-white">Get in Touch</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We try to review mathematical error statements and coordinate adjustments within 24–48 hours of ticket placement.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#212035] border border-[#2f2e5c] flex items-center justify-center text-[#a78bfa]">
                  <Mail className="w-4 h-4" />
                </div>
                <span>support@smartcalchub.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#142d22] border border-[#1e4d3a] flex items-center justify-center text-[#6ee7b7]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>Technical Support Hub</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#3d2f19] border border-[#5d4a2b] flex items-center justify-center text-[#fbbf24]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Math & Engineering Labs, USA</span>
              </div>
            </div>
          </div>

          <div className="bg-[#191629] p-4 rounded-xl border border-[#2d2949] text-[11px] text-slate-400 leading-relaxed">
            <span className="block font-bold text-white mb-0.5">Sponsor Request?</span>
            Interested in embedding or custom branding our calculation widgets? Connect via email subject: Sponsor Inquiry.
          </div>
        </div>

        {/* Form panel */}
        <div className="md:col-span-7 bg-[#13111a]/55 border border-[#2a273a] rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4 flex flex-col justify-center items-center h-full">
              <div className="w-16 h-16 bg-[#163628] text-[#6ee7b7] border border-[#245842] rounded-full flex items-center justify-center text-4xl animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-syne font-bold text-lg text-white">Message Sent Successfully!</h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
                Thank you for reaching out to SmartCalcHub, {formData.name}. Our math validation team will analyze your query and address any inquiries.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                className="mt-4 px-4 py-1.5 rounded-lg text-xs font-bold bg-[#1e1c2e] text-[#a78bfa] hover:text-white transition"
              >
                Send Another Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-[#0a0a0f] border border-[#2a273a] text-slate-100 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#a78bfa] transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-[#0a0a0f] border border-[#2a273a] text-slate-100 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#a78bfa] transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-1.5">Subject (Optional)</label>
                <input 
                  type="text" 
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Suggestions or Calculation Bug Report"
                  className="w-full bg-[#0a0a0f] border border-[#2a273a] text-slate-100 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#a78bfa] transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-1.5">Message Content</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide precise details, inputs used, and your expected calculations..."
                  className="w-full bg-[#0a0a0f] border border-[#2a273a] text-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#a78bfa] transition resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#6ee7b7] to-[#4ade80] text-[#0a0a0f] cursor-pointer hover:shadow-lg hover:shadow-[#6ee7b7]/10 transition flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Verification Inquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
