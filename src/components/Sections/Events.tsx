"use client";

import { motion } from "framer-motion";
import GlassCard from "../UI/GlassCard";
import { Calendar, Users, Target, ArrowRight } from "lucide-react";

interface EventsProps {
  onOpenContact: (category: "leasing" | "sponsorship" | "events") => void;
}

export default function Events({ onOpenContact }: EventsProps) {
  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-gold" />,
      title: "Captive Audience Peak",
      desc: "Instant access to a built-in foot traffic base of up to 150,000+ shoppers daily, creating highly amplified event footprints.",
    },
    {
      icon: <Target className="w-5 h-5 text-gold" />,
      title: "Brand Experiential Space",
      desc: "The monumental Huntington Bank Rotunda and custom central courtyards are fully engineered for vehicle launches, live concerts, and premium pop-ups.",
    },
    {
      icon: <Calendar className="w-5 h-5 text-gold" />,
      title: "Seamless Media Integration",
      desc: "Equipped with broadcast-ready fiber infrastructure, multi-level digital screens, and professional production suites.",
    },
  ];

  return (
    <section
      id="section-5"
      className="snap-section w-full h-screen relative bg-dark-bg flex items-center justify-center pt-28 md:pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Background graphic glow */}
      <div className="absolute right-1/4 top-1/4 w-[700px] h-[700px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 pr-16 md:pr-20 lg:pr-28">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Big Pitch Header & List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center mb-3"
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Amplified Exposure
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
                The World{"'"}s
              </motion.span>{" "}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="text-gold-gradient font-light italic inline-block"
              >
                Activations Stage
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-xl"
            >
              Whether launching a global automotive model, conducting a live nationwide concert broadcast, or coordinating an upscale corporate retreat, Mall of America represents the ultimate media stage.
            </motion.p>

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

          {/* Right Column: Immersive visual + Dynamic Callout */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
                alt="Brand Activation Event at MOA Rotunda"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
              />
              
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold bg-black/55 px-3 py-1 rounded-full border border-gold/20 backdrop-blur-sm">
                  Huntington Bank Rotunda Venue
                </span>
                <h4 className="text-xl font-editorial font-medium text-white mt-2">40M Captive Audience Potential</h4>
              </div>
            </motion.div>

            {/* CTA action card */}
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
                onClick={() => onOpenContact("events")}
              >
                <div>
                  <h4 className="text-lg font-editorial font-semibold text-white">Coordinate Your Activation</h4>
                  <p className="text-white/40 text-xs mt-1">Book the Rotunda, custom halls, or schedule a corporate event package.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5 text-gold group-hover:text-black" />
                </div>
              </GlassCard>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
