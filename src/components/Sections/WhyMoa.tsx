"use client";

import { motion } from "framer-motion";
import Counter from "../UI/Counter";
import GlassCard from "../UI/GlassCard";
import { MapPin, Users, Layers, ShoppingBag, UtensilsCrossed } from "lucide-react";

export default function WhyMoa() {
  const stats = [
    {
      id: "visitors",
      icon: <Users className="w-6 h-6 text-gold" />,
      value: 40,
      suffix: "M+",
      label: "Annual Visitors",
      description: "More visitors annually than Disney World, Grand Canyon, and Graceland combined.",
    },
    {
      id: "area",
      icon: <Layers className="w-6 h-6 text-gold" />,
      value: 5.6,
      decimals: 1,
      suffix: "M sq ft",
      label: "Total Footprint",
      description: "A colossal multi-level footprint with dedicated districts designed for maximum dwell time.",
    },
    {
      id: "stores",
      icon: <ShoppingBag className="w-6 h-6 text-gold" />,
      value: 520,
      suffix: "+",
      label: "Retail Outlets",
      description: "The world's premium brands spanning luxury couture, leading technology, and lifestyle essentials.",
    },
    {
      id: "dining",
      icon: <UtensilsCrossed className="w-6 h-6 text-gold" />,
      value: 50,
      suffix: "+",
      label: "Culinary Experiences",
      description: "From fine-dining establishments to fast-casual food halls catering to international palates.",
    },
  ];

  return (
    <section
      id="section-1"
      className="snap-section w-full min-h-[100dvh] relative bg-dark-bg flex items-center justify-center pt-[80px] md:pt-32 pb-20 px-4 md:px-6 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 md:pr-20 lg:pr-28">
        <div className="text-center md:text-left mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center md:justify-start mb-3 text-center md:text-left"
          >
            <span className="text-sm uppercase tracking-widest text-gold font-semibold text-center">
              THE MOA MAGNITUDE
            </span>
          </motion.div>
          
          <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between gap-4 text-center md:text-left">
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
                Why Mall Of
              </motion.span>{" "}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="text-gold-gradient font-light italic inline-block"
              >
                America
              </motion.span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center md:items-end text-center md:text-right text-gold mt-4 md:mt-0"
            >
              <div className="flex items-center gap-1 text-sm md:text-base font-semibold">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Bloomington, Minnesota</span>
              </div>
              <span className="text-[11px] md:text-xs text-gold/80 mt-0.5 font-medium">10 Mins from MSP Airport</span>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 * index }}
              className="premium-card"
            >
              <GlassCard className="h-full flex flex-col justify-between !p-5 md:!p-6" goldBorder={index === 0}>
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6">
                    {stat.icon}
                  </div>
                  <h3 className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-2">
                    {stat.label}
                  </h3>
                  <div className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-editorial font-bold text-white mb-4 whitespace-nowrap tracking-tight">
                    <Counter
                      value={stat.value}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  </div>
                </div>
                <p className="text-white/40 text-xs leading-relaxed mt-auto pt-4 border-t border-white/5">
                  {stat.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Dynamic callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-8 border border-white/5 bg-white/[0.02] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Strategic Location Hub</h4>
            <p className="text-xs text-white/50 mt-1 max-w-2xl leading-relaxed">
              Positioned at the epicentre of Bloomington, MN, with dedicated light rail access to Minneapolis-St. Paul International Airport, making it uniquely accessible for international travelers and local affluent demographics alike.
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest border border-gold/40 px-5 py-2.5 rounded-lg text-gold font-semibold shrink-0">
            0% Sales Tax on Apparel & Shoes
          </div>
        </motion.div>
      </div>
    </section>
  );
}
