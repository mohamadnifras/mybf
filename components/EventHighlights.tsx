'use client';

import React, { useState } from 'react';
import { Users2, Briefcase, Award, Rocket, ArrowUpRight, CheckCircle } from 'lucide-react';

export function EventHighlights() {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const highlights = [
    {
      title: 'Entrepreneur Networking',
      subtitle: '200+ Regional Founders',
      description:
        'Engage with ambitious startup creators, experienced business owners, and dynamic peers from all 12 MYBF chapters across Malappuram district.',
      icon: Users2,
      badge: 'Community',
      color: 'blue',
      takeaway: 'Expand your core founder network across Kerala',
    },
    {
      title: 'Business Opportunities',
      subtitle: 'Trade & Collaboration',
      description:
        'Discover new B2B trade partnerships, cross-industry supply chains, franchise expansion opportunities, and local commercial alliances.',
      icon: Briefcase,
      badge: 'Growth',
      color: 'yellow',
      takeaway: 'Unlock high-potential regional contracts and deals',
    },
    {
      title: 'Leadership Sessions',
      subtitle: 'Keynotes & Masterclasses',
      description:
        'Gain battle-tested insights on scaling brands, navigating modern compliance, modern digital marketing, and managing cash flow.',
      icon: Award,
      badge: 'Learning',
      color: 'blue',
      takeaway: 'Actionable frameworks from 100Cr+ enterprise builders',
    },
    {
      title: 'Startup Ecosystem Connection',
      subtitle: 'Incubation & Mentorship',
      description:
        'Bridge your innovative idea with active venture mentors, government startup schemes, angel networks, and early-stage growth incubators.',
      icon: Rocket,
      badge: 'Innovation',
      color: 'yellow',
      takeaway: 'Direct mentorship pipelines and funding readiness',
    },
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold uppercase tracking-wider text-white">
            <span>Summit Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-sm">
            Event <span className="text-[#FBC206]">Highlights & Value</span>
          </h2>

          <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Four targeted pillars designed to accelerate your entrepreneurship journey and expand your professional circle.
          </p>
        </div>

        {/* 4 Cards Grid - Responsive & Mobile Interactive */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const isSelected = activeCard === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={`p-6 sm:p-7 rounded-3xl transition-all cursor-pointer flex flex-col justify-between group shadow-lg ${
                  isSelected
                    ? 'bg-white border-2 border-[#FBC206] shadow-2xl ring-4 ring-[#FBC206]/20 -translate-y-1'
                    : 'bg-white/95 backdrop-blur-md border border-white/40 hover:border-[#035AFC]/60'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs ${
                        item.color === 'blue'
                          ? 'bg-[#EBF2FF] text-[#035AFC]'
                          : 'bg-[#FFF9E6] text-[#B28400]'
                      }`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        item.color === 'blue'
                          ? 'bg-[#EBF2FF] text-[#035AFC]'
                          : 'bg-[#FFF9E6] text-[#B28400]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-black text-[#030405] group-hover:text-[#035AFC] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-bold text-[#035AFC]">{item.subtitle}</div>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#035AFC]">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#475569]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#035AFC]" />
                    <span className="truncate">{item.takeaway}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
