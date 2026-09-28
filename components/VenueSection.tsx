import React from 'react';
import { MapPin, Navigation, Car, Plane, Train, Phone } from 'lucide-react';

export function VenueSection() {
  return (
    <section id="venue" className="py-16 sm:py-20 bg-white/90 backdrop-blur-xl border-t border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF2FF] border border-[#035AFC]/20 text-xs font-bold uppercase tracking-wider text-[#035AFC]">
            <MapPin className="w-3.5 h-3.5 text-[#035AFC]" />
            <span>Event Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#030405] tracking-tight">
            Venue & <span className="blue-gradient-text">Logistics</span>
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Set in the picturesque misty hills of Kakkadampoyil, Kerala — providing an inspiring environment for business leadership and networking.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-[#FFF9E6] text-[#B28400] border border-[#FDE882]">
              Official Conclave Venue
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#030405] pt-1">
              Kakkadampoyil, Kerala
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#035AFC] shrink-0" />
              <span>Kakkadampoyil, Malappuram / Kozhikode Hills, Kerala</span>
            </p>
          </div>

          {/* Transit Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <div className="flex items-center gap-2 text-[#035AFC] font-bold text-xs">
                <Plane className="w-4 h-4" /> Calicut Airport (CCJ)
              </div>
              <p className="text-xs text-[#64748B]">38 km / Scenic hilltop drive</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <div className="flex items-center gap-2 text-[#035AFC] font-bold text-xs">
                <Train className="w-4 h-4" /> Nilambur / Kozhikode Station
              </div>
              <p className="text-xs text-[#64748B]">28 km / Frequent transport</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <div className="flex items-center gap-2 text-[#B28400] font-bold text-xs">
                <Car className="w-4 h-4" /> Parking & Valet
              </div>
              <p className="text-xs text-[#64748B]">Spacious parking for delegates</p>
            </div>
          </div>

          {/* Quick Action Buttons on Mobile */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://maps.google.com/?q=Kakkadampoyil+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-white bg-[#035AFC] hover:bg-[#0248ca] shadow-sm active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>

            <a
              href="tel:+919847000000"
              className="px-5 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-[#030405] bg-[#F8FAFC] hover:bg-[#EBF2FF] border border-[#E2E8F0] active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#035AFC]" />
              <span>Call Venue Desk (+91 98470 00000)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
