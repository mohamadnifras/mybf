import React from 'react';
import { Target, Users, Sparkles, Building2 } from 'lucide-react';

export function EventIntroduction() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white/90 backdrop-blur-xl border-y border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF2FF] border border-[#035AFC]/20 text-xs font-bold uppercase tracking-wider text-[#035AFC]">
            <Sparkles className="w-3.5 h-3.5 text-[#FBC206]" />
            <span>Event Introduction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#030405] tracking-tight leading-tight">
            Empowering the Next Generation of <span className="blue-gradient-text">Malabar Enterprise</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#475569] leading-relaxed pt-2 font-medium">
            "MYBF brings together aspiring entrepreneurs, business leaders and young innovators for a one-day knowledge sharing and networking experience."
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] text-center space-y-3 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#EBF2FF] text-[#035AFC] flex items-center justify-center mx-auto shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#030405]">Knowledge Sharing</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Actionable masterclasses from founders who have built sustainable enterprises.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] text-center space-y-3 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FFF9E6] text-[#B28400] flex items-center justify-center mx-auto shadow-xs">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#030405]">High-Value Networking</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Connect with 500+ peers, prospective co-founders, and commercial partners.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] text-center space-y-3 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#EBF2FF] text-[#035AFC] flex items-center justify-center mx-auto shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#030405]">Ecosystem Growth</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Direct access to chapter leadership, incubation resources, and mentor syndicates.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
