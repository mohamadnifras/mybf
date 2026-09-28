'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function MobileFloatingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 250px down
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('registration-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus name input after scroll
      setTimeout(() => {
        const input = document.querySelector('input[name="fullName"]') as HTMLInputElement;
        if (input) input.focus();
      }, 500);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-40 animate-slideUp">
      <div className="p-2.5 rounded-2xl bg-[#021338]/90 backdrop-blur-xl border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex items-center justify-between gap-3">
        
        <div className="pl-2">
          <div className="flex items-center gap-1.5 text-[11px] font-black text-white leading-tight">
            <span>MYBF Conclave</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBC206] animate-ping"></span>
          </div>
          <div className="text-[10px] text-[#FBC206] font-bold">Free Delegate Pass</div>
        </div>

        <button
          onClick={scrollToForm}
          className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-[#030405] bg-[#FBC206] hover:bg-[#e5b004] active:scale-95 shadow-md transition-all flex items-center gap-1.5 shrink-0"
        >
          <span>Register Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}
