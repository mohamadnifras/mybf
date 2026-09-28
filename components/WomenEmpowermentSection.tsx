'use client';

import React from 'react';
import { Sparkles, HeartHandshake, TrendingUp, Award, Users, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface WomenEmpowermentSectionProps {
  onRegisterClick?: () => void;
}

export function WomenEmpowermentSection({ onRegisterClick }: WomenEmpowermentSectionProps) {
  const initiatives = [
    {
      title: 'She-Preneur Masterclasses',
      category: 'Skill Mastery',
      description:
        'Practical sessions on turning home ventures, boutique studios, fashion, culinary, and digital creators into high-revenue registered businesses.',
      icon: TrendingUp,
      accent: 'pink',
      highlight: 'From Passion to Scalable Brand',
    },
    {
      title: 'Women Founder Mentorship Syndicate',
      category: '1-on-1 Guidance',
      description:
        'Connect directly with successful women industrialists, startup founders, and senior financial strategists for tailored business advice.',
      icon: Award,
      accent: 'yellow',
      highlight: 'Direct Founder Mentorship',
    },
    {
      title: 'Grants, Subsidies & Seed Capital',
      category: 'Financial Enablement',
      description:
        'Comprehensive roadmap to Kerala Startup Mission (KSUM) women grants, We-Mission schemes, and collateral-free enterprise loans.',
      icon: Sparkles,
      accent: 'blue',
      highlight: 'Zero-Collateral Capital Roadmaps',
    },
    {
      title: 'Exclusive Women Networking Lounge',
      category: 'Collaborative Circle',
      description:
        'A dedicated, collaborative space at the Kakkadampoyil summit to build B2B partnerships, retail collaborations, and supplier networks.',
      icon: HeartHandshake,
      accent: 'pink',
      highlight: 'District-Wide Peer Circles',
    },
  ];

  return (
    <section id="women-empowerment" className="py-16 sm:py-20 bg-white/90 backdrop-blur-xl border-y border-white/20 shadow-xl relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E60067]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#035AFC]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F6] border border-[#E60067]/25 text-xs font-bold uppercase tracking-wider text-[#E60067] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E60067]" />
            <span>MYBF Women in Business</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#030405] tracking-tight leading-tight">
            Igniting <span className="text-[#E60067]">Women-Led Enterprise</span> & Innovation
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Championing ambitious women entrepreneurs, aspiring startup founders, and creative business owners across Malappuram district through dedicated tracks and empowerment networks.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#E60067]/40 transition-all flex flex-col justify-between h-full group"
            >
              <div className="space-y-3.5 flex-1 pb-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs ${
                      item.accent === 'pink'
                        ? 'bg-[#FFF0F6] text-[#E60067]'
                        : item.accent === 'yellow'
                        ? 'bg-[#FFF9E6] text-[#B28400]'
                        : 'bg-[#EBF2FF] text-[#035AFC]'
                    }`}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <span
                    className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      item.accent === 'pink'
                        ? 'bg-[#FFF0F6] text-[#E60067]'
                        : item.accent === 'yellow'
                        ? 'bg-[#FFF9E6] text-[#B28400]'
                        : 'bg-[#EBF2FF] text-[#035AFC]'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-black text-[#030405] group-hover:text-[#E60067] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3.5 mt-auto border-t border-slate-100 flex items-start gap-2 text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-[#E60067] shrink-0 mt-0.5" />
                <span className="text-xs leading-snug font-semibold text-[#030405]">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner / Spotlight Card */}
        <div className="mt-8 sm:mt-12 rounded-3xl bg-gradient-to-br from-[#021338] via-[#032363] to-[#021338] p-6 sm:p-8 text-white border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FBC206] text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Special Conclave Track</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                Empowering 100+ Women Entrepreneurs in Kakkadampoyil
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Whether you run an established company, a fast-growing digital store, or an early-stage startup, MYBF provides the platform, visibility, and commercial network to scale your vision.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto lg:w-full px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider text-[#030405] bg-[#FBC206] hover:bg-[#e5b004] active:scale-95 shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Register for Women Track</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#FBC206]" />
                <span>Free Conclave Access Included</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
