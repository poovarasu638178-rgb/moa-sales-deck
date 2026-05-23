"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  goldBorder?: boolean;
  hoverScale?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  goldBorder = false,
  hoverScale = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverScale ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative rounded-xl overflow-hidden backdrop-blur-md p-6 lg:p-8
        transition-all duration-500 cursor-pointer
        ${goldBorder ? "glass-panel-gold hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]" : "glass-panel hover:border-gold/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.03)]"}
        ${className}
      `}
    >
      {/* Subtle top light reflection highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
