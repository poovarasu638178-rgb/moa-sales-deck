"use client";

import { motion } from "framer-motion";
import GlassCard from "../UI/GlassCard";
import { Utensils, Award, TrendingUp, Sparkles } from "lucide-react";

export default function Dining() {
  const highlights = [
    {
      icon: <Utensils className="w-5 h-5 text-gold" />,
      title: "Gourmet Gastronomy",
      desc: "An elite collection of full-service fine dining, chef-driven gastropubs, and international gourmet concepts.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "World-Class Selection",
      desc: "Home to award-winning local culinarians and major global chains catering to every taste profile.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-gold" />,
      title: "Affluent Dwell Times",
      desc: "Strategic culinary hubs are shown to increase overall dwell time by an average of 45 minutes per guest.",
    },
  ];

  return (
    <section
      id="section-3"
      className="snap-section w-full h-screen relative bg-dark-bg flex items-center justify-center pt-28 md:pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Background Radial Light */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 pr-16 md:pr-20 lg:pr-28">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Premium Imagery Collage */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative h-[300px] md:h-[450px] w-full flex gap-4">
            {/* Primary Main Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-2/3 h-full rounded-2xl overflow-hidden border border-white/10 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                alt="Gourmet Dining Experience"
                className="w-full h-full object-cover filter brightness-[0.7]"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Fine Dining</span>
                <h4 className="text-lg font-editorial font-medium text-white">Curated Culinary Experiences</h4>
              </div>
            </motion.div>

            {/* Secondary Layered Image Card */}
            <div className="w-1/3 flex flex-col gap-4 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="h-1/2 rounded-2xl overflow-hidden border border-white/10 relative"
              >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop"
                  alt="Premium Mixology"
                  className="w-full h-full object-cover filter brightness-[0.8]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="h-1/2 bg-gold/5 border border-gold/20 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-2xl font-editorial font-bold text-gold">50+</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mt-1">Culinary Spots</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center mb-3"
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Lifestyle & Gastronomy
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
              className="text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tight mb-6"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="inline-block mr-2"
              >
                Dining &
              </motion.span>{" "}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="text-gold-gradient font-light italic inline-block"
              >
                Lifestyle
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-xl"
            >
              Modern consumers prioritize experience. Mall of America pairs its premium shopping ecosystem with award-winning culinary spaces and high-traffic social bars. This strategic synergy acts as a major dwell-time multiplier.
            </motion.p>

            {/* Bullet Highlights */}
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 * idx }}
                  className="premium-card flex gap-4 items-start p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-white/40 mt-1 max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
