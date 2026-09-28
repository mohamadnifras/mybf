'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { EventIntroduction } from '@/components/EventIntroduction';
import { EventHighlights } from '@/components/EventHighlights';
import { EventSchedule } from '@/components/EventSchedule';
import { RegistrationForm } from '@/components/RegistrationForm';
import { VenueSection } from '@/components/VenueSection';
import { Footer } from '@/components/Footer';
import { MobileFloatingBar } from '@/components/MobileFloatingBar';

export default function LandingPage() {
  const scrollToForm = () => {
    const el = document.getElementById('registration-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-[#030405] flex flex-col selection:bg-[#FBC206] selection:text-[#030405]">
      {/* Header Navbar with Mobile Drawer */}
      <Navbar onRegisterClick={scrollToForm} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroSection onRegisterClick={scrollToForm} />
        <EventIntroduction />
        <EventHighlights />
        <EventSchedule />
        <RegistrationForm />
        <VenueSection />
      </main>

      {/* Sticky Mobile Floating Registration Bar */}
      <MobileFloatingBar />

      {/* Footer */}
      <Footer />
    </div>
  );
}
