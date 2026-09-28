'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  User,
  Briefcase,
  Layers,
  Sparkles,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Building,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { EventRegistrationSchema, type EventRegistrationInput } from '@/lib/validation';
import { SuccessModal } from './SuccessModal';

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const interestOptions = [
    'Entrepreneurship',
    'Technology',
    'Investment',
    'Business Networking',
  ];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EventRegistrationInput>({
    resolver: zodResolver(EventRegistrationSchema) as any,
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      email: '',
      location: '',
      occupation: 'Entrepreneur',
      organization: '',
      interests: ['Entrepreneurship', 'Business Networking'],
    },
    mode: 'onTouched',
  });

  const selectedInterests = watch('interests') || [];
  const selectedOccupation = watch('occupation');

  const toggleInterest = (interest: string) => {
    const current = [...selectedInterests];
    const index = current.indexOf(interest);
    if (index > -1) {
      if (current.length > 1) {
        current.splice(index, 1);
      }
    } else {
      current.push(interest);
    }
    setValue('interests', current, { shouldValidate: true });
  };

  const onSubmit = async (data: EventRegistrationInput) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit registration.');
      }

      setSuccessData({
        registrationId: result.registrationId,
        ...result.data,
      });
      setIsModalOpen(true);
      reset();
    } catch (err: any) {
      setServerError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration-form" className="py-16 sm:py-20 bg-transparent relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[250px] sm:h-[350px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FBC206]" />
            <span>Delegate Registration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-sm">
            Reserve Your <span className="text-[#FBC206]">Spot Today</span>
          </h2>

          <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto leading-relaxed">
            Fill the details below to confirm your free registration for the MYBF Entrepreneurship Conclave 2026.
          </p>
        </div>

        {/* Server Error Alert */}
        {serverError && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-3 animate-shake">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div>{serverError}</div>
          </div>
        )}

        {/* Form Container Card */}
        <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 p-5 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
            
            {/* 1. PERSONAL DETAILS SECTION */}
            <div className="space-y-4">
              <div className="border-b border-[#F1F5F9] pb-3 flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-black text-[#030405] flex items-center gap-2">
                  <User className="w-4 h-4 text-[#035AFC]" />
                  <span>Personal Details</span>
                </h3>
                <span className="text-[11px] text-[#64748B]">* Required fields</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Full Name */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#030405] flex items-center gap-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mohammed Nihal"
                    autoComplete="name"
                    {...register('fullName')}
                    className={`w-full px-4 py-3 sm:py-3.5 rounded-xl input-clean text-sm ${
                      errors.fullName ? 'border-rose-400 focus:border-rose-500' : ''
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 font-medium">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#030405] flex items-center gap-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748B]">
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder="9847123456"
                      maxLength={10}
                      autoComplete="tel"
                      {...register('mobileNumber')}
                      className={`w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-xl input-clean text-sm ${
                        errors.mobileNumber ? 'border-rose-400 focus:border-rose-500' : ''
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="text-xs text-rose-500 font-medium">{errors.mobileNumber.message}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#030405]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="nihal@example.com"
                    {...register('email')}
                    className={`w-full px-4 py-3 sm:py-3.5 rounded-xl input-clean text-sm ${
                      errors.email ? 'border-rose-400 focus:border-rose-500' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 font-medium">{errors.email.message}</p>
                  )}
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#030405] flex items-center gap-1">
                    Location / Town <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Manjeri, Perinthalmanna, Tirur"
                    {...register('location')}
                    className={`w-full px-4 py-3 sm:py-3.5 rounded-xl input-clean text-sm ${
                      errors.location ? 'border-rose-400 focus:border-rose-500' : ''
                    }`}
                  />
                  {errors.location && (
                    <p className="text-xs text-rose-500 font-medium">{errors.location.message}</p>
                  )}
                </div>

                {/* Age */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#030405]">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="26"
                    min={10}
                    max={100}
                    {...register('age')}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl input-clean text-sm"
                  />
                </div>
              </div>
            </div>

            {/* 2. PROFESSIONAL DETAILS SECTION */}
            <div className="space-y-4 pt-2">
              <div className="border-b border-[#F1F5F9] pb-3 flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-black text-[#030405] flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#035AFC]" />
                  <span>Professional Details</span>
                </h3>
              </div>

              {/* Occupation Radio Buttons */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#030405]">
                  Occupation <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {['Freelancer', 'Entrepreneur', 'Professional', 'Founder'].map((occ) => (
                    <label
                      key={occ}
                      className={`p-3 sm:p-3.5 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center gap-2 active:scale-98 ${
                        selectedOccupation === occ
                          ? 'bg-[#EBF2FF] border-[#035AFC] text-[#035AFC] shadow-xs'
                          : 'bg-white border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1]'
                      }`}
                    >
                      <input
                        type="radio"
                        value={occ}
                        {...register('occupation')}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedOccupation === occ
                            ? 'border-[#035AFC] bg-[#035AFC]'
                            : 'border-slate-300'
                        }`}
                      >
                        {selectedOccupation === occ && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="truncate">{occ}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Organization / Company */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#030405]">
                  Organization / Company / College Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Malabar Ventures or MES College"
                  {...register('organization')}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl input-clean text-sm"
                />
              </div>
            </div>

            {/* 3. INTERESTS SECTION */}
            <div className="space-y-4 pt-2">
              <div className="border-b border-[#F1F5F9] pb-3 flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-black text-[#030405] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#035AFC]" />
                  <span>Primary Interests (Select all that apply)</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {interestOptions.map((interest) => {
                  const isChecked = selectedInterests.includes(interest);
                  return (
                    <div
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center justify-between active:scale-98 ${
                        isChecked
                          ? 'bg-[#EBF2FF] border-[#035AFC] text-[#035AFC] shadow-xs'
                          : 'bg-white border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1]'
                      }`}
                    >
                      <span>{interest}</span>
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 ${
                          isChecked
                            ? 'bg-[#035AFC] border-[#035AFC] text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
              {errors.interests && (
                <p className="text-xs text-rose-500 font-medium">{errors.interests.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-3 sm:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 rounded-2xl font-black text-sm sm:text-base text-white bg-[#035AFC] hover:bg-[#0248ca] shadow-[0_8px_20px_rgba(3,90,252,0.35)] hover:shadow-[0_12px_25px_rgba(3,90,252,0.45)] active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Registration...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Free Registration</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B] mt-3 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#035AFC]" />
                <span>Instant confirmation code generated & synced to event registry.</span>
              </div>
            </div>

          </form>
        </div>

      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={successData}
      />
    </section>
  );
}
