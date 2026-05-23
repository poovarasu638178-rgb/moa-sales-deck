"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: "leasing" | "sponsorship" | "events" | "";
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultCategory = "",
}: ContactModalProps) {
  const [category, setCategory] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCategory(defaultCategory);
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen, defaultCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-dark-bg border border-white/10 rounded-2xl overflow-hidden shadow-2xl glass-panel-gold"
          >
            {/* Top gold line accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <span className="text-xs uppercase tracking-widest text-gold font-semibold">Exclusivity Awaits</span>
                      <h3 className="text-3xl font-editorial font-semibold mt-1">Request Private Consultation</h3>
                      <p className="text-white/60 text-sm mt-2">
                        Connect with our dedicated executive accounts team to explore high-impact placements at Mall of America.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col">
                          <label className="text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Full Name</label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Johnathan Davis"
                            className="bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors text-sm"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Company Name</label>
                          <input
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Luxury Group Inc."
                            className="bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col">
                          <label className="text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Corporate Email</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="j.davis@luxurygroup.com"
                            className="bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors text-sm"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Direct Telephone</label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+1 (555) 019-2834"
                            className="bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Interest Area</label>
                        <select
                          required
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="bg-black border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-gold transition-colors text-sm appearance-none cursor-pointer"
                          style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                        >
                          <option value="" disabled>Select partnership track...</option>
                          <option value="leasing">Retail Store Leasing</option>
                          <option value="sponsorship">Brand Activation & Sponsorships</option>
                          <option value="events">Corporate Event & Group Bookings</option>
                        </select>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Brief Requirements Overview</label>
                        <textarea
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Describe your vision or floor space requirement (e.g. 5,000 sq ft Luxury Wing, Q4 Brand Activation)..."
                          className="bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-gold via-gold-hover to-gold-light text-black font-semibold uppercase tracking-widest rounded-lg text-xs hover:brightness-105 transition-all shadow-[0_4px_20px_rgba(201,168,76,0.25)]"
                      >
                        {isSubmitting ? (
                          <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Submit Application
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gold/10 border border-gold rounded-full flex items-center justify-center text-gold mb-6 shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                      <Check className="w-10 h-10" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gold font-semibold">Application Received</span>
                    <h3 className="text-3xl font-editorial font-semibold mt-2">Connecting with Executives</h3>
                    <p className="text-white/60 text-sm max-w-md mt-4 leading-relaxed">
                      Thank you, <strong className="text-white font-medium">{fullName}</strong>. A senior Mall of America leasing and sponsorship director will review <strong className="text-white font-medium">{company}</strong>{"'"}s request and contact you within 24 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-8 px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-lg text-sm font-medium uppercase tracking-wider"
                    >
                      Close Deck
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
