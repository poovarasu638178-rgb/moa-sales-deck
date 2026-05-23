"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../UI/GlassCard";
import { Grid, ArrowRight, ShieldCheck, Tag } from "lucide-react";

interface RetailProps {
  onOpenContact: (category: "leasing" | "sponsorship" | "events") => void;
}

export default function Retail({ onOpenContact }: RetailProps) {
  const [activeZone, setActiveZone] = useState(0);

  const zones = [
    {
      title: "The Luxury Collection",
      tagline: "Ultra-Premium Couture",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      description: "An elegant, sophisticated corridor designed for high-net-worth individuals and global travelers. Home to premier designer ateliers, Swiss horology, and high-fashion boutiques.",
      anchors: ["Chanel", "Gucci", "Rolex", "Hermès"],
    },
    {
      title: "North Garden Canopy",
      tagline: "Natural Light & Tech Giants",
      image: "https://images.unsplash.com/photo-1582037928867-1738148b528e?q=80&w=1200&auto=format&fit=crop",
      description: "A gorgeous, sky-roofed sanctuary integrating nature and architecture. Housing the world's leading technology creators, premium global athleisure, and innovative brand flagships.",
      anchors: ["Apple", "Lululemon", "Zara", "Nordstrom"],
    },
    {
      title: "Central Galleria",
      tagline: "High-Traffic Flagships",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
      description: "The energetic, central core connecting all four levels of the Mall. Designed for high-volume foot traffic, massive visual facades, and prominent flagship presence.",
      anchors: ["Sephora", "H&M", "Nike", "Macy's"],
    },
  ];

  const tenants = [
    "CHANEL", "GUCCI", "ROLEX", "HERMÈS", 
    "APPLE", "PRADA", "BURBERRY", "LOUIS VUITTON",
    "NIKE", "SEPHORA", "ZARA", "NORDSTROM"
  ];

  return (
    <section
      id="section-2"
      className="snap-section w-full min-h-[100dvh] relative bg-dark-bg flex items-center justify-center pt-[80px] md:pt-32 pb-20 px-4 md:px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10 h-full flex flex-col justify-center md:pr-20 lg:pr-28">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center md:justify-start mb-3"
          >
            <span className="text-sm uppercase tracking-widest text-gold font-semibold text-center">
              Premier Positioning
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
              World-Class
            </motion.span>{" "}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-gold-gradient font-light italic inline-block"
            >
              Retail Zones
            </motion.span>
          </motion.h2>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Zones Selector */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-2 border-b border-white/5 pb-2 overflow-x-auto no-scrollbar">
                {zones.map((zone, idx) => (
                  <button
                    key={zone.title}
                    onClick={() => setActiveZone(idx)}
                    className={`
                      px-4 py-2 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all duration-300 whitespace-nowrap
                      ${activeZone === idx ? "border-gold text-gold" : "border-transparent text-white/40 hover:text-white/70"}
                    `}
                  >
                    {zone.title}
                  </button>
                ))}
              </div>

              {/* Dynamic Zone Card Content */}
              <div className="min-h-[260px] md:min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeZone}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="py-4"
                  >
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                      {zones[activeZone].tagline}
                    </span>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed mt-3 max-w-xl">
                      {zones[activeZone].description}
                    </p>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {zones[activeZone].anchors.map((anchor) => (
                        <span
                          key={anchor}
                          className="text-xs bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full text-white/80 font-medium"
                        >
                          {anchor}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Premium CTA Card inside grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mt-6"
            >
              <GlassCard
                goldBorder
                className="p-6 flex items-center justify-between group"
                onClick={() => onOpenContact("leasing")}
              >
                <div>
                  <div className="flex items-center gap-2 text-gold">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest font-semibold">Leasing Inquiries</span>
                  </div>
                  <h4 className="text-xl font-editorial font-semibold text-white mt-1">Join 520+ World-Class Brands</h4>
                  <p className="text-white/40 text-xs mt-1">Submit your requirements to secure a custom footprint in the Luxury Wing or Canopy districts.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5 text-gold group-hover:text-black" />
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Right Column: Key Tenants Premium Brand Wall */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-4 text-center lg:text-left">
              Select Established Tenants
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {tenants.map((tenant, idx) => (
                <motion.div
                  key={tenant}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 * idx }}
                  className="premium-card flex items-center justify-center py-5 px-3 bg-white/[0.02] border border-white/5 rounded-lg cursor-pointer group"
                >
                  <span className="text-[10px] md:text-xs font-semibold tracking-widest text-white/40 group-hover:text-gold transition-colors font-mono text-center block w-full">
                    {tenant}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-[10px] text-white/30 uppercase tracking-widest font-semibold">
              <Tag className="w-3 h-3 text-gold" />
              <span>Affluence multiplier: 0% Clothing Sales Tax</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
