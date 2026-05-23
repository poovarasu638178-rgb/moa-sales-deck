"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

interface HeroProps {
  onNextSection: () => void;
}

export default function Hero({ onNextSection }: HeroProps) {
  return (
    <section
      id="section-0"
      className="snap-section w-full h-screen relative flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Ken Burns Background Image — slow zoom scale(1.0) to scale(1.08) over 20 seconds */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0 bg-black">
        <motion.div
          animate={{ scale: [1.0, 1.08] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1920&q=90')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Cinematic dark overlay (rgba 0,0,0,0.55) */}
      <div className="absolute inset-0 bg-black/55 z-10 pointer-events-none" />

      {/* Subtle cinematic vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-20 text-center flex flex-col items-center justify-center h-full">
        {/* Subtle Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-6 border border-gold/30 bg-gold/5 px-6 py-2.5 rounded-2xl backdrop-blur-sm text-center"
        >
          <span className="text-xs md:text-sm uppercase tracking-wider text-white font-bold mb-1">
            MALL OF AMERICA
          </span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-gold font-semibold">
            GLOBAL LEASING PLATFORM
          </span>
        </motion.div>

        {/* Editorial Heading — Golden Shimmer */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tight text-white mb-6 uppercase leading-none flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0 }}
            className="block"
          >
            The Center
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="hero-shimmer-text font-light italic block mt-2"
          >
            of Everything
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="text-white/60 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mb-10"
        >
          Welcome to the world{"'"}s most robust experiential platform. Welcoming over 40 million
          annual guests, Mall of America is the ultimate destination for luxury retail, premier sponsorships, and iconic activations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <button
            onClick={onNextSection}
            className="shimmer-button group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold via-gold-hover to-gold-light text-black font-semibold uppercase tracking-widest rounded-lg text-xs hover:brightness-105 transition-all shadow-[0_4px_25px_rgba(201,168,76,0.35)]"
          >
            Explore the Experience
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1.5 h-6 rounded-full bg-white/20 relative"
        >
          <div className="w-1.5 h-2 rounded-full bg-gold absolute top-0" />
        </motion.div>
      </div>
    </section>
  );
}
