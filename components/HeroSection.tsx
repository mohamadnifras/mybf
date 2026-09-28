'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Users, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 14,
    minutes: 32,
    seconds: 10,
  });

  const targetDate = new Date('2026-11-15T09:00:00.000Z').getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-transparent">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[320px] sm:w-[600px] h-[250px] sm:h-[350px] bg-white/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#FBC206]/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Event Meta */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#FBC206] animate-pulse"></span>
              <span className="truncate text-white">MALAPPURAM YOUTH BUSINESS FORUM</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FBC206] text-[#030405] text-[10px] font-black uppercase shrink-0">
                2026
              </span>
            </div>

            {/* Flagship Theme Typography - "WHY NOT Malappuram" matching the brand visual */}
            <div className="flex flex-col items-center lg:items-start select-none pt-1">
              {/* WHY */}
              <div className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-md">
                WHY
              </div>

              {/* NOT with Yellow O-dot and Yellow T-triangle */}
              <div className="relative flex items-center text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mt-0.5 sm:mt-1 drop-shadow-md">
                <span>N</span>
                <span className="relative inline-flex items-center justify-center mx-[1px]">
                  <span>O</span>
                  <span className="absolute w-[38%] h-[38%] rounded-full bg-[#FBC206]"></span>
                </span>
                <span className="relative inline-flex items-center">
                  <span>T</span>
                  {/* Dynamic Yellow Triangle Accent */}
                  <span
                    className="absolute -right-5 sm:-right-8 top-1/2 -translate-y-[20%] w-0 h-0 border-t-[10px] sm:border-t-[16px] border-t-transparent border-b-[10px] sm:border-b-[16px] border-b-transparent border-l-[16px] sm:border-l-[24px] border-l-[#FBC206] transform -rotate-12 drop-shadow-xs"
                  />
                </span>
              </div>

              {/* Tilted Magenta Badge: "Malappuram" with Cyan bottom stripe */}
              <div className="mt-2.5 sm:mt-3 transform -rotate-3 hover:-rotate-1 transition-transform origin-left">
                <div className="relative inline-flex items-center px-4 sm:px-6 py-1 sm:py-2 rounded-md bg-[#E60067] shadow-xl border-b-[3.5px] sm:border-b-[4.5px] border-[#00D2FF]">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide font-sans">
                    Malappuram
                  </span>
                </div>
              </div>
            </div>

            {/* Event Title & Subtitle */}
            <div className="space-y-2 pt-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
                MYBF <span className="text-[#FBC206]">Entrepreneurship</span> Conclave 2026
              </h1>

              <p className="text-sm sm:text-lg font-medium text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-xs">
                Connecting Young Entrepreneurs, Innovators and Future Leaders for an empowering one-day summit in Malappuram.
              </p>
            </div>

            {/* Interactive Mobile Countdown Pill Grid */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl max-w-xl mx-auto lg:mx-0">
              <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#035AFC] mb-2 flex items-center justify-center lg:justify-start gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#FBC206] fill-[#FBC206]" />
                <span>Conclave Countdown</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E8EEF5]">
                  <div className="text-lg sm:text-2xl font-black text-[#030405] font-mono leading-none">
                    {timeLeft.days}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] uppercase font-bold mt-1">Days</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E8EEF5]">
                  <div className="text-lg sm:text-2xl font-black text-[#030405] font-mono leading-none">
                    {timeLeft.hours}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] uppercase font-bold mt-1">Hours</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E8EEF5]">
                  <div className="text-lg sm:text-2xl font-black text-[#030405] font-mono leading-none">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] uppercase font-bold mt-1">Mins</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#EBF2FF] border border-[#035AFC]/30">
                  <div className="text-lg sm:text-2xl font-black text-[#035AFC] font-mono leading-none">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#035AFC] uppercase font-bold mt-1">Secs</div>
                </div>
              </div>
            </div>

            {/* Event Meta Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-[#EBF2FF] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-[#035AFC]" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] text-[#64748B] font-bold uppercase">Date</div>
                  <div className="text-xs sm:text-sm font-bold text-[#030405]">Sunday, Nov 15, 2026</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-[#FFF9E6] flex items-center justify-center shrink-0">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-[#B28400]" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] text-[#64748B] font-bold uppercase">Time</div>
                  <div className="text-xs sm:text-sm font-bold text-[#030405]">09:00 AM - 05:00 PM</div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-[#EBF2FF] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-[#035AFC]" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] sm:text-[11px] text-[#64748B] font-bold uppercase">Venue</div>
                  <div className="text-xs sm:text-sm font-bold text-[#030405] truncate">
                    Grand Malabar Convention Centre, Manjeri
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Register Now CTA Button */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-black text-sm sm:text-base text-[#030405] bg-[#FBC206] hover:bg-[#e5b004] shadow-[0_8px_25px_rgba(251,194,6,0.4)] hover:shadow-[0_12px_30px_rgba(251,194,6,0.5)] transform active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span>Register Now</span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#030405] text-[#FBC206] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 font-bold" />
                </div>
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-blue-100">
                <ShieldCheck className="w-4 h-4 text-[#FBC206]" />
                <span>Instant Confirmation Pass</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Entrepreneurship Visual Card */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative rounded-3xl p-5 sm:p-8 bg-white border border-[#E2E8F0] shadow-xl space-y-5 sm:space-y-6">
              
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold uppercase bg-[#FFF9E6] text-[#B28400] border border-[#FDE882] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FBC206]" />
                  <span>One-Day Summit 2026</span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-[#035AFC] bg-[#EBF2FF] px-2.5 py-1 rounded-lg">
                 Delegate Pass
                </span>
              </div>

              {/* Visual Showcase Graphic */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-[#035AFC] to-[#022f80] p-5 sm:p-6 text-white flex flex-col justify-between shadow-inner">
                <div className="space-y-1">
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#FBC206]">
                    Malappuram District Conclave
                  </div>
                  <div className="text-xl sm:text-2xl font-black leading-tight">
                    Ignite Your Enterprise Journey
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 rounded-xl text-center">
                    <div className="text-lg sm:text-xl font-black font-mono text-[#FBC206]">200+</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-200 uppercase font-semibold">Attendees</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 rounded-xl text-center">
                    <div className="text-lg sm:text-xl font-black font-mono text-white">16+</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-200 uppercase font-semibold">MYBF Chapters</div>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 text-xs text-[#475569] font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#035AFC] shrink-0" />
                  <span>Interactive keynote sessions by industry titans</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#035AFC] shrink-0" />
                  <span>Structured 1-on-1 networking & business exchange</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#035AFC] shrink-0" />
                  <span>Direct Google Sheets & Excel registry sync</span>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={onRegisterClick}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-[#030405] bg-[#FBC206] hover:bg-[#e5b004] active:scale-98 transition-all cursor-pointer text-center shadow-md"
              >
                Fill Registration Form (30 Secs)
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
