"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, ArrowRight } from "lucide-react";
import DeckNavigation from "@/components/DeckNavigation";
import Hero from "@/components/Sections/Hero";
import WhyMoa from "@/components/Sections/WhyMoa";
import Retail from "@/components/Sections/Retail";
import Dining from "@/components/Sections/Dining";
import Entertainment from "@/components/Sections/Entertainment";
import Events from "@/components/Sections/Events";
import Contact from "@/components/Sections/Contact";
import ContactModal from "@/components/UI/ContactModal";

const sections = [
  { id: "hero", name: "01 | Overview" },
  { id: "why-moa", name: "02 | Magnitude" },
  { id: "retail", name: "03 | Retail Wings" },
  { id: "dining", name: "04 | Gastronomy" },
  { id: "entertainment", name: "05 | Experience" },
  { id: "events", name: "06 | Activations" },
  { id: "contact", name: "07 | Placement" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactCategory, setContactCategory] = useState<"leasing" | "sponsorship" | "events" | "">("");



  // Dynamically observe elements to update side dots highlight on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger state swap when slide is 50% visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.replace("section-", ""), 10);
          if (!isNaN(index)) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((_, idx) => {
      const el = document.getElementById(`section-${idx}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (index: number) => {
    const el = document.getElementById(`section-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(index);
    }
  };

  const handleOpenContact = (category: "leasing" | "sponsorship" | "events") => {
    setContactCategory(category);
    setIsContactOpen(true);
  };

  return (
    <main className="relative w-full luxury-animated-bg page-reveal">
      
      {/* Premium Luxury Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/[0.02] z-50 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-gold-light to-gold shadow-[0_0_12px_rgba(201,168,76,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: `${(activeSection / (sections.length - 1)) * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      {/* Persistent Global Floating Luxury Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px] border-b border-white/[0.04] px-6 py-5 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick(0)}>
          <span className="font-editorial text-lg md:text-xl font-bold tracking-widest text-white">
            MALL OF AMERICA
          </span>
        </div>
        
        <button
          onClick={() => handleOpenContact("leasing")}
          className="shimmer-button group flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-gold/40 hover:bg-gold hover:text-black transition-all rounded-lg text-[10px] uppercase tracking-widest font-semibold text-gold shadow-[0_2px_15px_rgba(201,168,76,0.15)]"
        >
          Request Partnership
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </header>

      {/* Floating Indicators Navigation */}
      <DeckNavigation
        sections={sections}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* Main Snap-Scroll Container */}
      <div className="w-full">
        {/* Section 0: Hero */}
        <Hero onNextSection={() => handleNavClick(1)} />

        {/* Section 1: Why MOA stats */}
        <WhyMoa />

        {/* Section 2: Retail Districts */}
        <Retail onOpenContact={handleOpenContact} />

        {/* Section 3: Dining & Culinary */}
        <Dining />

        {/* Section 4: Entertainment Magnet */}
        <Entertainment />

        {/* Section 5: Events Arena */}
        <Events onOpenContact={handleOpenContact} />

        {/* Section 6: Contact Grid */}
        <Contact onOpenContact={handleOpenContact} />
      </div>

      {/* Exclusivity Contact Dialog Overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultCategory={contactCategory}
      />
    </main>
  );
}
