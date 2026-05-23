"use client";

import { motion } from "framer-motion";

interface Section {
  id: string;
  name: string;
}

interface DeckNavigationProps {
  sections: Section[];
  activeSection: number;
  onNavClick: (index: number) => void;
}

export default function DeckNavigation({
  sections,
  activeSection,
  onNavClick,
}: DeckNavigationProps) {
  return (
    <div className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5 items-end">
      {sections.map((section, idx) => {
        const isActive = activeSection === idx;
        return (
          <button
            key={section.id}
            onClick={() => onNavClick(idx)}
            className="group flex items-center gap-4 cursor-pointer focus:outline-none"
            aria-label={`Scroll to ${section.name}`}
          >
            {/* Slide name reveals on hover */}
            <span
              className={`
                text-[10px] uppercase tracking-widest font-semibold transition-all duration-500
                pointer-events-none opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                ${isActive ? "text-gold opacity-100 translate-x-0 font-bold" : "text-white/40"}
              `}
            >
              {section.name}
            </span>

            {/* Premium Gold Dot Ring Indicator */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute inset-0 rounded-full border-2 border-gold/80"
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                />
              )}
              <div
                className={`
                  rounded-full transition-all duration-300
                  ${isActive
                    ? "w-3 h-3 bg-gold nav-dot-active"
                    : "w-2.5 h-2.5 bg-white/25 group-hover:bg-white/70 group-hover:scale-110"
                  }
                `}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
