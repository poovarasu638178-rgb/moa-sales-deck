"use client";

import { motion } from "framer-motion";
import GlassCard from "../UI/GlassCard";
import { Store, Trophy, Landmark, Mail, Phone, MapPin } from "lucide-react";

interface ContactProps {
  onOpenContact: (category: "leasing" | "sponsorship" | "events") => void;
}

export default function Contact({ onOpenContact }: ContactProps) {
  const contacts = [
    {
      category: "leasing" as const,
      icon: <Store className="w-8 h-8 text-gold" />,
      title: "Retail Leasing",
      description: "Establish a permanent footprint or luxury pop-up store. Tailored options in the Luxury Collection or the high-volume Central Galleria.",
      actionText: "Request Footprint Consultation",
    },
    {
      category: "sponsorship" as const,
      icon: <Trophy className="w-8 h-8 text-gold" />,
      title: "Brand Partnerships",
      description: "Leverage the ultimate 40 million guest experiential medium. Custom sponsorships, dynamic signs, and digital placements.",
      actionText: "Request Partnership Kit",
    },
    {
      category: "events" as const,
      icon: <Landmark className="w-8 h-8 text-gold" />,
      title: "Event Venue Bookings",
      description: "Secure the iconic Huntington Bank Rotunda, customize event activations, or arrange exclusive group packages.",
      actionText: "Reserve Activation Space",
    },
  ];

  return (
    <section
      id="section-6"
      className="snap-section w-full h-screen relative bg-dark-bg flex flex-col justify-between pt-24 md:pt-28 pb-12 px-6 overflow-hidden"
    >
      {/* Background graphic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl relative z-10 flex-grow flex flex-col justify-center pr-16 md:pr-20 lg:pr-28">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center mb-3"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Strategic Collaboration
            </span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tight"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="inline-block mr-2"
            >
              Forge Your
            </motion.span>{" "}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-gold-gradient font-light italic inline-block"
            >
              Placement
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white/40 text-xs md:text-sm mt-3 max-w-xl mx-auto"
          >
            Select your partnership track below. A senior director will review your corporation{"'"}s profile and follow up immediately.
          </motion.p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 * idx }}
            >
              <GlassCard
                goldBorder
                className="h-full flex flex-col justify-between items-center text-center p-8 group border border-white/5 hover:border-gold/40 transition-colors"
                onClick={() => onOpenContact(item.category)}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:scale-105 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-editorial font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed max-w-xs mb-6">
                    {item.description}
                  </p>
                </div>
                
                <button className="shimmer-button mt-auto w-full py-3 bg-white/[0.03] border border-white/10 hover:bg-gold hover:border-gold hover:text-black text-gold text-[10px] uppercase tracking-widest font-semibold rounded-lg transition-all shadow-[0_2px_15px_rgba(201,168,76,0.05)]">
                  {item.actionText}
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Luxury Brand Footer */}
      <div className="container mx-auto max-w-6xl relative z-10 pt-8 border-t border-white/5 mt-8 pr-16 md:pr-20 lg:pr-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-white/40 items-center">
          
          {/* Logo / Brand Name */}
          <div className="text-center md:text-left flex flex-col">
            <span className="font-editorial text-lg text-white font-bold tracking-wider">
              MALL OF AMERICA
            </span>
            <div className="text-[10px] text-white/40 mt-1 flex flex-col gap-0.5">
              <span>Bloomington, Minnesota</span>
              <span>Global Leasing Platform</span>
            </div>
          </div>

          {/* Quick Contacts */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-[10px] uppercase tracking-wider font-semibold">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="whitespace-nowrap">+1 (952) 883-8800</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="whitespace-nowrap">leasing@mallofamerica.com</span>
            </div>
          </div>

          {/* Copyright Info */}
          <div className="text-center md:text-right text-[10px] leading-relaxed">
            <div>{new Date().getFullYear()} Mall of America. All Rights Reserved.</div>
            <div className="mt-0.5">Designed exclusively for prospective retailers, corporate hosts, and brand sponsors.</div>
          </div>

        </div>
      </div>

    </section>
  );
}
