import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Globe, Shield } from "lucide-react";

const milestones = [
  {
    phase: "Pre-Event",
    title: "Early Bird Registration",
    date: "Now - June 30",
    status: "current",
    items: ["Discounted tickets available", "Speaker submissions open", "Hackathon registration live"],
    icon: CheckCircle2,
  },
  {
    phase: "Day 1",
    title: "Main Conference",
    date: "July 31, 2026",
    status: "upcoming",
    items: ["Opening keynotes", "Workshops & panels", "Networking lunch & expo"],
    icon: Rocket,
  },
  {
    phase: "Day 2",
    title: "Hackathon & Closing",
    date: "August 1, 2026",
    status: "upcoming",
    items: ["Hackathon finals & demos", "Investor meetups", "Closing ceremony & after-party"],
    icon: Globe,
  },
  {
    phase: "Post-Event",
    title: "Community Building",
    date: "Q3-Q4 2026",
    status: "upcoming",
    items: ["Grant program launch", "Monthly meetups", "EBW 2027 announcement"],
    icon: Shield,
  },
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
            <span className="text-primary">{">"}</span> Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Roadmap
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            The ultimate blockchain event experience — from registration to post-conference community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover-lift ${
                  m.status === "current"
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_20px_-5px_rgba(244,196,0,0.15)]"
                    : "border-border/60 bg-card/40"
                }`}
              >
                {m.status === "current" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-black text-[10px] font-bold rounded-full uppercase tracking-tighter font-mono">
                    In Progress
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">
                    {m.phase}
                  </span>
                  <Icon size={16} className={m.status === "completed" ? "text-primary" : "text-muted-foreground/30"} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">{m.title}</h3>
                <p className="text-xs text-muted-foreground mb-6 font-mono">{m.date}</p>

                <ul className="space-y-3">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
