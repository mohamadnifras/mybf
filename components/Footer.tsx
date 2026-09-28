import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#021338]/90 backdrop-blur-xl text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="MYBF - Malappuram Youth Business Forum"
                width={170}
                height={46}
                className="h-10 sm:h-12 w-auto object-contain drop-shadow"
              />
            </div>
            <p className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#FBC206]">
              Malappuram Youth Business Forum
            </p>
            <p className="text-sm text-slate-300/90 max-w-md leading-relaxed">
              Empowering the next generation of ambitious founders, trade leaders, and innovators across Malappuram district through high-impact conclaves, knowledge sharing, and business networking.
            </p>
          </div>

          {/* Chapters */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Active Chapters
            </h3>
            <ul className="space-y-2 text-xs text-slate-300/90">
              <li className="hover:text-white transition-colors">Manjeri Chapter</li>
              <li className="hover:text-white transition-colors">Perinthalmanna Chapter</li>
              <li className="hover:text-white transition-colors">Tirur Chapter</li>
              <li className="hover:text-white transition-colors">Kottakkal Chapter</li>
              <li className="hover:text-white transition-colors">Nilambur & Kondotty</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Conclave Desk
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300/90">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FBC206] shrink-0" />
                <span>+91 98470 00000 / +91 94470 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FBC206] shrink-0" />
                <span>events@mybf.org</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FBC206] shrink-0 mt-0.5" />
                <span>MYBF Headquarters, Manjeri, Malappuram, Kerala</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Malappuram Youth Business Forum (MYBF). All rights reserved.</p>
          <p className="text-[#FBC206] font-semibold">Empowering Malabar Entrepreneurs</p>
        </div>
      </div>
    </footer>
  );
}
