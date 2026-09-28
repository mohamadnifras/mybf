'use client';

import React, { useState } from 'react';
import { CalendarClock, Coffee, Mic2, Users, Award, BookOpen, Clock, Sparkles, Moon, Sun, Flame } from 'lucide-react';

export function EventSchedule() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [selectedSlot, setSelectedSlot] = useState<number | null>(0);

  const day1Schedule = [
    {
      time: '09:00 AM - 10:30 AM',
      period: 'Morning Session',
      title: 'Registration & Welcome Refreshments',
      description:
        'Delegate check-in, pass verification, welcome kit distribution, and morning tea & coffee in the misty hills of Kakkadampoyil.',
      icon: Coffee,
      tag: 'Check-In',
    },
    {
      time: '10:30 AM - 01:00 PM',
      period: 'Morning Session',
      title: 'Grand Inauguration & MYBF Vision 2026',
      description:
        'Official opening address by distinguished entrepreneurs, state trade leaders, and key visionaries of the Malappuram Youth Business Forum.',
      icon: Mic2,
      tag: 'Inauguration',
    },
    {
      time: '01:00 PM - 02:30 PM',
      period: 'Afternoon Session',
      title: 'Networking Lunch & B2B Matchmaking',
      description:
        'Authentic Malabar buffet lunch with structured 1-on-1 networking circles and introductory founder exchanges.',
      icon: Users,
      tag: 'Networking',
    },
    {
      time: '02:30 PM - 05:30 PM',
      period: 'Afternoon Session',
      title: 'Enterprise Growth Masterclass & Founder Insights',
      description:
        'Deep-dive interactive workshops on business scaling, financial management, brand positioning, and supply chain automation.',
      icon: BookOpen,
      tag: 'Masterclass',
    },
    {
      time: '07:00 PM - 09:30 PM',
      period: 'Evening Session',
      title: 'Leadership Campfire & Executive Dinner',
      description:
        'Informal evening retreat session under the stars, fireside founder stories, and an exclusive executive dinner.',
      icon: Flame,
      tag: 'Evening Social',
    },
  ];

  const day2Schedule = [
    {
      time: '09:00 AM - 11:30 AM',
      period: 'Morning Session',
      title: 'Global Trade & Enterprise Funding Session',
      description:
        'Panel discussion with active angel investors, venture capitalists, and export council advisors on securing growth capital.',
      icon: Sparkles,
      tag: 'Investment',
    },
    {
      time: '11:30 AM - 01:30 PM',
      period: 'Morning Session',
      title: 'Startup Pitch Arena & Investor Connect',
      description:
        'Curated pitching session for high-potential regional startups in front of an esteemed panel of investors and mentors.',
      icon: Mic2,
      tag: 'Pitching',
    },
    {
      time: '01:30 PM - 03:00 PM',
      period: 'Afternoon Session',
      title: 'Executive Networking Banquet Lunch',
      description:
        'High-value networking lunch connecting young founders with senior chapter leadership and trade partners.',
      icon: Users,
      tag: 'Banquet',
    },
    {
      time: '03:00 PM - 05:30 PM',
      period: 'Afternoon Session',
      title: 'Chapter Roundtables & Strategic Alliances',
      description:
        'Collaborative syndicate sessions across MYBF regional chapters to build inter-district supply chains and alliances.',
      icon: BookOpen,
      tag: 'Syndicates',
    },
    {
      time: '05:30 PM - 08:00 PM',
      period: 'Evening Session',
      title: 'Grand Valedictory Ceremony & MYBF Youth Awards',
      description:
        'Celebrating breakout regional entrepreneurs, conferring delegate honors, special recognitions, and summit closing addresses.',
      icon: Award,
      tag: 'Awards Ceremony',
    },
    {
      time: '08:00 PM - 10:00 PM',
      period: 'Night Session',
      title: 'Gala Dinner & Conclave Wrap-up Celebration',
      description:
        'Festive gala banquet dinner, celebration of new partnerships, live music, and conclusion of the 2-day summit.',
      icon: Moon,
      tag: 'Grand Finale',
    },
  ];

  const currentSchedule = activeDay === 'day1' ? day1Schedule : day2Schedule;

  return (
    <section id="schedule" className="py-16 sm:py-20 bg-white/90 backdrop-blur-xl border-y border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF2FF] border border-[#035AFC]/20 text-xs font-bold uppercase tracking-wider text-[#035AFC]">
            <CalendarClock className="w-3.5 h-3.5 text-[#035AFC]" />
            <span>Conclave Timeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#030405] tracking-tight">
            2-Day <span className="blue-gradient-text">Event Schedule</span>
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            A power-packed 2-day itinerary structured for visionary learning, leadership masterclasses, and transformative networking in Kakkadampoyil.
          </p>
        </div>

        {/* Day 1 & Day 2 Selector Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="p-1.5 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0] inline-flex items-center gap-2">
            <button
              onClick={() => {
                setActiveDay('day1');
                setSelectedSlot(0);
              }}
              className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeDay === 'day1'
                  ? 'bg-[#035AFC] text-white shadow-md'
                  : 'text-[#64748B] hover:text-[#030405]'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Day 1 • Wed, 7 Oct</span>
            </button>

            <button
              onClick={() => {
                setActiveDay('day2');
                setSelectedSlot(0);
              }}
              className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeDay === 'day2'
                  ? 'bg-[#035AFC] text-white shadow-md'
                  : 'text-[#64748B] hover:text-[#030405]'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Day 2 • Thu, 8 Oct</span>
            </button>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
          {currentSchedule.map((item, idx) => {
            const isSelected = selectedSlot === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedSlot(idx)}
                className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 shadow-sm group ${
                  isSelected
                    ? 'bg-white border-2 border-[#035AFC] ring-4 ring-[#035AFC]/10 shadow-md -translate-y-0.5'
                    : 'bg-white border-[#E2E8F0] hover:border-[#035AFC]/50'
                }`}
              >
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-105 shadow-xs ${
                      isSelected
                        ? 'bg-[#035AFC] text-white'
                        : 'bg-[#EBF2FF] text-[#035AFC]'
                    }`}
                  >
                    <item.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[#035AFC]">
                        {item.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#64748B] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#B28400]" />
                        <span>{item.time}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[#030405] group-hover:text-[#035AFC] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex md:flex items-center justify-between md:justify-end border-t md:border-t-0 pt-2.5 md:pt-0 border-[#F1F5F9] text-xs text-[#035AFC] font-bold shrink-0">
                  <span className="text-[11px] text-[#64748B] font-semibold md:hidden">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#035AFC]"></span>
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
