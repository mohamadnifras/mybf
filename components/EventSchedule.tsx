'use client';

import React, { useState } from 'react';
import { CalendarClock, Coffee, Mic2, Users, Award, BookOpen, Clock, ChevronRight } from 'lucide-react';

export function EventSchedule() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(0);

  const schedule = [
    {
      time: '08:30 AM - 09:30 AM',
      period: 'Morning Track',
      title: 'Registration & Welcome Kit',
      description:
        'Delegate verification, attendee pass allocation, and morning welcome refreshments with fellow participants.',
      icon: Coffee,
      tag: 'Check-In',
    },
    {
      time: '09:30 AM - 11:00 AM',
      period: 'Morning Track',
      title: 'Inauguration & MYBF Vision 2026',
      description:
        'Official opening ceremony with business leaders, keynote address by MYBF president, and unveiling of youth initiatives.',
      icon: Mic2,
      tag: 'Inauguration',
    },
    {
      time: '11:00 AM - 01:30 PM',
      period: 'Mid-Day Track',
      title: 'Expert Sessions & Growth Masterclass',
      description:
        'Practical sessions on scaling regional businesses, emerging digital tools, funding opportunities, and market expansion.',
      icon: BookOpen,
      tag: 'Masterclass',
    },
    {
      time: '01:30 PM - 03:30 PM',
      period: 'Afternoon Track',
      title: 'Networking Session & Malabar Banquet Lunch',
      description:
        'Structured B2B matchmaking, 1-on-1 advisor consultations, chapter breakout circles, and traditional networking lunch.',
      icon: Users,
      tag: 'Networking',
    },
    {
      time: '03:30 PM - 05:00 PM',
      period: 'Valedictory Track',
      title: 'Closing Ceremony & Delegate Honors',
      description:
        'Honoring young entrepreneur achievers, delegate open floor feedback, certificate distribution, and closing remarks.',
      icon: Award,
      tag: 'Finale',
    },
  ];

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
            One-Day <span className="blue-gradient-text">Event Schedule</span>
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            A high-tempo single-day schedule structured for maximum learning, real connections, and inspiration.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
          {schedule.map((item, idx) => {
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
