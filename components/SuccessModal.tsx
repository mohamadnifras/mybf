'use client';

import React from 'react';
import { CheckCircle2, MessageCircle, Calendar, MapPin, X, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    registrationId: string;
    fullName: string;
    mobileNumber: string;
    email?: string | null;
    location: string;
    occupation: string;
    organization?: string | null;
    interest: string;
    registrationDate: string;
  } | null;
}

export function SuccessModal({ isOpen, onClose, data }: SuccessModalProps) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#035AFC', '#FBC206', '#030405', '#60A5FA'],
        });
      } catch (e) {
        // safe fallback
      }
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const handleWhatsAppShare = () => {
    const text = `🎉 I'm registered for *MYBF Entrepreneurship Conclave 2026*!\n\n📍 Venue: Kakkadampoyil, Kerala\n🗓️ Date: Wed 7 Oct – Thu 8 Oct, 2026 (09:00 AM - 10:00 PM)\n🎫 Registration ID: *${data.registrationId}*\n\nDelegate Name: ${data.fullName}\nSee you there! Register now at: ${window.location.origin}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(data.registrationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-lg w-full rounded-t-3xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl relative text-left max-h-[90vh] overflow-y-auto">
        
        {/* Mobile Pull Bar */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto sm:hidden mb-1" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#64748B] hover:text-[#030405] hover:bg-[#F1F5F9] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon & Header */}
        <div className="text-center space-y-2.5">
          <div className="flex justify-center pb-1">
            <div className="px-3 py-1.5 rounded-xl bg-[#021338] shadow-xs inline-flex">
              <img
                src="/logo.png"
                alt="MYBF Logo"
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>

          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EBF2FF] border border-[#035AFC]/30 flex items-center justify-center text-[#035AFC] mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold uppercase bg-[#FFF9E6] text-[#B28400] border border-[#FDE882]">
            Registration Confirmed
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-[#030405]">
            You're In, {data.fullName}!
          </h3>

          <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
            Thank you for registering for <span className="font-bold text-[#030405]">MYBF Entrepreneurship Conclave 2026</span>.
          </p>
        </div>

        {/* Highlighted Registration ID Card */}
        <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider">
              Official Registration ID
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#035AFC] font-mono mt-0.5">
              {data.registrationId}
            </div>
          </div>

          <button
            onClick={handleCopyId}
            className="px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-bold text-[#475569] hover:text-[#035AFC] flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy ID'}</span>
          </button>
        </div>

        {/* Event Details Summary */}
        <div className="p-4 rounded-2xl bg-[#EBF2FF]/60 border border-[#035AFC]/20 space-y-2 text-xs text-[#030405]">
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-[#035AFC] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Wed 7 Oct – Thu 8 Oct, 2026</span> • 09:00 AM - 10:00 PM
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#035AFC] shrink-0 mt-0.5" />
            <div>Kakkadampoyil, Kerala</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-1">
          <button
            onClick={handleWhatsAppShare}
            className="w-full py-3.5 rounded-2xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send WhatsApp Confirmation</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl font-semibold text-xs text-[#64748B] hover:text-[#030405] hover:bg-[#F1F5F9] active:scale-98 transition-all cursor-pointer text-center"
          >
            Done & Return to Website
          </button>
        </div>

      </div>
    </div>
  );
}
