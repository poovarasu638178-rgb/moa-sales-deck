"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../UI/GlassCard";
import { Sparkles, Smile } from "lucide-react";

export default function Entertainment() {
  const [activeTab, setActiveTab] = useState(0);

  const attractions = [
    {
      title: "Nickelodeon Universe®",
      type: "7-Acre Indoor Theme Park",
      image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=800",
      description: "The nation's largest indoor theme park. 28 rides, signature rollercoasters, and character interactions that draw millions of families and young demographics directly into the center of the complex.",
      metrics: {
        stat: "7 Acres",
        label: "Indoor Footprint",
        growth: "+15% Dwell Time Boost",
      },
    },
    {
      title: "SEA LIFE® Aquarium",
      type: "World-Class Underwater Journey",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
      description: "A breathtaking underwater attraction featuring a 300-foot transparent ocean tunnel. Housing over 10,000 sea creatures, this major anchor draws educational groups and international tourists.",
      metrics: {
        stat: "1.3M Gal",
        label: "Total Tank Capacity",
        growth: "High Affluence Traveler Draw",
      },
    },
    {
      title: "FlyOver America",
      type: "Multi-Sensory Flight Simulator",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "A state-of-the-art immersive flight simulation attraction using advanced motion seats, wind, mist, and scents to soar over America's landscapes. Extremely popular for tourists and corporate groups.",
      metrics: {
        stat: "4D Flight",
        label: "Immersive Tech",
        growth: "Key Executive Package Driver",
      },
    },
  ];

  return (
    <section
      id="section-4"
      className="snap-section w-full min-h-[100dvh] relative bg-dark-bg flex items-center justify-center pt-[80px] md:pt-32 pb-20 px-4 md:px-6 overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 h-full flex flex-col justify-center md:pr-20 lg:pr-28">
        
        {/* Header split */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12 text-center md:text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center md:justify-start mb-3"
            >
              <span className="text-sm uppercase tracking-widest text-gold font-semibold text-center">
                Major Differentiator
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
                The Experiential
              </motion.span>{" "}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="text-gold-gradient font-light italic inline-block"
              >
                Magnet
              </motion.span>
            </motion.h2>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-1 shrink-0 overflow-x-auto no-scrollbar w-full md:w-auto">
            {attractions.map((attraction, idx) => (
              <button
                key={attraction.title}
                onClick={() => setActiveTab(idx)}
                className={`
                  px-4 py-2.5 rounded-lg text-sm uppercase tracking-widest font-semibold transition-all duration-300 whitespace-nowrap shrink-0
                  ${activeTab === idx ? "bg-gold text-black shadow-md font-bold" : "text-white/50 hover:text-white"}
                `}
              >
                {attraction.title.split("®")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[360px] md:min-h-[400px]">
          
          {/* Left Side: Dynamic Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 h-[240px] lg:h-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <img
                  src={attractions[activeTab].image}
                  alt={attractions[activeTab].title}
                  className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
                />
                
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-sm uppercase tracking-widest text-gold font-semibold bg-black/40 px-3 py-1 rounded-full border border-gold/20 backdrop-blur-sm">
                    {attractions[activeTab].type}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side: Showcase Description & Magnet Impact */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-editorial font-semibold text-white">
                    {attractions[activeTab].title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mt-4">
                    {attractions[activeTab].description}
                  </p>
                </div>

                {/* Stat Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="premium-card p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block mb-1">
                      {attractions[activeTab].metrics.label}
                    </span>
                    <span className="text-xl font-editorial font-bold text-gold">
                      {attractions[activeTab].metrics.stat}
                    </span>
                  </div>
                  <div className="premium-card p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block mb-1">
                      Magnet Influence
                    </span>
                    <span className="text-sm font-semibold text-white uppercase tracking-wider block mt-1">
                      {attractions[activeTab].metrics.growth}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Strategic Explainer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mt-6 p-5 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Experiential Retail Catalyst</h4>
                <p className="text-[11px] text-white/40 mt-1 leading-relaxed">
                  Unlike traditional shopping malls, Mall of America is a complete hybrid entertainment destination. Guests aren{"'"}t just here to buy products—they stay for hours to participate in global experiences, driving retail activation, luxury spend, and brand conversions.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
