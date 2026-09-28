'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export function Navbar({ onRegisterClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#021338]/85 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo from public/logo.png */}
        <Link href="/" className="flex items-center gap-3 group transition-transform active:scale-95">
          <Image
            src="/logo.png"
            alt="MYBF - Malappuram Youth Business Forum"
            width={160}
            height={44}
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-md"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-white/85">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#FBC206] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('highlights')}
            className="hover:text-[#FBC206] transition-colors cursor-pointer"
          >
            Highlights
          </button>
          <button
            onClick={() => scrollTo('schedule')}
            className="hover:text-[#FBC206] transition-colors cursor-pointer"
          >
            Schedule
          </button>
          <button
            onClick={() => scrollTo('venue')}
            className="hover:text-[#FBC206] transition-colors cursor-pointer"
          >
            Venue
          </button>
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onRegisterClick ? onRegisterClick : () => scrollTo('registration-form')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-[#030405] bg-[#FBC206] hover:bg-[#e5b004] shadow-[0_4px_14px_rgba(251,194,6,0.35)] hover:shadow-[0_6px_20px_rgba(251,194,6,0.45)] transform active:scale-95 transition-all cursor-pointer"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => scrollTo('registration-form')}
            className="px-3.5 py-1.5 rounded-xl font-black text-xs text-[#030405] bg-[#FBC206] shadow-xs active:scale-95 transition-all"
          >
            Register
          </button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 border border-white/20 text-white active:bg-white/20 transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#021338]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-white/90">
            <button
              onClick={() => scrollTo('about')}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/15 hover:text-[#FBC206] transition-all"
            >
              About Conclave
            </button>
            <button
              onClick={() => scrollTo('highlights')}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/15 hover:text-[#FBC206] transition-all"
            >
              Key Highlights
            </button>
            <button
              onClick={() => scrollTo('schedule')}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/15 hover:text-[#FBC206] transition-all"
            >
              Event Schedule
            </button>
            <button
              onClick={() => scrollTo('venue')}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/15 hover:text-[#FBC206] transition-all"
            >
              Venue & Maps
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-2 text-[#FBC206] font-bold">
              <Calendar className="w-4 h-4" />
              <span>Sunday, Nov 15, 2026</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#FBC206] text-[#030405] font-black text-[10px]">
              FREE PASS
            </span>
          </div>

          <button
            onClick={() => scrollTo('registration-form')}
            className="w-full py-3.5 rounded-xl font-black text-sm text-[#030405] bg-[#FBC206] hover:bg-[#e5b004] shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
          >
            <span>Proceed to Registration Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
